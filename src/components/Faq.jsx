import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs as faqsHi } from "../data/content";
import linkifyDirectCredit from "../utils/linkify";

export default function Faq({ items = faqsHi }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="mt-10 border-t border-rule">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-rule">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-blue"
            >
              <span className="font-display text-[19px] font-semibold text-ink">{f.q}</span>
              <span className="shrink-0 text-signal">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[16px] leading-relaxed text-ink/70">{linkifyDirectCredit(f.a)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
