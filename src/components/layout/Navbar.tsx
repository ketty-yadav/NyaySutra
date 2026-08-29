"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Scale, Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "HI">("EN");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const links = [
    { name: "Solutions", href: "#solutions" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#dashboard" },
    { name: "Tech Stack", href: "#tech-stack" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-navy font-serif font-bold text-2xl">
          <Scale className="h-7 w-7 text-brand-gold" />
          <span>NyaySutra</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-brand-navy transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-brand-navy transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang}
          </button>
          <Link href="/dashboard" passHref legacyBehavior>
            <Button variant="primary" size="sm">
              {lang === "EN" ? "Explore Solutions" : "समाधान खोजें"}
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-brand-navy/10 px-4 py-4"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-brand-navy font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-brand-navy/10">
              <button
                onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
                className="flex items-center gap-1.5 font-medium text-foreground/70"
              >
                <Globe className="h-4 w-4" />
                {lang}
              </button>
              <Link href="/dashboard" passHref legacyBehavior>
                <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
