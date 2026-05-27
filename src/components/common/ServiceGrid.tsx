import {
  Briefcase,
  Heart,
  Home,
  MailCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { services } from "../../constants/services";
import { GlassCard } from "./GlassCard";

const iconMap = {
  Heart,
  Home,
  MailCheck,
  Users,
  Briefcase,
  Sparkles,
};

export const ServiceGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;
        return (
          <GlassCard key={item.id}>
            <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-pink-100 to-indigo-100 p-3 text-fuchsia-600">
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {item.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </GlassCard>
        );
      })}
    </div>
  );
};
