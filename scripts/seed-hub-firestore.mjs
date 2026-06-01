/**
 * Seeds rooms/room_1–room_7 and hubConfig/default for the ESP32 BLE hub.
 * Run: node scripts/seed-hub-firestore.mjs
 */
import { loadEnv, requireEnv } from "./load-env.mjs";

loadEnv();
const PROJECT_ID = requireEnv("VITE_FIREBASE_PROJECT_ID");
const API_KEY = requireEnv("VITE_FIREBASE_API_KEY");
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

const ROOMS = [
  { roomId: 1, name: 'Bathroom', occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 2, name: 'Kitchen', occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 3, name: 'Bedroom', occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 4, name: 'Room 4', occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 5, name: 'Room 5', occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 6, name: 'Room 6', occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
  { roomId: 7, name: 'Room 7', occupancy: 0, lastEntry: 0, lastExit: 0, lastVisitDuration: 0 },
];

function toFields(data) {
  const fields = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') fields[key] = { stringValue: value };
    else if (typeof value === 'boolean') fields[key] = { booleanValue: value };
    else if (typeof value === 'number') fields[key] = { integerValue: String(value) };
  }
  return { fields };
}

async function upsertDoc(path, data) {
  const url = `${BASE}/${path}?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toFields(data)),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${path} → HTTP ${res.status}: ${text}`);
  }
  return text;
}

async function main() {
  console.log(`Seeding Firestore project: ${PROJECT_ID}\n`);

  for (const room of ROOMS) {
    const docId = `room_${room.roomId}`;
    await upsertDoc(`rooms/${docId}`, room);
    console.log(`✓ rooms/${docId} (${room.name})`);
  }

  await upsertDoc('hubConfig/default', { patientId: 'p1', enabled: true });
  console.log('✓ hubConfig/default (patientId: p1)');

  console.log('\nDone. Refresh Firebase Console → Firestore → Data.');
}

main().catch((err) => {
  console.error('\nSeed failed:', err.message);
  console.error('\nIf HTTP 403: publish firestore.rules in Firebase Console (Rules tab).');
  process.exit(1);
});
