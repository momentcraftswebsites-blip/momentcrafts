import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants/projects";

const TemplateDetailsPage = () => {
  const { slug } = useParams();

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  );

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Template Not Found
        </h1>
        <Link
          to="/work"
          className="mt-6 inline-block rounded-full bg-slate-900 px-5 py-3 text-sm text-white"
        >
          Back To Work
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <img
        src={project.image}
        alt={project.title}
        className="h-[360px] w-full rounded-[2rem] object-cover"
      />
      <div className="mt-8 rounded-3xl border border-white/60 bg-white/80 p-8">
        <span className="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-600">
          {project.category}
        </span>
        <h1 className="mt-3 text-4xl font-black text-slate-900">
          {project.title}
        </h1>
        <p className="mt-4 text-slate-600">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailsPage;
