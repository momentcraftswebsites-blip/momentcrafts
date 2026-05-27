type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered,
}: SectionHeadingProps) => {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-pink-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-600">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-slate-600 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
};
