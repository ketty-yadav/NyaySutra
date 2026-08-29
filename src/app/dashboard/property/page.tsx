"use client";

import { useState } from "react";
import { Home, ChevronRight, CheckCircle2 } from "lucide-react";
import { AIProcessing } from "@/components/dashboard/ai/AIProcessing";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyAssistantPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "result">("idle");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const options = [
    "Ownership",
    "Possession",
    "Inheritance",
    "Boundary",
    "Sale / Transfer"
  ];

  const handleSelect = (option: string) => {
    setSelectedType(option);
    setStep(1);
    setStatus("processing");
    setTimeout(() => {
      setStatus("result");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Property Dispute Assistant</h1>
        <p className="text-foreground/60 mt-1">Specialized AI workflow for real estate cases.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm min-h-[400px]">
        
        {step === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-lg mx-auto py-12 text-center space-y-8">
            <div className="w-16 h-16 bg-brand-navy/5 rounded-full flex items-center justify-center mx-auto">
              <Home className="w-8 h-8 text-brand-navy" />
            </div>
            <h2 className="text-xl font-bold text-brand-navy">What type of property dispute are you dealing with?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className="p-4 rounded-xl border border-brand-navy/10 hover:border-brand-indigo hover:bg-brand-indigo/5 transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-brand-navy">{opt}</span>
                  <ChevronRight className="w-4 h-4 text-brand-navy/30 group-hover:text-brand-indigo transition-colors" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {status === "processing" && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20">
              <AIProcessing message={`Configuring specialized workflow for ${selectedType} dispute...`} />
            </motion.div>
          )}

          {status === "result" && step === 1 && (
            <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <button onClick={() => { setStep(0); setStatus("idle"); setSelectedType(null); }} className="text-sm text-foreground/50 hover:text-brand-navy transition-colors">Start Over</button>
                <span className="text-foreground/30">/</span>
                <span className="text-sm font-medium text-brand-indigo">{selectedType} Dispute</span>
              </div>

              <div className="bg-brand-teal/5 p-6 rounded-xl border border-brand-teal/10">
                <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal" /> AI Case Understanding
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/50 mb-1">Dispute Type</p>
                      <p className="text-sm font-medium text-brand-navy bg-white px-3 py-2 rounded-lg border border-brand-navy/5">{selectedType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/50 mb-1">Information Required</p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2 text-foreground/80"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Date of last peaceful possession</li>
                        <li className="flex items-center gap-2 text-foreground/80"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Nature of relationship between parties</li>
                        <li className="flex items-center gap-2 text-foreground/80"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Pending civil suits in other courts</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/50 mb-1">Important Documents to Collect</p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2 text-foreground/80"><span className="w-1.5 h-1.5 bg-brand-indigo rounded-full"></span> Registered Sale Deed</li>
                        <li className="flex items-center gap-2 text-foreground/80"><span className="w-1.5 h-1.5 bg-brand-indigo rounded-full"></span> Latest Mutation/Jamabandi records</li>
                        <li className="flex items-center gap-2 text-foreground/80"><span className="w-1.5 h-1.5 bg-brand-indigo rounded-full"></span> Municipal tax receipts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-teal/10">
                  <p className="text-xs text-brand-navy/60 font-medium">This is a simulated demonstration and not legal advice.</p>
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-brand-navy text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-indigo transition-colors">
                  Continue Workflow
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
