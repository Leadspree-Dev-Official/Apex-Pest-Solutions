import React, { useState, useRef, useCallback } from 'react';
import {
  Sparkles,
  MoveHorizontal,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Clock,
  Layers,
  FileCheck,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  beforeBadge: string;
  afterBadge: string;
  beforeImage: string;
  afterImage: string;
  findings: string;
  solution: string;
  metric: string;
  features: {
    equipment: string;
    chemistry: string;
    timeline: string;
    warranty: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Kitchen & Food Prep Remediation',
    category: 'German Cockroach & Food Prep Harborage',
    beforeBadge: 'BEFORE: Active Harborage',
    afterBadge: 'AFTER: Sanitized & Pest-Free',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop&q=80',
    findings: 'Heavy German roach colonies nested behind baseboard kickplates and unsealed plumbing penetrations.',
    solution: 'Bio-gel baiting matrix, thermal void dusting, and silicone exclusion barriers along 45 linear feet.',
    metric: '100% Colony Eradication in 48 Hours',
    features: {
      equipment: 'FLIR E8-XT Infrared Thermal Imager & B&G 2600 Fogger',
      chemistry: 'EPA Reduced-Risk Dinotefuran Bio-Gel & Botanical Dust',
      timeline: '48-Hour Complete Knockdown',
      warranty: '90-Day Full Re-Treatment Protection',
    },
  },
  {
    id: 'case-2',
    title: 'Attic & Crawlspace Restoration',
    category: 'Rodent Ingress & Insulation Remediation',
    beforeBadge: 'BEFORE: Contaminated Envelope',
    afterBadge: 'AFTER: Air-Sealed & Disinfected',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&auto=format&fit=crop&q=80',
    findings: 'Attic roofline rodent runways with damaged insulation batts and pheromone urine scent trails.',
    solution: 'Galvanized 1/4" heavy-gauge steel exclusion mesh, HEPA sanitization, and botanical deodorizer fogging.',
    metric: 'Zero Recurrence Guaranteed for 12 Months',
    features: {
      equipment: 'HEPA 500 Negative Air Scrubber & Fiber-Optic Scope',
      chemistry: 'Enzyme-Activated Botanical Sanitizer & Bio-Shield',
      timeline: 'Same-Day Full Seal & Sanitize',
      warranty: '1-Year Structural Exclusion Guarantee',
    },
  },
  {
    id: 'case-3',
    title: 'Subterranean Foundation Perimeter',
    category: 'Termite Protection Trenching & Liquid Shield',
    beforeBadge: 'BEFORE: Foraging Mud Tubes',
    afterBadge: 'AFTER: Non-Repellent Chemical Envelope',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&auto=format&fit=crop&q=80',
    findings: 'Subterranean termite foraging mud tubes entering through concrete expansion cracks along slab edges.',
    solution: 'Continuous liquid termiticide trenching with Termidor HP II high-pressure foundation injection.',
    metric: '10-Year Renewable Structural Protection Bond',
    features: {
      equipment: 'Termidor HP II High-Precision Hydraulic Injection Rig',
      chemistry: 'Fipronil Non-Repellent Liquid Barrier Chemistry',
      timeline: 'Completed within 4 Hours',
      warranty: '10-Year Transferable Structural Warranty',
    },
  },
];

export const BeforeAfterShowcase: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<'diagnosis' | 'features'>('diagnosis');
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASE_STUDIES[activeCaseIndex];

  // Robust pointer move calculation based on exact container bounds
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPosition(Math.round(percentage));
  }, []);

  // Instant response on click/pointer down + pointer capture for smooth dragging
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    updatePosition(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons > 0) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if not captured
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Field Evidence</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Before/After Pest Control Showcase
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Click anywhere on the image or drag the interactive slider to inspect actual property
            remediation results. Clean, verified, 100% pest-free living environments.
          </p>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCaseIndex === idx
                  ? 'bg-[#183b2b] text-white shadow-md ring-2 ring-emerald-700/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Spacious 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Forensic Case Analysis & Features (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Target Threat Classification
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-snug">
                {activeCase.category}
              </h3>
            </div>

            {/* Sub-tab view switch: Diagnosis vs Treatment Features */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('diagnosis')}
                className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
                  activeTab === 'diagnosis'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Diagnosis & Protocol
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('features')}
                className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
                  activeTab === 'features'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Equipment & Features
              </button>
            </div>

            {activeTab === 'diagnosis' ? (
              <div className="space-y-4">
                {/* Findings */}
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Initial Diagnostic Findings</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeCase.findings}
                  </p>
                </div>

                {/* Treatment Deployed */}
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Apex Scientific Protocol Deployed</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeCase.solution}
                  </p>
                </div>
              </div>
            ) : (
              /* Features & Technical Specs View */
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Equipment Utilized</div>
                    <div className="text-xs text-slate-600 mt-0.5">{activeCase.features.equipment}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Layers className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Formulation Chemistry</div>
                    <div className="text-xs text-slate-600 mt-0.5">{activeCase.features.chemistry}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Treatment Timeline</div>
                    <div className="text-xs text-slate-600 mt-0.5">{activeCase.features.timeline}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Warranty Coverage</div>
                    <div className="text-xs text-slate-600 mt-0.5">{activeCase.features.warranty}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Proven Outcome Metric */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="text-xs font-bold text-slate-900">Certified Result:</span>
              </div>
              <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                {activeCase.metric}
              </span>
            </div>
          </div>

          {/* Right: Large Split Slider Stage (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {/* Interactive Image Container with Pointer Events */}
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-900 border border-slate-200 shadow-xl touch-none"
            >
              {/* AFTER Image (Full background layer) */}
              <img
                src={activeCase.afterImage}
                alt={activeCase.afterBadge}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />

              {/* AFTER Floating Pill (Top-Right) */}
              <div
                className={`absolute top-3.5 right-3.5 bg-emerald-950/90 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/40 z-10 flex items-center gap-1.5 shadow-md transition-opacity duration-200 ${
                  sliderPosition > 85 ? 'opacity-30' : 'opacity-100'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{activeCase.afterBadge}</span>
              </div>

              {/* BEFORE Image (Clipped with CSS polygon clip-path - completely immune to distortion) */}
              <div
                className="absolute inset-0 select-none pointer-events-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={activeCase.beforeBadge}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              {/* BEFORE Floating Pill (Top-Left) */}
              <div
                className={`absolute top-3.5 left-3.5 bg-rose-950/90 text-rose-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-rose-500/40 z-10 flex items-center gap-1.5 shadow-md transition-opacity duration-200 ${
                  sliderPosition < 15 ? 'opacity-30' : 'opacity-100'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{activeCase.beforeBadge}</span>
              </div>

              {/* Draggable Divider Line and Knob */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-2xl flex items-center justify-center pointer-events-none z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-slate-800 shadow-xl border-2 border-emerald-800/40 flex items-center justify-center -translate-x-1/2 cursor-grab">
                  <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-[#183b2b]" />
                </div>
              </div>
            </div>

            {/* Quick-Jump Controls for Instant 1-Click Comparison */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="text-xs text-slate-500 font-medium">
                Click or drag anywhere on image to compare ({sliderPosition}% revealed)
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSliderPosition(10)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  View After
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className="px-2.5 py-1 rounded-md bg-[#183b2b] text-[11px] font-bold text-white hover:bg-[#11291f] transition-colors shadow-2xs"
                >
                  50/50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(90)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  View Before
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
