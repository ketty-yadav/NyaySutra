"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, FileText, ShieldAlert, Clock, 
  Search, Gavel, Home, Lock, Bell, Mic, 
  HelpCircle, Settings, ArrowLeft 
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainNav = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Case Summarizer", href: "/dashboard/summarizer", icon: FileText },
  { name: "Contract Analyzer", href: "/dashboard/contract-analyzer", icon: ShieldAlert },
  { name: "Delay Prediction", href: "/dashboard/delay-prediction", icon: Clock },
  { name: "Precedent Finder", href: "/dashboard/precedents", icon: Search },
  { name: "Hearing Assistant", href: "/dashboard/hearing-assistant", icon: Gavel },
  { name: "Property Disputes", href: "/dashboard/property", icon: Home },
  { name: "Case Locker", href: "/dashboard/locker", icon: Lock },
  { name: "Reminders", href: "/dashboard/reminders", icon: Bell },
  { name: "Voice Assistant", href: "/dashboard/voice", icon: Mic },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-brand-navy/5 flex flex-col h-screen sticky top-0">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-brand-navy/5">
        <div>
          <Link href="/" className="font-serif text-xl font-bold text-brand-navy block leading-none mb-1">
            NyaySutra
          </Link>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-teal">
            Legal Intelligence
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-foreground/50 hover:text-brand-navy hover:bg-brand-navy/5 transition-all mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to NyaySutra
        </Link>

        {mainNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                isActive 
                  ? "bg-brand-navy/5 text-brand-indigo" 
                  : "text-foreground/70 hover:bg-brand-navy/5 hover:text-brand-navy"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-md flex items-center justify-center transition-colors",
                isActive ? "bg-white shadow-sm" : "group-hover:bg-white group-hover:shadow-sm"
              )}>
                <Icon className={cn("w-4 h-4", isActive ? "text-brand-indigo" : "text-foreground/50 group-hover:text-brand-navy")} />
              </div>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-brand-navy/5 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:bg-brand-navy/5 hover:text-brand-navy transition-all">
          <HelpCircle className="w-4 h-4 text-foreground/50" />
          Help
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:bg-brand-navy/5 hover:text-brand-navy transition-all">
          <Settings className="w-4 h-4 text-foreground/50" />
          Settings
        </button>

        <div className="mt-4 p-3 bg-brand-gold/10 rounded-lg">
          <p className="text-[10px] leading-tight text-brand-gold/80 font-medium">
            NyaySutra is a prototype demonstration. AI outputs, case data, predictions, and legal references shown in this interface are simulated and should not be treated as legal advice.
          </p>
        </div>
      </div>
    </aside>
  );
}
