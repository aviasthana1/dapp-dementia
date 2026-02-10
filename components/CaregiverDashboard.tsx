import { useState, useEffect } from 'react';
import {
  getRemindersForPatient,
  createReminder,
  uploadReminderPhoto,
  setReminderPhotoUrl,
} from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { ArrowLeft, Bell, Plus, LogOut, Clock, Image, X } from 'lucide-react';
import { ReminderListSkeleton } from './Skeleton';

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
      className={`object-cover rounded-xl flex-shrink-0 ${className ?? 'w-16 h-16'}`}
    />
  );
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
    <div className="min-h-screen app-page p-8 max-w-xl mx-auto">
      <div className="flex flex-col gap-3 mb-6">
        <button
          onClick={onBack}
          className="btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <ArrowLeft className="w-6 h-6" /> Back to patients
        </button>
        <button
          onClick={onLogout}
          className="btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <LogOut className="w-6 h-6" /> Log out
        </button>
      </div>

      <div className="card p-6 mb-6">
        <h2 className="heading-big mb-2 flex items-center gap-2">
          <Bell className="w-8 h-8 text-blue-600" /> {patientName}
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Reminders you've set for them. Add a photo (e.g. their pill organizer or dog) so they recognize it more easily.
        </p>
        {!showAddForm ? (
          <button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="btn-big w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
          >
            <Plus className="w-6 h-6" /> Add a reminder
          </button>
        ) : (
          <form onSubmit={handleAddReminder} className="space-y-4">
            <label className="label-big block">Title</label>
            <input
              type="text"
              value={addTitle}
              onChange={(e) => setAddTitle(e.target.value)}
              placeholder="e.g. Take morning medication"
              className="input-big w-full border-2 border-gray-300 rounded-xl"
              required
            />
            <label className="label-big block">Time</label>
            <input
              type="text"
              value={addTime}
              onChange={(e) => setAddTime(e.target.value)}
              placeholder="e.g. 8:00 AM"
              className="input-big w-full border-2 border-gray-300 rounded-xl"
              required
            />
            <div>
              <label className="label-big block mb-2 flex items-center gap-2">
                <Image className="w-5 h-5 text-blue-600" /> Photo (optional)
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Their own pill organizer, pet, or familiar object helps them recognize the reminder.
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setAddPhoto(e.target.files?.[0] ?? null)}
                className="block w-full text-lg"
              />
              {addPhoto && (
                <p className="mt-2 text-base text-gray-600 flex items-center gap-2">
                  <Image className="w-4 h-4" /> {addPhoto.name}
                  <button
                    type="button"
                    onClick={() => setAddPhoto(null)}
                    className="text-red-600 hover:underline flex items-center gap-1"
                  >
                    <X className="w-4 h-4" /> Remove
                  </button>
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={adding}
                className="btn-big flex-1 bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl disabled:opacity-70"
              >
                {adding ? 'Adding…' : 'Add reminder'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setAddTitle('');
                  setAddTime('');
                  setAddPhoto(null);
                }}
                className="btn-big border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl px-6"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>


      <p className="section-title">Today’s reminders</p>
      {error && (
        <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl">
          {error}
        </div>
      )}
      {loading ? (
        <ReminderListSkeleton count={4} />
      ) : (
        <ul className="space-y-4">
          {reminders.length === 0 ? (
            <li className="card p-6 rounded-2xl text-center">
              <p className="text-xl text-gray-600 mb-2">No reminders yet.</p>
              <p className="text-base text-gray-500">
                Tap “Add a reminder” above to create one (e.g. medication, meals, activities).
              </p>
            </li>
          ) : (
            reminders.map((r) => (
              <li key={r.id} className="card p-5 rounded-2xl flex items-start gap-4">
                {r.photoUrl ? (
                  <ReminderPhoto url={r.photoUrl} alt="" className="w-16 h-16" />
                ) : (
                  <span className="text-2xl flex-shrink-0">🔔</span>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-semibold text-gray-900">{r.title}</p>
                  <p className="text-lg text-gray-600 mt-1 flex items-center gap-1">
                    <Clock className="w-5 h-5" /> {r.time}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
