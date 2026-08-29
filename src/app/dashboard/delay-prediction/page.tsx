"use client";

import { useState } from "react";
import { TrendingUp, AlertOctagon } from "lucide-react";
import { AIProcessing } from "@/components/dashboard/ai/AIProcessing";
import { motion, AnimatePresence } from "framer-motion";

export default function DelayPredictionPage() {
  const [status, setStatus] = useState<"idle" | "processing" | "result">("idle");

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    setTimeout(() => {
      setStatus("result");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Court Delay Prediction</h1>
        <p className="text-foreground/60 mt-1">Estimate potential delay factors using simulated case information.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
        <form onSubmit={handlePredict} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Case Type</label>
              <select className="w-full p-2.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo outline-none">
                <option>Property Dispute</option>
                <option>Commercial Breach</option>
                <option>Family / Divorce</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Court Level</label>
              <select className="w-full p-2.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo outline-none">
                <option>District Court</option>
                <option>High Court</option>
                <option>Supreme Court</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Case Age (Months)</label>
              <input type="number" defaultValue={14} className="w-full p-2.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Previous Adjournments</label>
              <input type="number" defaultValue={3} className="w-full p-2.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo outline-none" />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={status === "processing"}
            className="mt-4 bg-brand-navy text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-indigo transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            Predict Delay
          </button>
        </form>
      </div>

      <AnimatePresence mode="wait">
        {status === "processing" && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AIProcessing message="Analyzing historical court timelines and scheduling patterns..." />
          </motion.div>
        )}

        {status === "result" && (
          <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl border border-brand-gold/20 shadow-sm flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-end justify-center md:justify-start gap-2 mb-1">
                  <span className="text-5xl font-bold text-brand-gold">68%</span>
                </div>
                <h2 className="text-xl font-bold text-brand-navy mb-1">Moderate–High Delay Risk</h2>
                <p className="text-sm text-foreground/70">Predicted remaining timeline: <strong className="text-brand-navy">8–14 months</strong></p>
              </div>
              
              <div className="flex-1 w-full bg-[#FAFAF9] p-4 rounded-xl border border-brand-navy/5">
                <h3 className="font-semibold text-brand-navy mb-3 text-sm">Key Contributing Factors</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-foreground/70">Previous adjournments</span>
                    <span className="font-medium text-brand-gold">+3 months</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-foreground/70">High court workload</span>
                    <span className="font-medium text-brand-gold">+2.5 months</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-foreground/70">Pending evidence phase</span>
                    <span className="font-medium text-brand-gold">+4 months</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
              <h3 className="font-semibold text-brand-navy mb-6">Predicted Phase Timeline</h3>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-navy/10 -translate-y-1/2 rounded-full"></div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-brand-teal rounded-full relative z-10 mb-2 border-2 border-white"></div>
                    <span className="text-xs font-medium text-brand-navy">Now</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-brand-gold rounded-full relative z-10 mb-2 border-2 border-white"></div>
                    <span className="text-xs font-medium text-brand-navy">Evidence (4m)</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-brand-indigo rounded-full relative z-10 mb-2 border-2 border-white"></div>
                    <span className="text-xs font-medium text-brand-navy">Arguments (3m)</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-brand-navy rounded-full relative z-10 mb-2 border-2 border-white"></div>
                    <span className="text-xs font-medium text-brand-navy">Disposal</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-2">
              <p className="text-xs text-foreground/50 flex items-center justify-center gap-1">
                <AlertOctagon className="w-3 h-3" /> Simulation only — not a legal prediction.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
