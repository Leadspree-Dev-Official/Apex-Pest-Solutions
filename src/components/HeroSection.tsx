import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Thermometer, Flame } from 'lucide-react';
import { TermiteIcon, RodentIcon, InsectClusterIcon } from './PestIcons';

interface HeroSectionProps {
  onScheduleInspection: () => void;
  onGetQuote: () => void;
  onSelectService: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScheduleInspection,
  onGetQuote,
  onSelectService,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background subtle geometric accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-emerald-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 lg:pr-4 space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>EPA Registered • Child & Pet-Safe Formulas</span>
            </div>

            {/* Main Headline matching reference */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.12] tracking-tight font-heading">
              Safe, Fast & Reliable <br />
              <span className="text-slate-900">Pest Control Solutions</span>
            </h1>

            {/* Subheading matching reference */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Expert pest control services for homes and businesses including termite treatment,
              rodent control, insect removal, and preventive protection.
            </p>

            {/* CTAs matching reference: "Schedule Inspection" & "Get Free Quote" */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-schedule-btn"
                type="button"
                onClick={onScheduleInspection}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#183b2b] text-white text-base font-semibold hover:bg-[#122e22] active:scale-[0.98] transition-all shadow-md shadow-emerald-950/20 group"
              >
                <span>Schedule Inspection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-quote-btn"
                type="button"
                onClick={onGetQuote}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-slate-300 text-slate-800 text-base font-semibold bg-white hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all shadow-sm"
              >
                Get Free Quote
              </button>
            </div>

            {/* Key Assurance Bullets */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Zero Odor Formulas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Same-Day Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>100% Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic matching reference image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-900/10 bg-slate-900">
              {/* High-res interior with technician inspection imagery */}
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=85"
                alt="Professional pest control technician conducting baseboard inspection in modern sunlit living room"
                className="w-full h-[380px] sm:h-[460px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient lighting & contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Thermal Inspection Diagnostic HUD Widget (matching the thermal inspection camera on the floor in the reference image) */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 rounded-2xl p-3.5 text-white shadow-xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-semibold tracking-wide uppercase text-emerald-300">
                      Thermal Diagnostic Tool
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono border border-emerald-700/50">
                    FLIR-HD
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-300">Sub-drywall Scan:</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-400">Zero Colony Activity</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-gradient-to-r from-blue-500 via-amber-400 to-rose-500 rounded-full" />
                  <span className="text-[10px] text-slate-300 font-mono">72.4°F Normal</span>
                </div>
              </div>

              {/* Live Badge in Top Corner */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-slate-800 text-xs font-bold shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Apex Certified Specialist on Site
              </div>
            </div>
          </div>
        </div>

        {/* 3 Overlapping Feature Cards matching bottom of hero in reference image */}
        <div className="mt-10 lg:-mt-12 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Termite Control (Active/Highlighted Dark Forest Green) */}
          <div
            onClick={() => onSelectService('termite-control')}
            className="group cursor-pointer rounded-2xl p-6 bg-[#183b2b] text-white shadow-xl shadow-emerald-950/25 border border-emerald-800/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Icon badge in circle */}
              <div className="w-13 h-13 w-12 h-12 rounded-xl bg-emerald-800/50 border border-emerald-600/40 flex items-center justify-center text-emerald-300 mb-4 group-hover:scale-105 transition-transform">
                <TermiteIcon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading mb-2 text-white">
                Termite Control
              </h2>
              <p className="text-emerald-100/80 text-sm leading-relaxed mb-4">
                Advanced detection and elimination technologies for complete protection.
              </p>
            </div>
            <div className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">
              <span>Learn More</span>
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </div>
          </div>

          {/* Card 2: Rodent Removal (Crisp White Card with soft shadow) */}
          <div
            onClick={() => onSelectService('rodent-removal')}
            className="group cursor-pointer rounded-2xl p-6 bg-white/95 backdrop-blur-md text-slate-900 shadow-xl shadow-slate-200/70 border border-slate-200 hover:-translate-y-1 hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Icon badge in circle */}
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 mb-4 group-hover:scale-105 transition-transform">
                <RodentIcon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading mb-2 text-slate-900">
                Rodent Removal
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Humane and effective solutions for a rodent-free environment.
              </p>
            </div>
            <div className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">
              <span>View Services</span>
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </div>
          </div>

          {/* Card 3: General Pest Control (Crisp White Card with soft shadow) */}
          <div
            onClick={() => onSelectService('general-pest-control')}
            className="group cursor-pointer rounded-2xl p-6 bg-white/95 backdrop-blur-md text-slate-900 shadow-xl shadow-slate-200/70 border border-slate-200 hover:-translate-y-1 hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Icon badge in circle */}
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 mb-4 group-hover:scale-105 transition-transform">
                <InsectClusterIcon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading mb-2 text-slate-900">
                General Pest Control
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Comprehensive treatments for common household pests.
              </p>
            </div>
            <div className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">
              <span>Discover Options</span>
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
