import { useEffect } from "react";
import { AnimatedSection } from "../components/common/AnimatedSection";
import { BlogGrid } from "../components/common/BlogGrid";
import { FeedbackSection } from "../components/common/FeedbackSection";
import { FaqAccordion } from "../components/common/FaqAccordion";
import { PortfolioGrid } from "../components/common/PortfolioGrid";
import { SectionHeading } from "../components/common/SectionHeading";
import { ServiceGrid } from "../components/common/ServiceGrid";
import { TestimonialsSlider } from "../components/common/TestimonialsSlider";
import { CTASection } from "../components/home/CTASection";
import { Hero } from "../components/home/Hero";
import { ProcessSteps } from "../components/home/ProcessSteps";
import { StatsStrip } from "../components/home/StatsStrip";
import { updateDocumentMeta } from "../utils/seo";

const HomePage = () => {
  useEffect(() => {
    updateDocumentMeta(
      "Home",
      "MomentCrafts premium custom websites for every occasion.",
    );
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
      <Hero />

      <AnimatedSection>
        <SectionHeading
          centered
          eyebrow="Services"
          title="Perfect Websites For Every Need"
          subtitle="Premium customized websites designed to look elegant and perform fast."
        />
        <div className="mt-8">
          <ServiceGrid />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading centered title="How We Work" />
        <div className="mt-7">
          <ProcessSteps />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex items-end justify-between gap-3">
          <SectionHeading
            title="Our Recent Work"
            subtitle="A glimpse of websites we built for amazing clients."
          />
        </div>
        <div className="mt-6">
          <PortfolioGrid previewCount={6} />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <StatsStrip />
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading centered title="What Our Clients Say" />
        <div className="mx-auto mt-7 max-w-3xl">
          <TestimonialsSlider />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading
          centered
          title="Share Your Feedback"
          subtitle="Tell us about your experience with MomentCrafts. Your feedback helps us improve every project."
        />
        <div className="mx-auto mt-7 max-w-3xl">
          <FeedbackSection />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading
          centered
          title="From Our Blog"
          subtitle="Design, strategy, and website growth insights."
        />
        <div className="mt-8">
          <BlogGrid />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading centered title="Frequently Asked Questions" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FaqAccordion />
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
};

export default HomePage;
