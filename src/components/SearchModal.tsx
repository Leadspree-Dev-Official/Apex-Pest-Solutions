import React, { useState } from 'react';
import { Search, X, AlertCircle, ArrowRight, ShieldCheck, Bug } from 'lucide-react';
import { PEST_PEDIA } from '../data/pestData';
import { PestPediaItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleForPest: (pestName: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onScheduleForPest,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredPests = PEST_PEDIA.filter((pest) => {
    const term = searchTerm.toLowerCase();
    return (
      pest.name.toLowerCase().includes(term) ||
      pest.scientificName.toLowerCase().includes(term) ||
      pest.category.toLowerCase().includes(term) ||
      pest.commonSigns.some((sign) => sign.toLowerCase().includes(term)) ||
      pest.recommendedAction.toLowerCase().includes(term)
    );
  });

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'Severe':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'High':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search pest signs, symptoms, bug names (e.g., sawdust, itchy bites, scratching)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-slate-900 text-sm sm:text-base placeholder-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-600 hover:text-slate-600 font-medium px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>
              Showing {filteredPests.length} {filteredPests.length === 1 ? 'pest profile' : 'pest profiles'}
            </span>
            <span className="text-emerald-800 font-semibold">Apex Entomological Database</span>
          </div>

          {filteredPests.length === 0 ? (
            <div className="text-center py-10 text-slate-600">
              <Bug className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold text-slate-700">No matching pests found</p>
              <p className="text-xs mt-1">
                Can't identify the bug? Request a free photo inspection with one of our master entomologists.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onScheduleForPest('Unidentified Insect');
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#183b2b] text-white text-xs font-semibold"
              >
                Request Free Pest ID Consultation
              </button>
            </div>
          ) : (
            filteredPests.map((pest) => (
              <div
                key={pest.id}
                className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-emerald-700/40 hover:shadow-md transition-all space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900 font-heading">
                        {pest.name}
                      </h4>
                      <span className="text-xs italic text-slate-600">({pest.scientificName})</span>
                    </div>
                    <span className="text-[11px] text-slate-600 font-medium">
                      Category: {pest.category}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border ${getRiskBadgeColor(
                      pest.riskLevel
                    )}`}
                  >
                    Risk: {pest.riskLevel}
                  </span>
                </div>

                {/* Common signs */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Key Warning Signs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pest.commonSigns.map((sign, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 text-[11px] px-2 py-0.5 rounded-md"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended action & booking trigger */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-4">
                  <p className="text-xs text-slate-600 line-clamp-1">
                    <strong className="text-slate-800">Remediation:</strong> {pest.recommendedAction}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onScheduleForPest(pest.name);
                    }}
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                  >
                    <span>Schedule Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info note */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-600">
          Need immediate assistance? Call our 24/7 hotline:{' '}
          <a href="tel:18005552739" className="font-bold text-emerald-800 hover:underline">
            (800) 555-APEX
          </a>
        </div>
      </div>
    </div>
  );
};
