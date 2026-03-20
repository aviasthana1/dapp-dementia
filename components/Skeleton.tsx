/**
 * Ghost loading skeletons — no spinners. Keeps layout stable so the screen
 * doesn't feel like it "disappeared" while data is syncing (dementia-friendly).
 */

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
    <ul className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="card p-5 rounded-2xl flex items-start gap-4">
          <Skeleton className="w-16 h-16 flex-shrink-0 rounded-xl" />
          <div className="flex-1 min-w-0 space-y-2">
            <Skeleton className="h-6 max-w-md rounded" />
            <Skeleton className="h-5 max-w-[8rem] rounded" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function PatientListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <ul className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-14 w-full rounded-2xl" />
        </li>
      ))}
    </ul>
  );
}

export function CaregiverListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-14 w-full rounded-2xl" />
      ))}
    </div>
  );
}

export function CurrentTaskCardSkeleton() {
  return (
    <div className="card p-8 rounded-2xl border-4 border-gray-300 bg-gray-50">
      <div className="flex flex-col items-center gap-6">
        <Skeleton className="w-20 h-20 rounded-xl" />
        <Skeleton className="h-8 w-full max-w-sm rounded" />
        <Skeleton className="h-6 max-w-[6rem] rounded" />
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>
    </div>
  );
}

export function CardBlockSkeleton() {
  return (
    <div className="card p-6 rounded-2xl space-y-3">
      <Skeleton className="h-6 max-w-md rounded" />
      <Skeleton className="h-5 w-full rounded" />
      <Skeleton className="h-5 max-w-lg rounded" />
    </div>
  );
}

export function LocationHistorySkeleton({ count = 5 }: { count?: number }) {
  return (
    <ul className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="card p-5 rounded-2xl flex items-start gap-4">
          <Skeleton className="w-12 h-12 flex-shrink-0 rounded-xl" />
          <div className="flex-1 min-w-0 space-y-3">
            <Skeleton className="h-6 max-w-[12rem] rounded" />
            <Skeleton className="h-5 max-w-[16rem] rounded" />
          </div>
        </li>
      ))}
    </ul>
  );
}
