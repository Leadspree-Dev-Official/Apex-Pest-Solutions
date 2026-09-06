import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { ApexLogo } from './PestIcons';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#case-studies' },
    { name: 'Guarantee', href: '#guarantee' },
    { name: 'Plans & Pricing', href: '#pricing' },
    { name: 'Our Team', href: '#team' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Commercial', href: '#commercial' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro emergency hotline bar */}
      <div className="bg-[#11291f] text-emerald-100 text-xs py-1.5 px-4 hidden sm:block border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Rapid Emergency Response Active
            </span>
            <span className="text-emerald-300/40">•</span>
            <span className="text-emerald-200/90 hidden md:inline">
              Licensed & EPA Certified Pest Management
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:18005552739"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Emergency Dispatch: (800) 555-APEX
            </a>
            <span className="text-emerald-200/80 hidden lg:inline">
              Mon - Sat: 7:00 AM - 8:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-lg"
          >
            <ApexLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop Navigation Links (exact match from reference image) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[15px] font-medium text-slate-700 hover:text-emerald-800 transition-colors relative py-1 focus:outline-none focus-visible:text-emerald-800"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs (exact match from reference image) */}
          <div className="flex items-center gap-3">
            {/* Search Button Icon */}
            <button
              id="header-search-btn"
              type="button"
              onClick={onOpenSearch}
              aria-label="Search pest guide and services"
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-emerald-800 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* "Get Free Inspection" Pill Button */}
            <button
              id="header-free-inspection-btn"
              type="button"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#183b2b] text-white text-sm font-semibold tracking-wide hover:bg-[#133023] active:scale-[0.98] transition-all shadow-sm shadow-emerald-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-800"
            >
              Get Free Inspection
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-emerald-800 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#183b2b] text-white font-semibold text-center text-sm shadow-sm hover:bg-[#122e22] transition-colors"
              >
                Get Free Inspection
              </button>
              <a
                href="tel:18005552739"
                className="w-full py-2.5 rounded-full border border-slate-300 text-slate-700 font-semibold text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-800" />
                Call (800) 555-APEX
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
