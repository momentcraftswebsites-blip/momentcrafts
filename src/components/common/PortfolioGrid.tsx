import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { projectCategories, projects } from "../../constants/projects";
import type { ProjectCategory } from "../../types";

type Props = { previewCount?: number };

const stats = [
  { value: "20+", label: "Websites Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "7–14d", label: "Avg. Turnaround" },
  { value: "India", label: "Clients Across" },
];

// ── Featured card ────────────────────────────────────────────────────────────
const FeaturedCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_32px_80px_-24px_rgba(168,85,247,0.3)]"
  >
    {/* Image */}
    <div className="relative h-72 overflow-hidden sm:h-96">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />

      {/* Featured badge */}
      <div className="absolute left-5 top-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FF4FCB] to-[#A855F7] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-lg">
          ✦ Featured Project
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
          {project.category}
        </span>
        <h3 className="font-cormorant mt-2 text-3xl font-semibold text-white sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/70 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Testimonial */}
        {"testimonial" in project && project.testimonial && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
            <div className="flex shrink-0 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="fill-[#FF4FCB] text-[#FF4FCB]" />
              ))}
            </div>
            <div>
              <p className="text-xs italic text-white/80">"{project.testimonial.quote}"</p>
              <p className="mt-1 text-[10px] font-semibold text-white/50">— {project.testimonial.author}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to={`/templates/${project.slug}`}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF4FCB] to-[#A855F7] px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[#A855F7]/40"
          >
            View Project
            <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

// ── Project card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, i }: { project: typeof projects[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
    className="group relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-16px_rgba(168,85,247,0.25)]"
  >
    {/* Image with zoom */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center gap-2.5 bg-[#0F172A]/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
        <Link
          to={`/templates/${project.slug}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FF4FCB] to-[#A855F7] px-4 py-2 text-xs font-semibold text-white shadow-lg"
        >
          View Project <ArrowRight size={11} />
        </Link>
      </div>
    </div>

    {/* Card body */}
    <div className="p-5">
      <span className="inline-flex rounded-full bg-gradient-to-r from-[#FF4FCB]/10 to-[#A855F7]/10 px-2.5 py-1 text-[11px] font-semibold text-[#A855F7]">
        {project.category}
      </span>
      <h3 className="mt-2 text-base font-bold text-[#0F172A]">{project.title}</h3>
      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────
export const PortfolioGrid = ({ previewCount }: Props) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const featured = projects.find((p) => p.featured);

  const filtered = useMemo(() => {
    const list =
      activeCategory === "All"
        ? projects.filter((p) => !p.featured)
        : projects.filter((p) => p.category === activeCategory);
    return previewCount ? list.slice(0, previewCount) : list;
  }, [activeCategory, previewCount]);

  return (
    <div className="space-y-8">
      {/* Stats strip */}
      {!previewCount && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/60 bg-white/80 p-4 text-center backdrop-blur-sm">
              <p className="bg-gradient-to-r from-[#FF4FCB] to-[#A855F7] bg-clip-text text-2xl font-black text-transparent">
                {s.value}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Featured project */}
      {featured && activeCategory === "All" && (
        <FeaturedCard project={featured} />
      )}

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#FF4FCB] via-[#A855F7] to-[#6D28D9] text-white shadow-lg shadow-[#A855F7]/30"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#A855F7]/30 hover:text-[#A855F7]"
              }`}
              style={isActive ? { boxShadow: "0 0 16px rgba(168,85,247,0.35)" } : {}}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      {previewCount && (
        <div className="text-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-[#A855F7]/30 bg-white px-6 py-3 text-sm font-semibold text-[#A855F7] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF4FCB] hover:to-[#A855F7] hover:border-transparent hover:text-white hover:shadow-lg"
          >
            View All Projects
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};
