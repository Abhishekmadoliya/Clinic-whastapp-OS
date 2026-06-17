"use client";

import * as React from "react";
import { MessageSquare, Mic, Database, Monitor, FileText, Landmark } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeaturesCompact() {
  const features: FeatureItem[] = [
    {
      icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
      title: "WhatsApp Flow Bookings",
      description: "Patients select doctors, dates, and slots directly inside a native WhatsApp Flow interface without leaving the chat window.",
    },
    {
      icon: <Mic className="h-5 w-5 text-blue-600" />,
      title: "Voice SOAP Dictation",
      description: "AI Whisper transcribes spoken consultation findings and formats them into structured Subjective, Objective, Plan logs.",
    },
    {
      icon: <Database className="h-5 w-5 text-blue-600" />,
      title: "Lab Report Metric Parsing",
      description: "Upload any CBC or test PDF. The parser extracts numeric values and flags high/low ranges against diagnostic thresholds.",
    },
    {
      icon: <Monitor className="h-5 w-5 text-blue-600" />,
      title: "Live WebSocket Queue TV",
      description: "Display checked-in patient queues on waiting room TVs via real-time WebSockets, while sending updates to patients.",
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "GST Invoicing & Razorpay",
      description: "Auto-generate GST invoices post-consultation and send instant Razorpay payment collection links via WhatsApp.",
    },
    {
      icon: <Landmark className="h-5 w-5 text-blue-600" />,
      title: "ABDM Government Compliance",
      description: "NHA wrapper handles Aadhaar OTP verification for ABHA accounts, care context mapping, and FHIR standard exchanges.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-100 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              Product Overview
            </span>
            <h2 className="font-sans text-2xl font-extrabold tracking-tight text-slate-900">
              Core Practice Operations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-md leading-relaxed">
            Clinic OS combines frictionless front-end communication channels for patients with medical tools for doctors.
          </p>
        </div>

        {/* Flat Grid Layout (No cards, no borders, no gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-2 flex items-start gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-blue-50 border border-blue-100/40 text-blue-600 shrink-0 mt-0.5">
                {feature.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
