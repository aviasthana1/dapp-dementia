/**
 * ESP32 BLE hub (v2.5) → Firestore `rooms/room_{n}/events`.
 * Event fields: type, roomId, roomName, patientConfirmed (no timestamp from hub).
 * The web app uses Firestore createTime for display and stamps confirmed events when open.
 */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
  writeBatch,
  query,
  limit,
  onSnapshot,
  type QueryDocumentSnapshot,
  type Timestamp,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "./firebase";

const PATIENTS_COLLECTION = "patients";

export const ROOM_COLLECTION = "rooms";
export const HUB_CONFIG_COLLECTION = "hubConfig";
export const HUB_CONFIG_DOC = "default";

export type RoomState = {
  id: string;
  roomId: number;
  name: string;
  occupancy: number;
  lastEntry: number;
  lastExit: number;
  lastVisitDuration?: number;
};

export type RoomEvent = {
  id: string;
  roomId: number;
  roomName: string;
  type: "ENTRY" | "EXIT" | string;
  timestamp: number;
};

const SEED_ROOMS: Omit<RoomState, "id">[] = [
  { roomId: 1, name: "Bathroom", occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 2, name: "Kitchen", occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 3, name: "Bedroom", occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 4, name: "Room 4", occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 5, name: "Room 5", occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 6, name: "Room 6", occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 7, name: "Room 7", occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
];

function roomDocId(roomId: number): string {
  return `room_${roomId}`;
}

function parseNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return 0;
}

/** Firestore Timestamp (from Cloud Function serverTimestamp) or hub epoch seconds/ms. */
export function parseHubTimeMs(raw: unknown): number {
  if (raw && typeof raw === "object" && "toMillis" in raw) {
    const ms = (raw as Timestamp).toMillis();
    if (Number.isFinite(ms)) return ms;
  }
  const n = parseNumber(raw);
  if (n <= 0) return 0;
  if (n < 1_000_000_000) return 0;
  if (n < 1_000_000_000_000) return n * 1000;
  return n;
}

/** @deprecated Prefer serverTimestamp on write; kept for callers reading hub fields. */
export function normalizeHubTimestamp(raw: unknown): number {
  const ms = parseHubTimeMs(raw);
  return ms > 0 ? ms : Date.now();
}

/** Format hub/location epoch ms for patient & caregiver UI. */
export function formatHubActivityTime(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) return "Just now";
  return new Date(ms).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export type HubActivity = {
  id: string;
  roomId: number;
  roomName: string;
  type: string;
  timeMs: number;
  timeLabel: string;
  patientConfirmed: boolean;
};

function isPatientConfirmed(data: Record<string, unknown>): boolean {
  return data.patientConfirmed === true || data.patientconfirmed === true;
}

/** Hub v2.5 posts no timestamp — use Firestore createTime until client stamp runs. */
function getHubEventTimeMs(
  data: Record<string, unknown>,
  docCreateTime?: Timestamp
): number {
  const fromField = parseHubTimeMs(data.timestamp);
  if (fromField > 0) return fromField;
  if (docCreateTime) {
    const ms = docCreateTime.toMillis();
    if (Number.isFinite(ms) && ms > 0) return ms;
  }
  return 0;
}

function hubActivityTimeLabel(patientConfirmed: boolean, timeMs: number, timeLocal: string): string {
  if (!patientConfirmed) return "";
  if (timeMs > 0) return formatHubActivityTime(timeMs);
  if (timeLocal) return timeLocal;
  return "";
}

function parseHubActivityDoc(
  d: QueryDocumentSnapshot,
  roomId: number,
  defaultRoomName: string
): HubActivity {
  const data = d.data() as Record<string, unknown>;
  const patientConfirmed = isPatientConfirmed(data);
  const timeMs = getHubEventTimeMs(data, d.createTime);
  const timeLocal = typeof data.timeLocal === "string" ? data.timeLocal : "";
  return {
    id: d.id,
    roomId,
    roomName:
      typeof data.roomName === "string" && data.roomName ? data.roomName : defaultRoomName,
    type: typeof data.type === "string" ? data.type : "EVENT",
    timeMs,
    timeLabel: hubActivityTimeLabel(patientConfirmed, timeMs, timeLocal),
    patientConfirmed,
  };
}

const HUB_EVENTS_PER_ROOM = 20;

/** Collapse duplicate hub writes (same room + type + displayed minute). */
function hubActivityDedupeKey(e: HubActivity): string {
  const minute = e.timeMs > 0 ? Math.floor(e.timeMs / 60_000) : e.timeLabel;
  return `${e.roomId}_${e.type}_${minute}`;
}

function dedupeHubActivities(events: HubActivity[]): HubActivity[] {
  const seen = new Set<string>();
  const result: HubActivity[] = [];
  for (const e of events) {
    const key = hubActivityDedupeKey(e);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(e);
  }
  return result;
}

