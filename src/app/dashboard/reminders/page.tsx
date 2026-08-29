"use client";

import { useState } from "react";
import { mockReminders } from "@/data/mockData";
import { Calendar as CalendarIcon, Plus, BellRing, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RemindersPage() {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [localReminders, setLocalReminders] = useState(mockReminders);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setSuccess(true);
    setLocalReminders([
      { id: Date.now().toString(), task: "New Custom Reminder", date: "Coming up", priority: "High" },
      ...localReminders
    ]);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-navy">Smart Reminders</h1>
          <p className="text-foreground/60 mt-1">Never miss a filing deadline or hearing date.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-brand-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-indigo transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Reminder
        </button>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-brand-teal/10 border border-brand-teal text-brand-teal px-4 py-3 rounded-lg flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-5 h-5" /> Reminder added successfully
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm relative">
        <div className="absolute top-0 bottom-0 left-9 md:left-[120px] w-px bg-brand-navy/10"></div>
        
        <div className="space-y-8 relative">
          {localReminders.map((reminder) => (
            <div key={reminder.id} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group">
              <div className="md:w-20 text-xs font-bold text-brand-navy/50 md:text-right uppercase tracking-wider">
                {reminder.date}
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white bg-brand-navy absolute left-[-6px] md:static shadow-sm group-hover:scale-125 transition-transform z-10"></div>
              </div>
              <div className="flex-1 bg-[#FAFAF9] p-4 rounded-xl border border-brand-navy/5 hover:border-brand-indigo/30 transition-colors ml-6 md:ml-0 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${reminder.priority === 'High' ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-navy/5 text-brand-navy'}`}>
                    {reminder.priority === 'High' ? <AlertCircle className="w-4 h-4" /> : <BellRing className="w-4 h-4" />}
                  </div>
                  <span className="font-medium text-brand-navy">{reminder.task}</span>
                </div>
                <button className="text-xs font-medium text-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white p-6 rounded-2xl shadow-xl border border-brand-navy/5 w-full max-w-md relative z-10">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Add Reminder</h2>
              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">Reminder Title</label>
                  <input type="text" required placeholder="e.g. Document review" className="w-full p-2.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1">Date</label>
                    <div className="relative">
                      <CalendarIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                      <input type="date" required className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1">Priority</label>
                    <select className="w-full p-2.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-lg text-sm focus:border-brand-indigo outline-none">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2.5 rounded-lg font-medium text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 transition-colors">Cancel</button>
                  <button type="submit" className="flex-1 py-2.5 rounded-lg font-medium text-white bg-brand-navy hover:bg-brand-indigo transition-colors">Save Reminder</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
