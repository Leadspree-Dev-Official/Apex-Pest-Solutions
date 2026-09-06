import React from 'react';
import { MAIN_SERVICES } from '../data/pestData';
import {
  CockroachIcon,
  BedBugIcon,
  AntIcon,
  MosquitoIcon,
  CommercialBuildingIcon,
  PreventiveBriefcaseIcon,
} from './PestIcons';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const renderIcon = (id: string) => {
    switch (id) {
      case 'cockroach-control':
        return <CockroachIcon className="w-8 h-8 text-slate-800 group-hover:text-emerald-800 transition-colors" />;
      case 'bed-bug-treatment':
        return <BedBugIcon className="w-8 h-8 text-slate-800 group-hover:text-emerald-800 transition-colors" />;
      case 'ant-control':
        return <AntIcon className="w-8 h-8 text-slate-800 group-hover:text-emerald-800 transition-colors" />;
      case 'mosquito-control':
        return <MosquitoIcon className="w-8 h-8 text-slate-800 group-hover:text-emerald-800 transition-colors" />;
      case 'commercial-pest-services':
        return <CommercialBuildingIcon className="w-8 h-8 text-slate-800 group-hover:text-emerald-800 transition-colors" />;
      case 'preventive-maintenance-plans':
        return <PreventiveBriefcaseIcon className="w-8 h-8 text-slate-800 group-hover:text-emerald-800 transition-colors" />;
      default:
        return <CockroachIcon className="w-8 h-8 text-slate-800 group-hover:text-emerald-800 transition-colors" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference image */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Complete Pest Protection Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Targeted, science-backed extermination and preventive barriers engineered for long-term protection.
          </p>
        </div>

        {/* 6 Services Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {MAIN_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group cursor-pointer p-8 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-700/40 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Custom Line Icon */}
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-all">
                  {renderIcon(service.id)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                  {service.name}
                </h3>

                {/* Description matching reference format */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* "Explore >" CTA link */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors"
                >
                  <span>Explore</span>
                  <span className="transition-transform group-hover:translate-x-1">›</span>
                </button>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  From {service.startingPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
