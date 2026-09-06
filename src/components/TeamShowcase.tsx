import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';
import { TECHNICIANS } from '../data/pestData';
import { TeamMember } from '../types';

interface TeamShowcaseProps {
  onSelectTechnician?: (tech: TeamMember) => void;
}

export const TeamShowcase: React.FC<TeamShowcaseProps> = ({ onSelectTechnician }) => {
  return (
    <section id="team" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>State-Licensed Field Specialists</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Technician Team Showcase
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Our certified entomologists and licensed field specialists are background-verified,
            equipped with cutting-edge detection gear, and dedicated to permanent pest removal.
          </p>
        </div>

        {/* 3 Spacious Columns across max-w-7xl */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNICIANS.map((tech) => (
            <div
              key={tech.id}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-700/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Header with Photo and Verification Seal */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-emerald-800/20 shadow-sm shrink-0">
                    <img
                      src={tech.photo}
                      alt={tech.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1.5 right-1.5 bg-[#11291f] p-1 rounded-md text-emerald-300 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 leading-tight">
                      {tech.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                      {tech.title}
                    </p>
                    <div className="flex items-center gap-1 mt-1.5">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-700 ml-1">
                        {tech.rating}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({tech.reviewsCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technician Quote */}
                <blockquote className="text-xs sm:text-sm text-slate-600 italic bg-white p-3.5 rounded-xl border border-slate-200/80 mb-4 leading-relaxed">
                  "{tech.quote}"
                </blockquote>

                {/* Specialties tags */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                    Core Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with License & Experience without truncation */}
              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{tech.experience}</span>
                  </span>
                  <span className="font-mono font-bold text-emerald-900 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
                    {tech.licenseNumber}
                  </span>
                </div>

                {onSelectTechnician && (
                  <button
                    type="button"
                    onClick={() => onSelectTechnician(tech)}
                    className="w-full py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-emerald-800 hover:text-white hover:border-emerald-800 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>Request {tech.name.split(' ')[0]} For Inspection</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Credential Assurance Bar */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                100% Background-Checked & Drug-Screened Technicians
              </h4>
              <p className="text-xs text-slate-500">
                All staff arrive in clearly marked Apex company vehicles with picture photo ID badges.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-900 bg-emerald-100/80 px-4 py-2 rounded-xl shrink-0">
            State License #APX-MASTER-902
          </span>
        </div>
      </div>
    </section>
  );
};
