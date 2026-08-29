"use client";

import { mockDocuments } from "@/data/mockData";
import { Folder, Upload, FileText, Search, Filter, ShieldCheck, Clock } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseLockerPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
      setTimeout(() => setUploadComplete(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-navy">Secure Digital Case Locker</h1>
          <p className="text-foreground/60 mt-1">Encrypted vault for all your legal documents and case files.</p>
        </div>
        <button 
          onClick={handleUpload}
          disabled={isUploading}
          className="bg-brand-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-indigo transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          {isUploading ? (
            <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Uploading...</span>
          ) : (
            <span className="flex items-center gap-2"><Upload className="w-4 h-4" /> Upload Document</span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {uploadComplete && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-brand-teal/10 border border-brand-teal text-brand-teal px-4 py-3 rounded-lg flex items-center gap-2 font-medium">
            <ShieldCheck className="w-5 h-5" /> Document securely added to vault
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Folders */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-navy/50 mb-3">Folders</h2>
          {["Case Documents", "Court Orders", "Contracts", "Identity Documents", "Evidence"].map((folder, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${i === 0 ? "bg-brand-navy/5 text-brand-navy" : "text-foreground/70 hover:bg-brand-navy/5"}`}>
              <Folder className={`w-4 h-4 ${i === 0 ? "text-brand-indigo" : "text-foreground/40"}`} />
              {folder}
            </button>
          ))}
        </div>

        {/* Documents */}
        <div className="md:col-span-3 bg-white rounded-xl border border-brand-navy/5 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-brand-navy/5 flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input type="text" placeholder="Search documents..." className="w-full pl-9 pr-4 py-1.5 bg-[#FAFAF9] border border-brand-navy/10 rounded-md text-sm focus:border-brand-indigo outline-none" />
            </div>
            <button className="p-1.5 text-foreground/50 hover:text-brand-navy hover:bg-brand-navy/5 rounded-md transition-colors border border-brand-navy/10">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#FAFAF9] text-foreground/60 border-b border-brand-navy/5">
                <tr>
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Date Modified</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">AI Processing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-navy/5">
                {mockDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-brand-navy/5 transition-colors group">
                    <td className="px-5 py-4 font-medium text-brand-navy flex items-center gap-3">
                      <FileText className="w-4 h-4 text-brand-indigo opacity-70 group-hover:opacity-100 transition-opacity" />
                      {doc.name}
                    </td>
                    <td className="px-5 py-4 text-foreground/70">{doc.date}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${
                        doc.status === "Processed" || doc.status === "Verified" ? "bg-brand-teal/10 text-brand-teal" : "bg-brand-gold/10 text-brand-gold"
                      }`}>
                        {doc.status === "Processed" || doc.status === "Verified" ? <ShieldCheck className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-foreground/70 text-xs">
                      {doc.aiStatus.includes("Processing") ? (
                        <span className="flex items-center gap-2 text-brand-gold animate-pulse"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> {doc.aiStatus}</span>
                      ) : (
                        doc.aiStatus
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
