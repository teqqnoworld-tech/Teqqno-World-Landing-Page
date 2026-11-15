import React from 'react';

export type IconAnimationType =
  | 'float'
  | 'pulse'
  | 'wiggle'
  | 'spin'
  | 'ring'
  | 'sparkle'
  | 'nudge'
  | 'none';

interface AnimatedIconProps {
  name?: string;
  animation?: IconAnimationType;
  size?: string;
  color?: string;
  filled?: boolean;
  hasHalo?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  name,
  animation = 'float',
  size = 'text-xl',
  color = 'text-[#FF7A00]',
  filled = false,
  hasHalo = false,
  className = '',
  children,
}) => {
  const getAnimationClass = () => {
    switch (animation) {
      case 'float':
        return 'icon-anim-float';
      case 'pulse':
        return 'icon-anim-pulse';
      case 'wiggle':
        return 'icon-anim-wiggle';
      case 'spin':
        return 'icon-anim-spin-slow';
      case 'ring':
        return 'icon-anim-ring';
      case 'sparkle':
        return 'icon-anim-sparkle';
      case 'nudge':
        return 'icon-anim-nudge';
      default:
        return '';
    }
  };

  const animClass = getAnimationClass();

  return (
    <span
      className={`inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
        hasHalo ? 'icon-radar-halo' : ''
      } ${className}`}
    >
      {children ? (
        <span className={`inline-block ${animClass}`}>{children}</span>
      ) : (
        <span
          className={`material-symbols-outlined ${size} ${color} ${animClass}`}
          style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          {name}
        </span>
      )}
    </span>
  );
};
