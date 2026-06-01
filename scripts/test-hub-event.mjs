/**
 * POST a test ENTRY to rooms/room_1/events (same path as ESP32 logEvent).
 * Run: node scripts/test-hub-event.mjs
 */
const PROJECT_ID = 'test-f80e2';
const API_KEY = 'AIzaSyBIgGJPopOg1EtXJk5hOfE43Wy4dT1OZ8A';

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
