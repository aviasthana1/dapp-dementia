export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded bg-gray-200 ${className}`}
      aria-hidden
    />
  );
}

export function ReminderListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <ul className="stack">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="card flex items-center gap-3">
          <Skeleton className="w-12 h-12 flex-shrink-0" />
          <div className="flex-1 min-w-0 space-y-2">
            <Skeleton className="h-4 max-w-[12rem]" />
            <Skeleton className="h-3 max-w-[6rem]" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function PatientListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <ul className="stack">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-11 w-full" />
        </li>
      ))}
    </ul>
  );
}

export function CaregiverListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="stack">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-11 w-full" />
      ))}
    </div>
  );
}

export function CurrentTaskCardSkeleton() {
  return (
    <div className="card task-card">
      <Skeleton className="h-5 max-w-[75%] mx-auto mb-3" />
      <Skeleton className="h-4 max-w-[40%] mx-auto mb-4" />
      <Skeleton className="h-11 w-full" />
    </div>
  );
}

export function CardBlockSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

export function LocationHistorySkeleton({ count = 4 }: { count?: number }) {
  return (
    <ul className="stack">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="card space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-48" />
        </li>
      ))}
    </ul>
  );
}
