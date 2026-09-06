import React from 'react';
import { Building2, Utensils, Warehouse, ShieldAlert, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface CommercialSectionProps {
  onOpenBooking: () => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({ onOpenBooking }) => {
  const industries = [
    {
      icon: <Utensils className="w-5 h-5 text-emerald-700" />,
      title: 'Restaurants & Hospitality',
      description: 'Zero-tolerance fly, roach, and rodent defense with discreet off-hours treatments.',
    },
    {
      icon: <Warehouse className="w-5 h-5 text-emerald-700" />,
      title: 'Warehouses & Logistics',
      description: 'Barcode-scanned perimeter stations ensuring clean dock bays and food-grade supply compliance.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-emerald-700" />,
      title: 'Offices & Commercial Complexes',
      description: 'Scheduled preventive envelopes that protect tenant comfort and asset value.',
    },
  ];

  return (
    <section id="commercial" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#122e22] to-[#1a4332] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-emerald-300 text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Regulatory IPM Compliance (FDA • USDA • HACCP)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
                Enterprise & Commercial <br />
                Pest Defense Solutions
              </h2>

              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Protect your brand equity, licensing, and operational continuity with proactive Integrated Pest Management (IPM), digital audit-ready logs, and 24-hour priority dispatch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {industries.map((ind, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-emerald-900/60 flex items-center justify-center mb-3">
                      {ind.icon}
                    </div>
                    <h4 className="text-sm font-bold font-heading mb-1">{ind.title}</h4>
                    <p className="text-[11px] text-emerald-100/70 leading-relaxed">{ind.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 active:scale-95 transition-all shadow-md"
                >
                  <span>Request Facility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-emerald-200/80 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  Same-Day Electronic Compliance Reports
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="bg-white/95 rounded-2xl p-6 text-slate-900 shadow-xl border border-white/20">
                <h3 className="text-base font-bold font-heading mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  Apex Commercial IPM Guarantee
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                    <span>Discreet after-hours inspection and application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                    <span>Barcode-tagged bait stations for audit trail tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                    <span>Dedicated certified commercial account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                    <span>Zero-pesticide odor & food-safe formulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                    <span>Guaranteed passing score on municipal health audits</span>
                  </li>
                </ul>

                <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-bold text-slate-800">Commercial Hotline</span>
                    <span className="text-slate-600">(800) 555-2739 Ext. 2</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-semibold text-[11px]">
                    24/7 Priority
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
