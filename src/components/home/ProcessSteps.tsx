const steps = [
  {
    id: "Step 1",
    title: "Discuss",
    text: "Share your ideas and requirements with us.",
  },
  {
    id: "Step 2",
    title: "Design",
    text: "We create a custom design that matches your vision.",
  },
  {
    id: "Step 3",
    title: "Develop",
    text: "We build your website with speed and precision.",
  },
  {
    id: "Step 4",
    title: "Review",
    text: "You review and suggest changes. We refine until perfect.",
  },
  {
    id: "Step 5",
    title: "Launch",
    text: "Your website goes live with ongoing support.",
  },
];

export const ProcessSteps = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => (
        <div
          key={step.id}
          className="rounded-3xl border border-white/70 bg-white/75 p-5 text-center"
        >
          <p className="text-xs font-semibold text-fuchsia-600">{step.id}</p>
          <p className="mt-2 text-lg font-bold text-slate-900">{step.title}</p>
          <p className="mt-2 text-sm text-slate-600">{step.text}</p>
        </div>
      ))}
    </div>
  );
};
