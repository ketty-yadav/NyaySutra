"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Faster case review", value: "3x" },
  { label: "Legal documents simulated", value: "10,000+" },
  { label: "Reduction in manual risk analysis", value: "85%" },
];

export function WhyItMatters() {
  return (
    <section className="py-24 bg-brand-stone/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
            Bridging the Justice Gap with AI
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Access to justice shouldn&apos;t be gated by impenetrable jargon or insurmountable backlogs. 
            NyaySutra was built on the premise that legal intelligence should be democratized. 
            By leveraging advanced AI tailored for the Indian legal framework, we empower citizens to 
            understand their rights, enable lawyers to build stronger cases, and assist judges in expediting justice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-brand-navy/5 shadow-sm text-center"
            >
              <div className="text-4xl font-serif font-bold text-brand-gold mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-brand-navy uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-foreground/40 mt-6 italic">
          *Statistics are illustrative mock data for this simulation.
        </p>
      </div>
    </section>
  );
}
