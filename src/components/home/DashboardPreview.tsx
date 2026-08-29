"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Scale, AlertTriangle, Calendar, CheckCircle2, TrendingUp } from "lucide-react";
import { Skeleton } from "../ui/Skeleton";
import { cn } from "@/lib/utils";

type Role = "citizen" | "lawyer" | "judge";

const roles: { id: Role; label: string; icon: React.ElementType }[] = [
  { id: "citizen", label: "Citizen", icon: User },
  { id: "lawyer", label: "Lawyer", icon: Briefcase },
  { id: "judge", label: "Judge", icon: Scale },
];

const dashboardData = {
  citizen: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-xl border border-brand-navy/10 shadow-sm">
        <div className="flex items-center gap-2 text-brand-navy font-semibold mb-3">
          <Calendar className="w-4 h-4 text-brand-gold" />
          Upcoming Hearing
        </div>
        <p className="text-sm font-medium">Property Partition Suit (No. 402/2023)</p>
        <p className="text-xs text-foreground/60 mt-1">Delhi High Court • Oct 12, 2023</p>
        <div className="mt-3 text-xs bg-brand-emerald/10 text-brand-emerald px-2 py-1 rounded inline-block">
          Your presence is required
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-brand-navy/10 shadow-sm">
        <div className="flex items-center gap-2 text-brand-navy font-semibold mb-3">
          <CheckCircle2 className="w-4 h-4 text-brand-teal" />
          Document Status
        </div>
        <p className="text-sm font-medium">Rental Agreement Draft</p>
        <p className="text-xs text-foreground/60 mt-1">Analysis Complete</p>
        <div className="mt-3 text-xs bg-brand-amber/10 text-brand-amber px-2 py-1 rounded inline-block">
          2 clauses flagged for review
        </div>
      </div>
    </div>
  ),
  lawyer: (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-xl border border-brand-navy/10 shadow-sm">
        <div className="flex items-center gap-2 text-brand-navy font-semibold mb-3">
          <AlertTriangle className="w-4 h-4 text-brand-gold" />
          Risk Alerts
        </div>
        <p className="text-sm font-medium">M/S Tech Corp vs InfoSys</p>
        <p className="text-xs text-foreground/60 mt-1">Indemnity clause is overly broad.</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-brand-navy/10 shadow-sm">
        <div className="flex items-center gap-2 text-brand-navy font-semibold mb-3">
          <Calendar className="w-4 h-4 text-brand-teal" />
          Daily Cause List
        </div>
        <ul className="text-xs space-y-2 text-foreground/80">
          <li className="flex justify-between border-b border-brand-stone pb-1">
            <span>Item 4 (Court 2)</span> <span>10:30 AM</span>
          </li>
          <li className="flex justify-between border-b border-brand-stone pb-1">
            <span>Item 12 (Court 5)</span> <span>12:15 PM</span>
          </li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-xl border border-brand-navy/10 shadow-sm">
        <div className="flex items-center gap-2 text-brand-navy font-semibold mb-3">
          <CheckCircle2 className="w-4 h-4 text-brand-navy" />
          Filing Deadlines
        </div>
        <p className="text-sm font-medium">Rejoinder in WP(C) 102/24</p>
        <p className="text-xs text-brand-gold mt-1">Due in 2 days</p>
      </div>
    </div>
  ),
  judge: (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-white p-4 rounded-xl border border-brand-navy/10 shadow-sm flex flex-col justify-center">
        <div className="flex items-center gap-2 text-brand-navy font-semibold mb-4">
          <Scale className="w-4 h-4 text-brand-teal" />
          Precedent Recommendations
        </div>
        <div className="space-y-3">
          <div className="bg-brand-stone/50 p-3 rounded-lg border border-brand-stone">
            <p className="text-sm font-medium">State of UP vs. Singh (2018)</p>
            <p className="text-xs text-foreground/70 mt-1">98% match with current bail application regarding habitual offenders.</p>
          </div>
          <div className="bg-brand-stone/50 p-3 rounded-lg border border-brand-stone">
            <p className="text-sm font-medium">Sharma vs. State (2020)</p>
            <p className="text-xs text-foreground/70 mt-1">91% match on procedural lapses in FIR filing.</p>
          </div>
        </div>
      </div>
      <div className="bg-brand-navy text-white p-4 rounded-xl shadow-sm flex flex-col justify-center">
        <div className="flex items-center gap-2 font-semibold mb-3">
          <TrendingUp className="w-4 h-4 text-brand-gold" />
          Docket Analytics
        </div>
        <div className="mb-4">
          <div className="text-3xl font-serif">42</div>
          <div className="text-xs text-white/70">Cases listed today</div>
        </div>
        <div>
          <div className="text-3xl font-serif text-brand-amber">15</div>
          <div className="text-xs text-white/70">High-priority (Senior Citizens)</div>
        </div>
      </div>
    </div>
  ),
};

export function DashboardPreview() {
  const [activeRole, setActiveRole] = useState<Role>("citizen");
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleChange = (role: Role) => {
    if (role === activeRole) return;
    setIsLoading(true);
    setActiveRole(role);
    setTimeout(() => {
      setIsLoading(false);
    }, 800 + Math.random() * 500); // 800ms - 1.3s delay
  };

  return (
    <section id="dashboard" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
            Role-Based Dashboards
          </h2>
          <p className="text-foreground/70 text-lg">
            A unified platform that adapts to your role, providing the right tools and insights exactly when you need them.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-brand-stone p-1 rounded-xl">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleChange(role.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "text-brand-navy" : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {role.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Content Area */}
        <div className="max-w-4xl mx-auto bg-brand-stone/40 p-4 md:p-8 rounded-2xl border border-brand-navy/5 min-h-[300px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-brand-navy/5">
                    <Skeleton className="h-5 w-1/2 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {dashboardData[activeRole]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
