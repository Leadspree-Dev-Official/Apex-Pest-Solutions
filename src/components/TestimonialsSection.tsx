import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/pestData';

export const TestimonialsSection: React.FC = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  // Show 3 reviews per page
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / reviewsPerPage);

  const displayedReviews = TESTIMONIALS.slice(
    activePageIndex * reviewsPerPage,
    (activePageIndex + 1) * reviewsPerPage
  );

  const prevPage = () => {
    setActivePageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setActivePageIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Customer Reviews</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Customer Testimonials Section
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Real feedback from property owners who reclaimed their homes with Apex Pest Solutions.
          </p>

          {/* Rating Summary Strip */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 py-2.5 px-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900 font-mono">
              4.9 / 5.0
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-medium text-slate-600">
              2,400+ Verified Customer Ratings
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              99.2% Resolution Success Rate
            </span>
          </div>
        </div>

        {/* 3 Spacious Columns of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Header: Avatar, Name, Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600/30 shadow-inner shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-1">
                        {review.name}
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                      </h3>
                      <p className="text-xs text-slate-500">
                        {review.location}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-emerald-800/20 shrink-0" />
                </div>

                {/* Stars & Service pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-md">
                    {review.serviceReceived}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>

              {/* Verified Homeowner Footer */}
              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>{review.role}</span>
                <span className="text-emerald-800 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Case
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / Navigation Controls if multiple pages */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevPage}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Reviews</span>
            </button>
            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePageIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activePageIndex === i ? 'w-6 bg-[#183b2b]' : 'bg-slate-300'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextPage}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
            >
              <span>Next Reviews</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
