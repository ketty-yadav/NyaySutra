"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, AlertTriangle, ShieldAlert } from "lucide-react";
import { Button } from "../ui/Button";
import { Skeleton } from "../ui/Skeleton";


const sampleTexts = {
  nda: "The Receiving Party agrees to indemnify the Disclosing Party against any and all claims, without any limitation of liability, arising from the breach of this agreement. Furthermore, the Receiving Party shall not engage in any competing business globally for a period of 10 years after termination.",
  lease: "The Tenant shall be responsible for all structural repairs to the property, including roof and foundation, regardless of the cause of damage. The Landlord reserves the right to terminate this lease with 24 hours notice without cause.",
};

export function InteractiveDemo() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | "nda" | "lease">(null);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    
    // Determine which mock result to show based on content
    const resultType = text.includes("indemnify") ? "nda" : "lease";
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult(resultType);
    }, 2000);
  };

  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-brand-navy to-brand-navy" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Try the Contract Risk Analyzer
          </h2>
          <p className="text-white/70 text-lg">
            Paste a snippet of any legal agreement below, or use our samples, to see how our AI identifies hidden liabilities instantly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {/* Input Area */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex gap-2 mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setText(sampleTexts.nda)}
                className="bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Load Sample NDA
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setText(sampleTexts.lease)}
                className="bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Load Sample Lease
              </Button>
            </div>
            <textarea
              className="w-full h-48 bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none font-mono text-sm"
              placeholder="Paste contract clause here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button 
              variant="secondary" 
              className="w-full mt-4" 
              onClick={handleAnalyze}
              disabled={!text.trim() || isAnalyzing}
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Risk"}
              {!isAnalyzing && <Play className="ml-2 w-4 h-4" />}
            </Button>
          </div>

          {/* Output Area */}
          <div className="bg-white text-foreground rounded-2xl p-6 shadow-2xl min-h-[350px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isAnalyzing && !result && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-foreground/40"
                >
                  <ShieldAlert className="w-16 h-16 mb-4 opacity-20" />
                  <p>Awaiting input. Paste text and click analyze to see AI insights.</p>
                </motion.div>
              )}

              {isAnalyzing && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-16 h-16 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-6 w-1/3" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </motion.div>
              )}

              {result === "nda" && (
                <motion.div
                  key="result-nda"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-brand-stone pb-4">
                    <div>
                      <h3 className="font-bold text-lg text-brand-navy">Risk Assessment</h3>
                      <p className="text-sm text-foreground/60">Non-Disclosure Agreement</p>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1.5 bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full font-bold text-sm">
                        <AlertTriangle className="w-4 h-4" /> High Risk (85/100)
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-brand-gold/5 border-l-2 border-brand-gold p-3 rounded-r-lg text-sm">
                      <strong className="block text-brand-gold mb-1">Unlimited Indemnity</strong>
                      <p>The clause demands indemnification &quot;without any limitation of liability&quot;. This exposes you to uncapped financial risk.</p>
                    </div>
                    <div className="bg-brand-gold/5 border-l-2 border-brand-gold p-3 rounded-r-lg text-sm">
                      <strong className="block text-brand-gold mb-1">Unenforceable Non-Compete</strong>
                      <p>A 10-year global non-compete is highly likely to be struck down under Section 27 of the Indian Contract Act as an unreasonable restraint of trade.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {result === "lease" && (
                <motion.div
                  key="result-lease"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-brand-stone pb-4">
                    <div>
                      <h3 className="font-bold text-lg text-brand-navy">Risk Assessment</h3>
                      <p className="text-sm text-foreground/60">Lease Agreement</p>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1.5 bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full font-bold text-sm">
                        <AlertTriangle className="w-4 h-4" /> Severe Risk (92/100)
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-brand-gold/5 border-l-2 border-brand-gold p-3 rounded-r-lg text-sm">
                      <strong className="block text-brand-gold mb-1">Unfair Structural Liability</strong>
                      <p>Tenants are typically not responsible for structural/foundation repairs unless specifically negotiated. This is a massive hidden cost.</p>
                    </div>
                    <div className="bg-brand-gold/5 border-l-2 border-brand-gold p-3 rounded-r-lg text-sm">
                      <strong className="block text-brand-gold mb-1">Asymmetric Termination</strong>
                      <p>24-hour termination without cause by the landlord violates standard tenancy rights and principles of natural justice.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
