import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pricingPlans } from "../../constants/pricing";

export const PricingGrid = () => {
  return (
    <div className="relative">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-200/20 blur-3xl" />

      <div className="relative grid gap-6 lg:grid-cols-3 lg:items-center">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: plan.highlighted ? -10 : -6 }}
            className={`relative rounded-[2rem] p-[1px] ${
              plan.highlighted
                ? "bg-gradient-to-br from-pink-400 via-fuchsia-400 to-violet-500 shadow-[0_0_60px_-10px_rgba(192,38,211,0.5)] lg:scale-105"
                : plan.dark
                  ? "bg-gradient-to-br from-violet-900/80 to-slate-900/80"
                  : "bg-gradient-to-br from-pink-100/60 to-violet-100/60"
            }`}
          >
            {/* Most Popular badge */}
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg">
                  ✦ Most Loved
                </span>
              </div>
            )}

            <div
              className={`h-full rounded-[calc(2rem-1px)] p-8 ${
                plan.dark
                  ? "bg-gradient-to-br from-[#1a0533] via-[#2d1054] to-[#1a0533]"
                  : plan.highlighted
                    ? "bg-gradient-to-br from-white via-fuchsia-50/80 to-pink-50/60 backdrop-blur-xl"
                    : "bg-white/80 backdrop-blur-xl"
              }`}
            >
              {/* Plan name */}
              <p
                className={`font-montserrat text-xs font-light uppercase tracking-[0.3em] ${
                  plan.dark ? "text-violet-300/70" : "text-fuchsia-400/80"
                }`}
              >
                {plan.name}
              </p>

              {/* Price */}
              <p
                className={`mt-3 font-cormorant text-3xl font-semibold tracking-wide ${
                  plan.dark
                    ? "text-white"
                    : "bg-gradient-to-r from-[#d633c7] to-[#7c4dff] bg-clip-text text-transparent"
                }`}
              >
                {plan.price}
              </p>

              {/* Description */}
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  plan.dark ? "text-violet-200/70" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Divider */}
              <div
                className={`my-6 h-px w-full ${
                  plan.dark
                    ? "bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
                    : "bg-gradient-to-r from-transparent via-fuchsia-200 to-transparent"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 text-xs ${
                        plan.dark ? "text-violet-400" : "text-fuchsia-400"
                      }`}
                    >
                      {f.icon}
                    </span>
                    <span
                      className={`text-sm leading-snug ${
                        plan.dark ? "text-violet-100/80" : "text-slate-600"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={plan.ctaLink}
                className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold tracking-wide transition-all duration-300 ${
                  plan.dark
                    ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:shadow-[0_0_24px_rgba(167,139,250,0.5)]"
                    : plan.highlighted
                      ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white shadow-lg shadow-fuchsia-300/40 hover:shadow-[0_0_28px_rgba(192,38,211,0.45)]"
                      : "border border-fuchsia-200 bg-white text-fuchsia-600 hover:bg-gradient-to-r hover:from-pink-500 hover:via-fuchsia-500 hover:to-violet-500 hover:border-transparent hover:text-white hover:shadow-lg"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
