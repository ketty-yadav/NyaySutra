"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { AIProcessing } from "@/components/dashboard/ai/AIProcessing";
import { motion, AnimatePresence } from "framer-motion";

export default function SummarizerPage() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "processing" | "result">("idle");

  const handleGenerate = () => {
    if (!input.trim()) return;
    setStatus("processing");
    setTimeout(() => {
      setStatus("result");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Legal Document Summarizer</h1>
        <p className="text-foreground/60 mt-1">Convert lengthy legal documents into structured, easy-to-review case intelligence.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
        <div className="mb-4 flex gap-2">
          <button onClick={() => setInput("Sample Civil Case Document...")} className="text-xs bg-brand-navy/5 px-3 py-1.5 rounded-lg text-brand-navy hover:bg-brand-navy/10 transition-colors">Sample Civil Case</button>
          <button onClick={() => setInput("Sample Criminal Case Document...")} className="text-xs bg-brand-navy/5 px-3 py-1.5 rounded-lg text-brand-navy hover:bg-brand-navy/10 transition-colors">Sample Criminal Case</button>
          <button onClick={() => setInput("Sample Property Dispute Document...")} className="text-xs bg-brand-navy/5 px-3 py-1.5 rounded-lg text-brand-navy hover:bg-brand-navy/10 transition-colors">Sample Property Dispute</button>
        </div>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste a legal document or select a sample case..."
          className="w-full h-48 p-4 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo outline-none resize-none transition-all mb-4"
        />
        
        <button 
          onClick={handleGenerate}
          disabled={!input.trim() || status === "processing"}
          className="bg-brand-navy text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-indigo transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Generate Summary
        </button>
      </div>

      <AnimatePresence mode="wait">
        {status === "processing" && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AIProcessing message="Analyzing document structure and extracting key facts..." />
          </motion.div>
        )}

        {status === "result" && (
          <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm space-y-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-brand-navy">Case Overview</h2>
              <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal text-xs font-bold rounded-full flex items-center gap-1">
                AI Confidence: 92%
              </span>
            </div>
            
            <p className="text-sm text-foreground/80 leading-relaxed bg-[#FAFAF9] p-4 rounded-lg border border-brand-navy/5">
              The dispute centers on a breach of contract regarding commercial property leasing. The petitioner alleges failure to pay rent for 6 months, while the respondent claims structural damages violated the habitability clause. The court is examining the validity of the termination notice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-brand-navy mb-3">Key Facts</h3>
                <ul className="space-y-2">
                  {[
                    "Lease signed on Jan 1, 2024",
                    "Rent defaulted from March to August",
                    "Notice served on September 5",
                    "Respondent filed counter-claim"
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-brand-navy mb-2">Parties</h3>
                  <div className="text-sm">
                    <p><span className="text-foreground/50">Petitioner:</span> <span className="font-medium text-brand-navy">Rajesh Sharma</span></p>
                    <p><span className="text-foreground/50">Respondent:</span> <span className="font-medium text-brand-navy">Amit Verma</span></p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-brand-navy mb-2">Key Legal Issues</h3>
                  <ol className="list-decimal pl-4 text-sm text-foreground/70 space-y-1">
                    <li>Validity of the termination notice</li>
                    <li>Application of Force Majeure clause</li>
                    <li>Quantum of damages claimable</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-brand-navy/5 text-center">
              <p className="text-xs text-brand-gold font-medium">Simulated AI output for demonstration purposes.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
