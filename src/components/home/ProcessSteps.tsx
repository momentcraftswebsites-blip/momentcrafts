import { motion } from "framer-motion";
import { MessageCircle, Palette, Code2, SlidersHorizontal, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discover",
    description: "Share your vision, goals, and inspiration with us in a free 30-minute call.",
    duration: "30 min call",
    accent: "from-[#FF4FCB] to-[#A855F7]",
    glow: "rgba(255,79,203,0.25)",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description: "We craft custom design concepts tailored to your brand identity and audience.",
    duration: "1–2 days",
    accent: "from-[#A855F7] to-[#6D28D9]",
    glow: "rgba(168,85,247,0.25)",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description: "Fast, responsive, pixel-perfect development — built to perform on every device.",
    duration: "3–5 days",
    accent: "from-[#6D28D9] to-[#4f46e5]",
    glow: "rgba(109,40,217,0.25)",
  },
  {
    number: "04",
    icon: SlidersHorizontal,
    title: "Refine",
    description: "Your feedback shapes every detail. We revise until it feels absolutely perfect.",
    duration: "Until approved",
    accent: "from-[#A855F7] to-[#FF4FCB]",
    glow: "rgba(168,85,247,0.25)",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "Go live with confidence. We provide ongoing support every step of the way.",
    duration: "Ongoing support",
    accent: "from-[#FF4FCB] to-[#f97316]",
    glow: "rgba(255,79,203,0.25)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export const ProcessSteps = () => {
  return (
    <div className="relative">
      {/* ── Desktop: horizontal timeline ── */}
      <div className="hidden lg:block">
        {/* Connecting gradient line */}
        <div className="relative mx-auto mb-0 flex items-center justify-between px-8">
          <div className="absolute left-[calc(10%)] right-[calc(10%)] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#FF4FCB] via-[#A855F7] to-[#FF4FCB] opacity-30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative z-10 flex flex-col items-center"
                style={{ width: "18%" }}
              >
                {/* Node */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${step.accent} shadow-lg`}
                  style={{ boxShadow: `0 0 24px ${step.glow}` }}
                >
                  <Icon size={20} className="text-white" />
                  {/* Step number badge */}
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-700 shadow">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content card */}
                <div className="mt-5 rounded-2xl border border-white/60 bg-white/80 p-4 text-center backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <p className="text-sm font-bold text-[#0F172A]">{step.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
                  <span className={`mt-3 inline-flex items-center rounded-full bg-gradient-to-r ${step.accent} px-2.5 py-0.5 text-[10px] font-semibold text-white`}>
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: vertical timeline ── */}
      <div className="relative lg:hidden">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[#FF4FCB] via-[#A855F7] to-[#FF4FCB] opacity-30" />

        <div className="space-y-6 pl-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Node on the line */}
                <div
                  className={`absolute -left-[2.75rem] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.accent} shadow-md`}
                  style={{ boxShadow: `0 0 16px ${step.glow}` }}
                >
                  <Icon size={16} className="text-white" />
                </div>

                <div className="rounded-2xl border border-white/60 bg-white/80 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400">{step.number}</span>
                      <p className="text-base font-bold text-[#0F172A]">{step.title}</p>
                    </div>
                    <span className={`shrink-0 rounded-full bg-gradient-to-r ${step.accent} px-2.5 py-1 text-[10px] font-semibold text-white`}>
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
