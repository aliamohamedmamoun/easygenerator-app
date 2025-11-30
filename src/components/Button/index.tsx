import React from 'react';

import styles from './index.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}
const Button = ({
  children,
  variant,
  onClick,
  type,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${
        variant ? styles[variant] : ''
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
