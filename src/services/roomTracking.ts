/**
 * ESP32 BLE hub → Firestore `rooms/room_{n}` and `rooms/room_{n}/events`.
 * The web app mirrors ENTRY events into `patients/{id}/location` for the caregiver UI.
 */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
  query,
  orderBy,
  limit,
  onSnapshot,
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

/** ESP32 may send seconds since boot; use wall clock when value is not a real epoch. */
export function normalizeHubTimestamp(raw: unknown): number {
  const n = parseNumber(raw);
  if (n <= 0) return Date.now();
  if (n < 1_000_000_000) return Date.now();
  if (n < 1_000_000_000_000) return n * 1000;
  return n;
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
        lastEntry: parseNumber(data.lastEntry),
        lastExit: parseNumber(data.lastExit),
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
            lastEntry: parseNumber(data.lastEntry),
            lastExit: parseNumber(data.lastExit),
            lastVisitDuration: parseNumber(data.lastVisitDuration),
          };
        })
        .sort((a, b) => a.roomId - b.roomId);
      onUpdate(rooms);
    },
    (err) => onError?.(err)
  );
}

async function mirrorEntryToPatientLocation(
  patientId: string,
  roomId: number,
  eventDocId: string,
  data: { roomName?: string; type?: string; timestamp?: unknown }
): Promise<void> {
  if (data.type !== "ENTRY") return;

  const locId = `ble_r${roomId}_${eventDocId}`;
  const locRef = doc(db, PATIENTS_COLLECTION, patientId, "location", locId);
  const existing = await getDoc(locRef);
  if (existing.exists()) return;

  const room =
    typeof data.roomName === "string" && data.roomName
      ? data.roomName
      : SEED_ROOMS.find((r) => r.roomId === roomId)?.name ?? `Room ${roomId}`;

  await setDoc(locRef, {
    room,
    time: normalizeHubTimestamp(data.timestamp),
    source: "esp32",
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
    const q = query(eventsRef, orderBy("timestamp", "desc"), limit(10));

    unsubs.push(
      onSnapshot(
        q,
        (snap) => {
          for (const change of snap.docChanges()) {
            if (change.type !== "added" && change.type !== "modified") continue;
            const dedupeKey = `${roomId}_${change.doc.id}`;
            if (seen.has(dedupeKey)) continue;
            seen.add(dedupeKey);

            void mirrorEntryToPatientLocation(patientId, roomId, change.doc.id, change.doc.data()).catch(
              (e) => onError?.(e instanceof Error ? e : new Error(String(e)))
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
