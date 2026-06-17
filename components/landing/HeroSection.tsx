"use client";

import * as React from "react";
import { MessageSquare, Check, ArrowRight, Activity, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ChatMessage {
  sender: "patient" | "bot";
  text: string;
  time: string;
  options?: string[];
  selectedOption?: string;
}

export function HeroSection() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [chatLog, setChatLog] = React.useState<ChatMessage[]>([
    { sender: "patient", text: "Hi, I need to book an appointment with Dr. Verma.", time: "10:00 AM" },
    {
      sender: "bot",
      text: "Sure! Please select an available slot for tomorrow (June 18):",
      time: "10:00 AM",
      options: ["9:30 AM", "10:30 AM", "11:30 AM"],
      selectedOption: "10:30 AM",
    },
    { sender: "patient", text: "Selected: 10:30 AM", time: "10:01 AM" },
    {
      sender: "bot",
      text: "Booking confirmed! Token #3. Average waiting: 15 mins. A reminder will be sent 1 hour before.",
      time: "10:01 AM",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center bg-white grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Tighter Copy & Signup */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

            {/* Tagline */}
            <div className="inline-flex items-center gap-1.5 rounded bg-blue-50 border border-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700 mx-auto lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>WhatsApp-Native Clinic Automation</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Your Entire Clinic Practice,<br className="hidden sm:inline" />
              Powered by <span className="text-blue-600">Clinical AI</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              No apps for patients to install. Booking, reminders, and digital prescriptions are handled entirely in their WhatsApp window. Doctors control everything from a clean web panel.
            </p>

            {/* Direct Register Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0">
              <Link
                href="/register"
                className="rounded bg-blue-600 hover:bg-blue-700 px-5 py-2 text-[13px] font-bold text-white shadow-sm transition-colors flex items-center justify-center gap-1"
              >
                <span>Register Clinic Workspace</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="rounded border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2 text-[13px] font-bold text-slate-700 transition-colors flex items-center justify-center"
              >
                <span>Sign In Panel</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-4 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
              {["14-Day Free Trial", "No Setup Fees", "Official WhatsApp API"].map((item) => (
                <div key={item} className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                  <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: iOS WhatsApp Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[280px]">

              {/* Phone Container */}
              <div className="rounded-[36px] border-[8px] border-slate-900 bg-slate-100 p-1.5 shadow-xl relative aspect-[9/16] flex flex-col">

                {/* Phone Speaker/Camera Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* WhatsApp Chat UI Wrapper */}
                <div className="flex-1 bg-[#efeae2] rounded-[30px] overflow-hidden flex flex-col relative z-10 pt-6">

                  {/* WhatsApp Chat Header */}
                  <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2 text-white shrink-0">
                    <div className="h-7 w-7 rounded-full bg-teal-800/50 border border-teal-700/30 flex items-center justify-center text-xs font-bold font-mono text-emerald-400">
                      OS
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold leading-none">Apex Clinic Assistant</div>
                      <div className="text-[8px] text-teal-200 mt-0.5">Verified Practice Account</div>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Messages Content (High-density) */}
                  <div className="flex-1 p-3 space-y-3 overflow-y-auto text-[11px]">

                    {chatLog.map((chat, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "max-w-[85%] rounded px-2.5 py-1.5 shadow-sm space-y-1 relative",
                          chat.sender === "patient"
                            ? "bg-[#dcf8c6] ml-auto text-slate-800"
                            : "bg-white mr-auto text-slate-800"
                        )}
                      >
                        <p className="leading-snug">{chat.text}</p>

                        {/* Options Simulator */}
                        {chat.options && (
                          <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-100 mt-1">
                            {chat.options.map((opt) => (
                              <span
                                key={opt}
                                className={cn(
                                  "rounded px-1.5 py-0.5 text-[9px] font-bold border block transition-colors",
                                  chat.selectedOption === opt
                                    ? "bg-emerald-600 border-emerald-600 text-white"
                                    : "bg-slate-50 border-slate-200 text-slate-600"
                                )}
                              >
                                {opt}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="text-[7px] text-slate-400 text-right font-mono">
                          {chat.time}
                        </div>
                      </div>
                    ))}

                  </div>

                  {/* Chat Input Bar */}
                  <div className="bg-[#f0f0f0] border-t border-slate-200 px-3 py-2 flex items-center gap-2 shrink-0">
                    <div className="flex-1 bg-white rounded-full border border-slate-200 px-3 py-1 text-[10px] text-slate-400 font-medium">
                      Type a message...
                    </div>
                    <div className="h-6 w-6 rounded-full bg-[#075e54] flex items-center justify-center text-white text-[10px]">
                      ➔
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
