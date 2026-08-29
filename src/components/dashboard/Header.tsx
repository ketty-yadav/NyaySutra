"use client";

import { Search, Bell, User as UserIcon } from "lucide-react";
import { RoleSwitcher } from "./RoleSwitcher";
import { useDashboard } from "./DashboardContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Header() {
  const { activeRole } = useDashboard();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-16 border-b border-brand-navy/5 bg-white flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
          <input
            type="text"
            placeholder="Search cases, documents, precedents..."
            className="w-full pl-10 pr-4 py-2 bg-brand-navy/5 border-transparent rounded-lg text-sm focus:bg-white focus:border-brand-navy/20 focus:ring-0 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-4">
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-10 h-10 rounded-full hover:bg-brand-navy/5 flex items-center justify-center transition-colors relative"
          >
            <Bell className="w-5 h-5 text-foreground/70" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-gold rounded-full border-2 border-white"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-brand-navy/5 overflow-hidden z-50"
              >
                <div className="p-4 border-b border-brand-navy/5">
                  <h3 className="font-semibold text-brand-navy">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <div className="p-4 border-b border-brand-navy/5 hover:bg-brand-navy/5 transition-colors cursor-pointer">
                    <p className="text-sm text-foreground/80">New case document added: Sale_Deed_2026.pdf</p>
                    <span className="text-xs text-foreground/50 mt-1 block">10 mins ago</span>
                  </div>
                  <div className="p-4 border-b border-brand-navy/5 hover:bg-brand-navy/5 transition-colors cursor-pointer">
                    <p className="text-sm text-foreground/80">Hearing scheduled for 18 September</p>
                    <span className="text-xs text-foreground/50 mt-1 block">2 hours ago</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Role Switcher */}
        <RoleSwitcher />

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-brand-navy/10">
          <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
            <UserIcon className="w-4 h-4 text-brand-teal" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-brand-navy leading-none mb-1">Rohan Desai</p>
            <p className="text-xs text-foreground/50 leading-none">{activeRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
