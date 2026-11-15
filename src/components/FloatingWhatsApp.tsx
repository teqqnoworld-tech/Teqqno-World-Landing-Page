import React from 'react';
import { AnimatedIcon } from './AnimatedIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 group items-center">
      {/* Tooltip on hover */}
      <div className="hidden md:block mr-3 px-3.5 py-1.5 rounded-lg bg-[#151518] border border-[#26262B] text-xs font-semibold text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>Need a fast quotation? Chat with an estimator</span>
      </div>

      {/* Floating Button with Animated Radar Halo & Pulse */}
      <a
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 relative shadow-[#25D366]/40"
        href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20a%20quote%20for%20printing%20and%20branding."
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <AnimatedIcon name="chat" animation="pulse" color="text-white" size="text-3xl" />
      </a>
    </div>
  );
};
