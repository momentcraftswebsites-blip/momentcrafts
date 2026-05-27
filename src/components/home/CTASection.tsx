import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="rounded-[1.8rem] bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 px-6 py-8 text-white sm:px-10 sm:py-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-2xl font-bold">
            Ready To Build Your Custom Website?
          </h3>
          <p className="mt-2 text-white/90">
            Let's bring your ideas to life with a modern digital experience.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-fuchsia-700"
        >
          Get Started Today <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};
