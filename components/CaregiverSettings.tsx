import { useState, useEffect } from 'react';
import {
  getCaregiverByEmail,
  getPatientsForCaregiver,
  getLinkingCodesForPatients,
} from '../src/services/firestoreData';
import type { Patient, LinkingCode } from '../src/services/firestoreData';
import { getHubPatientId, setHubPatientId } from '../src/services/roomTracking';
import { PatientListSkeleton } from './Skeleton';
import { BackButton, Card, ErrorBanner, Field, Page, PageTitle, SectionLabel } from './ui';

type CaregiverSettingsProps = {
  caregiverEmail: string;
  onBack: () => void;
  onSelectPatient: (patientId: string, patientName: string) => void;
};

export function CaregiverSettings({
  caregiverEmail,
  onBack,
  onSelectPatient,
}: CaregiverSettingsProps) {
  const [name, setName] = useState<string | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [linkingCodes, setLinkingCodes] = useState<LinkingCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hubPatientId, setHubPatientIdState] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const caregiver = await getCaregiverByEmail(caregiverEmail);
        if (cancelled) return;
        setName(caregiver?.name ?? null);

        const patientList = await getPatientsForCaregiver(caregiverEmail);
        if (cancelled) return;
        setPatients(patientList);

        const codes = await getLinkingCodesForPatients(patientList.map((p) => p.id));
        if (cancelled) return;
        setLinkingCodes(codes);

        const hubId = await getHubPatientId();
        if (cancelled) return;
        setHubPatientIdState(hubId ?? '');
      } catch (err) {
        if (!cancelled) setError((err as Error)?.message ?? 'Failed to load settings');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [caregiverEmail]);

  return (
    <Page>
      <BackButton onClick={onBack} />
      <PageTitle
        title="Settings"
        subtitle={`${name ?? 'Caregiver'} · ${caregiverEmail}`}
      />

      {error && <ErrorBanner message={error} />}

      <SectionLabel>BLE hub</SectionLabel>
      <Card className="mb-4">
        <p className="text-sm text-muted mb-3">
          ESP32 hub ENTRY events are copied into this patient&apos;s location history.
        </p>
        {loading ? (
          <p className="text-sm text-muted">Loading…</p>
        ) : (
          <Field label="Tracked patient">
            <select
              className="input"
              value={hubPatientId}
              onChange={(e) => {
                const id = e.target.value;
                setHubPatientIdState(id);
                void setHubPatientId(id || null);
              }}
            >
              <option value="">None</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </Field>
        )}
      </Card>

      <SectionLabel>Reminders</SectionLabel>
      <Card className="mb-4">
        <p className="text-sm text-muted">
          When a patient marks a reminder done, it updates automatically in Firestore.
        </p>
      </Card>

      <SectionLabel>Patients</SectionLabel>
      {loading ? (
        <PatientListSkeleton count={3} />
      ) : (
        <>
          {patients.length === 0 ? (
            <p className="text-sm text-muted mb-4">No patients assigned yet.</p>
          ) : (
            <ul className="stack mb-4">
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

          <SectionLabel>Linking codes</SectionLabel>
          <Card>
            <p className="text-sm text-muted mb-3">
              Share a code so patients can link on the home screen.
            </p>
            {linkingCodes.length === 0 ? (
              <p className="text-sm text-muted">No codes found.</p>
            ) : (
              <ul className="stack text-sm">
                {linkingCodes.map((lc) => (
                  <li key={lc.code} className="flex items-center gap-2">
                    <span className="font-mono font-medium">{lc.code}</span>
                    <span className="text-muted">→</span>
                    <span>{lc.patientName}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </>
      )}
    </Page>
  );
}
