import { motion } from "framer-motion";
import {
  Briefcase, Heart, Home, MailCheck, Sparkles, Users, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../constants/services";

const iconMap = { Heart, Home, MailCheck, Users, Briefcase, Sparkles };

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// ── Featured card (Business) ─────────────────────────────────────────────────
const FeaturedCard = ({ item }: { item: typeof services[0] }) => {
  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;
  return (
    <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[2rem]">
      <div className={`bg-gradient-to-br ${item.gradient} p-8 sm:p-10 lg:p-12`}>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FF4FCB]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-1/3 h-48 w-48 rounded-full bg-[#A855F7]/10 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.accent} px-4 py-1.5 text-xs font-semibold text-white`}>
              <Icon size={12} />
              {item.title}
            </div>
            <h3 className="font-cormorant mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {item.outcome}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-violet-200/70">
              {item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-violet-200/80 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={item.viewLink}
              className="group/btn mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF4FCB] to-[#A855F7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#A855F7]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-[#A855F7]/50"
            >
              View Examples
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* Right — decorative stat cards */}
          <div className="hidden lg:flex lg:justify-end lg:gap-4">
            {[
              { stat: "3×", label: "More Leads", sub: "vs no website" },
              { stat: "7d", label: "Avg Delivery", sub: "Brief to live" },
            ].map((s) => (
              <div key={s.stat} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className={`bg-gradient-to-r ${item.accent} bg-clip-text text-3xl font-black text-transparent`}>
                  {s.stat}
                </p>
                <p className="mt-1 text-xs font-semibold text-white">{s.label}</p>
                <p className="text-[10px] text-violet-300/60">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ── Large card (Wedding) ─────────────────────────────────────────────────────
const LargeCard = ({ item }: { item: typeof services[0] }) => {
  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;
  return (
    <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[1.75rem]">
      <div className={`relative h-full bg-gradient-to-br ${item.gradient} p-7 transition-all duration-500`}>
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#FF4FCB]/10 blur-3xl" />

        <div className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${item.accent} p-2.5 text-white`}>
          <Icon size={16} />
        </div>
        <h3 className="font-cormorant mt-4 text-3xl font-semibold text-slate-900">
          {item.outcome}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Hover reveal CTA */}
        <div className="mt-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            to={item.viewLink}
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.accent} px-5 py-2.5 text-xs font-semibold text-white shadow-md`}
          >
            View Example <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ── Compact card ─────────────────────────────────────────────────────────────
const CompactCard = ({ item }: { item: typeof services[0] }) => {
  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;
  return (
    <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[1.5rem]">
      <div className={`relative h-full bg-gradient-to-br ${item.gradient} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`}>

        <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} p-2.5 text-white`}>
          <Icon size={15} />
        </div>

        <h3 className="mt-3 text-base font-semibold text-slate-800">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500 line-clamp-2">{item.outcome}</p>

        <div className="mt-3 flex flex-wrap gap-1">
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-white/60 px-2 py-0.5 text-[10px] font-medium text-slate-500">
              {tag}
            </span>
          ))}
        </div>

        {/* Hover reveal */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-white/95 to-white/80 px-6 py-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          <Link
            to={item.viewLink}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${item.accent} py-2.5 text-xs font-semibold text-white`}
          >
            View Example <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ── Main grid ────────────────────────────────────────────────────────────────
export const ServiceGrid = () => {
  const featured = services.find((s) => s.featured)!;
  const large    = services.find((s) => s.large)!;
  const compact  = services.filter((s) => !s.featured && !s.large);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="space-y-4"
    >
      {/* Row 1 — Featured full-width */}
      <FeaturedCard item={featured} />

      {/* Row 2 — Large + compact pair */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <LargeCard item={large} />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {compact.slice(0, 2).map((item) => (
            <CompactCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Row 3 — Remaining compact cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {compact.slice(2).map((item) => (
          <CompactCard key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
};
