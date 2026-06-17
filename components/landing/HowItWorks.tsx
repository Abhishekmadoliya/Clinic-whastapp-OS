"use client";

import * as React from "react";
import { MessageSquare, Calendar, Stethoscope, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  whatsappPreview?: {
    sender: string;
    msg: string;
    action?: string;
  };
  dashboardPreview?: {
    patient: string;
    vitals: string;
    action: string;
  };
}

export function HowItWorks() {
  const steps: Step[] = [
    {
      num: "01",
      icon: <MessageSquare className="h-5 w-5 text-secondary" />,
      title: "Patient Books via WhatsApp",
      description: "Patients simply text your clinic's number. A custom Meta Flow allows them to pick a slot and doctor directly inside WhatsApp.",
      whatsappPreview: {
        sender: "Priya Patel",
        msg: "Hi, I need to book an appointment with Dr. Verma for tomorrow morning.",
        action: "Slot Booked: 10:30 AM",
      },
    },
    {
      num: "02",
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: "AI Coordinates the Queue",
      description: "Tokens are auto-generated. Reminders are sent dynamically. When the patient arrives, the receptionist checks them in with one tap.",
      whatsappPreview: {
        sender: "Clinic OS Bot",
        msg: "Your appointment is confirmed. Token #3. Avg wait time: 15 mins. Tap to check-in.",
        action: "Token #3 · Checked In",
      },
    },
    {
      num: "03",
      icon: <Stethoscope className="h-5 w-5 text-indigo-400" />,
      title: "Consultation & Prescription",
      description: "Doctor records consultation using dictation. AI generates SOAP notes and structured prescription PDFs, sending them immediately to patient's WhatsApp.",
      dashboardPreview: {
        patient: "Priya Patel (Token #3)",
        vitals: "BP: 120/80 mmHg | Temp: 98.6°F",
        action: "Prescription PDF Sent ✅",
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-950/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-display text-xs font-bold tracking-widest text-secondary uppercase">
            A Patient-First Approach
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            How Clinic OS Simplifies Your Workday
          </p>
          <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From the initial greeting to the signed digital prescription, every workflow is integrated.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-secondary/30 via-primary/30 to-indigo-500/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.num} className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left group">
                
                {/* Step Circle & Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] transition-all duration-300 shadow-inner">
                    {step.icon}
                  </div>
                  <div className="font-display text-lg font-extrabold text-muted-foreground/60 tracking-wider">
                    STEP {step.num}
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-3 max-w-md">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Preview (Simulated Mobile/Desktop elements) */}
                <div className="w-full max-w-xs mt-2 relative">
                  
                  {step.whatsappPreview && (
                    <div className="rounded-xl border border-[#25D366]/10 bg-[#25D366]/5 p-3.5 space-y-2 text-left relative overflow-hidden backdrop-blur-sm">
                      <div className="absolute top-0 right-0 h-16 w-16 bg-[#25D366]/5 rounded-full blur-xl pointer-events-none" />
                      <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                        <span className="text-[10px] font-bold text-[#25D366] flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                          {step.whatsappPreview.sender}
                        </span>
                        <span className="text-[9px] text-muted-foreground font-mono">WhatsApp</span>
                      </div>
                      <p className="text-[10px] text-slate-300 leading-normal">
                        "{step.whatsappPreview.msg}"
                      </p>
                      {step.whatsappPreview.action && (
                        <div className="inline-block bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-2 py-0.5 text-[9px] font-bold text-[#25D366]">
                          {step.whatsappPreview.action}
                        </div>
                      )}
                    </div>
                  )}

                  {step.dashboardPreview && (
                    <div className="rounded-xl border border-indigo-500/10 bg-indigo-500/5 p-3.5 space-y-2 text-left relative overflow-hidden backdrop-blur-sm">
                      <div className="absolute top-0 right-0 h-16 w-16 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />
                      <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                        <span className="text-[10px] font-bold text-indigo-400 flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          {step.dashboardPreview.patient}
                        </span>
                        <span className="text-[9px] text-muted-foreground font-mono">Dashboard</span>
                      </div>
                      <p className="text-[9px] text-slate-300 font-mono">
                        {step.dashboardPreview.vitals}
                      </p>
                      <div className="inline-flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2 py-0.5 text-[9px] font-bold text-indigo-400">
                        {step.dashboardPreview.action}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
