import React from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  BadgeCheck,
  Zap,
  Scan,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { TRUST_BADGES } from '../data/pestData';
import { ApexLogo } from './PestIcons';

export const TrustBadgesSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'b1':
        return <ShieldCheck className="w-7 h-7 text-emerald-800" />;
      case 'b2':
        return <Award className="w-7 h-7 text-emerald-800" />;
      case 'b3':
        return <CheckCircle2 className="w-7 h-7 text-emerald-800" />;
      case 'b4':
        return <BadgeCheck className="w-7 h-7 text-emerald-800" />;
      case 'b5':
        return <Zap className="w-7 h-7 text-emerald-800" />;
      case 'b6':
        return <Scan className="w-7 h-7 text-emerald-800" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-emerald-800" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accredited Scientific Compliance</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Trust Badges & Certifications
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every technician and treatment methodology adheres to rigorous state environmental
            standards and scientific Integrated Pest Management (IPM) protocols.
          </p>
        </div>

        {/* 6 Spacious Cards across 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-emerald-700/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(badge.id)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100/60 px-2.5 py-1 rounded-md">
                    Verified
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-800 mb-3">
                  {badge.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Compliance Code: #APX-{badge.id.toUpperCase()}</span>
                <span className="text-emerald-800 font-bold">Active Standing</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Footer Verification Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ApexLogo className="w-9 h-9 shrink-0" showTagline={false} />
            <div>
              <div className="text-sm font-bold text-slate-900">
                National Pest Management Association (NPMA) Member
              </div>
              <div className="text-xs text-slate-500">
                Licensed Structural Pest Control Board • State Dept of Agriculture #SPCB-9022
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Background Screened
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              $2M General Liability Bonded
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
