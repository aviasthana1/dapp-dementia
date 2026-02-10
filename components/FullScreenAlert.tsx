import { useEffect, useRef } from 'react';

export type FullScreenAlertProps = {
  /** Reminder title shown in the alert */
  title: string;
  /** Optional URL to a photo (e.g. pill organizer, pet) for recognition */
  photoUrl?: string;
  /** Optional URL to voice/audio message; when set, shows a voice message player */
  audioUrl?: string;
  /** Called when the user taps "I did it" */
  onDidIt: () => void;
  /** Called when the user taps "Remind me in 15 mins" */
  onRemindIn15Mins: () => void;
};

/** Plays a short chime using the Web Audio API (no external file). */
function playChime() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const now = ctx.currentTime;
    const freq = 523.25; // C5
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.setValueAtTime(freq * 1.25, now + 0.1);
    osc.frequency.setValueAtTime(freq * 1.5, now + 0.2);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.start(now);
    osc.stop(now + 0.5);
  } catch {
    // Ignore if AudioContext not supported or autoplay blocked
  }
}

export function FullScreenAlert({
  title,
  photoUrl,
  audioUrl,
  onDidIt,
  onRemindIn15Mins,
}: FullScreenAlertProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    playChime();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen w-full bg-white p-8"
      style={{ border: '12px solid #2563EB' }}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="fullscreen-alert-title"
    >
      <div className="flex flex-col items-center justify-center max-w-lg w-full gap-8">
        {photoUrl && (
          <img
            src={photoUrl}
            alt=""
            className="w-32 h-32 object-cover rounded-2xl border-2 border-gray-200"
          />
        )}
        <h1
          id="fullscreen-alert-title"
          className="text-3xl font-bold text-gray-900 text-center leading-relaxed"
        >
          {title}
        </h1>

        {audioUrl && (
          <div className="w-full">
            <p className="text-sm font-medium text-gray-600 mb-2">Voice message</p>
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-4">
              <audio
                ref={audioRef}
                src={audioUrl}
                controls
                className="w-full h-12"
                preload="metadata"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 w-full">
          <button
            type="button"
            onClick={onDidIt}
            className="btn-big w-full bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 rounded-2xl shadow-sm font-semibold"
          >
            I did it
          </button>
          <button
            type="button"
            onClick={onRemindIn15Mins}
            className="btn-big w-full bg-white text-gray-800 border-2 border-gray-400 hover:bg-gray-50 rounded-2xl font-semibold"
          >
            Remind me in 15 mins
          </button>
        </div>
      </div>
    </div>
  );
}
