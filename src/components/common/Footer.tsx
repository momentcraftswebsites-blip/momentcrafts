import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";
import { navItems, siteConfig } from "../../constants/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-[#1a0533] via-[#2d1054] to-[#1a0533]">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/McLogo.png" alt={siteConfig.brand} className="h-16 w-auto brightness-0 invert" />
            <p className="font-montserrat mt-1 text-[10px] font-light uppercase tracking-[0.25em] text-violet-300/70">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-violet-200/60">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/60">
              Explore
            </h4>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-violet-100/70 underline-offset-4 transition-colors duration-200 hover:text-fuchsia-300 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/60">
              Support
            </h4>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
              {["FAQs", "Privacy Policy", "Terms & Conditions", "Refund Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-violet-100/70 underline-offset-4 transition-colors hover:text-fuchsia-300 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/60">
              Get In Touch
            </h4>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappPrimary}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-violet-100/70 underline-offset-4 transition-colors hover:text-emerald-400 hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappSecondary}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-violet-100/70 underline-offset-4 transition-colors hover:text-emerald-400 hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  {siteConfig.secondaryPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-violet-100/70 underline-offset-4 transition-colors hover:text-fuchsia-300 hover:underline"
                >
                  <Mail size={15} className="shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-violet-100/70 underline-offset-4 transition-colors hover:text-pink-400 hover:underline"
                >
                  <Instagram size={15} className="shrink-0" />
                  momentcrafts.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-violet-100/50">
                <MapPin size={15} className="shrink-0" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-violet-300/50">
            © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
          </p>
          <p className="font-cormorant text-sm italic text-violet-300/40">
            Crafted with love, built for moments.
          </p>
        </div>
      </div>
    </footer>
  );
};
