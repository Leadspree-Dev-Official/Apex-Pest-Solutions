import React from 'react';
import { GuaranteeSealIcon } from './PestIcons';
import { ShieldCheck, RefreshCw, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface GuaranteeSectionProps {
  onClaimWarranty?: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onClaimWarranty }) => {
  return (
    <section id="guarantee" className="py-20 bg-[#11291f] text-white border-t border-emerald-950 relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-emerald-900/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-emerald-800/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Official Guarantee Seal & Promise (5 cols) */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero-Risk Pest Protection</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Our 100% Pest-Free Guarantee
            </h2>

            <p className="text-base text-emerald-100/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We stand behind our scientific IPM methodology without reservation. If covered pests
              reappear between scheduled service intervals, your licensed Apex technician returns
              to inspect, target, and re-treat your property at{' '}
              <span className="text-white font-bold underline decoration-emerald-400 underline-offset-4">
                zero additional cost
              </span>
              .
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-900/40 border border-emerald-700/60 shadow-inner flex items-center gap-3">
                <GuaranteeSealIcon className="w-14 h-14 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-mono font-semibold text-emerald-300">
                    BOND #APX-77402
                  </div>
                  <div className="text-sm font-bold text-white">
                    State Certified & Insured
                  </div>
                  <div className="text-xs text-emerald-200/70">
                    $2,000,000 Property Bond
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Spacious Protection Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Pillar 1 */}
            <div className="bg-emerald-900/30 border border-emerald-700/40 rounded-2xl p-6 flex flex-col justify-between hover:bg-emerald-900/50 transition-colors shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-800/60 border border-emerald-600/50 flex items-center justify-center mb-4 text-emerald-300">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Free Re-Service
                </h3>
                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  Unlimited complimentary re-treatments between regularly scheduled appointments if
                  any pests show up.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-emerald-900/30 border border-emerald-700/40 rounded-2xl p-6 flex flex-col justify-between hover:bg-emerald-900/50 transition-colors shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-800/60 border border-emerald-600/50 flex items-center justify-center mb-4 text-emerald-300">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  24-Hour Response
                </h3>
                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  Emergency warranty dispatch hotline with an authorized field technician onsite
                  within 24 hours.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Priority Dispatch</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-emerald-900/30 border border-emerald-700/40 rounded-2xl p-6 flex flex-col justify-between hover:bg-emerald-900/50 transition-colors shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-800/60 border border-emerald-600/50 flex items-center justify-center mb-4 text-emerald-300">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  Money-Back
                </h3>
                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  If we cannot permanently solve your pest infestation within 30 days, we refund
                  100% of your initial fee.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Unconditional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
