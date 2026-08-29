"use client";

import { useState } from "react";
import { Mic, MicOff, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoiceAssistantPage() {
  const [status, setStatus] = useState<"idle" | "listening" | "transcribing" | "result">("idle");

  const handleMicClick = () => {
    if (status === "idle") {
      setStatus("listening");
      setTimeout(() => setStatus("transcribing"), 3000); // listen for 3s
      setTimeout(() => setStatus("result"), 5000); // transcribe + result in 2s
    } else {
      setStatus("idle");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif font-bold text-brand-navy">NyaySutra Voice Assistant</h1>
        <p className="text-foreground/60 mt-2">Ask case-related queries using natural voice.</p>
      </div>

      <div className="bg-white p-12 rounded-3xl border border-brand-navy/5 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex flex-col items-center">
              <button 
                onClick={handleMicClick}
                className="w-24 h-24 bg-brand-navy rounded-full flex items-center justify-center shadow-lg hover:bg-brand-indigo hover:scale-105 transition-all text-white mb-6 group"
              >
                <Mic className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </button>
              <h2 className="text-xl font-bold text-brand-navy">How can NyaySutra help?</h2>
              <p className="text-sm text-foreground/50 mt-1">Tap the microphone to start listening</p>
            </motion.div>
          )}

          {status === "listening" && (
            <motion.div key="listening" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center relative">
              <div className="relative flex items-center justify-center mb-8">
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-brand-teal rounded-full" />
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="absolute inset-0 bg-brand-teal rounded-full" />
                <button onClick={handleMicClick} className="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center shadow-lg text-white relative z-10">
                  <MicOff className="w-10 h-10" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-brand-teal animate-pulse">Listening...</h2>
              <p className="text-sm text-foreground/50 mt-1">Speak clearly into your microphone</p>
            </motion.div>
          )}

          {status === "transcribing" && (
            <motion.div key="transcribing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full max-w-lg text-center">
              <div className="w-12 h-12 border-4 border-brand-navy/10 border-t-brand-indigo rounded-full animate-spin mb-6"></div>
              <p className="text-xl font-medium text-brand-navy italic mb-2">&quot;What documents do I need for my upcoming hearing?&quot;</p>
              <p className="text-sm text-foreground/50">Processing voice input...</p>
            </motion.div>
          )}

          {status === "result" && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full">
              <div className="flex justify-end mb-6">
                <div className="bg-brand-navy text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] inline-block">
                  <p className="text-sm">What documents do I need for my upcoming hearing?</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#FAFAF9] border border-brand-navy/5 text-brand-navy px-6 py-5 rounded-2xl rounded-tl-sm max-w-[85%] relative">
                  <div className="absolute -left-3 top-0 w-8 h-8 bg-brand-teal/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  </div>
                  <p className="text-sm leading-relaxed ml-2">
                    Based on the information in your case (Sharma vs. Verma), the recommended documents for the Evidence Hearing on 18 September include your <strong className="text-brand-indigo">sale deed</strong>, <strong className="text-brand-indigo">previous court order</strong>, and <strong className="text-brand-indigo">identity documentation</strong>.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button onClick={() => setStatus("idle")} className="text-sm font-medium text-brand-indigo hover:text-brand-navy transition-colors">
                  Ask another question
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
