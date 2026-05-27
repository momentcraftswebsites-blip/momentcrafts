import { useEffect } from "react";
import { BlogGrid } from "../components/common/BlogGrid";
import { SectionHeading } from "../components/common/SectionHeading";
import { updateDocumentMeta } from "../utils/seo";

const BlogPage = () => {
  useEffect(() => {
    updateDocumentMeta(
      "Blog",
      "Website design and growth insights from MomentCrafts.",
    );
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="Insights On Design, Growth And Digital Experience"
        subtitle="Explore practical tips, trends and strategies for high-performing websites."
      />
      <div className="mt-8">
        <BlogGrid />
      </div>
    </div>
  );
};

export default BlogPage;
