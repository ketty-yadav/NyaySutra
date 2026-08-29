"use client";

import { Bell, HelpCircle, FileText, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AIProcessing } from "../ai/AIProcessing";
import { motion, AnimatePresence } from "framer-motion";

export function CitizenDashboard() {
  const [showSummary, setShowSummary] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);

  const handleViewSummary = () => {
    setLoadingSummary(true);
    setTimeout(() => {
      setLoadingSummary(false);
      setShowSummary(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">My Legal Journey</h1>
        <p className="text-sm text-foreground/60 mt-1">Simplified overview of your active matters</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Journey */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-indigo mb-1">My Cases</p>
                <h2 className="text-xl font-bold text-brand-navy">Property Dispute — Sharma vs. Verma</h2>
              </div>
              <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold font-medium text-sm rounded-full">
                Under Hearing
              </span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">Next hearing: <strong className="text-brand-navy">18 September 2026</strong></p>
            
            <div className="bg-[#FAFAF9] p-4 rounded-lg border border-brand-navy/5">
              <h3 className="font-semibold text-brand-navy mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-teal" /> Understand Your Case
              </h3>
              
              <AnimatePresence mode="wait">
                {loadingSummary ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AIProcessing message="Generating plain-English summary..." />
                  </motion.div>
                ) : showSummary ? (
                  <motion.div key="summary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-foreground/80 leading-relaxed bg-brand-teal/5 p-4 rounded-md border border-brand-teal/10">
                    <p>The dispute concerns ownership of a residential property. The claimant alleges that the property was transferred without valid consent. The court is currently gathering evidence to determine the validity of the transfer documents.</p>
                  </motion.div>
                ) : (
                  <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                      The dispute concerns ownership of a residential property. The claimant alleges that the property was transferred without valid consent...
                    </p>
                    <div className="flex gap-3">
                      <button onClick={handleViewSummary} className="text-sm bg-brand-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-indigo transition-colors">
                        View Full Summary
                      </button>
                      <button className="text-sm bg-white border border-brand-navy/10 text-brand-navy px-4 py-2 rounded-lg font-medium hover:bg-brand-navy/5 transition-colors flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" /> Ask NyaySutra
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
            <h3 className="font-semibold text-brand-navy mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-indigo" /> Upcoming Hearing
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-foreground/50">Date</p>
                <p className="font-medium text-brand-navy">18 September 2026</p>
              </div>
              <div>
                <p className="text-xs text-foreground/50">Court</p>
                <p className="font-medium text-brand-navy">District Court, Meerut</p>
              </div>
              <div>
                <p className="text-xs text-foreground/50">Type</p>
                <p className="font-medium text-brand-navy">Evidence Hearing</p>
              </div>
              <div>
                <p className="text-xs text-foreground/50">Preparation</p>
                <p className="font-medium text-brand-teal">3 of 4 completed</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-brand-navy mb-2">Documents required:</p>
              <ul className="space-y-2 mb-6">
                {["Sale deed", "Previous order", "Identity document"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> {doc}
                  </li>
                ))}
              </ul>
              <Link href="/dashboard/hearing-assistant" className="inline-block text-sm bg-brand-indigo/10 text-brand-indigo px-4 py-2 rounded-lg font-medium hover:bg-brand-indigo/20 transition-colors">
                Prepare for Hearing
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar Alerts */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm">
            <h3 className="font-semibold text-brand-navy mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-brand-gold" /> Important Updates
            </h3>
            <ul className="space-y-4">
              <li className="p-3 bg-brand-gold/10 rounded-lg text-sm text-brand-navy border border-brand-gold/20">
                <strong>Action Required:</strong> Document submission deadline in 2 days.
              </li>
              <li className="p-3 bg-brand-teal/5 rounded-lg text-sm text-brand-navy border border-brand-teal/10">
                Next hearing scheduled for 18 Sep.
              </li>
              <li className="p-3 bg-brand-navy/5 rounded-lg text-sm text-brand-navy border border-brand-navy/10">
                New case update available from your lawyer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
