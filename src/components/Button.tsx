import React, { ReactNode } from 'react';

interface ButtonProps {
  children: string | ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  const classes = `px-2 py-1 border-primary text-primary hover:translate-x-0.5 hover:bg-primary hover:border-white hover:text-white focus:outline-none ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
