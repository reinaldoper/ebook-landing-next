"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import FAQ_DATA from "@/data/faq";

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-sm font-semibold text-dark sm:text-base">
          {question}
        </span>
        <i
          className={`fa-solid fa-chevron-down shrink-0 text-electric transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        ></i>
      </button>
      <div
        className={`grid overflow-hidden px-5 text-sm text-slate-600 transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-lightgray py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-dark sm:text-3xl">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ_DATA.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