/** Create `rooms/room_1` … `room_7` so ESP32 PATCH succeeds. */
export async function seedRoomsIfEmpty(): Promise<void> {
  const roomsRef = collection(db, ROOM_COLLECTION);
  const snap = await getDocs(roomsRef);
  if (!snap.empty) return;

  const batch = writeBatch(db);
  for (const room of SEED_ROOMS) {
    const id = roomDocId(room.roomId);
    batch.set(doc(db, ROOM_COLLECTION, id), room);
  }
  await batch.commit();
}

/** Default BLE hub tracks demo patient James (p1). */
export async function seedHubConfigIfEmpty(): Promise<void> {
  const ref = doc(db, HUB_CONFIG_COLLECTION, HUB_CONFIG_DOC);
  const snap = await getDoc(ref);
  if (snap.exists()) return;
  await setDoc(ref, { patientId: "p1", enabled: true });
}

export async function getHubPatientId(): Promise<string | null> {
  const snap = await getDoc(doc(db, HUB_CONFIG_COLLECTION, HUB_CONFIG_DOC));
  if (!snap.exists()) return null;
  const data = snap.data();
  if (data.enabled === false) return null;
  return typeof data.patientId === "string" ? data.patientId : null;
}

export async function setHubPatientId(patientId: string | null): Promise<void> {
  await setDoc(doc(db, HUB_CONFIG_COLLECTION, HUB_CONFIG_DOC), {
    patientId: patientId ?? "",
    enabled: !!patientId,
  });
}

export async function getRoomStates(): Promise<RoomState[]> {
  const snap = await getDocs(collection(db, ROOM_COLLECTION));
  return snap.docs
    .map((d) => {
      const data = d.data();
      return {
        id: d.id,
        roomId: parseNumber(data.roomId),
        name: typeof data.name === "string" ? data.name : d.id,
        occupancy: parseNumber(data.occupancy),
        lastEntry: parseHubTimeMs(data.lastEntry),
        lastExit: parseHubTimeMs(data.lastExit),
        lastVisitDuration: parseNumber(data.lastVisitDuration),
      };
    })
    .sort((a, b) => a.roomId - b.roomId);
}

export function subscribeRoomStates(
  onUpdate: (rooms: RoomState[]) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  return onSnapshot(
    collection(db, ROOM_COLLECTION),
    (snap) => {
      const rooms = snap.docs
        .map((d) => {
          const data = d.data();
          return {
            id: d.id,
            roomId: parseNumber(data.roomId),
            name: typeof data.name === "string" ? data.name : d.id,
            occupancy: parseNumber(data.occupancy),
            lastEntry: parseHubTimeMs(data.lastEntry),
            lastExit: parseHubTimeMs(data.lastExit),
            lastVisitDuration: parseNumber(data.lastVisitDuration),
          };
        })
        .sort((a, b) => a.roomId - b.roomId);
      onUpdate(rooms);
    },
    (err) => onError?.(err)
  );
}

