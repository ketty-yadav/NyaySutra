"use client";

import { useState } from "react";
import { Search, ExternalLink, Scale } from "lucide-react";
import { AIProcessing } from "@/components/dashboard/ai/AIProcessing";
import { motion, AnimatePresence } from "framer-motion";

export default function PrecedentsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "processing" | "result">("idle");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setStatus("processing");
    setTimeout(() => {
      setStatus("result");
    }, 2000);
  };

  const results = [
    {
      case: "K.K. Ahuja vs. V.K. Vora",
      court: "Supreme Court of India",
      year: "2009",
      match: "92%",
      relevance: "Directly addresses the validity of unregistered transfer deeds in property disputes.",
      principle: "An unregistered agreement of sale does not confer title, but can be used as evidence for part performance."
    },
    {
      case: "Suraj Lamp & Industries vs. State of Haryana",
      court: "Supreme Court of India",
      year: "2011",
      match: "85%",
      relevance: "Establishes that sales based solely on General Power of Attorney (GPA) are invalid.",
      principle: "Property can only be lawfully transferred by a registered deed of conveyance."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Legal Precedent Finder</h1>
        <p className="text-foreground/60 mt-1">Find simulated relevant precedents based on the legal issue you&apos;re researching.</p>
      </div>

      <form onSubmit={handleSearch} className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-foreground/40 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe the legal issue you're researching (e.g. &apos;Property ownership dispute involving an unregistered transfer&apos;)"
            className="w-full pl-12 pr-4 py-4 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo outline-none transition-all"
          />
        </div>
        <button 
          type="submit"
          disabled={!query.trim() || status === "processing"}
          className="mt-4 bg-brand-navy text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-indigo transition-colors disabled:opacity-50"
        >
          Find Relevant Precedents
        </button>
      </form>

      <AnimatePresence mode="wait">
        {status === "processing" && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AIProcessing message="Searching semantic database for related case laws and judgments..." />
          </motion.div>
        )}

        {status === "result" && (
          <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-brand-navy">2 Relevant Cases Found</h2>
              <span className="text-xs font-medium bg-brand-navy/5 text-brand-navy px-2 py-1 rounded">Demonstration case data</span>
            </div>

            {results.map((res, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                      <Scale className="w-5 h-5 text-brand-indigo" />
                      {res.case}
                    </h3>
                    <p className="text-sm text-foreground/60">{res.court} • {res.year}</p>
                  </div>
                  <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal font-bold text-sm rounded-full">
                    {res.match} Match
                  </span>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="bg-[#FAFAF9] p-4 rounded-lg border border-brand-navy/5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/50 mb-1">Why it is relevant</p>
                    <p className="text-sm text-foreground/80">{res.relevance}</p>
                  </div>
                  <div className="bg-brand-indigo/5 p-4 rounded-lg border border-brand-indigo/10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-indigo mb-1">Key Principle</p>
                    <p className="text-sm text-brand-navy/80">{res.principle}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-brand-navy/5 flex justify-end">
                  <button className="flex items-center gap-2 text-sm font-medium text-brand-indigo hover:text-brand-navy transition-colors">
                    Open Case <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
