import type { ReminderSoundId } from './patientPreferences';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  return audioCtx;
}

function playTone(freq: number, start: number, duration: number, gain = 0.12): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = freq;
  amp.gain.setValueAtTime(0, ctx.currentTime + start);
  amp.gain.linearRampToValueAtTime(gain, ctx.currentTime + start + 0.02);
  amp.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration + 0.05);
}

export async function playReminderSound(soundId: ReminderSoundId): Promise<void> {
  if (soundId === 'none') return;
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') await ctx.resume();

  switch (soundId) {
    case 'chime':
      playTone(523.25, 0, 0.35);
      playTone(659.25, 0.2, 0.4);
      break;
    case 'bell':
      playTone(440, 0, 0.55, 0.1);
      break;
    case 'soft':
      playTone(329.63, 0, 0.7, 0.08);
      break;
    default:
      break;
  }
}

export const REMINDER_SOUND_OPTIONS: { id: ReminderSoundId; label: string }[] = [
  { id: 'chime', label: 'Gentle chime' },
  { id: 'bell', label: 'Soft bell' },
  { id: 'soft', label: 'Low tone' },
  { id: 'none', label: 'Silent' },
];