/** Human-readable local time string (client-side, no Cloud Function). */
function formatTimeLocalClient(date = new Date()): string {
  return date.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function hubEventNeedsTimestampStamp(data: Record<string, unknown>): boolean {
  if (!isPatientConfirmed(data)) return false;
  if (data.stampedByClient === true || data.stampedAtServer === true) return false;
  return parseHubTimeMs(data.timestamp) <= 0;
}

/** Fix bad ESP32 clocks using web SDK serverTimestamp (Spark plan — no Blaze). */
async function stampHubEventFromClient(
  roomId: number,
  eventId: string,
  data: Record<string, unknown>
): Promise<void> {
  if (!hubEventNeedsTimestampStamp(data)) return;

  const eventRef = doc(db, ROOM_COLLECTION, roomDocId(roomId), "events", eventId);
  const roomRef = doc(db, ROOM_COLLECTION, roomDocId(roomId));
  const type = typeof data.type === "string" ? data.type : "";
  const timeLocal = formatTimeLocalClient();

  const batch = writeBatch(db);
  batch.update(eventRef, {
    timestamp: serverTimestamp(),
    timeLocal,
    stampedByClient: true,
  });

  if (type === "ENTRY") {
    batch.update(roomRef, { lastEntry: serverTimestamp() });
  } else if (type === "EXIT") {
    batch.update(roomRef, { lastExit: serverTimestamp() });
  }

  await batch.commit();
}

/**
 * When the web app is open, rewrite hub events with invalid timestamps.
 * Replaces Cloud Functions on the free Spark plan (rules alone cannot set server time).
 */
export function startHubTimestampRepair(onError?: (err: Error) => void): Unsubscribe {
  const unsubs: Unsubscribe[] = [];
  const stamping = new Set<string>();

  for (const seed of SEED_ROOMS) {
    const roomId = seed.roomId;
    const eventsRef = collection(db, ROOM_COLLECTION, roomDocId(roomId), "events");
    const q = query(eventsRef, limit(HUB_EVENTS_PER_ROOM));

    unsubs.push(
      onSnapshot(
        q,
        (snap) => {
          for (const change of snap.docChanges()) {
            if (change.type === "removed") continue;
            const data = change.doc.data() as Record<string, unknown>;
            if (!hubEventNeedsTimestampStamp(data)) continue;

            const key = `${roomId}_${change.doc.id}`;
            if (stamping.has(key)) continue;
            stamping.add(key);

            void stampHubEventFromClient(roomId, change.doc.id, data)
              .catch((e) => onError?.(e instanceof Error ? e : new Error(String(e))))
              .finally(() => stamping.delete(key));
          }
        },
        (err) => onError?.(err)
      )
    );
  }

  return () => unsubs.forEach((u) => u());
}

async function mirrorEntryToPatientLocation(
  patientId: string,
  roomId: number,
  eventDocId: string,
  data: Record<string, unknown>,
  docCreateTime?: Timestamp
): Promise<void> {
  if (data.type !== "ENTRY" || !isPatientConfirmed(data)) return;

  const locId = `ble_r${roomId}_${eventDocId}`;
  const locRef = doc(db, PATIENTS_COLLECTION, patientId, "location", locId);

  const room =
    typeof data.roomName === "string" && data.roomName
      ? data.roomName
      : SEED_ROOMS.find((r) => r.roomId === roomId)?.name ?? `Room ${roomId}`;

  const timeMs = getHubEventTimeMs(data, docCreateTime);
  const existing = await getDoc(locRef);

  if (existing.exists()) {
    const prevMs = parseHubTimeMs(existing.data()?.time);
    if (timeMs > 0 && (prevMs <= 0 || prevMs < 1_000_000_000_000)) {
      await updateDoc(locRef, { room, time: timeMs, source: "esp32" });
    }
    return;
  }

  await setDoc(locRef, {
    room,
    source: "esp32",
    ...(timeMs > 0 ? { time: timeMs } : { time: serverTimestamp() }),
  });
}

/**
 * Listen for new ENTRY events on all hub rooms and copy into patient location history.
 * Call while the caregiver dashboard is open for that patient.
 */
function startHubLocationSyncInner(
  patientId: string,
  onError?: (err: Error) => void
): Unsubscribe {
  const unsubs: Unsubscribe[] = [];
  const seen = new Set<string>();

  for (const seed of SEED_ROOMS) {
    const roomId = seed.roomId;
    const eventsRef = collection(db, ROOM_COLLECTION, roomDocId(roomId), "events");
    const q = query(eventsRef, limit(HUB_EVENTS_PER_ROOM));

    unsubs.push(
      onSnapshot(
        q,
        (snap) => {
          for (const change of snap.docChanges()) {
            if (change.type === "removed") continue;
            const dedupeKey = `${roomId}_${change.doc.id}`;
            if (change.type === "added") {
              if (seen.has(dedupeKey)) continue;
              seen.add(dedupeKey);
            }

            const data = change.doc.data() as Record<string, unknown>;

            void mirrorEntryToPatientLocation(
              patientId,
              roomId,
              change.doc.id,
              data,
              change.doc.createTime
            ).catch((e) => onError?.(e instanceof Error ? e : new Error(String(e))));

            void stampHubEventFromClient(roomId, change.doc.id, data).catch((e) =>
              onError?.(e instanceof Error ? e : new Error(String(e)))
            );
          }
        },
        (err) => onError?.(err)
      )
    );
  }

  return () => unsubs.forEach((u) => u());
}

/** Mirror hub ENTRY events only when this patient is selected in hubConfig. */
export function startHubLocationSync(
  patientId: string,
  onError?: (err: Error) => void
): Unsubscribe {
  let innerUnsub: Unsubscribe | null = null;
  let cancelled = false;

  void getHubPatientId()
    .then((hubPatientId) => {
      if (cancelled || hubPatientId !== patientId) return;
      innerUnsub = startHubLocationSyncInner(patientId, onError);
    })
    .catch((e) => onError?.(e instanceof Error ? e : new Error(String(e))));

  return () => {
    cancelled = true;
    innerUnsub?.();
  };
}

/** Live BLE hub activity — only events the hub marked patientConfirmed. */
export function subscribeRecentHubEvents(
  onUpdate: (events: HubActivity[]) => void,
  onError?: (err: Error) => void,
  maxEvents = 6
): Unsubscribe {
  const unsubs: Unsubscribe[] = [];
  const latestByRoom = new Map<number, HubActivity[]>();

  const publish = () => {
    const merged = dedupeHubActivities(
      Array.from(latestByRoom.values())
        .flat()
        .filter((e) => e.patientConfirmed && (e.type === "ENTRY" || e.type === "EXIT"))
        .sort((a, b) => b.timeMs - a.timeMs)
    ).slice(0, maxEvents);
    onUpdate(merged);
  };

  for (const seed of SEED_ROOMS) {
    const roomId = seed.roomId;
    const eventsRef = collection(db, ROOM_COLLECTION, roomDocId(roomId), "events");
    const q = query(eventsRef, limit(HUB_EVENTS_PER_ROOM));

    unsubs.push(
      onSnapshot(
        q,
        (snap) => {
          const roomEvents = snap.docs
            .map((d) => parseHubActivityDoc(d, roomId, seed.name))
            .filter((e) => e.patientConfirmed);
          latestByRoom.set(roomId, roomEvents);
          publish();
        },
        (err) => onError?.(err)
      )
    );
  }

  return () => unsubs.forEach((u) => u());
}
