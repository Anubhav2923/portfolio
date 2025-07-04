import React from 'react';

interface PeekingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const PeekingButton: React.FC<PeekingButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}) => {
  const baseClasses = "relative overflow-hidden px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105";
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg" 
    : "border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className} group`}
    >
      {/* Button Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Peeking Character */}
      <div className="absolute -bottom-2 -right-2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0">
        <div className="w-12 h-12 relative">
          {/* Character Head */}
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full border-2 border-orange-500">
            {/* Eyes */}
            <div className="absolute top-2 left-1.5 w-1.5 h-1.5 bg-black rounded-full animate-blink"></div>
            <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-black rounded-full animate-blink"></div>
            
            {/* Smile */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-black rounded-full"></div>
            
            {/* Hair */}
            <div className="absolute -top-1 left-1 w-8 h-3 bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-full"></div>
            <div className="absolute -top-0.5 left-0.5 w-2 h-2 bg-amber-700 rounded-full"></div>
            <div className="absolute -top-0.5 right-0.5 w-2 h-2 bg-amber-700 rounded-full"></div>
          </div>
          
          {/* Character Body (partially hidden) */}
          <div className="absolute bottom-0 right-1 w-6 h-4 bg-gradient-to-b from-blue-500 to-blue-600 rounded-t-lg">
            {/* Arms */}
            <div className="absolute -left-1 top-1 w-3 h-1 bg-orange-300 rounded-full transform -rotate-12"></div>
            <div className="absolute -right-1 top-1 w-3 h-1 bg-orange-300 rounded-full transform rotate-12"></div>
          </div>
          
          {/* Waving Hand */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-300 rounded-full animate-wave-hand"></div>
        </div>
      </div>
    </button>
  );
};

export default PeekingButton;