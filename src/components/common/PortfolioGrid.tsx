import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "../../constants/projects";
import type { ProjectCategory } from "../../types";
import { GlassCard } from "./GlassCard";

type PortfolioGridProps = {
  previewCount?: number;
};

export const PortfolioGrid = ({ previewCount }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered = useMemo(() => {
    const list =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);
    return previewCount ? list.slice(0, previewCount) : list;
  }, [activeCategory, previewCount]);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-xs font-semibold sm:text-sm ${
              activeCategory === category
                ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 text-white"
                : "bg-white text-slate-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <GlassCard key={project.id} className="overflow-hidden p-0">
            <img
              className="h-48 w-full object-cover"
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
            <div className="p-5">
              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-fuchsia-600">
                {project.category}
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>
              <Link
                to={`/templates/${project.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-fuchsia-600"
              >
                View Project →
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
