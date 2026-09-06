import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { GuaranteeSection } from './components/GuaranteeSection';
import { PricingSection } from './components/PricingSection';
import { TrustBadgesSection } from './components/TrustBadgesSection';
import { TeamShowcase } from './components/TeamShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CommercialSection } from './components/CommercialSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SearchModal } from './components/SearchModal';
import { FloatingActions } from './components/FloatingActions';
import { MAIN_SERVICES } from './data/pestData';
import { ServiceItem, PricingPlan } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preSelectedServiceForBooking, setPreSelectedServiceForBooking] = useState<string>('');
  const [preSelectedPlanForBooking, setPreSelectedPlanForBooking] = useState<string>('');

  // Handle opening booking directly
  const handleOpenBooking = (serviceName?: string, planName?: string) => {
    setPreSelectedServiceForBooking(serviceName || 'General Pest Control');
    setPreSelectedPlanForBooking(planName || '');
    setIsBookingOpen(true);
  };

  // When clicking on a hero feature card or footer link
  const handleSelectServiceById = (serviceId: string) => {
    // Find matching in main services or construct fallback
    const found = MAIN_SERVICES.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    } else {
      // Fallback for hero card 1 & 2
      if (serviceId === 'termite-control') {
        setSelectedService({
          id: 'termite-control',
          name: 'Termite Control & Thermal Detection',
          category: 'termite',
          tagline: 'Infrared acoustic scanning & continuous liquid barrier',
          shortDesc: 'Advanced detection and elimination technologies for complete protection.',
          fullDesc: 'Subterranean and drywood termites cause billions in structural damage silently. Apex deploys non-destructive FLIR thermal imaging and Termidor HP precision high-pressure injection to eliminate colonies down to the subterranean queen.',
          symptoms: ['Mud tubes along concrete foundations', 'Hollow sounding timber when tapped', 'Discarded insect wings on sills', 'Tight sticking doors or windows'],
          treatmentSteps: ['Full perimeter thermal imaging moisture scan', 'Targeted sub-slab termiticide barrier injection', 'Monitoring stations with electronic barcode logging', 'Annual re-inspection warranty guarantee'],
          duration: '2 - 3 hours',
          warranty: 'Lifetime Renewable Warranty',
          ecoRating: 'Non-Volatile Soil Bonded Material',
          startingPrice: '$280',
        });
      } else if (serviceId === 'rodent-removal') {
        setSelectedService({
          id: 'rodent-removal',
          name: 'Rodent Removal & Structural Exclusion',
          category: 'rodent',
          tagline: 'Humane eviction and impenetrable physical building envelope sealing',
          shortDesc: 'Humane and effective solutions for a rodent-free environment.',
          fullDesc: 'Rats and mice chew through electrical wiring, contaminate insulation, and harbor dangerous pathogens. Our specialized 4-stage exclusion program seals all structural ingress points using galvanized steel mesh before humanely sanitizing the structure.',
          symptoms: ['Nocturnal scratching sounds in attic or drywall', 'Dark droppings near pantries or baseboards', 'Gnaw marks on wood, plastics, or wiring', 'Pet agitation along particular walls'],
          treatmentSteps: ['Complete 360-degree roofline & crawlspace inspection', 'Mechanical trapping & humane evacuation', 'Structural exclusion with metal flashings & chew-proof sealant', 'Full sanitization & biological deodorization of attic space'],
          duration: '1 - 2 hours initial',
          warranty: '1-Year Total Exclusion Warranty',
          ecoRating: 'Poison-Free Mechanical Methods',
          startingPrice: '$190',
        });
      } else {
        handleOpenBooking('General Pest Control');
      }
    }
  };

  // When clicking a plan card in the pricing section
  const handleSelectPlan = (plan: PricingPlan) => {
    handleOpenBooking('Scheduled Service', plan.name);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-800 selection:text-white">
      {/* Navbar with brand, links, search button, and free inspection CTA */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section matching reference */}
        <HeroSection
          onScheduleInspection={() => handleOpenBooking()}
          onGetQuote={() => setIsQuoteOpen(true)}
          onSelectService={handleSelectServiceById}
        />

        {/* Complete Pest Protection Services matching reference 6-grid */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* Individual, Spacious Sections */}
        <BeforeAfterShowcase />
        <GuaranteeSection onClaimWarranty={() => handleOpenBooking('Warranty Inspection')} />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <TrustBadgesSection />
        <TeamShowcase
          onSelectTechnician={(tech) =>
            handleOpenBooking(`${tech.specialties[0]} with ${tech.name}`)
          }
        />
        <TestimonialsSection />

        {/* Commercial Pest Solutions */}
        <CommercialSection onOpenBooking={() => handleOpenBooking('Commercial Pest Defense')} />
      </main>

      {/* Footer matching reference and prompt requirements */}
      <Footer
        onSelectService={handleSelectServiceById}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Action Button for mobile & quick call */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedService={preSelectedServiceForBooking}
        preSelectedPlan={preSelectedPlanForBooking}
      />

      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        onBookWithQuote={(details) => handleOpenBooking(details)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(name) => handleOpenBooking(name)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onScheduleForPest={(pestName) => handleOpenBooking(pestName)}
      />
    </div>
  );
}
