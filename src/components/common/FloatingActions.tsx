import { Instagram } from "lucide-react";
import { siteConfig } from "../../constants/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsappPrimary}`}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-300/60 transition hover:-translate-y-0.5"
        aria-label="WhatsApp Primary"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsappSecondary}`}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-300/60 transition hover:-translate-y-0.5"
        aria-label="WhatsApp Secondary"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 text-white shadow-lg shadow-fuchsia-300/60 transition hover:-translate-y-0.5"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
};
