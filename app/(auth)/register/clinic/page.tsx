"use client";

import * as React from "react";
import Link from "next/link";
import { Activity, ArrowRight, ArrowLeft, Check, CheckCircle2, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ClinicRegisterPage() {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  // Form State
  const [ownerName, setOwnerName] = React.useState("");
  const [ownerEmail, setOwnerEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const [clinicName, setClinicName] = React.useState("");
  const [whatsappNumber, setWhatsappNumber] = React.useState("");
  const [hfrId, setHfrId] = React.useState("");
  const [isHfrVerified, setIsHfrVerified] = React.useState(false);

  const [subscriptionTier, setSubscriptionTier] = React.useState("starter");
  const [dpdpConsent, setDpdpConsent] = React.useState(true);
  const [abdmConsent, setAbdmConsent] = React.useState(true);

  // Validation
  const validateStep1 = () => ownerName && ownerEmail && password;
  const validateStep2 = () => clinicName && whatsappNumber && hfrId;
  const validateStep3 = () => dpdpConsent;

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setSubmitted(true);
    }
  };

  const handleHfrVerify = () => {
    setIsHfrVerified(true);
    setClinicName("Aarogyam Clinic & Diagnostics");
    setHfrId("HF-8273-6455-1928");
    setWhatsappNumber("+91 99887 76655");
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

        {/* Info */}
        <div className="space-y-6 relative z-10 max-w-sm">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded inline-block">
            Clinic Workspace Registry
          </div>
          
          <h2 className="text-2xl font-black text-slate-950 tracking-tight leading-snug">
            Configure multi-tenant practitioner isolation.
          </h2>

          <div className="space-y-4">
            <div className="text-xs text-slate-600 leading-relaxed font-semibold">
              ✓ Multi-tenant data isolation scoped by clinic IDs
            </div>
            <div className="text-xs text-slate-600 leading-relaxed font-semibold">
              ✓ Add and manage schedules for multiple doctors from your dashboard
            </div>
            <div className="text-xs text-slate-600 leading-relaxed font-semibold">
              ✓ Seamless ABDM HFR facility registration integration
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          Clinic OS Workspace Registry · v1.0.4
        </div>

      </div>

      {/* Right Panel: Form container */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="w-full max-w-md space-y-6">
          
          {/* Header */}
          <div className="space-y-1 text-center sm:text-left">
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Clinic Onboarding Setup
            </h1>
            <p className="text-xs text-slate-500 font-semibold">
              Register your workspace and configure owner credentials
            </p>
          </div>

          <div className="space-y-5">
            
            {/* Progress indicators */}
            {!submitted && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  <span>Step {step} of 3</span>
                  <span>
                    {step === 1 ? "Owner Profile" : step === 2 ? "Clinic Details" : "Tiers & Compliance"}
                  </span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div
                    className={cn(
                      "bg-blue-600 h-full transition-all duration-300",
                      step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"
                    )}
                  />
                </div>
              </div>
            )}

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto animate-bounce" />
                
                <div className="space-y-1">
                  <h2 className="text-base font-extrabold text-slate-900">
                    Clinic Registered Successfully!
                  </h2>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
                    Your clinic workspace is active. As the owner, you can now sign in and add doctors, set up rosters, and configure ABDM profiles.
                  </p>
                </div>

                {/* Details list */}
                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-left text-[11px] font-mono text-slate-600 space-y-1">
                  <div>CLINIC: {clinicName}</div>
                  <div>OWNER: {ownerName}</div>
                  <div>EMAIL: {ownerEmail}</div>
                  <div>WHATSAPP: {whatsappNumber}</div>
                  <div>ABDM HFR: {hfrId || "Not Registered"}</div>
                  <div>TIER: {subscriptionTier.toUpperCase()}</div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <Link href="/login" className="w-full block">
                    <Button type="button" className="w-full">
                      <span>Go to Sign In Panel</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setIsHfrVerified(false);
                    }}
                    className="text-xs text-slate-400 hover:text-slate-900 font-semibold"
                  >
                    Register another clinic workspace
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* STEP 1: Owner Profile */}
                {step === 1 && (
                  <div className="space-y-4">
                    
                    {/* Social OAuth Buttons */}
                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setOwnerName("Dr. Arvind Verma");
                          setOwnerEmail("dr.verma@apexwellness.in");
                        }}
                        className="w-full py-2"
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
                        <span>Sign up with Google</span>
                      </Button>
                    </div>

                    <div className="relative flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                      </div>
                      <span className="relative bg-white px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        or credentials
                      </span>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="owner-name">Owner / Director Name</Label>
                      <Input
                        id="owner-name"
                        type="text"
                        required
                        placeholder="Dr. Arvind Verma"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="owner-email">Professional Email</Label>
                      <Input
                        id="owner-email"
                        type="email"
                        required
                        placeholder="dr.verma@apexwellness.in"
                        value={ownerEmail}
                        onChange={(e) => setOwnerEmail(e.target.value)}
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2: Clinic Profile */}
                {step === 2 && (
                  <div className="space-y-4">
                    
                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleHfrVerify}
                        className="w-full"
                      >
                        <Fingerprint className="h-4 w-4 text-blue-600" />
                        <span>{isHfrVerified ? "✓ ABDM HFR Verified" : "Verify Ayushman Bharat HFR"}</span>
                      </Button>
                    </div>

                    <div className="relative flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                      </div>
                      <span className="relative bg-white px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        or manual workspace
                      </span>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="clinic-name">Clinic Workspace Name</Label>
                      <Input
                        id="clinic-name"
                        type="text"
                        required
                        placeholder="Aarogyam Clinic"
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="whatsapp-number">Clinic WhatsApp Number</Label>
                      <Input
                        id="whatsapp-number"
                        type="tel"
                        required
                        placeholder="+91 99887 76655"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="hfr-id">ABDM HFR ID (Health Facility Registry)</Label>
                      <Input
                        id="hfr-id"
                        type="text"
                        required
                        placeholder="HF-1234-5678-9012"
                        value={hfrId}
                        onChange={(e) => setHfrId(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: Tiers & Compliance */}
                {step === 3 && (
                  <div className="space-y-4">
                    
                    <div className="space-y-1">
                      <Label htmlFor="sub-tier">Subscription Workspace Tier</Label>
                      <Select
                        id="sub-tier"
                        value={subscriptionTier}
                        onChange={(e) => setSubscriptionTier(e.target.value)}
                      >
                        <option value="free">Free Trial (1 Doctor, 100 Patient Bills/mo)</option>
                        <option value="starter">Starter Plan (Up to 3 Doctors, Unlimited Bills)</option>
                        <option value="growth">Growth Plan (Up to 10 Doctors, Queue TVs)</option>
                        <option value="enterprise">Enterprise Plan (Unlimited, Custom Domains)</option>
                      </Select>
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <Checkbox
                        id="dpdp"
                        checked={dpdpConsent}
                        onChange={(e) => setDpdpConsent((e.target as HTMLInputElement).checked)}
                      />
                      <Label htmlFor="dpdp" className="text-slate-500 font-semibold leading-normal capitalize-none normal-case">
                        Agree to the DPDP Act 2023 guidelines on health data safety & tenant isolation boundaries.
                      </Label>
                    </div>

                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="abdm-share"
                        checked={abdmConsent}
                        onChange={(e) => setAbdmConsent((e.target as HTMLInputElement).checked)}
                      />
                      <Label htmlFor="abdm-share" className="text-slate-500 font-semibold leading-normal capitalize-none normal-case">
                        Enable HIP digital document linking for patients on the Ayushman Bharat network.
                      </Label>
                    </div>

                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6 shrink-0">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="px-4 py-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={step === 1 ? !validateStep1() : !validateStep2()}
                      className="px-4 py-2"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="emerald"
                      disabled={!validateStep3()}
                      className="px-5 py-2"
                    >
                      <span>Onboard Clinic</span>
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </div>

              </form>
            )}

          </div>

          {/* Redirect to Login */}
          <div className="text-center text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
            Already have a clinic workspace?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>

        </div>
      </div>

    </main>
  );
}
