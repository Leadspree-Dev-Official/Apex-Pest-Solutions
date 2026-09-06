import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Github, ExternalLink } from 'lucide-react';
import { ApexLogo } from './PestIcons';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenBooking }) => {
  const quickLinks = [
    { name: 'Services Overview', href: '#services' },
    { name: 'About Apex Pest', href: '#about' },
    { name: 'Inspection Process', href: '#process' },
    { name: 'Commercial Defense', href: '#commercial' },
    { name: 'Customer Testimonials', href: '#testimonials' },
    { name: 'Pricing & Plans', href: '#pricing' },
  ];

  const pestServices = [
    { name: 'Termite Thermal Elimination', id: 'termite-control' },
    { name: 'Humane Rodent Removal', id: 'rodent-removal' },
    { name: 'German Cockroach Control', id: 'cockroach-control' },
    { name: 'Bed Bug Heat Remediation', id: 'bed-bug-treatment' },
    { name: 'Ant Colony Eradication', id: 'ant-control' },
    { name: 'Mosquito Yard Barriers', id: 'mosquito-control' },
  ];

  const serviceAreas = [
    'North Metro & Suburbs',
    'Downtown Commercial District',
    'East Valley Residential',
    'Westside Industrial Corridor',
    'South Hills & Waterfront',
    'Regional Greater County',
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0f241a] text-slate-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-sm">
              <ApexLogo className="w-8 h-8" textClassName="text-slate-900" />
            </div>

            <p className="text-sm text-emerald-100/75 leading-relaxed">
              Apex Pest Solutions delivers state-certified, eco-rational residential and commercial pest management. Using high-precision thermal diagnostics and targeted barriers, we safeguard your living spaces with guaranteed results.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-emerald-200/90 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>State License #APX-77402 • Fully Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>24/7 Emergency Dispatch Available</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Pest Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs">
              {pestServices.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="text-left hover:text-emerald-400 transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Emergency & Inquiries
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="tel:18005552739"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/60 hover:border-emerald-500 transition-colors text-white"
              >
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-emerald-300/80 font-mono">24/7 Rapid Hotline</span>
                  <span className="text-sm font-bold">(800) 555-APEX (2739)</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 text-emerald-100/80">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>dispatch@apexpestsolutions.com</span>
              </div>

              <div className="flex items-start gap-2.5 text-emerald-100/80">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Central Operations: 4800 Apex Boulevard, Metro Center</span>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
              >
                Book Inspection Online
              </button>
            </div>
          </div>
        </div>

        {/* Regional Service Areas Banner */}
        <div className="py-6 border-b border-emerald-900/60 flex flex-col md:flex-row md:items-center justify-between text-xs gap-3">
          <span className="font-bold text-emerald-200">Covered Service Territories:</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-emerald-100/70">
            {serviceAreas.map((area, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Attribution Bar matching User Prompt Explicit Mandates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/70">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Apex Pest Solutions. All rights reserved.</span>
          </div>

          {/* Developer and Powered By Credits */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs">
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/90 px-3 py-1.5 rounded-lg border border-emerald-800/70">
              <span className="text-emerald-300">Developer:</span>
              <a
                href="https://github.com/AniruddhaDas1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-emerald-300 inline-flex items-center gap-1 transition-colors underline underline-offset-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Aniruddha Das</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
              </a>
            </span>

            <span className="inline-flex items-center gap-1.5 bg-emerald-950/90 px-3 py-1.5 rounded-lg border border-emerald-800/70">
              <span className="text-emerald-300">Powered by:</span>
              <a
                href="https://leadspree.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-semibold hover:text-emerald-300 inline-flex items-center gap-1 transition-colors underline underline-offset-2"
              >
                <span>LeadSpree Business Solutions (leadspree.in)</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
