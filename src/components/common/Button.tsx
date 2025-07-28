import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  onClick,
  className = '',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#414FF4] hover:bg-[#3542E8] text-white focus:ring-[#414FF4] shadow-sm',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 focus:ring-gray-500',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />}
      {children}
    </button>
  );
};