import React, { ReactNode } from 'react';
import Button from './Button';
import Card from './Card';

interface SummaryProps {
  title: string;
  children: ReactNode;
}

const Summary = ({ title, children }: SummaryProps) => {
  return (
    <Card>
      <h2 className="text-primary justify-start flex mb-3">{title}</h2>
      <p>{children}</p>
      <div className="flex w-full justify-end">
        <Button>Read more</Button>
      </div>
    </Card>
  );
};

export default Summary;
