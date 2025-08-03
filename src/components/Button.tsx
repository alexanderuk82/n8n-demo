import React from 'react';
import './figma-colors.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  disabled = false,
  onClick,
  className = ''
}) => {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn--main' : 'btn--secondary';
  const sizeClass = `btn--${size.charAt(0)}`;
  const disabledClass = disabled ? 'btn--disabled' : '';
  
  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;