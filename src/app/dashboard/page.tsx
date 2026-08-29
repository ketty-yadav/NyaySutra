"use client";

import { useDashboard } from "@/components/dashboard/DashboardContext";
import { LawyerDashboard } from "@/components/dashboard/roles/LawyerDashboard";
import { CitizenDashboard } from "@/components/dashboard/roles/CitizenDashboard";
import { JudgeDashboard } from "@/components/dashboard/roles/JudgeDashboard";
import { motion, AnimatePresence } from "framer-motion";
import { AIProcessing } from "@/components/dashboard/ai/AIProcessing";

export default function DashboardPage() {
  const { activeRole, isSwitchingRole } = useDashboard();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <AnimatePresence mode="wait">
        {isSwitchingRole ? (
          <motion.div
            key="switching"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center h-64"
          >
            <AIProcessing message={`Switching to ${activeRole} workspace...`} />
          </motion.div>
        ) : (
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {activeRole === "Lawyer" && <LawyerDashboard />}
            {activeRole === "Citizen" && <CitizenDashboard />}
            {activeRole === "Judge" && <JudgeDashboard />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
