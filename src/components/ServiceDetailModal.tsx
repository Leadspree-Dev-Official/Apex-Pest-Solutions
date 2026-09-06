import React from 'react';
import { X, CheckCircle, ShieldCheck, Clock, AlertTriangle, ArrowRight, DollarSign } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Banner */}
        <div className="bg-[#183b2b] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-2">
            Apex Specialized Service
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">{service.name}</h3>
          <p className="text-emerald-100/80 text-sm mt-1">{service.tagline}</p>

          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/15 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <Clock className="w-4 h-4 text-emerald-400" />
              Duration: {service.duration}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {service.warranty}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-200">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              Starting at {service.startingPrice}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Overview & Methodology
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">{service.fullDesc}</p>
          </div>

          {/* Warning Signs / Symptoms */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Common Infestation Symptoms
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.symptoms.map((sym, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-lg text-xs text-slate-700 flex items-start gap-2 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{sym}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Steps */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              Our Eradication Protocol
            </h4>
            <div className="space-y-2">
              {service.treatmentSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="mt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eco rating assurance */}
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span><strong>Formulation Safety:</strong> {service.ecoRating}</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
              Pet & Child Safe
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-600 block">Inspection Starting Price</span>
            <span className="text-lg font-bold text-slate-900">{service.startingPrice}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService(service.name);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#183b2b] text-white font-semibold text-sm hover:bg-[#122e22] shadow-sm transition-all"
          >
            <span>Book {service.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
