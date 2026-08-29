"use client";

import { mockJudgeCauseList } from "@/data/mockData";
import { Scale, Clock, FileText, AlertOctagon } from "lucide-react";
import Link from "next/link";

export function JudgeDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Court Intelligence Overview</h1>
        <p className="text-sm text-foreground/60 mt-1">Daily docket analysis and delay risk insights</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Cases Today", value: "27", icon: Scale, color: "text-brand-navy", bg: "bg-brand-navy/10" },
          { label: "Hearings", value: "19", icon: Clock, color: "text-brand-indigo", bg: "bg-brand-indigo/10" },
          { label: "High Delay Risk", value: "6", icon: AlertOctagon, color: "text-brand-gold", bg: "bg-brand-gold/10" },
          { label: "Documents Processed", value: "84", icon: FileText, color: "text-brand-teal", bg: "bg-brand-teal/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-brand-navy">{stat.value}</h3>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-sm font-medium text-foreground/70">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cause List Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-brand-navy/5 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-brand-navy/5">
            <h2 className="font-semibold text-brand-navy">Today&apos;s Cause List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-brand-navy/5 text-foreground/60">
                <tr>
                  <th className="px-5 py-3 font-medium">Case No.</th>
                  <th className="px-5 py-3 font-medium">Hearing Type</th>
                  <th className="px-5 py-3 font-medium">Age</th>
                  <th className="px-5 py-3 font-medium">Stage</th>
                  <th className="px-5 py-3 font-medium">Delay Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-navy/5">
                {mockJudgeCauseList.map((c) => (
                  <tr key={c.id} className="hover:bg-brand-navy/5 transition-colors">
                    <td className="px-5 py-4 font-medium text-brand-navy">{c.caseNo}</td>
                    <td className="px-5 py-4 text-foreground/70">{c.name}</td>
                    <td className="px-5 py-4 text-foreground/70">{c.age}</td>
                    <td className="px-5 py-4 text-foreground/70">{c.stage}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        c.delayRisk === "High Risk" ? "bg-brand-gold/10 text-brand-gold" : 
                        c.delayRisk === "Moderate Risk" ? "bg-brand-indigo/10 text-brand-indigo" : "bg-brand-teal/10 text-brand-teal"
                      }`}>
                        {c.delayRisk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Review Queue & Delay Intelligence */}
        <div className="space-y-6">
          {/* Delay Intelligence */}
          <div className="bg-white rounded-xl border border-brand-navy/5 shadow-sm p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Clock className="w-24 h-24" />
            </div>
            <h2 className="font-semibold text-brand-navy mb-4">Case Delay Intelligence</h2>
            <div className="flex items-end gap-3 mb-2">
              <span className="text-4xl font-bold text-brand-gold">68%</span>
              <span className="text-sm font-medium text-brand-gold mb-1">Moderate–High Risk</span>
            </div>
            <p className="text-xs text-foreground/50 mb-4">Simulation only — not a legal prediction.</p>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-brand-navy">Factors:</p>
              <ul className="text-sm text-foreground/70 list-disc pl-4 space-y-1">
                <li>Multiple adjournments</li>
                <li>Pending evidence</li>
                <li>Document backlog</li>
                <li>Witness availability</li>
              </ul>
            </div>
            
            <Link href="/dashboard/delay-prediction" className="inline-block w-full text-center py-2 bg-brand-navy/5 text-brand-navy rounded-lg text-sm font-medium hover:bg-brand-navy/10 transition-colors">
              Analyze Full Docket
            </Link>
          </div>

          {/* Review Queue */}
          <div className="bg-white rounded-xl border border-brand-navy/5 shadow-sm p-5">
            <h2 className="font-semibold text-brand-navy mb-4">AI Suggested Review Queue</h2>
            <div className="space-y-3">
              {[
                { case: "Sharma vs. Verma", reason: "High urgency", priority: "01" },
                { case: "State vs. Kumar", reason: "Long pending", priority: "02" },
                { case: "Mehta Property Dispute", reason: "Evidence complete", priority: "03" },
                { case: "Singh vs. State", reason: "Ready for next stage", priority: "04" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg border border-brand-navy/5 bg-[#FAFAF9]">
                  <div className="text-xs font-bold text-brand-indigo bg-brand-indigo/10 px-2 py-1 rounded h-fit">P{item.priority}</div>
                  <div>
                    <p className="text-sm font-medium text-brand-navy">{item.case}</p>
                    <p className="text-xs text-foreground/60">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
