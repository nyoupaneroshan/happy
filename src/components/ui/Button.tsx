import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  component?: React.ElementType; // Add component prop to allow rendering as Link or other components
  to?: string; // Add to prop for Link compatibility
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  component: Component = 'button', // Default to 'button' if no component is provided
  to,
  ...props
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500';
      case 'secondary':
        return 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500';
      case 'outline':
        return 'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500';
      default:
        return 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500';
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-xs';
      case 'md':
        return 'px-5 py-2.5 text-sm';
      case 'lg':
        return 'px-6 py-3 text-base';
      default:
        return 'px-5 py-2.5 text-sm';
    }
  };

  const getWidthClass = (): string => {
    return fullWidth ? 'w-full' : '';
  };

  return (
    <Component
      to={to} // Pass the to prop for Link
      className={`
        inline-flex items-center justify-center font-medium rounded-md 
        transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${getWidthClass()}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </Component>
  );
};

export default Button;