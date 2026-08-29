"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardProvider } from "@/components/dashboard/DashboardContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <DashboardProvider>
      <div className="flex h-screen bg-[#FAFAF9] overflow-hidden text-foreground">
        
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-brand-navy/20 z-40 md:hidden"
                onClick={() => setIsMobileSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl md:hidden"
              >
                <Sidebar />
                <button 
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-brand-navy/5 text-foreground/50 hover:text-brand-navy"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Mobile Header Toggle (appears only on mobile, replacing standard header's left side if needed, but we keep it simple here) */}
          <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-brand-navy/5 z-30">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMobileSidebarOpen(true)}>
                <Menu className="w-6 h-6 text-brand-navy" />
              </button>
              <span className="font-serif font-bold text-brand-navy">NyaySutra</span>
            </div>
          </div>

          <div className="hidden md:block">
            <Header />
          </div>

          <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#FAFAF9]">
            {children}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
