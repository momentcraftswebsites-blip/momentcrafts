import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from "lucide-react";
import { testimonials } from "../../constants/testimonials";

const trustStats = [
  { value: "4.9", label: "Average Rating" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction Rate" },
];

export const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  useEffect(() => {
    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const visibleCards = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <div className="space-y-6">
      {/* Trust header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-6 py-4 backdrop-blur-sm"
      >
        {/* Stars + label */}
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#FF4FCB] text-[#FF4FCB]" />
            ))}
          </div>
          <span className="text-sm font-semibold text-[#0F172A]">
            Loved by clients across India
          </span>
        </div>
        {/* Stats */}
        <div className="flex gap-6">
          {trustStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="bg-gradient-to-r from-[#FF4FCB] to-[#A855F7] bg-clip-text text-lg font-black text-transparent">
                {s.value}
              </p>
              <p className="text-[10px] text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cards */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-gradient-to-br from-white via-pink-50/40 to-violet-50/40 p-4 shadow-[0_24px_60px_-20px_rgba(168,85,247,0.2)] sm:p-6">
        {/* Ambient blob */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF4FCB]/8 blur-3xl" />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid gap-4 lg:grid-cols-2"
          >
            {visibleCards.map((item, offset) => (
              <div
                key={`${item.id}-${offset}`}
                className={`relative rounded-2xl border border-white/80 bg-white/90 p-5 backdrop-blur-sm sm:p-6 ${
                  offset === 1 ? "hidden lg:block" : ""
                }`}
              >
                {/* Quote icon */}
                <div className="absolute right-5 top-5 opacity-10">
                  <Quote size={36} className="text-[#A855F7]" />
                </div>

                {/* Avatar + meta */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.avatarGradient} text-sm font-bold text-white shadow-md`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">{item.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="rounded-full bg-gradient-to-r from-[#FF4FCB]/10 to-[#A855F7]/10 px-2 py-0.5 text-[10px] font-semibold text-[#A855F7]">
                        {item.projectType}
                      </span>
                      <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                        <MapPin size={9} />
                        {item.city}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  "{item.quote}"
                </p>

                {/* Rating */}
                <div className="mt-4 flex gap-0.5 border-t border-slate-100 pt-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#FF4FCB] text-[#FF4FCB]" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-5 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 bg-gradient-to-r from-[#FF4FCB] to-[#A855F7]"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-[#A855F7]/40 hover:text-[#A855F7]"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#FF4FCB] to-[#A855F7] text-white shadow-md transition-all duration-200 hover:shadow-lg hover:shadow-[#A855F7]/30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
