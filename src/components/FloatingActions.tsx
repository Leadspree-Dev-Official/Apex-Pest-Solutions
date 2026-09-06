import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-10 h-10 rounded-full bg-white text-slate-800 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all active:scale-95"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Free Inspection Pill for mobile */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#183b2b] text-white text-xs font-bold shadow-xl shadow-emerald-950/30 border border-emerald-700/50 active:scale-95"
      >
        <Calendar className="w-4 h-4 text-emerald-400" />
        <span>Free Inspection</span>
      </button>

      {/* Direct Call Floating button */}
      <a
        href="tel:18005552739"
        aria-label="Call emergency dispatch hotline"
        className="w-12 h-12 rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-950/30 flex items-center justify-center hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all"
      >
        <Phone className="w-5 h-5 animate-bounce" />
      </a>
    </div>
  );
};
