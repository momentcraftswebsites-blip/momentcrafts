import { Link } from "react-router-dom";
import { navItems, siteConfig } from "../../constants/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/70 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-slate-900">
            {siteConfig.brand}
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link className="hover:text-fuchsia-600" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Get In Touch</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a
                className="hover:text-emerald-600"
                href={`https://wa.me/${siteConfig.whatsappPrimary}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp (Primary): {siteConfig.phone}
                </span>
              </a>
            </li>
            <li>
              <a
                className="hover:text-emerald-600"
                href={`https://wa.me/${siteConfig.whatsappSecondary}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp (Secondary): {siteConfig.secondaryPhone}
                </span>
              </a>
            </li>
            <li>
              <a
                className="hover:text-fuchsia-600"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-fuchsia-600"
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram: momentcrafts.in
              </a>
            </li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-500">
        <p>© 2026 {siteConfig.brand}. All rights reserved.</p>
      </div>
    </footer>
  );
};
