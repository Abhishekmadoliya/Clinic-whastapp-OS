"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "bg-white border-b border-slate-100"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white shadow-sm">
              <Activity className="h-4.5 w-4.5 font-bold" />
            </div>
            <Link
              href="/"
              className="font-sans text-base font-extrabold tracking-tight text-slate-900"
            >
              Clinic <span className="text-blue-600 font-black">OS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#interactive-hub"
              className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              Interactive Demo
            </Link>
            <Link
              href="#features"
              className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              How It Works
            </Link>
            <Link
              href="#cta"
              className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA / Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[13px] font-bold text-slate-600 transition-all hover:text-slate-900"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="rounded bg-blue-600 hover:bg-blue-700 px-4 py-1.5 text-[13px] font-bold text-white shadow-sm transition-all duration-150"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-950"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 ease-in-out border-b border-slate-200 bg-white",
          isMobileMenuOpen ? "max-h-60 opacity-100 py-3" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 pb-3 pt-1">
          <Link
            href="#interactive-hub"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded px-3 py-1.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          >
            Interactive Demo
          </Link>
          <Link
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded px-3 py-1.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded px-3 py-1.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          >
            How It Works
          </Link>
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded bg-blue-600 px-3 py-1.5 text-[13px] font-bold text-white shadow-sm"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
