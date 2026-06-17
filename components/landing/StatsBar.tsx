"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  sub: string;
  highlight?: boolean;
}

export function StatsBar() {
  const stats: StatItem[] = [
    {
      value: "1.3M+",
      label: "Clinics in India",
      sub: "Independent practice doctors",
    },
    {
      value: "500M+",
      label: "WhatsApp Users",
      sub: "Immediate patient accessibility",
      highlight: true,
    },
    {
      value: "30 Sec",
      label: "Prescription Time",
      sub: "Voice to signed PDF prescription",
    },
    {
      value: "Zero",
      label: "App Downloads",
      sub: "For patients booking appointments",
    },
  ];

  return (
    <div className="relative border-y border-white/5 bg-slate-900/10 backdrop-blur-sm py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center text-center px-4 transition-all duration-300 hover:-translate-y-1",
                idx >= 2 ? "pt-6 md:pt-0" : "" // responsive top padding for mobile wrap
              )}
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                <span
                  className={cn(
                    stat.highlight
                      ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      : "text-white"
                  )}
                >
                  {stat.value}
                </span>
              </div>
              <div className="text-sm font-bold text-white tracking-wide">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1.5 leading-normal max-w-[170px]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
