import React, { ReactNode } from 'react';
import Button from './Button';

interface SummaryProps {
  title: string;
  children: ReactNode;
}

const Summary = ({ title, children }: SummaryProps) => {
  return (
    <div className="text-lg bg-white text-center p-5 border rounded-lg shadow-md w-full">
      <h2 className="text-primary justify-start flex mb-3">{title}</h2>
      <p>{children}</p>
      <div className="flex w-full justify-end">
        <Button>Read more</Button>
      </div>
    </div>
  );
};

export default Summary;
