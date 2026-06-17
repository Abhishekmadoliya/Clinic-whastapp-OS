"use client";

import * as React from "react";
import { MessageSquare, Mic, Database, Monitor, FileText, Landmark, Check } from "lucide-react";
import { GlowCard } from "../shared/GlowCard";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowColor: string;
  badge: string;
  badgeColor: string;
  points: string[];
}

export function FeaturesGrid() {
  const features: Feature[] = [
    {
      icon: <MessageSquare className="h-6 w-6 text-[#25D366]" />,
      title: "WhatsApp Patient Flow",
      description: "Patients book appointments, confirm/cancel reminders, and receive invoices directly in their WhatsApp chat window.",
      glowColor: "rgba(37, 211, 102, 0.15)",
      badge: "Zero friction",
      badgeColor: "text-[#25D366] bg-[#25D366]/10 border-[#25D366]/20",
      points: [
        "LLM intent routing for booking requests",
        "Meta-approved interactive date & slot picker",
        "Auto-scheduled 24h & 1h patient reminders",
      ],
    },
    {
      icon: <Mic className="h-6 w-6 text-primary" />,
      title: "Voice-to-Prescription",
      description: "Doctor dictates clinical findings during consultation. AI parses raw audio and creates standard medical records.",
      glowColor: "rgba(14, 165, 233, 0.15)",
      badge: "AI-Powered",
      badgeColor: "text-primary bg-primary/10 border-primary/20",
      points: [
        "OpenAI Whisper large-v3 speech-to-text",
        "Structured SOAP notes (Subjective, Objective, Plan)",
        "One-click drug recommendations from drug library",
      ],
    },
    {
      icon: <Database className="h-6 w-6 text-emerald-400" />,
      title: "AI Lab Report Parser",
      description: "Extract data from any lab report PDF immediately. Values are automatically logged into the patient timeline.",
      glowColor: "rgba(52, 211, 153, 0.15)",
      badge: "Automation",
      badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      points: [
        "Handles PDF parsing via pdfjs-dist",
        "Flags high/low abnormal values automatically",
        "Generates plain-English summaries for patients",
      ],
    },
    {
      icon: <Monitor className="h-6 w-6 text-amber-400" />,
      title: "Live Queue Management",
      description: "Keep patients updated with live TV waiting room screens and automatic WhatsApp progress updates.",
      glowColor: "rgba(251, 191, 36, 0.15)",
      badge: "Real-time",
      badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      points: [
        "Real-time WebSocket waiting room TV display",
        "Patients notified via WhatsApp as their turn nears",
        "Auto-calculates clinic average patient wait times",
      ],
    },
    {
      icon: <FileText className="h-6 w-6 text-rose-400" />,
      title: "GST Invoicing & Payments",
      description: "Auto-generate clinic invoices and receive online payments directly via WhatsApp.",
      glowColor: "rgba(244, 63, 94, 0.15)",
      badge: "Billing",
      badgeColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
      points: [
        "GST-compliant invoice generation (PDF)",
        "Integrated Razorpay payment link WhatsApp delivery",
        "Daily, weekly, and monthly revenue analytics dashboards",
      ],
    },
    {
      icon: <Landmark className="h-6 w-6 text-indigo-400" />,
      title: "ABDM Health Compliance",
      description: "Fully compliant with Ayushman Bharat Digital Mission guidelines. Securely share records via public ID systems.",
      glowColor: "rgba(129, 140, 248, 0.15)",
      badge: "Compliance",
      badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
      points: [
        "OTP-based patient ABHA ID creation & verification",
        "FHIR R4 resource generation (Prescriptions, Encounters)",
        "NHA official secure wrapper sidecar design",
      ],
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-display text-xs font-bold tracking-widest text-primary uppercase">
            Everything your practice needs
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Designed for Modern Clinic Management
          </p>
          <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Clinic OS bridges the gap between patient simplicity on WhatsApp and clinical depth on your workstation.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <GlowCard
              key={feature.title}
              glowColor={feature.glowColor}
              className="flex flex-col justify-between h-full hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="space-y-4">
                {/* Card Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-white/5 shadow-inner">
                    {feature.icon}
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="border-t border-white/5 pt-4 mt-6 space-y-2">
                {feature.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2 text-xs text-slate-400">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-normal">{pt}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
}
