import React from 'react';
import { AnimatedIcon } from './AnimatedIcon';

interface MobileBottomBarProps {
  onExploreCatalog?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onExploreCatalog }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#131316]/95 backdrop-blur-lg border-t border-[#26262B] px-3 py-2 shadow-2xl shadow-black/80 flex items-center justify-between gap-2"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      {/* 1. Quick Call Button */}
      <a
        href="tel:+918309394934"
        aria-label="Call TeqqnoWorld"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#1F1F22] hover:bg-[#26262B] border border-[#26262B] active:scale-95 transition-all text-[#E4E1E6]"
      >
        <div className="flex items-center gap-1.5">
          <AnimatedIcon name="call" animation="ring" color="text-[#FF7A00]" size="text-lg" />
          <span className="text-xs font-bold text-white tracking-tight">Call Now</span>
        </div>
        <span className="text-[10px] text-[#B8B8C0]">8309394934</span>
      </a>

      {/* 2. Direct WhatsApp Quote Button (Highlighted) */}
      <a
        href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20an%20instant%20quote%20for%20printing%20and%20branding."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Instant Quote"
        className="flex-[1.4] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#22bf5b] text-white active:scale-95 transition-all shadow-md shadow-[#25D366]/30 font-bold text-xs"
      >
        <span className="icon-anim-pulse inline-flex">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.491 1.196.534 1.284.043.088.072.19.014.305-.058.115-.087.19-.173.289l-.26.305c-.087.088-.18.182-.077.36.103.178.458.756 1.092 1.321.815.727 1.503.951 1.716 1.056.213.106.338.093.464-.052.126-.145.541-.63.686-.846.145-.217.29-.18.49-.105.202.075 1.28.604 1.501.714.221.11.368.163.422.254.054.091.054.526-.09 1.011z" />
          </svg>
        </span>
        <span className="tracking-tight">WhatsApp Quote</span>
      </a>

      {/* 3. Catalog / Products Button */}
      <button
        onClick={() => {
          if (onExploreCatalog) {
            onExploreCatalog();
          } else {
            handleScrollTo('products');
          }
        }}
        aria-label="View Products Catalog"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#1F1F22] hover:bg-[#26262B] border border-[#26262B] active:scale-95 transition-all text-[#E4E1E6] cursor-pointer"
      >
        <AnimatedIcon name="menu_book" animation="wiggle" color="text-[#FF7A00]" size="text-lg" />
        <span className="text-[11px] font-bold text-white tracking-tight mt-0.5">Catalog</span>
      </button>
    </aside>
  );
};
