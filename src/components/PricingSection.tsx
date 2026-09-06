import React, { useState } from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight, Table, LayoutGrid, X } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

// Full feature comparison data
interface FeatureComparisonRow {
  name: string;
  category: string;
  oneTime: string | boolean;
  shield: string | boolean;
  quarterly: string | boolean;
}

const FEATURE_COMPARISON_MATRIX: FeatureComparisonRow[] = [
  {
    name: 'Infrared FLIR Thermal Diagnostic',
    category: 'Inspection & Detection',
    oneTime: 'Visual Only',
    shield: true,
    quarterly: true,
  },
  {
    name: 'Target Ingress Points Sealed',
    category: 'Inspection & Detection',
    oneTime: 'Up to 2 points',
    shield: 'Up to 6 points',
    quarterly: 'Unlimited Points',
  },
  {
    name: 'Foundation Perimeter Shield (10-ft)',
    category: 'Remediation & Barrier',
    oneTime: true,
    shield: true,
    quarterly: true,
  },
  {
    name: 'Attic & Crawlspace Fogging',
    category: 'Remediation & Barrier',
    oneTime: false,
    shield: true,
    quarterly: true,
  },
  {
    name: 'Bio-Gel Kickplate Baiting',
    category: 'Remediation & Barrier',
    oneTime: true,
    shield: true,
    quarterly: true,
  },
  {
    name: 'Web De-Cobbing & Eave Cleanout',
    category: 'Remediation & Barrier',
    oneTime: 'Up to 10 ft',
    shield: 'Up to 20 ft',
    quarterly: 'Up to 30 ft (Full Roofline)',
  },
  {
    name: 'Subterranean Termite Monitoring',
    category: 'Specialty Coverage',
    oneTime: false,
    shield: 'Add-on ($15/mo)',
    quarterly: true,
  },
  {
    name: 'Unlimited Free Emergency Re-Service',
    category: 'Warranty & Support',
    oneTime: '30 Days',
    shield: '90 Days',
    quarterly: 'Full Year (Unlimited)',
  },
  {
    name: 'Guaranteed Emergency Response Window',
    category: 'Warranty & Support',
    oneTime: '48 Hours',
    shield: '24 Hours',
    quarterly: 'Under 12 Hours',
  },
  {
    name: 'EPA Reduced-Risk Botanical Formulations',
    category: 'Safety & Environmental',
    oneTime: true,
    shield: true,
    quarterly: true,
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'programs' | 'single'>('programs');
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  // Dynamic plans based on billing cycle selection
  const currentPlans: PricingPlan[] = billingCycle === 'programs'
    ? [
        {
          id: 'starter-plan',
          name: 'Home Guard Quarterly',
          price: '$39',
          period: 'per month ($117/qtr)',
          tagline: 'Year-round preventive barrier keeping common crawling insects outside.',
          popular: false,
          coverage: '15+ Common Pests',
          guaranteeText: '100% Free Re-treatment Warranty',
          ctaText: 'Select Home Guard',
          shortFeatures: ['Exterior barrier', 'De-webbing', 'Quarterly visits', 'Free re-treatment'],
          features: [
            'Exterior 10-foot liquid protective shield',
            'Full perimeter de-webbing up to 15 feet',
            'Granular turf barrier around foundation',
            'Unlimited free re-treatment if pests return',
            'Family and pet-friendly botanical active agents',
          ],
        },
        {
          id: 'inspection-shield',
          name: 'Inspection & Shield Plus',
          price: '$59',
          period: 'per month ($177/qtr)',
          tagline: 'Deep thermal camera diagnostic + complete attic, crawlspace & exterior shield.',
          popular: true,
          coverage: 'Whole Home + Attic & Crawlspace',
          guaranteeText: '24-Hour Emergency Dispatch Guarantee',
          ctaText: 'Schedule Most Popular Plan',
          shortFeatures: ['Thermal FLIR scan', 'Attic & Crawlspace', 'Pipe penetration seal', 'Priority response'],
          features: [
            'Infrared thermal camera moisture & pest scan',
            'Full interior baseboard, attic & crawlspace treatment',
            '10-foot external perimeter defense envelope',
            'Door sweep & plumbing penetration sealing (up to 6 points)',
            'Roofline wasp nest & spider web removal up to 25 ft',
            'Priority emergency dispatch within 12 hours',
          ],
        },
        {
          id: 'total-shield-termite',
          name: 'Apex Total Defense & Termite',
          price: '$89',
          period: 'per month ($267/qtr)',
          tagline: 'The ultimate property fortress: general pests + termite warranty + rodent exclusion.',
          popular: false,
          coverage: 'All Pests + Subterranean Termites',
          guaranteeText: '$2,000,000 Structural Damage Bond',
          ctaText: 'Protect Entire Property',
          shortFeatures: ['Termite stations', 'Attic restoration', 'Rodent exclusion', 'Personal Entomologist'],
          features: [
            'Everything included in Inspection & Shield Plus',
            'Advance Termite Bait Station installation & monitoring',
            '$2,000,000 renewable structural damage repair bond',
            'Complete rodent entry exclusion with steel wire mesh',
            'Dedicated licensed master entomologist assigned to property',
          ],
        },
      ]
    : [
        {
          id: 'targeted-flushout',
          name: 'Targeted Pest Knockdown',
          price: '$149',
          period: 'One-Time Service',
          tagline: 'Immediate single-room or isolated pest flushout and elimination.',
          popular: false,
          coverage: 'Single Targeted Pest Room',
          guaranteeText: '30-Day Re-treatment Guarantee',
          ctaText: 'Book Single Knockdown',
          shortFeatures: ['Targeted room audit', 'Baseboard micro-baiting', '30-day warranty'],
          features: [
            'Forensic inspection of active infestation area',
            'Targeted micro-encapsulated bait & dusting',
            'Primary entry point sealing (up to 2 locations)',
            '30-day service warranty for treated pest',
            'Digital remediation findings summary report',
          ],
        },
        {
          id: 'whole-home-cleanout',
          name: 'Whole-Home Remediation',
          price: '$249',
          period: 'One-Time Complete Flush',
          tagline: 'Full internal and external cleanout for established active infestations.',
          popular: true,
          coverage: 'Entire Home (Up to 3,000 sq ft)',
          guaranteeText: '60-Day Pest-Free Warranty',
          ctaText: 'Book Full Remediation',
          shortFeatures: ['Full house treatment', 'Thermal imaging', 'Exterior barrier', '60-day warranty'],
          features: [
            'Thermal infrared scan of walls, cabinets & attic voids',
            'Complete interior baseboard void dusting & bio-gel baiting',
            'High-pressure exterior perimeter foundation spray',
            'Comprehensive ingress sealing (up to 5 key points)',
            '60-day comprehensive re-treatment warranty',
          ],
        },
        {
          id: 'heavy-infestation-bond',
          name: 'Severe Infestation Knockdown',
          price: '$389',
          period: 'Two-Visit Intensive Cleanout',
          tagline: 'Heavy German roach, severe rodent, or flea intensive eradication.',
          popular: false,
          coverage: 'Extreme Infestations + Attic/Crawlspace',
          guaranteeText: '90-Day Full Eradication Guarantee',
          ctaText: 'Book Intensive Knockdown',
          shortFeatures: ['2 Full visits included', 'ULV cold fogging', 'HEPA vacuuming', '90-day warranty'],
          features: [
            'Two comprehensive treatments included (Initial + 14-day follow-up)',
            'ULV cold aerosol fogging for deep void penetration',
            'HEPA vacuuming of active egg casings and harborages',
            'Heavy-gauge exclusion sealing on all exterior access voids',
            '90-day 100% money-back eradication guarantee',
          ],
        },
      ];

  return (
    <section id="pricing" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing & Features</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Pest Inspection & Protection Plans
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Transparent pricing with zero hidden fees, eco-safe botanical treatments, and complete
            money-back warranty protection.
          </p>

          {/* Controls: Billing Cycle Switch & View Mode Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {/* Cycle Toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold shadow-2xs">
              <button
                type="button"
                onClick={() => setBillingCycle('programs')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  billingCycle === 'programs'
                    ? 'bg-[#183b2b] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Recommended Programs (Save 20%)
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('single')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  billingCycle === 'single'
                    ? 'bg-[#183b2b] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Single-Visit Remediation
              </button>
            </div>

            {/* View Mode Switch */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${
                  viewMode === 'cards'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Cards</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${
                  viewMode === 'matrix'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Feature Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: 3 Spacious Plan Cards */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {currentPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate-50/80 border-2 border-emerald-800 shadow-xl ring-1 ring-emerald-800/20 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Popular Pill Placement */}
                  {plan.popular ? (
                    <div className="inline-block mb-3">
                      <span className="bg-[#183b2b] text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                        Most Popular Choice
                      </span>
                    </div>
                  ) : (
                    <div className="inline-block mb-3">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                        {billingCycle === 'programs' ? 'Preventive Program' : 'Targeted Cleanout'}
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <h3 className="text-2xl font-bold font-heading text-slate-900 leading-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 min-h-[2.5rem] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price Display */}
                  <div className="mt-5 pb-5 border-b border-slate-200">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 font-medium">
                        /{plan.period}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{plan.guaranteeText}</span>
                    </div>
                  </div>

                  {/* Comprehensive Feature Checklist */}
                  <div className="py-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3.5">
                      Included Protection Features:
                    </div>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 shadow-2xs ${
                      plan.popular
                        ? 'bg-[#183b2b] text-white hover:bg-[#11291f] shadow-md hover:shadow-lg'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Interactive Full Feature Matrix */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200">
                    <th className="p-4 sm:p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">
                      Protection Feature
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Home Guard ($39/mo)
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-50/60">
                      Shield Plus ($59/mo) ★
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Total Defense ($89/mo)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                  {FEATURE_COMPARISON_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-medium text-slate-900">
                        {row.name}
                        <span className="block text-[11px] text-slate-400 font-normal mt-0.5">
                          {row.category}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5">
                        {typeof row.oneTime === 'boolean' ? (
                          row.oneTime ? (
                            <Check className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300" />
                          )
                        ) : (
                          <span className="font-semibold text-slate-700">{row.oneTime}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 bg-emerald-50/30">
                        {typeof row.shield === 'boolean' ? (
                          row.shield ? (
                            <Check className="w-5 h-5 text-emerald-700" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300" />
                          )
                        ) : (
                          <span className="font-bold text-emerald-900">{row.shield}</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5">
                        {typeof row.quarterly === 'boolean' ? (
                          row.quarterly ? (
                            <Check className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300" />
                          )
                        ) : (
                          <span className="font-bold text-slate-900">{row.quarterly}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Matrix Quick CTA Bar */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-medium">
                All plans include EPA-compliant formulations and 100% money-back warranty.
              </span>
              <button
                type="button"
                onClick={() => onSelectPlan(currentPlans[1])}
                className="px-6 py-2.5 rounded-xl bg-[#183b2b] text-white text-xs font-bold hover:bg-[#11291f] transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Select Most Popular Plan ($59/mo)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Commercial & Multi-Unit Callout */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900">
              Need Commercial, Restaurant, or Multi-Family Property Rates?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Customized Integrated Pest Management (IPM) contracts with digital health inspection logs
              and 24-hour emergency response SLAs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectPlan(currentPlans[1])}
            className="shrink-0 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold hover:bg-slate-100 text-xs sm:text-sm transition-colors shadow-2xs"
          >
            Request Commercial Proposal
          </button>
        </div>
      </div>
    </section>
  );
};
