import { useEffect } from "react";
import { PortfolioGrid } from "../components/common/PortfolioGrid";
import { SectionHeading } from "../components/common/SectionHeading";
import { updateDocumentMeta } from "../utils/seo";

const WorkPage = () => {
  useEffect(() => {
    updateDocumentMeta(
      "Our Work",
      "Explore MomentCrafts portfolio of modern event and business websites.",
    );
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Work"
        title="Our Work, Your Inspiration"
        subtitle="Explore custom projects we crafted for weddings, invitations, reunions and business brands."
      />
      <div className="mt-8">
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default WorkPage;
