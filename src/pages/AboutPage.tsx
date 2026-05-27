import { useEffect } from "react";
import { SectionHeading } from "../components/common/SectionHeading";
import { StatsStrip } from "../components/home/StatsStrip";
import { updateDocumentMeta } from "../utils/seo";

const AboutPage = () => {
  useEffect(() => {
    updateDocumentMeta(
      "About Us",
      "About MomentCrafts and our mission to craft delightful digital experiences.",
    );
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About MomentCrafts"
        title="We Build Websites That Feel Personal And Premium"
        subtitle="Our team blends modern design, motion, and conversion-focused UX to launch memorable digital experiences."
      />
      <div className="grid gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">What We Believe</h3>
          <p className="mt-3 text-slate-600">
            Every occasion deserves a digital story. We create handcrafted
            websites with modern aesthetics, responsive layouts, and smooth user
            journeys.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Our Promise</h3>
          <p className="mt-3 text-slate-600">
            Fast delivery, clean architecture, and long-term support backed by
            transparent collaboration from kickoff to launch.
          </p>
        </div>
      </div>
      <StatsStrip />
    </div>
  );
};

export default AboutPage;
