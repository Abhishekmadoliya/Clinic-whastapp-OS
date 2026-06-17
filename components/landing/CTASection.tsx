"use client";

import * as React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const checkmarks = [
    "14-Day Free Practice Trial",
    "Meta-Approved API Setup",
    "No Credit Card Required",
    "ABDM Sandbox Ready",
  ];

  return (
    <section id="cta" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Compact box with no orbs or glowing backgrounds */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 sm:p-10 text-center">
          <div className="max-w-xl mx-auto space-y-5">

            <span className="inline-block rounded bg-blue-50 border border-blue-100/50 px-2.5 py-0.5 text-xs font-bold text-blue-700 uppercase tracking-tight">
              Instant Setup Available
            </span>

            <h2 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-none">
              Modernize Your Clinic Today
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Experience the efficiency of WhatsApp-native booking flows and structured voice prescriptions. Start your 14-day free trial now.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
              <Link
                href="/register"
                className="rounded bg-blue-600 hover:bg-blue-700 px-6 py-2 text-[13px] font-bold text-white shadow-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Register Clinic Workspace</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="rounded border border-slate-200 bg-white hover:bg-slate-50 px-6 py-2 text-[13px] font-bold text-slate-700 transition-colors flex items-center justify-center"
              >
                <span>Sign In Panel</span>
              </Link>
            </div>

            {/* Flat checkmarks list */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 pt-6 border-t border-slate-200/50 mt-6">
              {checkmarks.map((item) => (
                <div key={item} className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
                  <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
