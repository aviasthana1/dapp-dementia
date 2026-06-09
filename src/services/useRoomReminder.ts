/**
 * useRoomReminder.ts
 *
 * Watches the patient's location history in Firebase.
 * Keeps track of the last time they entered each room.
 * If a specific room hasn't been visited for too long, 
 * automatically creates a reminder on the patient's screen.
 */

import { useEffect, useRef } from 'react';
import { subscribeLocationHistoryForPatient, createReminder } from './firestoreData';

// ── Config ────────────────────────────────────────────────────────────────────
// How long (in milliseconds) before we trigger a reminder for each room.
// 1 hour = 60 * 60 * 1000 = 3_600_000 ms
const ROOM_THRESHOLDS: Record<string, number> = {
  'Bathroom': 20 * 1000,   // 20 seconds
  'Kitchen':  8 * 60 * 60 * 1000,   // 8 hours (no kitchen visit = skipping meals)
  'Bedroom':  16 * 60 * 60 * 1000,  // 16 hours (no bedroom = not sleeping)
};

// How often we check (every 10 seconds)
const CHECK_INTERVAL_MS = 10 * 1000;

// ── Helper: convert epoch to a readable time string like "2:30 PM" ────────────
function epochToTimeString(epochMs: number): string {
  return new Date(epochMs).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

// ── Helper: normalise time to milliseconds ────────────────────────────────────
// Firebase sometimes stores seconds, sometimes milliseconds.
// If the number is less than year 2000 in ms, treat it as seconds.
function toMs(time: number): number {
  return time < 1_000_000_000_000 ? time * 1000 : time;
}

// ── The hook ──────────────────────────────────────────────────────────────────
export function useRoomReminder(patientId: string | null) {

  // This ref holds the most recent entry time for each room.
  // e.g. { "Bathroom": 1717862400000, "Kitchen": 1717858800000 }
  // It updates in real time whenever Firebase gets a new location event.
  const lastEntryRef = useRef<Record<string, number>>({});

  // Step 1 — Subscribe to location history.
  // Every time a new room entry arrives from the ESP32,
  // update lastEntryRef with the most recent time for that room.
  useEffect(() => {
    if (!patientId) return;
    const unsubscribe = subscribeLocationHistoryForPatient(
      patientId,
      (events) => {
        // Go through every location event and keep only the most recent per room
        const latest: Record<string, number> = {};

        for (const event of events) {
          const roomName = event.room;
          const timeMs = toMs(event.time);

          // If we haven't seen this room yet, or this event is more recent — update it
          if (!latest[roomName] || timeMs > latest[roomName]) {
            latest[roomName] = timeMs;
          }
        }

        // Save to ref so the interval checker can read it
        lastEntryRef.current = latest;
      }
    );

    return () => unsubscribe();
  }, [patientId]);

  // Step 2 — Set up a timer that checks every 30 minutes.
  // For each room that has a threshold, check if the patient
  // hasn't been there in too long — if so, create a reminder.
  useEffect(() => {
    if (!patientId) return;

    // TEMPORARY TEST LINE — delete after testing!
    if (Object.keys(lastEntryRef.current).length === 0) {
     lastEntryRef.current = { 'Bathroom': Date.now() - 30 * 1000 };
    } 

    // Track which reminders we've already sent so we don't spam
    const alreadyNotified = new Set<string>();

    const checkRooms = async () => {
      const now = Date.now();

      for (const [room, thresholdMs] of Object.entries(ROOM_THRESHOLDS)) {
        const lastVisit = lastEntryRef.current[room];

        // If we've never seen an entry for this room, skip it
        // (don't want to spam reminders on first load)
        if (!lastVisit) continue;

        const timeSinceLastVisit = now - lastVisit;

        // Has it been too long?
        if (timeSinceLastVisit > thresholdMs) {
          // Build a unique key so we don't send the same reminder twice
          // e.g. "Bathroom-1717862400000"
          const notifyKey = `${room}-${lastVisit}`;

          if (!alreadyNotified.has(notifyKey)) {
            alreadyNotified.add(notifyKey);

            // Create an automatic reminder for the patient
            await createReminder(patientId, {
              title: `Time to visit the ${room}!`,
              time: epochToTimeString(now),
            });

            console.log(`[RoomReminder] Triggered reminder for ${room} — last visit was ${Math.round(timeSinceLastVisit / 3_600_000)} hours ago`);
          }
        } else {
          // Room was visited recently — clear the notification key so it can fire again later
          const notifyKey = `${room}-${lastVisit}`;
          alreadyNotified.delete(notifyKey);
        }
      }
    };

    // Run once immediately on mount, then every 30 minutes
    void checkRooms();
    const interval = setInterval(() => void checkRooms(), CHECK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [patientId]);
}
