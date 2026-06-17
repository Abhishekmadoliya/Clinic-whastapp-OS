"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import { GlowCard } from "../shared/GlowCard";

interface Testimonial {
  quote: string;
  author: string;
  specialty: string;
  clinic: string;
  location: string;
  rating: number;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote: "My patients absolutely love the WhatsApp booking flow. I saw a 40% reduction in appointment no-shows in the very first month, and they don't have to download any slow apps.",
      author: "Dr. Arvind Verma",
      specialty: "General Physician",
      clinic: "Verma Clinic & Wellness Centre",
      location: "New Delhi",
      rating: 5,
    },
    {
      quote: "Dictating SOAP notes has completely saved my hands. I just talk naturally during the appointment, and the AI extracts accurate medications, dosages, and patient history instantly.",
      author: "Dr. Sneha Patel",
      specialty: "Pediatrician",
      clinic: "Little Stars Clinic",
      location: "Ahmedabad",
      rating: 5,
    },
    {
      quote: "The ABDM integration wrapper was completely set up in a couple of days. Pushing diagnostic reports and prescriptions to ABHA accounts is seamless now. Truly a game-changer.",
      author: "Dr. K. Raghavan",
      specialty: "Cardiologist",
      clinic: "Raghavan Heart Institute",
      location: "Chennai",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-display text-xs font-bold tracking-widest text-primary uppercase">
            Trusted by Physicians
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Loved by Doctors, Preferred by Patients
          </p>
          <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            See how independent clinics in India are saving hours of administrative work every single day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <GlowCard
              key={t.author}
              glowColor="rgba(16, 185, 129, 0.08)"
              className="flex flex-col justify-between h-full bg-slate-900/30 border-white/5"
            >
              <div className="space-y-6">
                
                {/* Stars and Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-white/5 fill-white/5" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>

              </div>

              {/* Author Details */}
              <div className="border-t border-white/5 pt-4 mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 font-bold text-white text-sm">
                  {t.author.split(" ").slice(1)[0]?.[0] || t.author[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {t.author}
                  </h4>
                  <p className="text-[10px] text-primary font-semibold">
                    {t.specialty}
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    {t.clinic} · {t.location}
                  </p>
                </div>
              </div>

            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
}
