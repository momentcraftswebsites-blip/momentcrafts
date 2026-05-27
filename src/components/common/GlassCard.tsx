import { cn } from "../../utils/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <article
      className={cn(
        "rounded-3xl border border-white/60 bg-white/75 p-6 shadow-[0_16px_45px_-24px_rgba(217,70,239,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-22px_rgba(79,70,229,0.38)]",
        className,
      )}
    >
      {children}
    </article>
  );
};
