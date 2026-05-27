const stats = [
  { label: "Websites Delivered", value: "10+" },
  { label: "Happy Clients", value: "98%" },
  { label: "Years Experience", value: "10+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const StatsStrip = () => {
  return (
    <div className="rounded-3xl border border-white/60 bg-gradient-to-r from-white via-pink-50 to-indigo-50 p-6 shadow-sm">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-white/80 p-4 text-center"
          >
            <p className="text-3xl font-black text-fuchsia-600">{item.value}</p>
            <p className="text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
