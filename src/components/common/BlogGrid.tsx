import { blogs } from "../../constants/blogs";
import { GlassCard } from "./GlassCard";

export const BlogGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <GlassCard key={blog.id} className="overflow-hidden p-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-44 w-full object-cover"
            loading="lazy"
          />
          <div className="p-5">
            <span className="rounded-full bg-fuchsia-50 px-2 py-1 text-xs font-semibold text-fuchsia-600">
              {blog.category}
            </span>
            <h3 className="mt-3 text-lg font-bold text-slate-900">
              {blog.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{blog.excerpt}</p>
            <p className="mt-3 text-xs text-slate-500">
              {blog.date} • {blog.readTime}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};
