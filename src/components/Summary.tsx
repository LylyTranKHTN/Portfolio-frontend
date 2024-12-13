import React, { ReactNode } from 'react';
import Button from './Button';
import Card from './Card';

interface SummaryProps {
  title: string;
  children: ReactNode;
  disabledReadMore?: boolean;
}

const Summary = ({ title, children, disabledReadMore }: SummaryProps) => {
  return (
    <Card>
      <h2 className="text-primary justify-start flex mb-3">{title}</h2>
      <p>{children}</p>
      {!disabledReadMore && (
        <div className="flex w-full justify-end">
          <Button>Read more</Button>
        </div>
      )}
    </Card>
  );
};

export default Summary;
