"use client";

import * as React from "react";
import Link from "next/link";
import { Activity, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Interactive Demo", href: "#interactive-hub" },
  ];

  const complianceLinks = [
    { label: "ABDM Sandbox Docs", href: "#" },
    { label: "FHIR R4 Records", href: "#" },
    { label: "DPDP Act Compliance", href: "#" },
  ];

  const resourceLinks = [
    { label: "Doctor Log In", href: "/login" },
    { label: "WhatsApp Flows", href: "#" },
    { label: "API References", href: "#" },
  ];

  const legalLinks = [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white pt-12 pb-6 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-slate-100 pb-10 mb-8">
          
          {/* Logo & Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-600 text-white shadow-sm">
                <Activity className="h-4 w-4" />
              </div>
              <span className="font-sans text-sm font-extrabold tracking-tight text-slate-900">
                Clinic <span className="text-blue-600">OS</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-xs">
              An AI-powered, WhatsApp-native practice workspace helping independent clinic doctors in India run bookings, queue coordination, and voice prescriptions.
            </p>

            <div className="space-y-1.5 text-xs text-slate-500 font-semibold">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>support@clinicos.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>+91 99887 76655</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Links Column: Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Product
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 font-semibold transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Compliance */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Compliance
            </h3>
            <ul className="space-y-2">
              {complianceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 font-semibold transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Resources & Legal
            </h3>
            <ul className="space-y-2">
              {resourceLinks.concat(legalLinks).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 font-semibold transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-semibold">
          <div>
            © {currentYear} Clinic OS. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-600 transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
