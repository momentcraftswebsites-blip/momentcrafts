import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const points = [
  "100% Custom Design",
  "Fast & Secure",
  "Mobile Responsive",
  "SEO Friendly",
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute -left-16 top-4 h-44 w-44 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-48 w-48 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex rounded-full border border-fuchsia-200 bg-white/70 px-3 py-1 text-xs font-semibold text-fuchsia-600">
            Custom Websites, Crafted for You
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We Create{" "}
            <span className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
              Custom Websites
            </span>
            <br />
            For Every Occasion
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
            Build your online presence with a premium, responsive website that
            feels unique and unforgettable.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {points.map((point) => (
              <p key={point} className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={18} className="text-fuchsia-500" />
                {point}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Get Your Custom Website <ArrowRight size={16} />
            </Link>
            <Link
              to="/work"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1519223400710-0c1d8e8a1f32?auto=format&fit=crop&w=1400&q=80"
            alt="MomentCrafts showcase"
            className="w-full rounded-[2rem] border border-white/60 object-cover shadow-[0_35px_80px_-32px_rgba(124,58,237,0.45)]"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-5 right-4 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl"
          >
            <p className="text-xs text-slate-500">Websites Delivered</p>
            <p className="text-2xl font-black text-fuchsia-600">10+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
