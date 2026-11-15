import React from 'react';
import { AnimatedIcon, IconAnimationType } from './AnimatedIcon';

interface WorkflowSectionProps {
  onOpenQuote: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenQuote }) => {
  const steps: {
    step: string;
    icon: string;
    animation: IconAnimationType;
    title: string;
    desc: string;
  }[] = [
    {
      step: '01',
      icon: 'upload_file',
      animation: 'float',
      title: 'Tell Us What You Need',
      desc: 'Submit your project specifications or share vector artwork via our website form, quote calculator, or instant WhatsApp channel.',
    },
    {
      step: '02',
      icon: 'calculate',
      animation: 'wiggle',
      title: 'Receive a Custom Quote',
      desc: 'Get clear volume-tiered pricing, material substrate guidance, and digital proofs within hours from your dedicated coordinator.',
    },
    {
      step: '03',
      icon: 'local_shipping',
      animation: 'nudge',
      title: 'Approve & Get Started',
      desc: 'We initiate high-speed in-house production with strict QA checks and deliver safely right to your office doorstep.',
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 border-b border-[#26262B] bg-[#0B0B0D]" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#26262B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-ping" />
            <span className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wider">
              Workflow Efficiency
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Get Your Branding Started in 3 Simple Steps
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#B8B8C0]">
            A transparent, rapid production cycle engineered to keep your timelines intact.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#FF7A00]/20 via-[#FF7A00] to-[#FF7A00]/20 -translate-y-8 z-0" />

          {steps.map((item, index) => (
            <div
              key={index}
              className="relative z-10 bg-[#151518] p-5 sm:p-8 rounded-xl border border-[#26262B] card-border-hover transition-all text-center group"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full flex flex-col items-center justify-center font-bold text-sm mb-6 shadow-lg transition-transform group-hover:scale-110 relative icon-radar-halo ${
                  index === 0
                    ? 'bg-[#FF7A00] text-white shadow-[#FF7A00]/20'
                    : 'bg-[#1F1F22] border border-[#FF7A00] text-[#FF7A00]'
                }`}
              >
                <AnimatedIcon
                  name={item.icon}
                  animation={item.animation}
                  color={index === 0 ? 'text-white' : 'text-[#FF7A00]'}
                  size="text-2xl"
                />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#1F1F22] text-[#FF7A00] text-[11px] font-bold mb-2">
                Step {item.step}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#FF7A00] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B8C0] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/918309394934?text=Hello%20TeqqnoWorld,%20I%20would%20like%20to%20get%20an%20instant%20quote%20to%20start%20my%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg bg-[#FF7A00] hover:bg-[#ff8a1a] text-white text-xs sm:text-sm font-semibold transition-all custom-glow active:scale-95 shadow-lg shadow-[#FF7A00]/20 inline-flex items-center gap-2 cursor-pointer group"
          >
            <span>Start Your Order Now</span>
            <AnimatedIcon name="arrow_forward" animation="nudge" color="text-white" size="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};
