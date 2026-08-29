"use client";

import { useDashboard } from "./DashboardContext";
import { Role } from "@/data/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const roles: Role[] = ["Citizen", "Lawyer", "Judge"];

export function RoleSwitcher() {
  const { activeRole, setActiveRole } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-navy/10 hover:bg-brand-navy/5 transition-colors text-sm font-medium text-brand-navy"
      >
        {activeRole}
        <ChevronDown className="w-4 h-4 text-foreground/50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-brand-navy/5 overflow-hidden z-50"
          >
            <div className="py-1">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setActiveRole(role);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-brand-navy/5 transition-colors text-foreground/80"
                >
                  {role}
                  {activeRole === role && <Check className="w-4 h-4 text-brand-teal" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
