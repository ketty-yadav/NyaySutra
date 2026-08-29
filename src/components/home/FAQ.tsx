"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is NyaySutra?",
    a: "NyaySutra is an AI-powered legal intelligence platform designed to help citizens, lawyers, and judges understand legal documents faster. It offers tools like case summarization, contract risk analysis, and case delay prediction."
  },
  {
    q: "How does the legal document summarizer work?",
    a: "The summarizer uses advanced Large Language Models (LLMs) tuned on legal terminology to distill lengthy judgments or notices into concise, bulleted summaries while highlighting key precedents and rulings."
  },
  {
    q: "Is the data generated accurate for real legal use?",
    a: "This current version is a simulated prototype/demo. In a production environment, AI outputs would be strictly advisory and should always be reviewed by a qualified legal professional."
  },
  {
    q: "Can non-lawyers use the platform?",
    a: "Yes. NyaySutra features a Citizen dashboard specifically designed to translate complex legalese into plain language, helping individuals understand their contracts and case statuses easily."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-stone/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-10 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white border border-brand-navy/10 rounded-xl overflow-hidden transition-all hover:border-brand-navy/20"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between font-semibold text-brand-navy text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown 
                  className={cn("w-5 h-5 text-brand-gold transition-transform", openIndex === i ? "rotate-180" : "")} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-0 text-foreground/70">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
