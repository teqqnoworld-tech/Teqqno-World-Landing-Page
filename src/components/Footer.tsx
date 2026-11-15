import React from 'react';
import { AnimatedIcon } from './AnimatedIcon';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenSampleKit: () => void;
  onOpenTracker: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenSampleKit,
  onOpenTracker,
}) => {
  return (
    <footer className="bg-[#0E0E11] border-t border-[#26262B] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#26262B]">
          {/* Brand Summary */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-[#1F1F22] flex items-center justify-center border border-[#26262B] group-hover:border-[#FF7A00] transition-colors relative icon-radar-halo">
                <AnimatedIcon name="layers" animation="pulse" color="text-[#FF7A00]" filled size="text-xl" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">TeqqnoWorld</span>
            </div>
            <p className="text-xs sm:text-sm text-[#B8B8C0] mb-6 max-w-sm leading-relaxed">
              Complete Printing, Branding & Business Solutions. Engineered for high-volume enterprise print, promotional merchandise, and brand identity execution across Telangana and pan-India.
            </p>
            <div className="flex items-center gap-3 text-[#B8B8C0]">
              <a
                className="w-9 h-9 rounded-lg bg-[#151518] flex items-center justify-center border border-[#26262B] text-[#1877F2] hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-colors group"
                href="https://www.facebook.com/profile.php?id=100093930784000"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Facebook"
                aria-label="Facebook"
              >
                <span className="icon-anim-float inline-block">
                  <svg className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-[#151518] flex items-center justify-center border border-[#26262B] text-[#E4405F] hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-colors group"
                href="https://www.instagram.com/teqqnoworld/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
                aria-label="Instagram"
              >
                <span className="icon-anim-float inline-block">
                  <svg className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-[#151518] flex items-center justify-center border border-[#26262B] text-[#25D366] hover:border-[#25D366] transition-colors group"
                href="https://wa.me/918309394934"
                rel="noopener noreferrer"
                target="_blank"
                title="WhatsApp Direct"
              >
                <AnimatedIcon name="chat" animation="pulse" color="text-[#25D366]" size="text-base" />
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-[#151518] flex items-center justify-center border border-[#26262B] text-[#FF7A00] hover:border-[#FF7A00] transition-colors group"
                href="tel:+918309394934"
                title="Direct Phone Call"
              >
                <AnimatedIcon name="call" animation="ring" color="text-[#FF7A00]" size="text-base" />
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-[#151518] flex items-center justify-center border border-[#26262B] text-[#B8B8C0] hover:text-[#FF7A00] hover:border-[#FF7A00] transition-colors group"
                href="mailto:info@teqqnoworld.com"
                title="Official Email"
              >
                <AnimatedIcon name="mail" animation="wiggle" color="text-[#B8B8C0]" size="text-base" />
              </a>
            </div>
          </div>

          {/* Column 1: Company Navigation */}
          <div>
            <p className="text-xs uppercase font-bold text-white tracking-wider mb-4">Navigation</p>
            <ul className="space-y-2.5 text-xs text-[#B8B8C0]">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('catalog')} className="hover:text-white transition-colors text-[#FF7A00] font-semibold cursor-pointer">
                  Product Catalog (24+ Lines)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('why-choose-us')} className="hover:text-white transition-colors cursor-pointer">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={onOpenTracker} className="hover:text-white transition-colors cursor-pointer">
                  Track Production Job
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <p className="text-xs uppercase font-bold text-white tracking-wider mb-4">Capabilities</p>
            <ul className="space-y-2.5 text-xs text-[#B8B8C0]">
              <li>
                <button onClick={() => onSelectTab('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Commercial Offset & Digital
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Promotional Apparel & Caps
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Executive Gifting Kits
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Roll-Up Standees & Banners
                </button>
              </li>
              <li>
                <button onClick={onOpenSampleKit} className="hover:text-white transition-colors text-[#FF7A00] cursor-pointer">
                  Request Swatch Box
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Facility & Address */}
          <div>
            <p className="text-xs uppercase font-bold text-white tracking-wider mb-4">Locations</p>
            <div className="space-y-3 mb-3">
              <div>
                <span className="text-[10px] font-bold text-[#FF7A00] uppercase tracking-wider block">
                  Primary Facility
                </span>
                <p className="text-xs text-[#B8B8C0] leading-relaxed mt-0.5">
                  Sri Datta Plaza, Plot No. 14, Ameenpur Rd, Chanda Nagar, Hyderabad – 502032
                </p>
              </div>
              <div className="pt-2 border-t border-[#26262B]">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider block">
                  Secondary Address
                </span>
                <p className="text-xs text-[#B8B8C0] leading-relaxed mt-0.5">
                  Shop No-504, 5th Floor, Above Vijetha Super Market, Bachupally Mallampet Road, Bachupally, Hyderabad – 500090
                </p>
              </div>
            </div>
            <p className="text-xs text-[#B8B8C0] pt-2 border-t border-[#26262B]">
              Hotline: <a href="tel:+918309394934" className="text-white hover:text-[#FF7A00] font-semibold transition-colors">+91 8309394934</a>
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#B8B8C0] gap-4">
          <p>© 2024 TeqqnoWorld. All rights reserved. Hyderabad, Telangana.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Hyderabad & Pan-India Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
