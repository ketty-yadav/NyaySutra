"use client";

import { useState } from "react";
import { CheckCircle2, Gavel, FileText, Sparkles } from "lucide-react";
import { AIProcessing } from "@/components/dashboard/ai/AIProcessing";
import { motion, AnimatePresence } from "framer-motion";

export default function HearingAssistantPage() {
  const [status, setStatus] = useState<"idle" | "processing" | "result">("idle");

  const handleGenerate = () => {
    setStatus("processing");
    setTimeout(() => {
      setStatus("result");
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Hearing Preparation Assistant</h1>
        <p className="text-foreground/60 mt-1">Automated briefing notes and checklists for your upcoming dates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm">
            <h2 className="text-sm font-bold text-brand-navy mb-4 uppercase tracking-wider">Select Case</h2>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg border-2 border-brand-indigo bg-brand-indigo/5 text-sm font-medium text-brand-navy">
                Sharma vs. Verma
                <span className="block text-xs font-normal text-foreground/60 mt-1">12 Sep 2026 • District Court</span>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-brand-navy/10 hover:bg-brand-navy/5 text-sm text-foreground/70 transition-colors">
                State vs. Kumar
                <span className="block text-xs text-foreground/50 mt-1">15 Sep 2026 • High Court</span>
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-brand-indigo" />
                  Sharma vs. Verma
                </h2>
                <p className="text-sm text-foreground/60">Evidence Hearing • District Court</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Documents Checklist
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Sale deed", "Identity documents", "Previous order", "Witness statements"].map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80 bg-[#FAFAF9] p-2 rounded-md border border-brand-navy/5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {status === "idle" && (
                <div className="pt-4 border-t border-brand-navy/5">
                  <button 
                    onClick={handleGenerate}
                    className="w-full bg-brand-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-indigo transition-colors flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Generate Preparation Brief
                  </button>
                </div>
              )}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {status === "processing" && (
              <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AIProcessing message="Synthesizing case documents and framing key arguments..." />
              </motion.div>
            )}

            {status === "result" && (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-brand-teal/20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-teal"></div>
                  <h3 className="font-bold text-brand-navy mb-4">Key Arguments to Present</h3>
                  <ol className="list-decimal pl-4 space-y-3 text-sm text-foreground/80">
                    <li><strong className="text-brand-navy">Establish ownership chain:</strong> Reference Annexure A (Sale Deed) to prove uninterrupted possession since 2015.</li>
                    <li><strong className="text-brand-navy">Address transfer validity:</strong> Counter the opposition&apos;s claim by citing the registered mutation document.</li>
                    <li><strong className="text-brand-navy">Highlight procedural lapse:</strong> Emphasize that the respondent failed to file the written statement within the statutory 90 days.</li>
                  </ol>
                </div>

                <div className="bg-white p-6 rounded-xl border border-brand-gold/20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
                  <h3 className="font-bold text-brand-navy mb-4">Questions to Prepare For</h3>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                      When exactly was the physical possession of the property transferred?
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                      What specific documentation establishes the financial transaction for the ownership?
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0"></span>
                      Were all legal heirs formally notified before the execution of the sale deed?
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
