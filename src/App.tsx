/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ProductCatalogScreen } from './components/ProductCatalogScreen';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { SampleKitModal } from './components/SampleKitModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { Product } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [isSampleKitModalOpen, setIsSampleKitModalOpen] = useState<boolean>(false);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState<boolean>(false);

  const handleSelectTab = (tabId: string) => {
    setCurrentTab(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(tabId === 'catalog' ? 'products' : tabId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectProductForQuote = (product: Product) => {
    const message = `Hello TeqqnoWorld, I would like to get an instant quote for ${product.name}.`;
    const url = `https://wa.me/918309394934?text=${encodeURIComponent(message)}`;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };

  const handleOpenGeneralQuote = () => {
    const message = 'Hello TeqqnoWorld, I would like to get an instant quote for printing and branding services.';
    const url = `https://wa.me/918309394934?text=${encodeURIComponent(message)}`;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };

  const handleExploreCatalog = () => {
    handleSelectTab('catalog');
  };

  const handleSelectCategoryFromServices = (category: string) => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentTab('catalog');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#E4E1E6] flex flex-col font-sans selection:bg-[#FF7A00] selection:text-white pb-16 md:pb-0">
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenQuote={handleOpenGeneralQuote}
        onOpenSampleKit={() => setIsSampleKitModalOpen(true)}
        onOpenTracker={() => setIsTrackerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenQuote={handleOpenGeneralQuote}
          onExploreCatalog={handleExploreCatalog}
          onSelectProductForQuote={handleSelectProductForQuote}
        />

        {/* Industrial Stats & Trust Metric Bar */}
        <StatsBar />

        {/* Comprehensive Product Catalog Section (Printing, Branding, Signage, Merch, Gifting) */}
        <ProductCatalogScreen
          onSelectProductForQuote={handleSelectProductForQuote}
          onOpenSampleKit={() => setIsSampleKitModalOpen(true)}
        />

        {/* Services Overview Breakdown */}
        <ServicesSection
          onSelectCategoryFilter={handleSelectCategoryFromServices}
          onOpenQuote={handleOpenGeneralQuote}
        />

        {/* Why Choose TeqqnoWorld (4 Pillars) */}
        <WhyChooseUsSection />

        {/* 3-Step Simple Production Workflow */}
        <WorkflowSection onOpenQuote={handleOpenGeneralQuote} />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Strong Final CTA Banner */}
        <section className="py-12 sm:py-20 border-b border-[#26262B] bg-[#0B0B0D] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-2xl bg-[#151518] border border-[#26262B] p-5 sm:p-14 overflow-hidden text-center card-border-hover transition-all">
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#FF7A00]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#FF7A00]/20 rounded-full blur-3xl pointer-events-none" />
              <span className="text-[10px] sm:text-xs uppercase font-bold text-[#FF7A00] tracking-widest block mb-2 sm:mb-3">
                Elevate Your Corporate Presence
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                Ready to Grow Your Brand?
              </h2>
              <p className="text-xs sm:text-base text-[#B8B8C0] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                Tell us what you need. Let’s create something your business can be proud of with commercial print fidelity, ISO QA standards, and dedicated enterprise account management.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20an%20instant%20quote%20for%20printing%20and%20branding%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 sm:py-3.5 px-8 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs sm:text-sm font-semibold transition-all custom-glow active:scale-95 shadow-lg shadow-[#FF7A00]/20 cursor-pointer inline-flex items-center justify-center gap-2 group"
                >
                  <span>Get Free Instant Quote</span>
                  <span className="material-symbols-outlined text-base icon-anim-nudge">arrow_forward</span>
                </a>
                <button
                  onClick={() => setIsSampleKitModalOpen(true)}
                  className="w-full sm:w-auto py-3 sm:py-3.5 px-6 rounded-lg bg-[#1F1F22] border border-[#26262B] hover:border-[#FF7A00] text-white text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-base text-[#FF7A00] icon-anim-float">inventory_2</span>
                  <span>Order Swatch Kit</span>
                </button>
                <a
                  className="w-full sm:w-auto py-3 sm:py-3.5 px-6 rounded-lg bg-[#1F1F22] border border-[#26262B] hover:border-[#25D366] text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group active:scale-95"
                  href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20discuss%20a%20corporate%20branding%20project."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#25D366] icon-anim-pulse">chat</span>
                  <span>WhatsApp (+91 8309394934)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Free Quote Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenSampleKit={() => setIsSampleKitModalOpen(true)}
        onOpenTracker={() => setIsTrackerModalOpen(true)}
      />

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar onExploreCatalog={handleExploreCatalog} />

      {/* Interactive Quote & Price Estimator Configurator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />

      {/* Corporate Sample Kit Request Modal */}
      <SampleKitModal
        isOpen={isSampleKitModalOpen}
        onClose={() => setIsSampleKitModalOpen(false)}
      />

      {/* Live Order & Production Tracker Modal */}
      <OrderTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
      />
    </div>
  );
}
