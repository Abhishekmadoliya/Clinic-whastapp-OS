"use client";

import * as React from "react";
import Link from "next/link";
import { Activity, Stethoscope, User, ArrowRight, ShieldCheck } from "lucide-react";

export default function RegisterRolePage() {
  return (
    <main className="min-h-screen flex bg-white font-sans">
      
      {/* Left Panel (Desktop Only) */}
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

        {/* Info */}
        <div className="space-y-6 relative z-10 max-w-sm">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded inline-block">
            Workspace Hub
          </div>
          
          <h2 className="text-2xl font-black text-slate-950 tracking-tight leading-snug">
            Configure row-level secure medical records.
          </h2>

          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            All records are isolated by clinic IDs. Patients book directly on WhatsApp while doctors write e-prescriptions using natural voice dictation.
          </p>
        </div>

        {/* Certifications */}
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

      {/* Right Panel: Role Choice */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="w-full max-w-md space-y-6">
          
          {/* Header */}
          <div className="space-y-1.5 text-center sm:text-left">
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Create your Clinic OS account
            </h1>
            <p className="text-xs text-slate-500 font-semibold">
              Select your role to proceed with workspace registration
            </p>
          </div>

          {/* Choices Grid */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* Clinic Owner Choice */}
            <Link
              href="/register/clinic"
              className="group block rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-500 hover:shadow-md transition-all duration-200 text-left space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
            >
              <div className="flex justify-between items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              
              <div className="space-y-1">
                <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  Clinic Owner / Clinic Workspace
                </h2>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Register a clinic workspace, set up digital practitioner rosters, manage patient billing, and establish ABDM health integration.
                </p>
              </div>
            </Link>

            {/* Patient Choice */}
            <Link
              href="/register/patient"
              className="group block rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-500 hover:shadow-md transition-all duration-200 text-left space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
            >
              <div className="flex justify-between items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>
              
              <div className="space-y-1">
                <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  Patient Account
                </h2>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Register demographics, link government Aadhaar ABHA IDs, manage allergy history, and consent to WhatsApp booking.
                </p>
              </div>
            </Link>

          </div>

          {/* Sign in redirect */}
          <div className="text-center text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>

        </div>
      </div>

    </main>
  );
}
