import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "../../constants/siteConfig";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-indigo-500 text-lg font-bold text-white">
            MC
          </div>
          <div>
            <p className="font-heading text-lg font-bold text-slate-900">
              {siteConfig.brand}
            </p>
            <p className="text-xs text-slate-500">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? "text-fuchsia-600" : "text-slate-700 hover:text-fuchsia-600"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-300/60 transition hover:scale-[1.02]"
          >
            Contact Us
          </Link>
        </nav>

        <button
          className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/60 bg-white/95 px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-fuchsia-50 text-fuchsia-600"
                      : "text-slate-700"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
