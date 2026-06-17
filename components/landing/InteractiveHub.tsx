"use client";

import * as React from "react";
import { Activity, Play, Calendar, Mic, FileText, CheckCircle, UploadCloud, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Patient {
  token: string;
  name: string;
  phone: string;
  status: "Checked In" | "With Doctor" | "Completed";
  time: string;
}

interface LabMetric {
  testName: string;
  value: number;
  unit: string;
  refRange: string;
  flag: "Normal" | "Low" | "High";
}

export function InteractiveHub() {
  const [activeTab, setActiveTab] = React.useState<"queue" | "dictation" | "lab">("queue");

  // QUEUE STATE
  const [patients, setPatients] = React.useState<Patient[]>([
    { token: "#01", name: "Aarav Sharma", phone: "+91 98123 45678", status: "Completed", time: "10:00 AM" },
    { token: "#02", name: "Priya Patel", phone: "+91 98765 43210", status: "With Doctor", time: "10:15 AM" },
    { token: "#03", name: "Rahul Verma", phone: "+91 99112 23344", status: "Checked In", time: "10:30 AM" },
    { token: "#04", name: "Ananya Iyer", phone: "+91 95556 67788", status: "Checked In", time: "10:45 AM" },
  ]);

  const handleCallNext = () => {
    setPatients((prev) => {
      const next = [...prev];
      const currentDocIdx = next.findIndex((p) => p.status === "With Doctor");
      if (currentDocIdx !== -1) {
        next[currentDocIdx].status = "Completed";
      }
      const nextCheckedInIdx = next.findIndex((p) => p.status === "Checked In");
      if (nextCheckedInIdx !== -1) {
        next[nextCheckedInIdx].status = "With Doctor";
      }
      return next;
    });
  };

  const handleAddPatient = () => {
    setPatients((prev) => [
      ...prev,
      {
        token: `#0${prev.length + 1}`,
        name: "Devendra Singh",
        phone: "+91 94445 56677",
        status: "Checked In",
        time: "11:00 AM",
      },
    ]);
  };

  // DICTATION STATE
  const [isDictating, setIsDictating] = React.useState(false);
  const [dictationStep, setDictationStep] = React.useState(0);
  const [transcript, setTranscript] = React.useState("");
  const [rxMeds, setRxMeds] = React.useState<string[]>([]);
  const [advice, setAdvice] = React.useState("");

  const voiceScripts = [
    { text: "Patient complains of scratchy throat and body ache since Monday.", meds: [], advice: "" },
    { text: "Prescribing Paracetamol 650mg tablets for fever control.", meds: ["Paracetamol 650mg - 1-0-1 (3 Days)"], advice: "" },
    { text: "Adding Amoxicillin 500mg capsules twice daily for 5 days.", meds: ["Paracetamol 650mg - 1-0-1 (3 Days)", "Amoxicillin 500mg - 1-0-1 (5 Days)"], advice: "" },
    { text: "Advise warm water gargle four times a day and light meals.", meds: ["Paracetamol 650mg - 1-0-1 (3 Days)", "Amoxicillin 500mg - 1-0-1 (5 Days)"], advice: "Warm water gargles 4x daily, light diet." },
  ];

  const handleSimulateDictation = () => {
    if (isDictating) return;
    setIsDictating(true);
    setTranscript("");
    setRxMeds([]);
    setAdvice("");
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < voiceScripts.length) {
        setTranscript(voiceScripts[step].text);
        if (voiceScripts[step].meds.length > 0) {
          setRxMeds(voiceScripts[step].meds);
        }
        if (voiceScripts[step].advice) {
          setAdvice(voiceScripts[step].advice);
        }
        step++;
      } else {
        setIsDictating(false);
        clearInterval(interval);
      }
    }, 2500);
  };

  // LAB STATE
  const [labFile, setLabFile] = React.useState<string | null>(null);
  const [isParsing, setIsParsing] = React.useState(false);
  const [parseProgress, setParseProgress] = React.useState(0);
  const [parsedMetrics, setParsedMetrics] = React.useState<LabMetric[]>([]);

  const handleParseReport = () => {
    setLabFile("report-cbc-priya.pdf");
    setIsParsing(true);
    setParseProgress(0);
    setParsedMetrics([]);

    const progressTimer = setInterval(() => {
      setParseProgress((p) => {
        if (p < 100) {
          return p + 20;
        } else {
          clearInterval(progressTimer);
          setIsParsing(false);
          setParsedMetrics([
            { testName: "Hemoglobin", value: 10.8, unit: "g/dL", refRange: "12.0 - 15.0", flag: "Low" },
            { testName: "Total WBC Count", value: 7200, unit: "/cumm", refRange: "4000 - 11000", flag: "Normal" },
            { testName: "Platelet Count", value: 245000, unit: "/cumm", refRange: "150000 - 450000", flag: "Normal" },
            { testName: "Red Blood Cells", value: 3.9, unit: "million/uL", refRange: "4.2 - 5.4", flag: "Low" },
          ]);
          return 100;
        }
      });
    }, 400);
  };

  return (
    <section id="interactive-hub" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded">
            Interactive Product Demo
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Click to Simulate the Doctor's Workspace
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xl mx-auto">
            Interact with the core features doctors use inside Clinic OS. Select a tab below to run the live simulator.
          </p>
        </div>

        {/* Tab Controllers */}
        <div className="flex justify-center gap-1.5 mb-8">
          {[
            { id: "queue", label: "Patient Queue", icon: <Calendar className="h-4 w-4" /> },
            { id: "dictation", label: "Voice to Prescription", icon: <Mic className="h-4 w-4" /> },
            { id: "lab", label: "AI Lab Parser", icon: <FileText className="h-4 w-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 rounded px-4 py-2 text-xs font-bold tracking-tight transition-all border duration-150",
                activeTab === tab.id
                  ? "bg-white border-slate-300 text-blue-600 shadow-sm"
                  : "bg-slate-100/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Workspace Display Card */}
        <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm min-h-[420px] flex flex-col justify-between">
          
          {/* Mockup Topbar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-200 block" />
              <span className="h-3 w-3 rounded-full bg-slate-200 block" />
              <span className="h-3 w-3 rounded-full bg-slate-200 block" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">practice-workspace.clinicos.in</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Workspace Connected</span>
            </span>
          </div>

          {/* MAIN DYNAMIC CONTENT */}
          <div className="flex-1">
            
            {/* T1: PATIENT QUEUE */}
            {activeTab === "queue" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-slate-900">Today's Appointment Queue</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Real-time status synchronizing with WhatsApp check-ins</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddPatient}
                      className="rounded border border-slate-300 hover:border-slate-400 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors"
                    >
                      Check In Patient
                    </button>
                    <button
                      onClick={handleCallNext}
                      className="rounded bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-colors"
                    >
                      Call Next Patient
                    </button>
                  </div>
                </div>

                {/* Patient List (tabular look) */}
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-[12px] border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wide">
                        <th className="py-2.5 px-4">Token</th>
                        <th className="py-2.5 px-4">Patient Name</th>
                        <th className="py-2.5 px-4">WhatsApp Contact</th>
                        <th className="py-2.5 px-4">Est. Time</th>
                        <th className="py-2.5 px-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                      {patients.map((p) => (
                        <tr
                          key={p.name}
                          className={cn(
                            "transition-colors",
                            p.status === "With Doctor" ? "bg-blue-50/45 font-semibold" : ""
                          )}
                        >
                          <td className="py-3 px-4 font-mono font-bold text-slate-500">{p.token}</td>
                          <td className="py-3 px-4 flex items-center gap-2">
                            {p.name}
                            {p.status === "With Doctor" && (
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            )}
                          </td>
                          <td className="py-3 px-4 text-slate-500">{p.phone}</td>
                          <td className="py-3 px-4 text-slate-500 font-mono">{p.time}</td>
                          <td className="py-3 px-4 text-right">
                            <span
                              className={cn(
                                "inline-block rounded px-2 py-0.5 text-[10px] font-bold border uppercase tracking-wider",
                                p.status === "With Doctor"
                                  ? "bg-blue-50 border-blue-200 text-blue-700"
                                  : p.status === "Completed"
                                  ? "bg-slate-100 border-slate-200 text-slate-500"
                                  : "bg-emerald-50 border-emerald-100 text-emerald-700"
                              )}
                            >
                              {p.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* T2: DICTATION TO RX */}
            {activeTab === "dictation" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Dictation Box */}
                <div className="md:col-span-5 border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col justify-between h-[280px]">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                      <Mic className={cn("h-4 w-4", isDictating ? "text-blue-600 animate-pulse" : "text-slate-400")} />
                      <span>Doctor Voice Dictation</span>
                    </div>
                    
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Speak normally during client consultations. AI Whisper logs metrics and matches medication catalogs.
                    </p>

                    {isDictating ? (
                      <div className="bg-white border border-slate-200 p-2.5 rounded text-[11px] text-slate-800 italic h-[140px] overflow-y-auto leading-normal">
                        {transcript || "Transcribing live consultation feed..."}
                        <span className="h-3.5 w-1.5 bg-blue-600 inline-block ml-0.5 animate-pulse" />
                      </div>
                    ) : (
                      <div className="bg-white border border-slate-200 p-3.5 rounded text-[11px] text-slate-400 flex flex-col items-center justify-center text-center h-[140px]">
                        <p className="text-[11px]">Click below to run a clinical dictation simulation</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSimulateDictation}
                    disabled={isDictating}
                    className="w-full rounded bg-blue-600 disabled:bg-blue-400 py-2 text-xs font-bold text-white shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Play className="h-3.5 w-3.5" />
                    <span>{isDictating ? "Dictating..." : "Simulate Dictation"}</span>
                  </button>
                </div>

                {/* Prescription Box */}
                <div className="md:col-span-7 border border-slate-200 rounded-lg p-4 bg-white flex flex-col justify-between h-[280px] shadow-[0_1px_4px_rgba(0,0,0,0.03)] relative overflow-hidden">
                  
                  {/* Watermark stamp */}
                  <div className="absolute top-2 right-2 border border-blue-600/20 text-blue-600/20 text-[9px] font-bold font-mono tracking-wider rotate-12 px-2 py-0.5 rounded uppercase">
                    E-Prescription
                  </div>

                  <div className="space-y-4 overflow-y-auto pr-1">
                    <div className="border-b border-slate-100 pb-2">
                      <div className="text-[11px] font-extrabold text-slate-900">Dr. Arvind Verma, MD</div>
                      <div className="text-[9px] text-slate-400">APEX CLINIC · DELHI</div>
                    </div>

                    {/* Prescribed Meds */}
                    <div className="space-y-2">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wide">Rx (Prescribed Medications)</div>
                      {rxMeds.length > 0 ? (
                        <div className="space-y-1.5">
                          {rxMeds.map((med, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-[11px] font-medium text-slate-800">
                              <span className="text-blue-600 font-bold">{idx + 1}.</span>
                              <span>{med}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-[11px] text-slate-300 italic">No drugs prescribed yet. Run dictation.</div>
                      )}
                    </div>

                    {/* Advice */}
                    {advice && (
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wide">General Advice</div>
                        <p className="text-[11px] text-slate-700 leading-normal">{advice}</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-100 pt-2 flex items-center justify-between shrink-0">
                    <span className="text-[9px] text-slate-400 font-mono">Sign: ARVIND VERMA</span>
                    <button className="rounded bg-emerald-600 px-3 py-1 text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                      <CheckCircle className="h-3 w-3" />
                      <span>Issue Rx via WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* T3: LAB PARSER */}
            {activeTab === "lab" && (
              <div className="space-y-4">
                
                {/* Upload Action */}
                <div className="flex items-center gap-4 border border-dashed border-slate-300 rounded-lg p-4 bg-slate-50">
                  <div className="h-10 w-10 bg-white border border-slate-200 rounded-md flex items-center justify-center text-slate-400 shadow-sm shrink-0">
                    <UploadCloud className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-bold text-slate-900">
                      {labFile ? `File: ${labFile}` : "Upload patient lab report PDF"}
                    </div>
                    {isParsing ? (
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${parseProgress}%` }}
                        />
                      </div>
                    ) : (
                      <p className="text-[11px] text-slate-500 font-medium">Extract structured metrics automatically via pdfjs-dist</p>
                    )}
                  </div>
                  <button
                    onClick={handleParseReport}
                    disabled={isParsing}
                    className="rounded bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm shrink-0"
                  >
                    {isParsing ? "Parsing..." : "Parse Report"}
                  </button>
                </div>

                {/* Parsed table */}
                {parsedMetrics.length > 0 ? (
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-[12px] border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wide">
                          <th className="py-2 px-4">Test Name</th>
                          <th className="py-2 px-4">Extracted Value</th>
                          <th className="py-2 px-4">Reference Range</th>
                          <th className="py-2 px-4 text-right">Flag</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                        {parsedMetrics.map((m) => (
                          <tr key={m.testName} className={cn(m.flag !== "Normal" ? "bg-red-50/20" : "")}>
                            <td className="py-2 px-4 font-bold">{m.testName}</td>
                            <td className="py-2 px-4 font-mono">
                              {m.value} <span className="text-[10px] text-slate-400">{m.unit}</span>
                            </td>
                            <td className="py-2 px-4 text-slate-500 font-mono">{m.refRange}</td>
                            <td className="py-2 px-4 text-right">
                              <span
                                className={cn(
                                  "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-extrabold uppercase border",
                                  m.flag === "Normal"
                                    ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                                    : "bg-red-50 border-red-200 text-red-700"
                                )}
                              >
                                {m.flag !== "Normal" && <AlertCircle className="h-3 w-3" />}
                                {m.flag}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="border border-slate-100 rounded-lg p-8 text-center text-xs text-slate-400 italic">
                    {isParsing ? "Reading test metrics..." : "No lab report data parsed yet. Click 'Parse Report' above."}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Bottom actions */}
          <div className="border-t border-slate-100 pt-3 mt-4 flex justify-between items-center text-[10px] text-slate-400 font-semibold shrink-0">
            <span>Clinic OS Workspace v1.0.4</span>
            <span>✓ Secure ABDM Care-Context Tunnel</span>
          </div>

        </div>

      </div>
    </section>
  );
}
