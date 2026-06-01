import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "../../constants/siteConfig";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/McLogo.png" alt={siteConfig.brand} className="h-10 w-auto sm:h-14 lg:h-[72px]" />
          <div className="flex flex-col gap-0.5">
            <span className="font-cormorant text-lg font-semibold tracking-[0.12em] bg-gradient-to-r from-[#d633c7] to-[#7c4dff] bg-clip-text text-transparent sm:text-xl lg:text-2xl">
              {siteConfig.brand}
            </span>
            <span className="font-montserrat text-[8px] font-light tracking-[0.2em] uppercase text-rose-400/90 sm:text-[10px]">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-fuchsia-600"
                    : "text-slate-600 hover:text-fuchsia-500 hover:drop-shadow-[0_0_6px_rgba(192,38,211,0.4)]"
                }`
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
