/**
 * Stamps hub BLE events with Firestore server time (ESP32 can send bogus timestamps).
 * Deploy: firebase deploy --only functions:stampHubRoomEvent
 */
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

initializeApp();

function formatTimeLocal(date = new Date()) {
  return date.toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

exports.stampHubRoomEvent = onDocumentCreated(
  "rooms/{roomId}/events/{eventId}",
  async (event) => {
    const snap = event.data;
    if (!snap) return;

    const data = snap.data();
    if (data.stampedAtServer === true) return;

    const type = data.type;
    const roomId = event.params.roomId;
    const roomRef = getFirestore().doc(`rooms/${roomId}`);
    const serverTs = FieldValue.serverTimestamp();
    const timeLocal = formatTimeLocal(new Date());

    const batch = getFirestore().batch();

    batch.update(snap.ref, {
      timestamp: serverTs,
      timeLocal,
      stampedAtServer: true,
    });

    if (type === "ENTRY") {
      batch.update(roomRef, { lastEntry: serverTs });
    } else if (type === "EXIT") {
      batch.update(roomRef, { lastExit: serverTs });
    }

    await batch.commit();
  }
);
