import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'dots' | 'waves' | 'geometric' | 'particles' | 'grid';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'dots', 
  className = '' 
}) => {
  const renderBackground = () => {
    switch (variant) {
      case 'waves':
        return (
          <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10">
              <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                <path
                  d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
                  fill="url(#wave-gradient-1)"
                  className="animate-wave-1"
                />
                <path
                  d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"
                  fill="url(#wave-gradient-2)"
                  className="animate-wave-2"
                />
                <defs>
                  <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                    <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
                  </linearGradient>
                  <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
                    <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        );

      case 'geometric':
        return (
          <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:via-blue-900/20 dark:to-purple-900/20">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 animate-geometric-float`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${20 + Math.random() * 40}px`,
                    height: `${20 + Math.random() * 40}px`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${10 + Math.random() * 20}s`,
                    borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 'particles':
        return (
          <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/40 dark:bg-blue-400/20 rounded-full animate-particle-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${15 + Math.random() * 10}s`,
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/50 to-indigo-50/50 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-indigo-900/20">
              <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10 animate-grid-move"></div>
            </div>
          </div>
        );

      default: // dots
        return (
          <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10">
              <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 animate-dots-move"></div>
            </div>
          </div>
        );
    }
  };

  return renderBackground();
};

export default AnimatedBackground;