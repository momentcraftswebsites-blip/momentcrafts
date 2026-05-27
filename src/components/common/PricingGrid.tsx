import { pricingPlans } from "../../constants/pricing";
import { GlassCard } from "./GlassCard";

export const PricingGrid = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <GlassCard
          key={plan.id}
          className={
            plan.highlighted
              ? "border-fuchsia-300 bg-gradient-to-br from-white to-fuchsia-50"
              : ""
          }
        >
          {plan.highlighted ? (
            <span className="rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white">
              Most Popular
            </span>
          ) : null}
          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            {plan.name}
          </h3>
          <p className="mt-1 text-3xl font-black text-fuchsia-600">
            {plan.price}
          </p>
          <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            {plan.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white">
            Get Started
          </button>
        </GlassCard>
      ))}
    </div>
  );
};
