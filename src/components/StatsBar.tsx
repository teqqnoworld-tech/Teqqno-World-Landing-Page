import React from 'react';
import { AnimatedIcon, IconAnimationType } from './AnimatedIcon';

export const StatsBar: React.FC = () => {
  const stats: {
    icon: string;
    animation: IconAnimationType;
    value: string;
    label: string;
    sub: string;
  }[] = [
    {
      icon: 'sentiment_satisfied',
      animation: 'pulse',
      value: '7,000+',
      label: 'Happy Customers',
      sub: 'Corporate & MSME accounts',
    },
    {
      icon: 'history_edu',
      animation: 'wiggle',
      value: '17+ Years',
      label: 'Industry Experience',
      sub: 'Founded in Hyderabad',
    },
    {
      icon: 'inventory',
      animation: 'float',
      value: '5,000+',
      label: 'Projects Delivered',
      sub: 'Print, signage & merchandise',
    },
    {
      icon: 'verified_user',
      animation: 'sparkle',
      value: '100%',
      label: 'In-House QA Standards',
      sub: 'Pre-press to doorstep dispatch',
    },
  ];

  return (
    <section className="bg-[#151518] border-b border-[#26262B] py-5 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl bg-[#1F1F22]/40 border border-[#26262B]/70 group">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-[#1F1F22] flex items-center justify-center text-[#FF7A00] border border-[#26262B] group-hover:border-[#FF7A00]/60 shrink-0 transition-all icon-radar-halo shadow-sm">
                <AnimatedIcon
                  name={stat.icon}
                  animation={stat.animation}
                  color="text-[#FF7A00]"
                  size="text-lg sm:text-2xl"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base sm:text-2xl font-bold text-white tracking-tight truncate">{stat.value}</p>
                <p className="text-[11px] sm:text-sm font-semibold text-[#E4E1E6] leading-tight line-clamp-1">{stat.label}</p>
                <p className="text-[10px] sm:text-[11px] text-[#B8B8C0] mt-0.5 hidden sm:block truncate">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
