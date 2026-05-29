import { useCallback, useEffect, useState } from 'react';
import {
  getPatientPreferences,
  savePatientPreferences,
  PREFERENCE_CHANGE,
  type PatientPreferences,
} from '../services/patientPreferences';

export function usePatientPreferences() {
  const [prefs, setPrefs] = useState<PatientPreferences>(() => getPatientPreferences());

  useEffect(() => {
    const sync = () => setPrefs(getPatientPreferences());
    window.addEventListener(PREFERENCE_CHANGE, sync);
    return () => window.removeEventListener(PREFERENCE_CHANGE, sync);
  }, []);

  const update = useCallback((patch: Partial<PatientPreferences>) => {
    setPrefs(savePatientPreferences(patch));
  }, []);

  return { prefs, update };
}
