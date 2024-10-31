import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={
        'text-lg bg-white p-5 border rounded-lg shadow-md m-5' + className
      }
    >
      {children}
    </div>
  );
};

export default Card;
