import React from 'react';
import { AnimatedIcon, IconAnimationType } from './AnimatedIcon';

export const WhyChooseUsSection: React.FC = () => {
  const pillars: {
    icon: string;
    animation: IconAnimationType;
    title: string;
    description: string;
  }[] = [
    {
      icon: 'palette',
      animation: 'float',
      title: 'Custom Solutions',
      description:
        'Tailored designs, bespoke dimensions, and strict PMS color fidelity that honor your exact visual guidelines across every physical medium.',
    },
    {
      icon: 'hub',
      animation: 'spin',
      title: 'One-Stop Partner',
      description:
        'Save hundreds of operational hours and avoid vendor fragmentation. We unify offset print, apparel, promotional hardware, and gifting under one roof.',
    },
    {
      icon: 'hardware',
      animation: 'wiggle',
      title: 'Quality-Focused',
      description:
        'State-of-the-art Japanese offset presses, high-res digital engines, and micro-calibrated cutting machinery ensuring pristine edges and zero color drift.',
    },
    {
      icon: 'support_agent',
      animation: 'pulse',
      title: 'Enterprise Support',
      description:
        'Assigned enterprise account handlers, clear proofing checkpoints, fast turnaround windows, and volume-tiered corporate commercial terms.',
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 border-b border-[#26262B] bg-[#0B0B0D]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#26262B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-ping" />
            <span className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wider">
              The TeqqnoWorld Edge
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Your Trusted Partner for Business Branding
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#B8B8C0]">
            Built to remove printing headaches, ensure brand integrity, and provide turnkey execution.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-[#151518] p-3.5 sm:p-6 sm:p-8 rounded-xl border border-[#26262B] card-border-hover transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-[#1F1F22] border border-[#26262B] group-hover:border-[#FF7A00] flex items-center justify-center text-[#FF7A00] mb-3 sm:mb-6 transition-all icon-radar-halo shadow-sm">
                  <AnimatedIcon
                    name={pillar.icon}
                    animation={pillar.animation}
                    color="text-[#FF7A00]"
                    size="text-lg sm:text-2xl"
                  />
                </div>
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#FF7A00] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-[#B8B8C0] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
