"use client";

import React, { createContext, useContext, useState } from "react";
import { Role } from "@/data/mockData";

interface DashboardContextType {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
  isSwitchingRole: boolean;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [activeRole, setActiveRoleState] = useState<Role>("Lawyer");
  const [isSwitchingRole, setIsSwitchingRole] = useState(false);

  const setActiveRole = (role: Role) => {
    if (role === activeRole) return;
    setIsSwitchingRole(true);
    // Simulate loading state for role switch
    setTimeout(() => {
      setActiveRoleState(role);
      setIsSwitchingRole(false);
    }, 1000); // 1s simulation
  };

  return (
    <DashboardContext.Provider value={{ activeRole, setActiveRole, isSwitchingRole }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
