"use client";

import { mockHearings } from "@/data/mockData";
import { Briefcase, Calendar, FileText, AlertTriangle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function LawyerDashboard() {
  const [sharing, setSharing] = useState(false);

  const handleShare = () => {
    setSharing(true);
    setTimeout(() => setSharing(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-brand-navy">Practice Overview</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
          <p className="text-sm text-foreground/60">AI systems operational</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Cases", value: "42", trend: "+6% this month", icon: Briefcase, color: "text-brand-indigo", bg: "bg-brand-indigo/10" },
          { label: "Hearings This Week", value: "8", trend: "3 require preparation", icon: Calendar, color: "text-brand-teal", bg: "bg-brand-teal/10" },
          { label: "Documents Pending", value: "17", trend: "5 high priority", icon: FileText, color: "text-brand-navy", bg: "bg-brand-navy/10" },
          { label: "Risk Alerts", value: "5", trend: "2 high risk", icon: AlertTriangle, color: "text-brand-gold", bg: "bg-brand-gold/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-foreground/80 mb-1">{stat.label}</p>
            <p className="text-xs text-foreground/50">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hearings Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-brand-navy/5 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-brand-navy/5 flex items-center justify-between">
            <h2 className="font-semibold text-brand-navy">Today&apos;s Hearings</h2>
            <Link href="/dashboard/hearing-assistant" className="text-sm text-brand-indigo hover:underline">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-brand-navy/5 text-foreground/60">
                <tr>
                  <th className="px-5 py-3 font-medium">Case</th>
                  <th className="px-5 py-3 font-medium">Court</th>
                  <th className="px-5 py-3 font-medium">Time</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-navy/5">
                {mockHearings.map((h) => (
                  <tr key={h.id} className="hover:bg-brand-navy/5 transition-colors cursor-pointer">
                    <td className="px-5 py-4 font-medium text-brand-navy">{h.caseName}</td>
                    <td className="px-5 py-4 text-foreground/70">{h.court}</td>
                    <td className="px-5 py-4 text-foreground/70">{h.time}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        h.status === "Ready" ? "bg-brand-teal/10 text-brand-teal" : 
                        h.status.includes("Preparation") ? "bg-brand-gold/10 text-brand-gold" : "bg-brand-navy/10 text-brand-navy"
                      }`}>
                        {h.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Client Transparency Module */}
        <div className="bg-white rounded-xl border border-brand-navy/5 shadow-sm p-5 flex flex-col">
          <h2 className="font-semibold text-brand-navy mb-4">Client Transparency</h2>
          <div className="p-4 bg-[#FAFAF9] rounded-lg border border-brand-navy/5 mb-4">
            <h3 className="text-sm font-medium text-brand-navy mb-1">Sharma vs. Verma</h3>
            <p className="text-xs text-foreground/50 mb-3">Case Progress</p>
            <div className="w-full h-2 bg-brand-navy/10 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-brand-teal w-[72%]"></div>
            </div>
            <p className="text-xs font-medium text-right text-brand-teal">72% complete</p>
            
            <ul className="mt-4 space-y-2 text-xs">
              <li className="flex justify-between"><span className="text-foreground/60">Next action:</span><span className="font-medium text-brand-navy">Evidence Hearing</span></li>
              <li className="flex justify-between"><span className="text-foreground/60">Timeline:</span><span className="font-medium text-brand-navy">On schedule</span></li>
            </ul>
          </div>
          
          <button 
            onClick={handleShare}
            disabled={sharing}
            className="w-full py-2 mt-auto bg-brand-indigo/10 text-brand-indigo font-medium rounded-lg hover:bg-brand-indigo/20 transition-colors text-sm disabled:opacity-50"
          >
            {sharing ? "Sharing update..." : "Share Case Update"}
          </button>
        </div>
      </div>

      {/* AI Intelligence Panel */}
      <div>
        <h2 className="font-semibold text-brand-navy mb-4">AI Case Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/dashboard/summarizer" className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm hover:border-brand-indigo/30 transition-all group block">
            <h3 className="font-medium text-brand-navy mb-1">Case Summary</h3>
            <p className="text-sm text-foreground/60 mb-4">AI-generated overview available</p>
            <span className="text-sm font-medium text-brand-indigo group-hover:underline flex items-center">Analyze <ChevronRight className="w-4 h-4 ml-1" /></span>
          </Link>
          <Link href="/dashboard/precedents" className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm hover:border-brand-indigo/30 transition-all group block">
            <h3 className="font-medium text-brand-navy mb-1">Precedent Matches</h3>
            <p className="text-sm text-foreground/60 mb-4">12 relevant cases (92% match)</p>
            <span className="text-sm font-medium text-brand-indigo group-hover:underline flex items-center">Review <ChevronRight className="w-4 h-4 ml-1" /></span>
          </Link>
          <Link href="/dashboard/contract-analyzer" className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm hover:border-brand-indigo/30 transition-all group block">
            <h3 className="font-medium text-brand-navy mb-1">Risk Alerts</h3>
            <p className="text-sm text-foreground/60 mb-4">5 clauses require attention</p>
            <span className="text-sm font-medium text-brand-indigo group-hover:underline flex items-center">View Risks <ChevronRight className="w-4 h-4 ml-1" /></span>
          </Link>
          <Link href="/dashboard/delay-prediction" className="bg-white p-5 rounded-xl border border-brand-navy/5 shadow-sm hover:border-brand-indigo/30 transition-all group block">
            <h3 className="font-medium text-brand-navy mb-1">Delay Prediction</h3>
            <p className="text-sm text-foreground/60 mb-4">68% estimated delay risk</p>
            <span className="text-sm font-medium text-brand-indigo group-hover:underline flex items-center">View Prediction <ChevronRight className="w-4 h-4 ml-1" /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
