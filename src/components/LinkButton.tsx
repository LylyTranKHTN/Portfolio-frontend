import React from 'react';
import { classes } from '@utils';

interface LinkButtonProps {
  children: string | JSX.Element;
  href: string;
  onClick?: () => void;
  isActive?: boolean;
}

const LinkButton = ({
  children = '',
  href = '',
  onClick = undefined,
  isActive = false,
}: LinkButtonProps) => {
  const className = classes(
    'hover:italic hover:translate-x-1 hover:translate-y-1 hover:underline ',
    isActive ? 'font-bold text-black underline' : 'text-primary'
  );

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default LinkButton;
