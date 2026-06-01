/**
 * POST a test ENTRY to rooms/room_1/events (same path as ESP32 logEvent).
 * Run: node scripts/test-hub-event.mjs
 */
import { loadEnv, requireEnv } from "./load-env.mjs";

loadEnv();
const PROJECT_ID = requireEnv("VITE_FIREBASE_PROJECT_ID");
const API_KEY = requireEnv("VITE_FIREBASE_API_KEY");

const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/rooms/room_1/events?key=${API_KEY}`;

const body = {
  fields: {
    type: { stringValue: 'ENTRY' },
    roomId: { integerValue: '1' },
    roomName: { stringValue: 'Bathroom' },
    timestamp: { integerValue: String(Math.floor(Date.now() / 1000)) },
  },
};

const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log('HTTP', res.status);
console.log(text);

if (res.ok) {
  console.log('\n✓ Test event created. Check Firestore: rooms → room_1 → events');
} else {
  console.log('\n✗ Failed — fix rules or project before debugging ESP32.');
}
