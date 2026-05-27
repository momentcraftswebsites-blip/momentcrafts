import { useEffect } from "react";
import { AnimatedSection } from "../components/common/AnimatedSection";
import { SectionHeading } from "../components/common/SectionHeading";
import { ServiceGrid } from "../components/common/ServiceGrid";
import { ProcessSteps } from "../components/home/ProcessSteps";
import { CTASection } from "../components/home/CTASection";
import { updateDocumentMeta } from "../utils/seo";

const ServicesPage = () => {
  useEffect(() => {
    updateDocumentMeta(
      "Services",
      "Custom website services for events and businesses.",
    );
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Services"
        title="Custom Websites For Every Occasion"
        subtitle="Beautifully designed websites that match your vision and elevate your online presence."
      />

      <AnimatedSection>
        <ServiceGrid />
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading centered title="Our Process" />
        <div className="mt-8">
          <ProcessSteps />
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
};

export default ServicesPage;
