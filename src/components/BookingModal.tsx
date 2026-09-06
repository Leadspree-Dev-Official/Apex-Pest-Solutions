import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Home, Building, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { InspectionBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
  preSelectedPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  preSelectedPlan,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<InspectionBooking>({
    pestType: preSelectedService || 'Termite Control',
    propertyType: 'residential',
    propertySize: '1,500 - 2,500 sq ft',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    urgency: 'routine',
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    notes: '',
    selectedPlan: preSelectedPlan || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const pestOptions = [
    'Termite Control',
    'Rodent Removal',
    'General Pest Control',
    'Cockroach Control',
    'Bed Bug Treatment',
    'Ant Control',
    'Mosquito Control',
    'Commercial Pest Services',
    'Preventive Maintenance Plans',
    'Other / Unidentified Bug',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission
      const randomRef = 'APX-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#183b2b] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Apex Guaranteed Inspection</span>
          </div>

          <h3 className="text-2xl font-bold font-heading">
            {isSubmitted ? 'Inspection Confirmed!' : 'Schedule Free Inspection'}
          </h3>
          <p className="text-emerald-100/80 text-xs sm:text-sm mt-1">
            {isSubmitted
              ? 'A certified technician has been reserved for your property.'
              : 'Zero-obligation property evaluation by a licensed technician.'}
          </p>

          {/* Progress Indicator if not submitted */}
          {!isSubmitted && (
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/15">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex items-center gap-1.5">
                  <div
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      s <= step ? 'bg-emerald-400' : 'bg-white/20'
                    }`}
                  />
                  <span className="text-[10px] text-emerald-200 font-mono font-medium">
                    0{s}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs text-slate-600 block">Inspection Reference Number</span>
                <span className="text-2xl font-mono font-extrabold text-[#183b2b]">
                  {bookingRef}
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600">Service:</span>
                  <span className="font-bold text-slate-900">{formData.pestType}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600">Target Date:</span>
                  <span className="font-bold text-slate-900">{formData.preferredDate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600">Time Window:</span>
                  <span className="font-bold text-slate-900">{formData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Property Address:</span>
                  <span className="font-bold text-slate-900 line-clamp-1">{formData.streetAddress || 'On File'}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Confirmation SMS and email have been dispatched to <strong>{formData.phone || formData.email}</strong>. Our dispatch desk will call 30 minutes prior to technician arrival.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 rounded-full bg-[#183b2b] text-white font-semibold text-sm hover:bg-[#122e22] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            /* Multi-step form */
            <form onSubmit={handleNext} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Select Pest Concern
                    </label>
                    <select
                      name="pestType"
                      value={formData.pestType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    >
                      {pestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Category
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 text-xs font-semibold transition-all ${
                          formData.propertyType === 'residential'
                            ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 ring-1 ring-emerald-800'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Home className="w-4 h-4 text-emerald-700" />
                        <div>
                          <span>Residential Home</span>
                          <span className="block text-[10px] font-normal text-slate-600">House, condo, townhouse</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 text-xs font-semibold transition-all ${
                          formData.propertyType === 'commercial'
                            ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 ring-1 ring-emerald-800'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Building className="w-4 h-4 text-emerald-700" />
                        <div>
                          <span>Commercial Facility</span>
                          <span className="block text-[10px] font-normal text-slate-600">Office, food service, warehouse</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Estimated Structure Size
                    </label>
                    <select
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    >
                      <option value="Under 1,500 sq ft">Under 1,500 sq ft</option>
                      <option value="1,500 - 2,500 sq ft">1,500 - 2,500 sq ft (Standard)</option>
                      <option value="2,500 - 4,000 sq ft">2,500 - 4,000 sq ft (Large Home)</option>
                      <option value="4,000+ sq ft / Commercial Campus">4,000+ sq ft / Commercial Campus</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Time Window
                    </label>
                    <div className="space-y-2">
                      {[
                        'Morning (8:00 AM - 12:00 PM)',
                        'Afternoon (12:00 PM - 4:00 PM)',
                        'Evening (4:00 PM - 7:00 PM)',
                        'Emergency Immediate Dispatch (Within 2 Hours)',
                      ].map((slot) => (
                        <label
                          key={slot}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            formData.preferredTime === slot
                              ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 font-semibold'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredTime"
                            value={slot}
                            checked={formData.preferredTime === slot}
                            onChange={handleInputChange}
                            className="text-emerald-800 focus:ring-emerald-800"
                          />
                          <span>{slot}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="John Smith"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(555) 019-2834"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        City / ZIP Code
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Dallas, TX 75001"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      placeholder="1234 Elm Street, Suite 200"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Special Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="e.g., Gate code is #4021, have two golden retrievers"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-800 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#183b2b] text-white font-semibold text-sm hover:bg-[#122e22] shadow-sm transition-all"
                >
                  <span>{step === 3 ? 'Confirm Free Inspection' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
