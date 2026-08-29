"use client";

import { Scale } from "lucide-react";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-serif font-bold text-2xl mb-4">
              <Scale className="h-7 w-7 text-brand-gold" />
              <span>NyaySutra</span>
            </div>
            <p className="text-white/70 max-w-sm mb-6">
              AI-Powered Legal Intelligence Platform. Empowering Citizens, Lawyers, and Judges with instant legal clarity.
            </p>
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-xs text-white/50 font-medium">
                Disclaimer: This is a demo/prototype build. All features, data, and AI responses are simulated and not intended for actual legal advice.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#solutions" className="hover:text-brand-gold transition-colors">Solutions</a></li>
              <li><a href="#features" className="hover:text-brand-gold transition-colors">Features</a></li>
              <li><a href="#dashboard" className="hover:text-brand-gold transition-colors">Role Dashboards</a></li>
              <li><a href="#tech-stack" className="hover:text-brand-gold transition-colors">Tech Stack</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-sm text-white/70 mb-4">Join our newsletter for updates on launch.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing to the demo newsletter!"); }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-brand-gold"
                required
              />
              <Button size="sm" variant="secondary" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} NyaySutra Demo. All rights reserved.</p>
          <div className="text-center md:text-left">
            <p className="font-semibold text-white/80">Built for the hackathon by Team Delulu Freaks</p>
            <p className="text-xs">Arpit Raj · Ketty Yadav · Khushi Verma · Vaibhav Sharma</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
