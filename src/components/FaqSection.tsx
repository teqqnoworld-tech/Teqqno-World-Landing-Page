import React, { useState } from 'react';
import { FAQS } from '../data/catalogData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 border-b border-[#26262B] bg-[#0B0B0D]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#26262B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
            <span className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wider">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8C0]">
            Clear answers about minimum orders, timelines, and sample availability.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#151518] rounded-xl border border-[#26262B] card-border-hover transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#B8B8C0] transition-transform duration-200 text-xl ml-4 ${
                      isOpen ? 'rotate-180 text-[#FF7A00]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#B8B8C0] leading-relaxed border-t border-[#26262B]/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
