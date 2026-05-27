import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../constants/testimonials";

export const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);
  const cardOffsets = testimonials.length > 1 ? [0, 1] : [0];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");

  const prev = () =>
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  const next = () =>
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-fuchsia-100/80 bg-gradient-to-br from-white via-pink-50/60 to-indigo-50/70 p-5 shadow-[0_28px_70px_-36px_rgba(99,102,241,0.45)] sm:p-7">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <div className="grid gap-4 lg:grid-cols-2">
        {cardOffsets.map((offset) => {
          const item = testimonials[(index + offset) % testimonials.length];

          return (
            <div
              key={`${item.id}-${offset}`}
              className={`relative rounded-2xl border border-white/80 bg-white/90 p-5 backdrop-blur sm:p-7 ${
                offset === 1 ? "hidden lg:block" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-sm font-bold text-white shadow-lg shadow-fuchsia-200/60">
                  {getInitials(item.name)}
                </div>
                <Quote className="text-fuchsia-400" size={28} />
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                "{item.quote}"
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-base font-bold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {item.projectType}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star
                      key={`${item.id}-star-${starIndex}`}
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.id}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition-all ${
                dotIndex === index
                  ? "w-7 bg-fuchsia-500"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-fuchsia-300 hover:text-fuchsia-600"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-fuchsia-300 hover:text-fuchsia-600"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
