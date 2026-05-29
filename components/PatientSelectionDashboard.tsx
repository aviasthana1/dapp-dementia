import { useState, useEffect } from 'react';
import { getPatientsForCaregiver } from '../src/services/firestoreData';
import type { Patient } from '../src/services/firestoreData';
import { PatientListSkeleton } from './Skeleton';
import { Button, ErrorBanner, Page, PageTitle, SectionLabel } from './ui';

type PatientSelectionDashboardProps = {
  caregiverEmail: string;
  onSelectPatient: (patientId: string, patientName: string) => void;
  onLogout: () => void;
  onSettings: () => void;
};

export function PatientSelectionDashboard({
  caregiverEmail,
  onSelectPatient,
  onLogout,
  onSettings,
}: PatientSelectionDashboardProps) {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPatientsForCaregiver(caregiverEmail)
      .then(setPatients)
      .catch((err) => setError(err?.message ?? 'Failed to load'))
      .finally(() => setLoading(false));
  }, [caregiverEmail]);

  return (
    <Page>
      <div className="flex gap-2 mb-6">
        <Button variant="secondary" className="flex-1" onClick={onSettings}>
          Settings
        </Button>
        <Button variant="ghost" className="flex-1" onClick={onLogout}>
          Log out
        </Button>
      </div>

      <PageTitle
        title="Choose patient"
        subtitle={`Signed in as ${caregiverEmail}`}
      />

      {error && <ErrorBanner message={error} />}

      <SectionLabel>Your patients</SectionLabel>
      {loading ? (
        <PatientListSkeleton count={3} />
      ) : patients.length === 0 ? (
        <p className="text-sm text-muted">
          No patients yet. Share a linking code from Settings.
        </p>
      ) : (
        <ul className="stack">
          {patients.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => onSelectPatient(p.id, p.name)}
                className="list-row"
              >
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}
