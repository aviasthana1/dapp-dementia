/**
 * Live terminal monitor for ESP32 hub → Firestore events.
 * Run: npm run watch:hub
 *
 * Shows ALL events (including patientConfirmed=false).
 * Labels what the web app will do with each event.
 */
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";
import { loadEnv, requireEnv } from "./load-env.mjs";

loadEnv();

const app = initializeApp({
  apiKey: requireEnv("VITE_FIREBASE_API_KEY"),
  authDomain: requireEnv("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: requireEnv("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: requireEnv("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: requireEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: requireEnv("VITE_FIREBASE_APP_ID"),
});

const db = getFirestore(app);
const seen = new Set();
const roomReady = new Set();

function ts() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}

function field(data, key) {
  const v = data[key];
  if (v === true || v === false) return v;
  if (v && typeof v === "object" && "toDate" in v) return v.toDate().toISOString();
  return v ?? "—";
}

function uiNote(confirmed, type, roomName) {
  if (!confirmed) {
    return "UI: hidden (patientConfirmed=false) — not in Room activity, no reminder, no location";
  }
  if (type === "ENTRY") {
    return `UI: shown on caregiver · location history · may mark bathroom reminder done (${roomName})`;
  }
  if (type === "EXIT") {
    return `UI: shown on caregiver · may mark bathroom reminder done (${roomName})`;
  }
  return "UI: shown if ENTRY/EXIT";
}

async function printHubConfig() {
  const snap = await getDoc(doc(db, "hubConfig", "default"));
  if (!snap.exists()) {
    console.log(`[${ts()}] hubConfig/default: missing`);
    return;
  }
  const d = snap.data();
  console.log(
    `[${ts()}] hubConfig → patientId=${d.patientId ?? "?"} enabled=${d.enabled ?? "?"} (James = p1)`
  );
}

async function printBathroomReminder() {
  const q = query(
    collection(db, "reminders"),
    where("patientId", "==", "p1"),
    limit(20)
  );
  const snap = await getDocs(q);
  const bathroom = snap.docs.find((d) =>
    String(d.data().title ?? "").toLowerCase().includes("bathroom")
  );
  if (!bathroom) {
    console.log(`[${ts()}] reminder p1: no "bathroom" reminder found`);
    return;
  }
  const d = bathroom.data();
  console.log(
    `[${ts()}] reminder p1: "${d.title}" done=${d.done === true} id=${bathroom.id}`
  );
}

function watchRoom(roomId, roomName) {
  const eventsRef = collection(db, "rooms", `room_${roomId}`, "events");
  const q = query(eventsRef, limit(15));

  onSnapshot(
    q,
    (snap) => {
      const readyKey = `room_${roomId}`;
      if (!roomReady.has(readyKey)) {
        for (const d of snap.docs) seen.add(`${roomId}_${d.id}`);
        roomReady.add(readyKey);
        console.log(`[${ts()}] room_${roomId} (${roomName}) — baseline ${snap.docs.length} events`);
        return;
      }

      for (const change of snap.docChanges()) {
        if (change.type === "removed") continue;
        const key = `${roomId}_${change.doc.id}`;
        if (change.type !== "added" && seen.has(key)) continue;
        if (change.type === "added") seen.add(key);

        const data = change.doc.data();
        const confirmed = data.patientConfirmed === true;
        const type = data.type ?? "?";

        console.log("");
        console.log("─".repeat(60));
        console.log(`[${ts()}] NEW HUB EVENT  room_${roomId} (${roomName})`);
        console.log(`  doc:     ${change.doc.id}`);
        console.log(`  type:    ${type}`);
        console.log(`  patientConfirmed: ${confirmed}`);
        console.log(`  roomName: ${field(data, "roomName")}`);
        console.log(`  timestamp: ${field(data, "timestamp")}`);
        console.log(`  timeLocal: ${field(data, "timeLocal")}`);
        console.log(`  ${uiNote(confirmed, type, roomName)}`);
        console.log("─".repeat(60));

        if (roomId === 1 && confirmed) {
          void printBathroomReminder();
        }
      }
    },
    (err) => console.error(`[${ts()}] room_${roomId} listener error:`, err.message)
  );
}

console.log("");
console.log("CareConnect hub watcher — waiting for wearable / ESP32 events");
console.log("Bathroom = room_1 · James = p1 · Ctrl+C to stop");
console.log("");

await printHubConfig();
await printBathroomReminder();

const rooms = [
  [1, "Bathroom"],
  [2, "Kitchen"],
  [3, "Bedroom"],
];
for (const [id, name] of rooms) {
  watchRoom(id, name);
}

console.log(`[${ts()}] Listening on room_1, room_2, room_3…`);
