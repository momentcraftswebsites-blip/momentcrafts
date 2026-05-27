import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../constants/faqs";
import { GlassCard } from "./GlassCard";

export const FaqAccordion = () => {
  const [openId, setOpenId] = useState<string>(faqs[0].id);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const open = faq.id === openId;
        return (
          <GlassCard key={faq.id} className="p-0">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenId(open ? "" : faq.id)}
            >
              <span className="font-semibold text-slate-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`transition ${open ? "rotate-180" : ""}`}
                size={18}
              />
            </button>
            {open ? (
              <p className="px-5 pb-5 text-sm text-slate-600">{faq.answer}</p>
            ) : null}
          </GlassCard>
        );
      })}
    </div>
  );
};
