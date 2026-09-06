import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithQuote: (quoteDetails: string) => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  onBookWithQuote,
}) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [sqFt, setSqFt] = useState<number>(2000);
  const [pestType, setPestType] = useState('General Pest Control');
  const [frequency, setFrequency] = useState<'quarterly' | 'onetime'>('quarterly');

  if (!isOpen) return null;

  // Calculate realistic estimate
  const baseRate = {
    'General Pest Control': 120,
    'Termite Control': 280,
    'Rodent Removal': 190,
    'Bed Bug Treatment': 320,
    'Cockroach Control': 160,
    'Mosquito Control': 110,
  }[pestType] || 150;

  const sizeMultiplier = sqFt < 1500 ? 0.9 : sqFt < 2500 ? 1.0 : sqFt < 4000 ? 1.3 : 1.7;
  const commercialMultiplier = propertyType === 'commercial' ? 1.4 : 1.0;
  const estimatedTotal = Math.round(baseRate * sizeMultiplier * commercialMultiplier);
  const discountedRate = frequency === 'quarterly' ? Math.round(estimatedTotal * 0.75) : estimatedTotal;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#183b2b] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Instant Price Estimator</span>
          </div>
          <h3 className="text-2xl font-bold font-heading">Get Your Instant Quote</h3>
          <p className="text-emerald-100/80 text-xs sm:text-sm mt-1">
            Accurate, transparent estimates based on your exact structure size.
          </p>
        </div>

        {/* Form controls */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Property Category */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Property Classification
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPropertyType('residential')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                  propertyType === 'residential'
                    ? 'border-emerald-800 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-800'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Residential Property
              </button>
              <button
                type="button"
                onClick={() => setPropertyType('commercial')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                  propertyType === 'commercial'
                    ? 'border-emerald-800 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-800'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Commercial Facility
              </button>
            </div>
          </div>

          {/* Pest Threat */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Target Pest
            </label>
            <select
              value={pestType}
              onChange={(e) => setPestType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-emerald-800 focus:outline-none"
            >
              <option value="General Pest Control">General Pest Control (Spiders, Ants, Crickets)</option>
              <option value="Termite Control">Termite Control & Prevention</option>
              <option value="Rodent Removal">Rodent Removal (Rats & Mice)</option>
              <option value="Bed Bug Treatment">Bed Bug Thermal Treatment</option>
              <option value="Cockroach Control">Cockroach Elimination</option>
              <option value="Mosquito Control">Backyard Mosquito Barrier</option>
            </select>
          </div>

          {/* Square footage slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Approximate Square Footage:</span>
              <span className="font-mono text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                {sqFt.toLocaleString()} sq ft
              </span>
            </div>
            <input
              type="range"
              min="800"
              max="6000"
              step="200"
              value={sqFt}
              onChange={(e) => setSqFt(Number(e.target.value))}
              className="w-full accent-emerald-800 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
              <span>800 sq ft</span>
              <span>2,500 sq ft</span>
              <span>6,000+ sq ft</span>
            </div>
          </div>

          {/* Plan Frequency */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Service Schedule
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFrequency('quarterly')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  frequency === 'quarterly'
                    ? 'border-emerald-800 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-800'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>Year-Round Protection</span>
                  <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-bold">
                    Save 25%
                  </span>
                </div>
                <span className="block text-[10px] font-normal text-slate-600 mt-0.5">
                  Quarterly visits + free callouts
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFrequency('onetime')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  frequency === 'onetime'
                    ? 'border-emerald-800 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-800'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>One-Time Knockdown</span>
                <span className="block text-[10px] font-normal text-slate-600 mt-0.5">
                  Targeted single treatment
                </span>
              </button>
            </div>
          </div>

          {/* Calculated Output Box */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-600 block">Estimated Starting Rate</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#183b2b] font-heading">
                  ${discountedRate}
                </span>
                <span className="text-xs text-slate-600">
                  {frequency === 'quarterly' ? '/ quarter' : ' one-time'}
                </span>
              </div>
            </div>

            <div className="text-right text-[11px] text-slate-600 space-y-0.5">
              <div className="flex items-center justify-end gap-1 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Hidden Fees</span>
              </div>
              <p>Includes complete inspection</p>
            </div>
          </div>

          {/* Action */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookWithQuote(
                `${pestType} (${sqFt.toLocaleString()} sq ft, ${frequency === 'quarterly' ? 'Quarterly Plan' : 'One-Time'}, Est: $${discountedRate})`
              );
            }}
            className="w-full py-3 rounded-full bg-[#183b2b] text-white font-semibold text-sm hover:bg-[#122e22] shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Lock In This Quote & Schedule</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
