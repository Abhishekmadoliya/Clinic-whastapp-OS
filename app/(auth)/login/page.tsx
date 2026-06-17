"use client";

import * as React from "react";
import Link from "next/link";
import { Activity, ArrowRight, ShieldCheck, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [role, setRole] = React.useState<"doctor" | "patient" | "staff">("doctor");
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (identifier && password) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen flex bg-white font-sans">
      
      {/* Left Panel: Compliance & Brand info (Desktop Only) */}
      <div className="hidden lg:flex lg:w-5/12 bg-slate-50 border-r border-slate-200 p-12 flex-col justify-between grid-bg relative overflow-hidden">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-600 text-white shadow-sm">
            <Activity className="h-4.5 w-4.5 font-bold" />
          </div>
          <span className="text-sm font-extrabold text-slate-900 tracking-tight">
            Clinic <span className="text-blue-600">OS</span>
          </span>
        </div>

        {/* Mid section: Rotating stats/quote */}
        <div className="space-y-6 relative z-10 max-w-sm">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded inline-block">
            SaaS Metrics
          </div>
          
          <h2 className="text-2xl font-black text-slate-950 tracking-tight leading-snug">
            Automating clinical administrative workflows.
          </h2>

          <div className="border-l-2 border-blue-600 pl-4 space-y-2">
            <p className="text-xs text-slate-600 italic font-semibold leading-relaxed">
              "WhatsApp-native token booking reduced our patient queue no-shows by 40%. The voice Rx tool automatically writes our SOAP reports during patient checkups."
            </p>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
              — Dr. Sneha Patel, Little Stars Pediatric Clinic
            </div>
          </div>
        </div>

        {/* Bottom Section: Certifications */}
        <div className="space-y-3 relative z-10 border-t border-slate-200/60 pt-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Digital Health Standards
          </span>
          <div className="flex flex-col gap-2 text-xs text-slate-600 font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Ayushman Bharat (ABDM) HIP Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>DPDP Act Data Privacy Compliant</span>
            </div>
          </div>
        </div>

      </div>

      {/* Right Panel: Login Container */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="w-full max-w-sm space-y-6">
          
          {/* Header */}
          <div className="space-y-1.5 text-center sm:text-left">
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Sign in to your account
            </h1>
            <p className="text-xs text-slate-500 font-semibold">
              Manage your clinic schedule and digital patient logs
            </p>
          </div>

          {/* Social Auth Toggles */}
          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubmitted(true)}
              className="w-full"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.45 1.84 14.97 1 12 1 7.24 1 3.2 3.73 1.24 7.72l3.79 2.94C5.93 7.42 8.73 5.04 12 5.04z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.275c0-.82-.07-1.61-.21-2.38H12v4.51h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.79 2.94c2.22-2.05 3.5-5.07 3.5-8.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.03 14.76c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28L1.24 7.26C.45 8.84 0 10.59 0 12.42c0 1.83.45 3.58 1.24 5.16l3.79-2.82z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.79-2.94c-1.05.7-2.4 1.12-4.17 1.12-3.27 0-6.07-2.38-7.06-5.62l-3.79 2.94C3.2 20.27 7.24 23 12 23z"
                />
              </svg>
              <span>Continue with Google</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubmitted(true)}
              className="w-full"
            >
              <Fingerprint className="h-4 w-4 text-slate-600" />
              <span>Verify via HPR ID / Aadhaar</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center shrink-0">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative bg-white px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              or credentials
            </span>
          </div>

          {/* Main Auth Form Box */}
          <div className="space-y-4">
            
            {/* Role switcher inside panel */}
            <div className="grid grid-cols-3 gap-1 bg-slate-100 p-0.5 rounded border border-slate-200/50 text-[11px] font-bold shrink-0">
              {[
                { id: "doctor", label: "Doctor" },
                { id: "patient", label: "Patient" },
                { id: "staff", label: "Staff" },
              ].map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setRole(r.id as any);
                    setSubmitted(false);
                  }}
                  className={cn(
                    "py-1.5 rounded transition-all duration-150 cursor-pointer",
                    role === r.id
                      ? "bg-white text-blue-600 shadow-sm border border-slate-200/30"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="rounded border border-emerald-200 bg-emerald-50/50 p-4 text-center space-y-2">
                <ShieldCheck className="h-6 w-6 text-emerald-600 mx-auto" />
                <div className="text-xs font-bold text-emerald-800">
                  Authentication simulated successfully!
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Verification completed. Welcome back to the Clinic OS workspace.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[10px] text-blue-600 font-bold hover:underline"
                >
                  Back to Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Identifier */}
                <div className="space-y-1">
                  <Label htmlFor="identifier">
                    {role === "patient" ? "WhatsApp Phone Number" : "Email Address"}
                  </Label>
                  <Input
                    id="identifier"
                    type={role === "patient" ? "tel" : "email"}
                    required
                    placeholder={role === "patient" ? "+91 99887 76655" : "doctor@clinicos.in"}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="#"
                      className="text-[10px] text-blue-600 font-bold hover:underline"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full py-2.5">
                  <span>Sign In</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>

              </form>
            )}

          </div>

          {/* Footer Navigation */}
          <div className="text-center text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register a workspace
            </Link>
          </div>

        </div>
      </div>

    </main>
  );
}
