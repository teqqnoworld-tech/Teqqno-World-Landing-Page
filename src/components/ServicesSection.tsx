import React from 'react';
import { AnimatedIcon, IconAnimationType } from './AnimatedIcon';

interface ServicesSectionProps {
  onSelectCategoryFilter: (category: string) => void;
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectCategoryFilter,
  onOpenQuote,
}) => {
  const services: {
    category: string;
    icon: string;
    animation: IconAnimationType;
    title: string;
    description: string;
    items: string[];
  }[] = [
    {
      category: 'printing',
      icon: 'print',
      animation: 'float',
      title: 'Printing Services',
      description: 'High-precision digital and offset machinery for commercial volume collateral.',
      items: [
        'Visiting Cards & Letterheads',
        'Bill Books, Invoices & Carbonless Pads',
        'Flyers, Pamphlets & Folded Brochures',
        'Product Catalogues, Diaries & Calendars',
      ],
    },
    {
      category: 'merch',
      icon: 'checkroom',
      animation: 'wiggle',
      title: 'Promotional Products',
      description: 'Custom wearables and company branded merch that keep your insignia visible daily.',
      items: [
        'Bio-Washed T-Shirts & Polos (220 GSM)',
        'Embroidered Caps & Headwear',
        'Ceramic & Insulated Mugs',
        'Promotional Umbrellas & Eco Bags',
      ],
    },
    {
      category: 'signage',
      icon: 'storefront',
      animation: 'float',
      title: 'Corporate Branding & Signage',
      description: 'Large-format visual displays and architectural signage for premises.',
      items: [
        'Aluminum Roll-Up Standees & Pull-ups',
        'Star Flex, Backlit Banners & Vinyl',
        'LED Sign Boards & 3D Acrylic Letters',
        'Outdoor Gazebos, Canopy Tents & Lanyards',
      ],
    },
    {
      category: 'gifting',
      icon: 'featured_seasonal_and_gifts',
      animation: 'sparkle',
      title: 'Corporate Gifting',
      description: 'Bespoke employee appreciation kits and executive client gift solutions in bulk volume.',
      items: [
        'Executive Leather Diary & Pen Sets',
        'Smart Temperature Flasks & Drinkware',
        'Branded Tech Hampers & Power Banks',
        'New Hire Joining Kits & Festive Hampers',
      ],
    },
    {
      category: 'branding',
      icon: 'design_services',
      animation: 'pulse',
      title: 'Design & Digital Identity',
      description: 'Strategic brand architecture, vector typography, and digital corporate touchpoints.',
      items: [
        'Brand Identity & Vector Logo Design',
        'Marketing Collateral & Social Creatives',
        'Corporate Website Design & UI',
        'Digital Pitch Decks & Annual Reports',
      ],
    },
    {
      category: 'printing',
      icon: 'corporate_fare',
      animation: 'float',
      title: 'Business Support & Registration',
      description: 'Comprehensive corporate documentation, licensing, and compliance documentation support.',
      items: [
        'GST & Company Incorporation Support',
        'Trade Licenses & MSME Registrations',
        'Trademark & IP Advisory Assistance',
        'Enterprise Operational Documentation',
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 border-b border-[#26262B] bg-[#0B0B0D]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#26262B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-ping" />
            <span className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wider">
              Enterprise Capabilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Everything Your Brand Needs
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#B8B8C0]">
            From everyday print essentials to complete brand visibility solutions engineered to enterprise standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#151518] rounded-xl p-4 sm:p-6 sm:p-8 border border-[#26262B] card-border-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1F1F22] border border-[#26262B] flex items-center justify-center text-[#FF7A00] mb-6 group-hover:border-[#FF7A00] transition-colors relative icon-radar-halo shadow-sm">
                  <AnimatedIcon
                    name={service.icon}
                    animation={service.animation}
                    color="text-[#FF7A00]"
                    size="text-2xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF7A00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#B8B8C0] leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-8 text-xs text-[#E4E1E6]">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 group/item">
                      <AnimatedIcon
                        name="check_circle"
                        animation="sparkle"
                        color="text-[#FF7A00]"
                        size="text-sm"
                        className="shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#26262B] flex items-center justify-between">
                <button
                  onClick={() => onSelectCategoryFilter(service.category)}
                  className="text-xs text-[#B8B8C0] hover:text-white transition-colors flex items-center gap-1 cursor-pointer group/btn"
                >
                  <span>View Catalog Items</span>
                  <AnimatedIcon name="arrow_forward" animation="nudge" color="text-inherit" size="text-xs" />
                </button>
                <a
                  href={`https://wa.me/918309394934?text=${encodeURIComponent(`Hello TeqqnoWorld, I would like to enquire and get an instant quote for ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FF7A00] hover:text-[#ff8a1a] text-xs font-semibold cursor-pointer group/btn"
                >
                  <span>Enquire</span>
                  <AnimatedIcon name="east" animation="nudge" color="text-[#FF7A00]" size="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
