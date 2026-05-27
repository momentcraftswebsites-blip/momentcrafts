import { useState } from "react";
import { websiteTypeOptions } from "../../constants/siteConfig";
import { siteConfig } from "../../constants/siteConfig";
import type { ContactSubmission } from "../../types";
import { createContactSubmission } from "../../services/firestoreService";

const initialState: ContactSubmission = {
  name: "",
  email: "",
  phone: "",
  websiteType: websiteTypeOptions[0],
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactSubmission>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  const updateField = (field: keyof ContactSubmission, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const whatsappMessage = [
      "Hello MomentCrafts, I would like to send an enquiry.",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Website Type: ${formData.websiteType}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappPrimary}?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      await createContactSubmission(formData);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setStatus("Opening WhatsApp with your enquiry details...");
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setStatus(
        "Opening WhatsApp. We could not save this enquiry to the dashboard.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-xl backdrop-blur"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
          placeholder="Name"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
        />
        <input
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          type="email"
          required
          placeholder="Email"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
        />
        <input
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          required
          placeholder="Phone"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
        />
        <select
          value={formData.websiteType}
          onChange={(e) => updateField("websiteType", e.target.value)}
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
        >
          {websiteTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <textarea
        value={formData.message}
        onChange={(e) => updateField("message", e.target.value)}
        required
        placeholder="Message"
        rows={4}
        className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
      />
      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Send Inquiry"}
      </button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
};
