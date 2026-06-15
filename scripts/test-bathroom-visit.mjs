/**
 * Simulate a confirmed bathroom ENTRY then EXIT for James (hub patient p1).
 * Run with the web app open so hub sync can mark "Go to the bathroom" done.
 *
 *   node scripts/test-bathroom-visit.mjs
 */
import { loadEnv, requireEnv } from "./load-env.mjs";

loadEnv();
const PROJECT_ID = requireEnv("VITE_FIREBASE_PROJECT_ID");
const API_KEY = requireEnv("VITE_FIREBASE_API_KEY");

async function postEvent(type) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/rooms/room_1/events?key=${API_KEY}`;
  const body = {
    fields: {
      type: { stringValue: type },
      roomId: { integerValue: "1" },
      roomName: { stringValue: "Bathroom" },
      patientConfirmed: { booleanValue: true },
    },
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log(`${type} HTTP`, res.status, text.slice(0, 120));
  if (!res.ok) process.exit(1);
}

console.log("Posting confirmed Bathroom ENTRY…");
await postEvent("ENTRY");
await new Promise((r) => setTimeout(r, 1500));
console.log("Posting confirmed Bathroom EXIT…");
await postEvent("EXIT");
console.log("\n✓ Done. With the app open, James's bathroom reminder should show Done on the caregiver dashboard.");
