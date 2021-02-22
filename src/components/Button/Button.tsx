import React from 'react';
import classnames from 'classnames';

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  loading = false,
  className,
  children,
  onClick,
}) => {
  const resolvedClassName = classnames(
    'slr-btn',
    { 'slr-btn-loading': loading },
    { 'slr-btn-disabled': disabled },
    className,
  );
  return (
    <button
      className={resolvedClassName}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
