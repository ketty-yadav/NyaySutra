"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, FileText, Search, ShieldCheck, 
  CalendarClock, Gavel, Home, Eye, 
  Bell, Lock, Languages, Mic 
} from "lucide-react";
import Link from "next/link";

const features = [
  { title: "Role-Based Dashboards", description: "Tailored views for Citizens, Lawyers, and Judges.", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Legal Document Summarizer", description: "Condense long judgments into actionable insights.", icon: FileText, href: "/dashboard/summarizer" },
  { title: "Legal Precedent Finder", description: "Semantic search for relevant past case laws.", icon: Search, href: "/dashboard/precedents" },
  { title: "Contract & Notice Analyzer", description: "Identify hidden risks in legal agreements.", icon: ShieldCheck, href: "/dashboard/contract-analyzer" },
  { title: "Court Delay Prediction", description: "AI forecasting for hearing dates and disposal.", icon: CalendarClock, href: "/dashboard/delay-prediction" },
  { title: "Hearing Prep Assistant", description: "Automated briefing notes for upcoming dates.", icon: Gavel, href: "/dashboard/hearing-assistant" },
  { title: "Property Dispute Assistant", description: "Specialized workflows for real estate cases.", icon: Home, href: "/dashboard/property" },
  { title: "Lawyer Transparency", description: "Track lawyer activity, filings, and case progress.", icon: Eye, href: "/dashboard" },
  { title: "Smart Reminders", description: "Never miss a filing deadline or hearing date.", icon: Bell, href: "/dashboard/reminders" },
  { title: "Secure Case Locker", description: "Encrypted vault for all your legal documents.", icon: Lock, href: "/dashboard/locker" },
  { title: "Multilingual Support", description: "Access legal intelligence in local languages.", icon: Languages, href: "/dashboard" },
  { title: "Voice Assistant", description: "Ask case-related queries using natural voice.", icon: Mic, href: "/dashboard/voice" },
];

export function FeaturesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="features" className="py-24 bg-brand-stone/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
              Comprehensive Legal Intelligence
            </h2>
            <p className="text-foreground/70 text-lg">
              Everything you need to navigate the legal landscape, packed into one powerful platform.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            const cardContent = (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-brand-navy/5 hover:shadow-md hover:border-brand-navy/10 transition-all group h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-teal/5 flex items-center justify-center mb-4 group-hover:bg-brand-teal/10 transition-colors">
                  <Icon className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2 group-hover:text-brand-indigo transition-colors">{feature.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            );

            return feature.href ? (
              <Link key={index} href={feature.href} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={index}>
                {cardContent}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
