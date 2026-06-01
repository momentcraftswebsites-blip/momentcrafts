import { useEffect } from "react";
import { PricingGrid } from "../components/common/PricingGrid";
import { SectionHeading } from "../components/common/SectionHeading";
import { updateDocumentMeta } from "../utils/seo";

const PricingPage = () => {
  useEffect(() => {
    updateDocumentMeta(
      "Pricing",
      "Simple, flexible pricing for premium custom websites.",
    );
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Investment"
        title="Every Moment Deserves a Masterpiece"
        subtitle="Choose the experience that matches your vision. Each plan is crafted with love, precision, and purpose."
        centered
      />
      <div className="mt-10">
        <PricingGrid />
      </div>
    </div>
  );
};

export default PricingPage;
