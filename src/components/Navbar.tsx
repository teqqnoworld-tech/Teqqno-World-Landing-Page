import React, { useState, useEffect } from 'react';
import { AnimatedIcon } from './AnimatedIcon';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenSampleKit?: () => void;
  onOpenTracker?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onOpenSampleKit,
  onOpenTracker,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#131316]/95 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-[#26262B] shadow-2xl shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={scrollToTop}
          aria-label="TeqqnoWorld Home"
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-lg bg-[#1F1F22] flex items-center justify-center border border-[#26262B] group-hover:border-[#FF7A00] transition-colors shadow-inner relative icon-radar-halo shrink-0">
            <AnimatedIcon name="layers" animation="pulse" color="text-[#FF7A00]" filled size="text-xl" />
          </div>
          <div>
            <span className="text-xl font-bold text-white tracking-tight block leading-tight">
              TeqqnoWorld
            </span>
            <span className="text-[10px] text-[#B8B8C0] tracking-widest block uppercase font-semibold">
              Printing • Branding • Solutions
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-[#B8B8C0]">
          <button
            onClick={() => scrollToSection('products')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1.5"
          >
            <span>Reviews</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FBBC05]/15 text-[#FBBC05] border border-[#FBBC05]/30">
              5.0★
            </span>
          </button>
          <button
            onClick={() => scrollToSection('faqs')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Mobile-Only Quick Call Icon Button */}
          <a
            href="tel:+918309394934"
            aria-label="Call TeqqnoWorld"
            title="Call Us"
            className="sm:hidden w-9 h-9 rounded-lg bg-[#1F1F22] border border-[#26262B] flex items-center justify-center text-[#FF7A00] active:scale-95 transition-all"
          >
            <AnimatedIcon name="call" animation="ring" color="text-[#FF7A00]" size="text-lg" />
          </a>

          {/* Mobile Quick WhatsApp Icon Button */}
          <a
            href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20enquire%20about%20printing%20and%20branding."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            title="Chat on WhatsApp"
            className="sm:hidden w-9 h-9 rounded-lg bg-[#1F1F22] border border-[#26262B] flex items-center justify-center text-[#25D366] active:scale-95 transition-all"
          >
            <AnimatedIcon name="chat" animation="pulse" color="text-[#25D366]" size="text-lg" />
          </a>

          {/* Facebook Link (Hidden on small mobile to prevent cramped header) */}
          <a
            href="https://www.facebook.com/profile.php?id=100093930784000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeqqnoWorld Facebook Page"
            title="Follow us on Facebook"
            className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1F1F22] border border-[#26262B] items-center justify-center text-[#1877F2] hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all group shrink-0"
          >
            <span className="icon-anim-float inline-block">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform group-hover:scale-125" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </span>
          </a>

          {/* Instagram Link (Hidden on small mobile to prevent cramped header) */}
          <a
            href="https://www.instagram.com/teqqnoworld/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeqqnoWorld Instagram Page"
            title="Follow us on Instagram"
            className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1F1F22] border border-[#26262B] items-center justify-center text-[#E4405F] hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all group shrink-0"
          >
            <span className="icon-anim-float inline-block">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform group-hover:scale-125" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </span>
          </a>

          {/* Desktop/Tablet WhatsApp Direct */}
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1F1F22] border border-[#26262B] text-xs font-medium text-[#E4E1E6] hover:text-[#25D366] hover:border-[#25D366]/60 transition-all group shrink-0"
            href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20enquire%20about%20printing%20and%20branding%20services."
            rel="noopener noreferrer"
            target="_blank"
          >
            <AnimatedIcon name="chat" animation="pulse" color="text-[#25D366]" size="text-base" />
            <span>WhatsApp</span>
          </a>

          {/* Get Free Instant Quote CTA (Visible on tablet & desktop) */}
          <a
            href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20an%20instant%20quote%20for%20printing%20and%20branding."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-[#FF7A00]/25 active:scale-95 cursor-pointer group shrink-0"
          >
            <AnimatedIcon name="calculate" animation="wiggle" color="text-white" size="text-base" className="mr-1.5" />
            <span>Instant Quote</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1F1F22] border border-[#26262B] hover:border-[#FF7A00] flex items-center justify-center text-white transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-black/70 backdrop-blur-md z-50 flex flex-col justify-between overflow-y-auto animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-[#151518] border-b border-[#26262B] px-5 py-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links List */}
            <div className="space-y-1 mb-6">
              <p className="text-[11px] font-bold text-[#B8B8C0] uppercase tracking-wider px-3 mb-2">
                Quick Navigation
              </p>
              <button
                onClick={() => scrollToSection('products')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#1F1F22] text-left text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <AnimatedIcon name="menu_book" animation="wiggle" color="text-[#FF7A00]" size="text-lg" />
                  <span>Product Catalog (24+ Lines)</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#B8B8C0]">arrow_forward_ios</span>
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#1F1F22] text-left text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <AnimatedIcon name="print" animation="float" color="text-[#FF7A00]" size="text-lg" />
                  <span>Services Breakdown</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#B8B8C0]">arrow_forward_ios</span>
              </button>

              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#1F1F22] text-left text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <AnimatedIcon name="verified" animation="sparkle" color="text-[#FF7A00]" size="text-lg" />
                  <span>Why Choose TeqqnoWorld</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#B8B8C0]">arrow_forward_ios</span>
              </button>

              <button
                onClick={() => scrollToSection('reviews')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#1F1F22] text-left text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <AnimatedIcon name="star" animation="wiggle" color="text-[#FBBC05]" size="text-lg" />
                  <span>Google Reviews (5.0★ · 14 Reviews)</span>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FBBC05]/15 text-[#FBBC05] border border-[#FBBC05]/30">
                  Genuine
                </span>
              </button>

              <button
                onClick={() => scrollToSection('faqs')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#1F1F22] text-left text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <AnimatedIcon name="quiz" animation="pulse" color="text-[#FF7A00]" size="text-lg" />
                  <span>Frequently Asked Questions</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#B8B8C0]">arrow_forward_ios</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#1F1F22] text-left text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <AnimatedIcon name="location_on" animation="float" color="text-[#FF7A00]" size="text-lg" />
                  <span>Hyderabad Hubs & Contact</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#B8B8C0]">arrow_forward_ios</span>
              </button>
            </div>

            {/* Direct Quick Contact CTA Block */}
            <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#26262B] mb-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Direct Phone Call</span>
                <a
                  href="tel:+918309394934"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7A00] hover:underline"
                >
                  <AnimatedIcon name="call" animation="ring" color="text-[#FF7A00]" size="text-sm" />
                  <span>+91 8309394934</span>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">WhatsApp Chat</span>
                <a
                  href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20an%20instant%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <AnimatedIcon name="chat" animation="pulse" color="text-[#25D366]" size="text-sm" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Address Summary */}
            <div className="text-[11px] text-[#B8B8C0] space-y-2 border-t border-[#26262B] pt-4 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-[#FF7A00] font-bold">Facility:</span>
                <span>Chanda Nagar (Sri Datta Plaza, Ameenpur Rd)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF7A00] font-bold">Branch:</span>
                <span>Bachupally (Shop 504, 5th Fl, Above Vijetha Super Market)</span>
              </div>
            </div>

            {/* Big Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20an%20instant%20quote%20for%20printing%20and%20branding."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-3 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md shadow-[#FF7A00]/25"
              >
                <AnimatedIcon name="calculate" animation="wiggle" color="text-white" size="text-base" />
                <span>Instant Quote</span>
              </a>
              <a
                href="tel:+918309394934"
                className="py-3 px-3 rounded-lg bg-[#1F1F22] hover:bg-[#26262B] border border-[#26262B] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <AnimatedIcon name="call" animation="ring" color="text-[#FF7A00]" size="text-base" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
