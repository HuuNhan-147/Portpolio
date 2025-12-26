import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant } from '../data/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseClasses = "px-6 py-3 font-medium rounded-lg transition-colors duration-300";
  
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "border border-primary-600 text-primary-600 hover:bg-primary-50",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}