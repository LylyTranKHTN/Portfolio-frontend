import { classes } from '@utils';
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  const classNames = classes(
    'text-lg bg-white p-5 border rounded-lg shadow-md m-5',
    className
  );

  return <div className={classNames}>{children}</div>;
};

export default Card;
