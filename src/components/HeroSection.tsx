import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/catalogData';
import { AnimatedIcon } from './AnimatedIcon';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreCatalog?: () => void;
  onSelectProductForQuote: (product: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreCatalog,
  onSelectProductForQuote,
}) => {
  // Hero featured items
  const heroShowcase = [
    {
      title: 'Visiting Card',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_18.39.16_55b83066.jpeg',
      productId: 'biz-cards',
      offsetClass: '',
    },
    {
      title: 'Billbook',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_18.39.53_c85cb1a7.jpeg',
      productId: 'bill-books-invoices',
      offsetClass: 'lg:translate-y-6',
    },
    {
      title: 'Pamplets & Flyers',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_18.40.24_c2b843dc.jpeg',
      productId: 'flyers-pamphlets',
      offsetClass: '',
    },
    {
      title: 'Catalogue & Brochure',
      image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_18.41.03_cf0e31ee.jpeg',
      productId: 'brochures-catalogues',
      offsetClass: 'lg:translate-y-6',
    },
  ];

  return (
    <section className="relative pt-6 sm:pt-12 pb-12 sm:pb-20 md:pb-28 border-b border-[#26262B] overflow-hidden" id="home">
      {/* Dynamic ambient background glows */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#26262B] mb-4 sm:mb-6 w-fit">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF7A00] animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-bold text-[#B8B8C0] uppercase tracking-wider">
              YOUR COMPLETE BRANDING PARTNER
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.08] mb-3 sm:mb-4">
            Printing. Branding. <br />
            <span className="text-[#FF7A00]">Business Solutions.</span>
          </h1>

          <h2 className="text-base sm:text-xl md:text-2xl text-white/90 font-medium mb-4 sm:mb-6 leading-snug">
            Everything Your Business Needs Under One Roof.
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-[#B8B8C0] mb-6 sm:mb-8 leading-relaxed">
            From precision corporate printing and premium corporate gifting to outdoor signage, branded merchandise, and digital brand solutions — TeqqnoWorld delivers end-to-end excellence for growing enterprises and established brands across Hyderabad & beyond.
          </p>

          {/* CTA Cluster - Full width touch targets on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20an%20instant%20quote%20for%20printing%20and%20branding."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 sm:py-3.5 px-6 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs sm:text-sm font-semibold transition-all custom-glow flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg shadow-[#FF7A00]/25 group"
            >
              <span>Get Free Quote</span>
              <AnimatedIcon name="arrow_forward" animation="nudge" color="text-white" size="text-sm" />
            </a>

            <a
              className="py-3 sm:py-3.5 px-6 rounded-lg bg-[#151518] border border-[#26262B] hover:border-[#25D366] text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group active:scale-95"
              href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20discuss%20a%20project."
              rel="noopener noreferrer"
              target="_blank"
            >
              <AnimatedIcon name="chat" animation="pulse" color="text-[#25D366]" size="text-base" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Trust Indicators Row with Animated Icons */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-[#26262B]">
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 group">
              <AnimatedIcon name="verified" animation="sparkle" color="text-[#FF7A00]" size="text-lg sm:text-xl" />
              <span className="text-[10px] sm:text-xs text-[#B8B8C0] font-medium leading-tight">ISO Standards</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 group">
              <AnimatedIcon name="speed" animation="pulse" color="text-[#FF7A00]" size="text-lg sm:text-xl" />
              <span className="text-[10px] sm:text-xs text-[#B8B8C0] font-medium leading-tight">Rapid Delivery</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5 group">
              <AnimatedIcon name="precision_manufacturing" animation="wiggle" color="text-[#FF7A00]" size="text-lg sm:text-xl" />
              <span className="text-[10px] sm:text-xs text-[#B8B8C0] font-medium leading-tight">100% In-House</span>
            </div>
          </div>
        </div>

        {/* Hero Right Column: Compact 2-column showcase on mobile */}
        <div className="lg:col-span-6 relative mt-2 lg:mt-0">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {heroShowcase.map((item, index) => {
              const whatsappUrl = `https://wa.me/918309394934?text=${encodeURIComponent(`Hello TeqqnoWorld, I would like to get an instant quote for ${item.title}.`)}`;
              return (
                <div
                  key={index}
                  className={`relative bg-[#151518] rounded-xl p-2.5 sm:p-4 border border-[#26262B] card-border-hover transition-all duration-300 group ${item.offsetClass}`}
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-28 sm:h-40 md:h-44 w-full rounded-lg overflow-hidden bg-[#0E0E11] relative mb-2 sm:mb-3"
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} Printing in Hyderabad - TeqqnoWorld`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-2 group-hover:text-[#FF7A00] transition-colors truncate">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 sm:py-2.5 px-2 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-[10px] sm:text-xs font-semibold transition-all shadow-md shadow-[#FF7A00]/20 flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                  >
                    <AnimatedIcon name="calculate" animation="wiggle" color="text-white" size="text-xs sm:text-sm" />
                    <span>Instant Quote</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
