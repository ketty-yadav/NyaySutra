"use client";

import { useState } from "react";
import { ShieldAlert, AlertTriangle, ShieldCheck, Info } from "lucide-react";
import { AIProcessing } from "@/components/dashboard/ai/AIProcessing";
import { motion, AnimatePresence } from "framer-motion";

export default function ContractAnalyzerPage() {
  const [input, setInput] = useState("Residential Lease Agreement\n\n1. The tenant agrees to indemnify the landlord for any damages regardless of fault.\n2. The landlord may terminate this agreement with 24 hours notice.\n3. Rent shall be paid on the 1st of every month.");
  const [status, setStatus] = useState<"idle" | "processing" | "result">("idle");

  const handleGenerate = () => {
    if (!input.trim()) return;
    setStatus("processing");
    setTimeout(() => {
      setStatus("result");
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Contract & Legal Notice Analyzer</h1>
        <p className="text-foreground/60 mt-1">Identify potentially important clauses, obligations, and risk areas before review.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste contract text here..."
          className="w-full h-40 p-4 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo outline-none resize-none transition-all mb-4"
        />
        
        <button 
          onClick={handleGenerate}
          disabled={!input.trim() || status === "processing"}
          className="bg-brand-navy text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-indigo transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <ShieldAlert className="w-4 h-4" />
          Analyze Contract
        </button>
      </div>

      <AnimatePresence mode="wait">
        {status === "processing" && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AIProcessing message="Scanning for liabilities, indemnities, and one-sided clauses..." />
          </motion.div>
        )}

        {status === "result" && (
          <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            
            {/* Risk Gauge */}
            <div className="bg-white p-6 rounded-xl border border-brand-gold/20 shadow-sm flex items-center gap-6">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-brand-navy/5" />
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 72 / 100)} className="text-brand-gold" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-brand-navy">72</span>
                  <span className="text-[10px] uppercase text-foreground/50">/100</span>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-gold mb-1">Moderate Risk</h2>
                <p className="text-sm text-foreground/70">The document contains asymmetrical clauses that may expose you to unnecessary liability.</p>
              </div>
            </div>

            {/* Clauses */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-brand-navy flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" /> Termination Clause
                  </h3>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">High Risk</span>
                </div>
                <p className="text-sm text-foreground/80 bg-[#FAFAF9] p-3 rounded-lg border border-brand-navy/5 mb-3 italic">
                  &quot;The landlord may terminate this agreement with 24 hours notice.&quot;
                </p>
                <p className="text-sm text-foreground/70 flex items-start gap-2">
                  <Info className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span className="font-medium text-brand-indigo">Reason:</span> The termination provision allows unilateral cancellation with extremely limited notice, violating standard tenant protection norms.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-brand-gold/20 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold"></div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-brand-navy flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-brand-gold" /> Liability Clause
                  </h3>
                  <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded">Medium Risk</span>
                </div>
                <p className="text-sm text-foreground/80 bg-[#FAFAF9] p-3 rounded-lg border border-brand-navy/5 mb-3 italic">
                  &quot;The tenant agrees to indemnify the landlord for any damages regardless of fault.&quot;
                </p>
                <p className="text-sm text-foreground/70 flex items-start gap-2">
                  <Info className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span className="font-medium text-brand-indigo">Reason:</span> Liability obligations are broader than standard protections. You are accepting risk even if the landlord is negligent.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-brand-teal/20 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal"></div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-brand-navy flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-teal" /> Payment Terms
                  </h3>
                  <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-2 py-1 rounded">Low Risk</span>
                </div>
                <p className="text-sm text-foreground/70">Payment terms align with standard commercial practices and do not contain hidden penalties.</p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
