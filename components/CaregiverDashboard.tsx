import { useState, useEffect } from 'react';
import {
  getRemindersForPatient,
  createReminder,
  uploadReminderPhoto,
  setReminderPhotoUrl,
  subscribeLocationHistoryForPatient,
  deleteReminder,
} from '../src/services/firestoreData';
import type { Reminder, PatientLocationEvent } from '../src/services/firestoreData';
import {
  startHubLocationSync,
  subscribeRoomStates,
  type RoomState,
} from '../src/services/roomTracking';
import { Clock, Trash2 } from 'lucide-react';
import { LocationHistorySkeleton, ReminderListSkeleton } from './Skeleton';
import {
  BackButton,
  Button,
  Card,
  ErrorBanner,
  Field,
  Input,
  Page,
  PageTitle,
  SectionLabel,
} from './ui';

type CaregiverDashboardProps = {
  caregiverEmail: string;
  patientId: string;
  patientName: string;
  onLogout: () => void;
  onBack: () => void;
};

function ReminderPhoto({ url, alt, className }: { url: string; alt: string; className?: string }) {
  return (
    <img
      src={url}
      alt={alt}
      className={className ?? 'w-12 h-12 object-cover rounded-md border border-gray-200 flex-shrink-0'}
    />
  );
}

function formatLocationTime(epoch: number): string {
  if (!Number.isFinite(epoch)) return 'Unknown time';
  const ms = epoch > 1e12 ? epoch : epoch * 1000;
  return new Date(ms).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function CaregiverDashboard({
  patientId,
  patientName,
  onLogout,
  onBack,
}: CaregiverDashboardProps) {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [addTime, setAddTime] = useState('');
  const [addPhoto, setAddPhoto] = useState<File | null>(null);
  const [adding, setAdding] = useState(false);

  const loadReminders = () => {
    setLoading(true);
    getRemindersForPatient(patientId)
      .then(setReminders)
      .catch((err) => setError(err?.message ?? 'Failed to load'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadReminders();
  }, [patientId]);

  const [locationHistory, setLocationHistory] = useState<PatientLocationEvent[]>([]);
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [roomStates, setRoomStates] = useState<RoomState[]>([]);

  useEffect(() => {
    setLocationLoading(true);
    setLocationError(null);

    const unsubLocation = subscribeLocationHistoryForPatient(
      patientId,
      (events) => {
        setLocationHistory(events);
        setLocationLoading(false);
      },
      (err) => {
        setLocationError(err.message ?? 'Failed to load location history');
        setLocationLoading(false);
      }
    );

    const unsubHub = startHubLocationSync(patientId, (err) => {
      setLocationError(err.message ?? 'Hub sync failed');
    });

    const unsubRooms = subscribeRoomStates(setRoomStates);

    return () => {
      unsubLocation();
      unsubHub();
      unsubRooms();
    };
  }, [patientId]);

  const handleDeleteReminder = async (reminderId: string) => {
    if (!window.confirm('Delete this reminder?')) return;
    setError(null);
    try {
      await deleteReminder(reminderId);
      loadReminders();
    } catch (err) {
      setError((err as Error)?.message ?? 'Failed to delete reminder');
    }
  };

  const handleAddReminder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addTitle.trim() || !addTime.trim()) return;
    setAdding(true);
    setError(null);
    try {
      const id = await createReminder(patientId, {
        title: addTitle.trim(),
        time: addTime.trim(),
      });
      if (addPhoto) {
        const photoUrl = await uploadReminderPhoto(patientId, id, addPhoto);
        await setReminderPhotoUrl(id, photoUrl);
      }
      setAddTitle('');
      setAddTime('');
      setAddPhoto(null);
      setShowAddForm(false);
      loadReminders();
    } catch (err) {
      setError((err as Error)?.message ?? 'Failed to add reminder');
    } finally {
      setAdding(false);
    }
  };

  return (
    <Page>
      <BackButton onClick={onBack} label="Patients" />
      <div className="flex gap-2 mb-4">
        <Button variant="ghost" className="flex-1" onClick={onLogout}>
          Log out
        </Button>
      </div>

      <PageTitle title={patientName} subtitle="Manage reminders and view location history." />

      <Card className="mb-6">
        {!showAddForm ? (
          <Button className="w-full" onClick={() => setShowAddForm(true)}>
            Add reminder
          </Button>
        ) : (
          <form onSubmit={handleAddReminder} className="stack">
            <Field label="Title">
              <Input
                value={addTitle}
                onChange={(e) => setAddTitle(e.target.value)}
                placeholder="Take morning medication"
                required
              />
            </Field>
            <Field label="Time">
              <Input
                value={addTime}
                onChange={(e) => setAddTime(e.target.value)}
                placeholder="8:00 AM"
                required
              />
            </Field>
            <Field label="Photo (optional)">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setAddPhoto(e.target.files?.[0] ?? null)}
                className="text-sm"
              />
              {addPhoto && (
                <p className="text-sm text-muted mt-1">{addPhoto.name}</p>
              )}
            </Field>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1" disabled={adding}>
                {adding ? 'Adding…' : 'Save'}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setShowAddForm(false);
                  setAddTitle('');
                  setAddTime('');
                  setAddPhoto(null);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Card>

      <SectionLabel>Reminders</SectionLabel>
      {error && <ErrorBanner message={error} />}

      {loading ? (
        <ReminderListSkeleton count={4} />
      ) : reminders.length === 0 ? (
        <p className="text-sm text-muted">No reminders yet.</p>
      ) : (
        <ul className="stack mb-6">
          {reminders.map((r) => (
            <li key={r.id} className="card flex items-start gap-3">
              {r.photoUrl ? (
                <ReminderPhoto url={r.photoUrl} alt="" />
              ) : null}
              <div className="flex-1 min-w-0">
                <p className="font-medium">{r.title}</p>
                <p className="text-sm text-muted flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden />
                  {r.time}
                  {r.done && <span className="text-green-700"> · Done</span>}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteReminder(r.id)}
                className="btn-text"
                style={{ marginBottom: 0 }}
                aria-label={`Delete ${r.title}`}
              >
                <Trash2 className="w-4 h-4" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      )}

      {roomStates.length > 0 && (
        <>
          <SectionLabel>BLE hub — live rooms</SectionLabel>
          <ul className="stack mb-6 text-sm">
            {roomStates.map((r) => (
              <li key={r.id} className="card flex justify-between gap-2">
                <span className="font-medium">{r.name}</span>
                <span className="text-muted">
                  {r.lastEntry > 0 ? `Last entry ${formatLocationTime(r.lastEntry)}` : 'No entry yet'}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      <SectionLabel>Location history</SectionLabel>
      {locationError && <ErrorBanner message={locationError} />}

      {locationLoading ? (
        <LocationHistorySkeleton count={4} />
      ) : locationHistory.length === 0 ? (
        <p className="text-sm text-muted">No location events yet.</p>
      ) : (
        <ul className="stack">
          {locationHistory.map((e, idx) => (
            <li key={e.id} className={`card ${idx === 0 ? 'font-medium' : ''}`}>
              <p>{idx === 0 ? `Latest: ${e.room}` : e.room}</p>
              <p className="text-sm text-muted mt-0.5">{formatLocationTime(e.time)}</p>
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}
