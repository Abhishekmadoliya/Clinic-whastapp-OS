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

export default function PatientRegisterPage() {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  // Form State
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [clinicId, setClinicId] = React.useState("clinic-hsr-main");

  const [phone, setPhone] = React.useState("");
  const [abhaId, setAbhaId] = React.useState("");
  const [isAadhaarVerified, setIsAadhaarVerified] = React.useState(false);

  const [bloodGroup, setBloodGroup] = React.useState("");
  const [knownAllergies, setKnownAllergies] = React.useState("");
  const [whatsappConsent, setWhatsappConsent] = React.useState(true);

  // Validation
  const validateStep1 = () => name && dob && gender && clinicId;
  const validateStep2 = () => phone && abhaId;

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
    setSubmitted(true);
  };

  const handleAadhaarVerify = () => {
    setIsAadhaarVerified(true);
    setName("Priya Patel");
    setDob("1996-08-12");
    setGender("Female");
    setAbhaId("91-8273-6455-1928");
  };

  return (
    <main className="min-h-screen flex bg-white font-sans">
      
      {/* Left Panel (Desktop Only) */}
      <div className="hidden lg:flex lg:w-5/12 bg-slate-50 border-r border-slate-200 p-12 flex-col justify-between grid-bg relative overflow-hidden">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-emerald-600 text-white shadow-sm">
            <Activity className="h-4.5 w-4.5 font-bold" />
          </div>
          <span className="text-sm font-extrabold text-slate-900 tracking-tight">
            Clinic <span className="text-emerald-600">OS</span>
          </span>
        </div>

        {/* Info */}
        <div className="space-y-6 relative z-10 max-w-sm">
          <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded inline-block">
            Patient Registry
          </div>
          
          <h2 className="text-2xl font-black text-slate-950 tracking-tight leading-snug">
            Your longitudinal health record, linked securely.
          </h2>

          <div className="space-y-4">
            <div className="text-xs text-slate-600 leading-relaxed font-semibold">
              ✓ Verify instantly using secure Aadhaar OTP integration
            </div>
            <div className="text-xs text-slate-600 leading-relaxed font-semibold">
              ✓ Manage drug and food allergy histories in one dashboard
            </div>
            <div className="text-xs text-slate-600 leading-relaxed font-semibold">
              ✓ Zero app downloads needed to check your booking queue
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          Clinic OS Security Compliant · v1.0.4
        </div>

      </div>

      {/* Right Panel: Patient Multi-Step Form */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="w-full max-w-md space-y-6">
          
          {/* Header */}
          <div className="space-y-1 text-center sm:text-left">
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Patient Registration
            </h1>
            <p className="text-xs text-slate-500 font-semibold">
              Create patient files and link government ABDM health records
            </p>
          </div>

          {/* Form container */}
          <div className="space-y-5">
            
            {/* Progress indicators */}
            {!submitted && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  <span>Step {step} of 3</span>
                  <span>
                    {step === 1 ? "Identity" : step === 2 ? "Verification" : "Medical Details"}
                  </span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div
                    className={cn(
                      "bg-emerald-600 h-full transition-all duration-300",
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
                    Patient Profile Registered!
                  </h2>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
                    Your record has been successfully added to the clinic patient database. Relational ID schemas are verified.
                  </p>
                </div>

                {/* Details list */}
                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-left text-[11px] font-mono text-slate-600 space-y-1">
                  <div>NAME: {name}</div>
                  <div>DOB: {dob}</div>
                  <div>GENDER: {gender}</div>
                  <div>PHONE: {phone}</div>
                  <div>ABHA ID: {abhaId}</div>
                  <div>BLOOD GROUP: {bloodGroup}</div>
                  <div>ALLERGIES: {knownAllergies || "None"}</div>
                  <div>WHATSAPP: {whatsappConsent ? "Approved" : "Rejected"}</div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <Link href="/login" className="w-full block">
                    <Button type="button" variant="emerald" className="w-full">
                      <span>Go to Sign In Panel</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setIsAadhaarVerified(false);
                    }}
                    className="text-xs text-slate-400 hover:text-slate-900 font-semibold"
                  >
                    Register another patient file
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* STEP 1: Account setup / Social Auth */}
                {step === 1 && (
                  <div className="space-y-4">
                    
                    {/* Aadhaar Verification button */}
                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAadhaarVerify}
                        className="w-full"
                      >
                        <Fingerprint className="h-4 w-4 text-emerald-600" />
                        <span>{isAadhaarVerified ? "✓ Aadhaar Verified" : "Verify via Aadhaar (Auto-fill)"}</span>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAadhaarVerify}
                        className="w-full"
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
                        <span>Continue with Google</span>
                      </Button>
                    </div>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                      </div>
                      <span className="relative bg-white px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        or input manually
                      </span>
                    </div>

                    {/* Fields */}
                    <div className="space-y-1">
                      <Label htmlFor="patient-name">Patient Full Name</Label>
                      <Input
                        id="patient-name"
                        type="text"
                        required
                        placeholder="Priya Patel"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="focus:border-emerald-600"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          required
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="focus:border-emerald-600"
                        />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          id="gender"
                          required
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="focus:border-emerald-600"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="clinic-id">Associated Clinic ID</Label>
                      <Input
                        id="clinic-id"
                        type="text"
                        required
                        placeholder="clinic-hsr-main"
                        value={clinicId}
                        onChange={(e) => setClinicId(e.target.value)}
                        className="focus:border-emerald-600"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2: Contacts */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="phone">WhatsApp Contact Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="focus:border-emerald-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="abha-id">ABHA Health Account ID</Label>
                      <Input
                        id="abha-id"
                        type="text"
                        required
                        placeholder="12-3456-7890-1234"
                        value={abhaId}
                        onChange={(e) => setAbhaId(e.target.value)}
                        className="focus:border-emerald-600"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: Clinical specs */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="blood-group">Blood Group</Label>
                      <Select
                        id="blood-group"
                        required
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        className="focus:border-emerald-600"
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </Select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="allergies">Known Drug Allergies</Label>
                      <Input
                        id="allergies"
                        type="text"
                        placeholder="Penicillin, Peanuts (split by comma)"
                        value={knownAllergies}
                        onChange={(e) => setKnownAllergies(e.target.value)}
                        className="focus:border-emerald-600"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <Checkbox
                        id="consent"
                        checked={whatsappConsent}
                        onChange={(e) => setWhatsappConsent((e.target as HTMLInputElement).checked)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <Label htmlFor="consent" className="text-slate-500 font-semibold leading-normal capitalize-none normal-case">
                        Enable WhatsApp booking, active tokens alerts, and invoice PDFs delivery.
                      </Label>
                    </div>
                  </div>
                )}

                {/* Form Nav Buttons */}
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
                      variant="emerald"
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
                      className="px-5 py-2"
                    >
                      <span>Register Patient File</span>
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </div>

              </form>
            )}

          </div>

          {/* Redirect to Login */}
          <div className="text-center text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 hover:underline">
              Sign in
            </Link>
          </div>

        </div>
      </div>

    </main>
  );
}
