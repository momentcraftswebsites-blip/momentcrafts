import { useState } from "react";
import { Star } from "lucide-react";
import { createFeedbackSubmission } from "../../services/firestoreService";
import type { FeedbackSubmission } from "../../types";

const initialState: FeedbackSubmission = {
  name: "",
  email: "",
  rating: 5,
  message: "",
};

export const FeedbackSection = () => {
  const [formData, setFormData] = useState<FeedbackSubmission>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const updateField = (
    field: keyof FeedbackSubmission,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      await createFeedbackSubmission(formData);
      setStatus("Thank you for your feedback. We appreciate your support.");
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      setStatus(
        "We could not submit feedback right now. Please try again in a moment.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rounded-3xl border border-white/70 bg-gradient-to-r from-white via-pink-50/70 to-indigo-50/70 p-6 shadow-xl sm:p-8">
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
            placeholder="Your Name"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
          />
          <input
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            type="email"
            required
            placeholder="Your Email"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
          />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
          <p className="text-sm font-medium text-slate-700">Your Rating</p>
          <div className="mt-2 flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => {
              const ratingValue = index + 1;
              const active = ratingValue <= formData.rating;

              return (
                <button
                  key={ratingValue}
                  type="button"
                  aria-label={`Rate ${ratingValue} out of 5`}
                  onClick={() => updateField("rating", ratingValue)}
                  className="text-amber-400"
                >
                  <Star size={20} fill={active ? "currentColor" : "none"} />
                </button>
              );
            })}
            <span className="ml-1 text-xs font-semibold text-slate-500">
              {formData.rating}/5
            </span>
          </div>
        </div>

        <textarea
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          required
          rows={4}
          placeholder="Share your feedback"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-300"
        />

        <button
          type="submit"
          disabled={submitting}
          className="w-fit rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Submit Feedback"}
        </button>

        {status ? <p className="text-sm text-slate-600">{status}</p> : null}
      </form>
    </section>
  );
};
