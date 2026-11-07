"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = "faq-answer-" + index;
        return (
          <article className="accordion-item" key={item.question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="accordion-trigger"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                {item.question}
                <ChevronDown aria-hidden="true" className={isOpen ? "accordion-chevron is-open" : "accordion-chevron"} size={19} />
              </button>
            </h3>
            {isOpen && <div className="accordion-panel" id={panelId}>{item.answer}</div>}
          </article>
        );
      })}
    </div>
  );
}
