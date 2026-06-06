import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const trustBadges = [
  { icon: Star,    label: "20+ Websites Delivered" },
  { icon: Shield,  label: "SEO Optimized" },
  { icon: Zap,     label: "Fast Turnaround" },
  { icon: Clock,   label: "Mobile First" },
];

const floatingCards = [
  {
    id: "satisfaction",
    stat: "100%",
    label: "Client Satisfaction",
    sub: "Every single project",
    color: "from-[#FF4FCB]/10 to-[#A855F7]/10",
    border: "border-[#FF4FCB]/20",
    statColor: "from-[#FF4FCB] to-[#A855F7]",
    position: "top-6 -left-6 lg:-left-10",
    delay: 0,
    duration: 4,
  },
  {
    id: "delivered",
    stat: "20+",
    label: "Websites Live",
    sub: "Across India",
    color: "from-[#A855F7]/10 to-[#6D28D9]/10",
    border: "border-[#A855F7]/20",
    statColor: "from-[#A855F7] to-[#6D28D9]",
    position: "-bottom-4 -left-4 lg:-left-8",
    delay: 0.6,
    duration: 5,
  },
  {
    id: "turnaround",
    stat: "7–14",
    label: "Days Delivery",
    sub: "From brief to live",
    color: "from-pink-50 to-fuchsia-50",
    border: "border-pink-200/50",
    statColor: "from-[#FF4FCB] to-[#6D28D9]",
    position: "-bottom-6 right-4 lg:right-2",
    delay: 1.1,
    duration: 4.5,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" aria-label="Hero">
      {/* ── Background ambient glows ── */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#FF4FCB]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-[#A855F7]/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D28D9]/8 blur-[80px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* ── LEFT COLUMN ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4FCB]/30 bg-gradient-to-r from-[#FF4FCB]/8 to-[#A855F7]/8 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#A855F7]">
              <Sparkles size={12} className="text-[#FF4FCB]" />
              Premium Custom Websites — India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-cormorant text-5xl font-semibold leading-[1.1] tracking-tight text-[#0F172A] sm:text-6xl lg:text-[4.25rem]"
          >
            Websites That Make{" "}
            <span className="bg-gradient-to-r from-[#FF4FCB] via-[#A855F7] to-[#6D28D9] bg-clip-text text-transparent">
              Every Moment
            </span>
            <br />
            Memorable
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            From dream weddings to growing businesses — we craft pixel-perfect,
            fast, and emotionally resonant websites that convert visitors into
            believers.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FF4FCB] via-[#A855F7] to-[#6D28D9] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#A855F7]/30 transition-all duration-300 hover:shadow-[#A855F7]/50 hover:shadow-xl hover:scale-[1.03]"
              aria-label="Start your project"
            >
              {/* shimmer overlay */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              Start Your Project
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-[#A855F7]/40 hover:text-[#A855F7] hover:shadow-md"
              aria-label="See our work"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-3"
            aria-label="Trust indicators"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
              >
                <Icon size={11} className="text-[#FF4FCB]" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-3"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2" aria-hidden="true">
              {["#FF4FCB", "#A855F7", "#6D28D9", "#EC4899"].map((bg, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white ring-1 ring-white/50"
                  style={{ backgroundColor: bg, opacity: 0.85 - i * 0.1 }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#FF4FCB] text-[#FF4FCB]" />
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Loved by <span className="font-semibold text-slate-700">20+ clients</span> across India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg px-4 sm:px-6 lg:max-w-none lg:px-0"
        >
          {/* Glow behind mockup */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#FF4FCB]/20 via-[#A855F7]/15 to-[#6D28D9]/20 blur-2xl" />

          {/* Main mockup frame */}
          <div
            className="relative w-full overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_40px_100px_-30px_rgba(168,85,247,0.4)] lg:rounded-[2.5rem]"
            role="img"
            aria-label="MomentCrafts website showcase"
          >
            {/* Browser chrome bar */}
            <div className="relative z-10 flex items-center gap-1.5 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
              {["#FF4FCB", "#A855F7", "#6D28D9"].map((c) => (
                <div key={c} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c }} />
              ))}
              <div className="ml-3 flex-1 rounded-full bg-black/10 px-3 py-1 text-[10px] text-slate-600">
                momentcrafts.in
              </div>
            </div>

            {/* Image — object-contain so nothing is cropped */}
            <img
              src="/HomePageBackground.png"
              alt="MomentCrafts website showcase"
              className="w-full object-contain"
              loading="eager"
            />

            {/* Inner gloss overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a0533]/20 via-transparent to-white/5" />
          </div>

          {/* Floating cards — hidden on mobile to prevent overflow */}
          {floatingCards.map((card) => (
            <motion.div
              key={card.id}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: card.duration, ease: "easeInOut", delay: card.delay }}
              className={`absolute ${card.position} z-10 hidden sm:block`}
            >
              <div
                className={`rounded-2xl border ${card.border} bg-gradient-to-br ${card.color} px-4 py-3 shadow-xl backdrop-blur-xl`}
              >
                <p className={`bg-gradient-to-r ${card.statColor} bg-clip-text text-2xl font-black text-transparent`}>
                  {card.stat}
                </p>
                <p className="text-xs font-semibold text-slate-700">{card.label}</p>
                <p className="text-[10px] text-slate-400">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
