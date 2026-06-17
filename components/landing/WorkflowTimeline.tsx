"use client";

import * as React from "react";
import { MessageSquare, Calendar, Stethoscope, ChevronRight } from "lucide-react";

interface WorkflowStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WorkflowTimeline() {
  const steps: WorkflowStep[] = [
    {
      number: "01",
      icon: <MessageSquare className="h-4.5 w-4.5 text-blue-600" />,
      title: "Patient Intent Routing",
      description: "Patients request bookings on WhatsApp. LLMs parse the incoming message to extract intent, dates, and doctor selection.",
    },
    {
      number: "02",
      icon: <Calendar className="h-4.5 w-4.5 text-blue-600" />,
      title: "Check-in Coordination",
      description: "A queue token is assigned. Automated reminders are sent. One-tap WhatsApp check-ins update the clinic dashboard instantly.",
    },
    {
      number: "03",
      icon: <Stethoscope className="h-4.5 w-4.5 text-blue-600" />,
      title: "Prescription Delivery",
      description: "AI formats doctor voice dictation into SOAP notes. GST invoices and signed Rx PDFs are delivered directly via WhatsApp.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Operational Sequence
          </span>
          <h2 className="font-sans text-2xl font-extrabold tracking-tight text-slate-900">
            Frictionless Care Delivery
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-md mx-auto leading-relaxed">
            A unified pipeline starting from patient chat request to fully issued digital clinical records.
          </p>
        </div>

        {/* Steps Horizontal Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => (
            <div key={step.number} className="relative space-y-3 p-4 bg-white border border-slate-200 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              {/* Header inside card */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-50 text-blue-600 border border-blue-100/30">
                  {step.icon}
                </div>
                <span className="text-xs font-extrabold text-slate-300 font-mono tracking-wider">
                  PHASE {step.number}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Dotted indicator for steps sequence (except last) */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                  <ChevronRight className="h-4 w-4 text-slate-300" />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
