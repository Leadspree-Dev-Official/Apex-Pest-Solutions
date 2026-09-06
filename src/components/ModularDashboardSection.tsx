import React from 'react';
import { BeforeAfterShowcase } from './BeforeAfterShowcase';
import { TestimonialsSection } from './TestimonialsSection';
import { TrustBadgesSection } from './TrustBadgesSection';
import { GuaranteeSection } from './GuaranteeSection';
import { PricingSection } from './PricingSection';
import { TeamShowcase } from './TeamShowcase';
import { PricingPlan } from '../types';

interface ModularDashboardSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const ModularDashboardSection: React.FC<ModularDashboardSectionProps> = ({
  onSelectPlan,
}) => {
  return (
    <section id="process" className="py-16 bg-[#e9ecef]/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle section label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-300/70">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Operational Standards & Quality Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Apex Certified Performance Ecosystem
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-0">
            Real evidence, verified customer reviews & field-tested protocols
          </p>
        </div>

        {/* 3x2 Modular Grid matching reference image bottom board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Row 1 - Left: Before/After Pest Control Showcase */}
          <div className="h-full">
            <BeforeAfterShowcase />
          </div>

          {/* Row 1 - Middle: Customer Testimonials Section */}
          <div id="testimonials" className="h-full">
            <TestimonialsSection />
          </div>

          {/* Row 1 - Right: Trust Badges and Certifications */}
          <div className="h-full">
            <TrustBadgesSection />
          </div>

          {/* Row 2 - Left: Service Guarantee Section */}
          <div className="h-full">
            <GuaranteeSection />
          </div>

          {/* Row 2 - Middle: Pricing or Inspection Plans */}
          <div id="pricing" className="h-full">
            <PricingSection onSelectPlan={onSelectPlan} />
          </div>

          {/* Row 2 - Right: Technician Team Showcase */}
          <div id="about" className="h-full">
            <TeamShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};
