import * as React from 'react';
import classnames from 'classnames';

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  loading = false,
  children,
  onClick,
}) => {
  const resolvedClassName = classnames(
    'cstl-btn',
    { 'cstl-btn-loading': loading },
    { 'cstl-btn-disabled': disabled },
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
