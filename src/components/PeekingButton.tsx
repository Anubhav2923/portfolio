import React from 'react';

interface PeekingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  peekDirection?: 'left' | 'right';
  peekEmoji?: string;
  peekColor?: string;
  className?: string;
}

const PeekingButton: React.FC<PeekingButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  peekDirection = 'right',
  peekEmoji = '👀',
  peekColor = 'from-yellow-400 to-orange-500',
  className = ''
}) => {
  const baseClasses = "group relative px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 overflow-hidden";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg",
    secondary: "border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900"
  };

  const peekClasses = peekDirection === 'right' 
    ? "absolute -right-8 top-1/2 transform -translate-y-1/2 group-hover:-right-2"
    : "absolute -left-8 top-1/2 transform -translate-y-1/2 group-hover:-left-2";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Peeking Element */}
      <div className={`${peekClasses} w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`}>
        <div className={`w-full h-full bg-gradient-to-r ${peekColor} rounded-full flex items-center justify-center shadow-lg`}>
          <span className="text-white text-lg animate-bounce-gentle">{peekEmoji}</span>
        </div>
      </div>
    </button>
  );
};

export default PeekingButton;