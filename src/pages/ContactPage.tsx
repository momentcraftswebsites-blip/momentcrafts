import { useEffect } from "react";
import { ContactForm } from "../components/common/ContactForm";
import { SectionHeading } from "../components/common/SectionHeading";
import { WhatsAppIcon } from "../components/common/WhatsAppIcon";
import { siteConfig } from "../constants/siteConfig";
import { updateDocumentMeta } from "../utils/seo";

const ContactPage = () => {
  useEffect(() => {
    updateDocumentMeta(
      "Contact Us",
      "Get in touch with MomentCrafts to build your custom website.",
    );
  }, []);

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
      <div>
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Turn Your Idea Into A Stunning Website"
          subtitle="Tell us your vision and our team will get back with a custom proposal."
        />
        <div className="mt-6 space-y-2 text-sm text-slate-600">
          <p>
            <a
              className="hover:text-emerald-600"
              href={`https://wa.me/${siteConfig.whatsappPrimary}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp (Primary): {siteConfig.phone}
              </span>
            </a>
          </p>
          <p>
            <a
              className="hover:text-emerald-600"
              href={`https://wa.me/${siteConfig.whatsappSecondary}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp (Secondary): {siteConfig.secondaryPhone}
              </span>
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              className="hover:text-fuchsia-600"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
          <p>
            <a
              className="hover:text-fuchsia-600"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Instagram DM: @momentcrafts.in
            </a>
          </p>
          <p>Location: {siteConfig.location}</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
