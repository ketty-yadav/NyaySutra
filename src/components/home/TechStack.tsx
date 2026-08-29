"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Network, SearchCode } from "lucide-react";

const stack = [
  { name: "Large Language Models", icon: Cpu, desc: "For nuanced summarization of complex legal texts." },
  { name: "Semantic Search", icon: SearchCode, desc: "Vector-based retrieval for exact precedent matching." },
  { name: "Legal NLP Pipeline", icon: Network, desc: "Custom entity extraction for Indian Penal Code and contract law." },
  { name: "Predictive Analytics", icon: Database, desc: "Time-series forecasting on historical court data." },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-white border-t border-brand-navy/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
          Powered by Advanced Legal Tech
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-16">
          Our stack combines state-of-the-art AI with domain-specific guardrails.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stack.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-4 group-hover:bg-brand-navy/10 transition-colors">
                  <Icon className="w-8 h-8 text-brand-navy" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{item.name}</h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
