"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ShieldAlert, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Skeleton } from "../ui/Skeleton";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: "summarizer",
    title: "Case Summarization",
    href: "/dashboard/summarizer",
    description: "Instantly distill 100-page judgments into 1-page actionable summaries with key precedents highlighted.",
    icon: FileText,
    demoText: "The Supreme Court in its recent judgment (Civil Appeal No. 1234 of 2023) held that the limitation period under Section 34 of the Arbitration and Conciliation Act, 1996, cannot be extended beyond the statutory period of 120 days, strictly interpreting the phrase 'but not thereafter'...",
    mockResult: (
      <div className="space-y-3 text-sm">
        <div className="font-semibold text-brand-navy">Summary:</div>
        <ul className="list-disc pl-4 space-y-1 text-foreground/80">
          <li><strong>Core Ruling:</strong> Sec 34 limitation period cannot exceed 120 days.</li>
          <li><strong>Interpretation:</strong> &apos;But not thereafter&apos; implies a hard stop.</li>
          <li><strong>Impact:</strong> Delays beyond 120 days are non-condonable.</li>
        </ul>
      </div>
    )
  },
  {
    id: "contract-analyzer",
    title: "Contract Risk Analysis",
    href: "/dashboard/contract-analyzer",
    description: "Scan legal notices and vendor agreements for hidden liabilities, one-sided indemnity clauses, and IP risks.",
    icon: ShieldAlert,
    demoText: "8. INDEMNIFICATION: The Service Provider shall indemnify, defend, and hold harmless the Client against any and all claims, liabilities, losses, or damages arising out of or in connection with the services provided, regardless of fault or negligence on the part of the Client...",
    mockResult: (
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-brand-gold font-bold bg-brand-gold/10 px-2 py-0.5 rounded">High Risk Alert</span>
        </div>
        <p className="text-foreground/80">
          Clause 8 contains an asymmetric, broad indemnification. It requires defending the client <em>&quot;regardless of fault&quot;</em>, which exposes you to unlimited liability even if the client is negligent.
        </p>
      </div>
    )
  },
  {
    id: "delay-prediction",
    title: "Case Delay Prediction",
    href: "/dashboard/delay-prediction",
    description: "Estimate the probable timeline of a dispute based on historical court data, judge load, and case type.",
    icon: Clock,
    demoText: "Case Type: Property Dispute (Partition Suit)\nCourt: Delhi High Court\nFiling Date: October 2023\nRespondents: 4",
    mockResult: (
      <div className="space-y-3 text-sm">
        <div className="font-semibold text-brand-navy">Prediction Model Output:</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-brand-stone p-2 rounded">
            <div className="text-xs text-foreground/60">Est. Time to Disposal</div>
            <div className="font-semibold text-brand-navy">3.2 Years</div>
          </div>
          <div className="bg-brand-stone p-2 rounded">
            <div className="text-xs text-foreground/60">Next Hearing Probability</div>
            <div className="font-semibold text-brand-navy">45 Days</div>
          </div>
        </div>
      </div>
    )
  }
];

export function CoreSolutions() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [loadingDemo, setLoadingDemo] = useState<string | null>(null);
  const [completedDemo, setCompletedDemo] = useState<string | null>(null);

  const handleRunDemo = (id: string) => {
    setActiveDemo(id);
    setLoadingDemo(id);
    setCompletedDemo(null);
    
    // Simulate API delay (1.5s - 2.5s)
    setTimeout(() => {
      setLoadingDemo(null);
      setCompletedDemo(id);
    }, 1500 + Math.random() * 1000);
  };

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Core Solutions</h2>
          <p className="text-foreground/70 text-lg">
            Experience the power of AI tailored specifically for the complexities of the Indian legal system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isActive = activeDemo === solution.id;
            const isLoading = loadingDemo === solution.id;
            const isCompleted = completedDemo === solution.id;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-background rounded-2xl p-6 border transition-all duration-300 flex flex-col",
                  isActive ? "border-brand-navy shadow-lg shadow-brand-navy/5" : "border-brand-navy/10 hover:border-brand-navy/30"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-6 group-hover:bg-brand-navy/10 transition-colors">
                  <Icon className="w-6 h-6 text-brand-navy" />
                </div>
                
                <Link href={solution.href} className="inline-block group/link">
                  <h3 className="text-xl font-serif font-semibold text-brand-navy mb-3 group-hover/link:text-brand-indigo transition-colors flex items-center gap-2">
                    {solution.title}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all" />
                  </h3>
                </Link>
                
                <p className="text-foreground/70 mb-6 flex-grow">{solution.description}</p>
                
                <div className="mt-auto">
                  {!isActive ? (
                    <Button variant="ghost" className="w-full justify-between px-4 group" onClick={() => handleRunDemo(solution.id)}>
                      Try Demo
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <div className="bg-brand-stone/50 rounded-xl p-4 overflow-hidden">
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Input Context</div>
                        <p className="text-sm text-foreground/80 italic line-clamp-3">&quot;{solution.demoText}&quot;</p>
                      </div>
                      
                      {isLoading && (
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                        </div>
                      )}

                      <AnimatePresence>
                        {isCompleted && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-white p-4 rounded-lg border border-brand-navy/10 shadow-sm"
                          >
                            {solution.mockResult}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {isCompleted && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-3 w-full text-xs" 
                          onClick={() => handleRunDemo(solution.id)}
                        >
                          Run Again
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
