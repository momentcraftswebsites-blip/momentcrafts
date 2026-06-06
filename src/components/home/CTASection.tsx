import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../constants/siteConfig";

const chips = ["Wedding Websites", "Business Sites", "Invitations", "Reunions", "Events"];

export const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a0533] via-[#2d1054] to-[#0f0a1e]"
      aria-label="Call to action"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#FF4FCB]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#A855F7]/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#6D28D9]/10 blur-3xl" />

      <div className="relative px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4FCB]/30 bg-[#FF4FCB]/10 px-4 py-1.5 text-xs font-semibold text-[#FF4FCB]">
            <Sparkles size={11} />
            Let's Build Something Beautiful
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="font-cormorant mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Ready To Build Your{" "}
          <span className="bg-gradient-to-r from-[#FF4FCB] via-[#A855F7] to-[#6D28D9] bg-clip-text text-transparent">
            Dream Website?
          </span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-violet-200/60 sm:text-base"
        >
          We create custom websites for weddings, businesses, invitations, and
          special occasions — crafted with love, delivered with precision.
        </motion.p>

        {/* Category chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-violet-200/60 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary */}
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FF4FCB] via-[#A855F7] to-[#6D28D9] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#A855F7]/40 transition-all duration-300 hover:scale-[1.04] hover:shadow-[#A855F7]/60 hover:shadow-xl"
            aria-label="Start your project"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            Start Your Project
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${siteConfig.whatsappPrimary}?text=Hi! I'd like to build a website with MomentCrafts.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={15} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Bottom micro trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-xs text-violet-300/35"
        >
          No commitment needed · Free consultation · Delivered in 7–14 days
        </motion.p>
      </div>
    </motion.section>
  );
};
