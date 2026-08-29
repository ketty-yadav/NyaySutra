"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { AISkeleton } from "./AISkeleton";

interface AIProcessingProps {
  message?: string;
}

export function AIProcessing({ message = "Analyzing document..." }: AIProcessingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-8 bg-brand-teal/5 rounded-xl border border-brand-teal/10 flex flex-col items-center justify-center text-center space-y-4"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 border-2 border-brand-teal border-t-transparent rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-2 border-2 border-brand-indigo border-b-transparent rounded-full opacity-20"
        />
        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center relative z-10">
          <BrainCircuit className="w-6 h-6 text-brand-teal animate-pulse" />
        </div>
      </div>
      
      <div>
        <p className="font-medium text-brand-navy">{message}</p>
        <p className="text-xs text-foreground/50 mt-1">Applying NyaySutra legal intelligence</p>
      </div>

      <div className="w-full max-w-sm mt-4 text-left">
        <AISkeleton lines={3} />
      </div>
    </motion.div>
  );
}
