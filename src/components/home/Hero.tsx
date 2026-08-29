"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Scale, FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background abstract grain/gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-stone via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-navy/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              AI-Powered Legal Intelligence Platform
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-navy leading-[1.1] mb-6 text-balance"
            >
              NyaySutra helps you understand legal documents <span className="text-brand-gold italic">faster</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-xl"
            >
              Empowering Citizens, Lawyers, and Judges with instant case summarization, contract risk analysis, and court delay prediction.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" passHref legacyBehavior>
                <Button size="lg" className="group">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("tech-stack")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Tech Stack
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
          >
            {/* Main composition card */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-2xl shadow-xl shadow-brand-navy/5 border border-brand-navy/10 overflow-hidden flex flex-col items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-transparent" />
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 text-brand-navy opacity-90 mb-8"
              >
                <Scale className="w-32 h-32 md:w-48 md:h-48" strokeWidth={1} />
              </motion.div>
              
              <div className="relative z-10 text-center">
                <h3 className="font-serif text-2xl font-semibold text-brand-navy mb-2">Justice meets intelligence</h3>
                <p className="text-sm text-foreground/60 max-w-[250px] mx-auto">
                  Transforming complex legalese into clear, actionable insights.
                </p>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-12 -left-6 bg-white p-4 rounded-xl shadow-lg border border-brand-navy/5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <div className="h-2 w-16 bg-brand-stone rounded-full mb-2" />
                  <div className="h-2 w-12 bg-brand-stone rounded-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -right-6 bg-white p-4 rounded-xl shadow-lg border border-brand-navy/5 flex items-center gap-3"
              >
                 <div className="flex flex-col gap-1.5">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-brand-gold" />
                     <span className="text-xs font-medium text-foreground">Risk Score: Low</span>
                   </div>
                   <div className="w-32 h-1.5 bg-brand-stone rounded-full overflow-hidden">
                     <div className="w-1/4 h-full bg-brand-gold rounded-full" />
                   </div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
