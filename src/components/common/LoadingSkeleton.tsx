export const LoadingSkeleton = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-3xl border border-white/70 bg-white/70 p-5"
        >
          <div className="h-40 rounded-2xl bg-slate-200/70" />
          <div className="mt-4 h-5 w-2/3 rounded bg-slate-200/70" />
          <div className="mt-2 h-4 w-full rounded bg-slate-200/70" />
        </div>
      ))}
    </div>
  );
};
