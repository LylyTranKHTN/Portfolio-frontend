import React from 'react';

interface LinkButtonProps {
  children: string | JSX.Element;
  href: string;
  onClick?: () => void;
}

const LinkButton = ({
  children = '',
  href = '',
  onClick = undefined,
}: LinkButtonProps) => {
  return (
    <a
      className="text-primary hover:italic hover:translate-x-1 hover:translate-y-1 hover:underline"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default LinkButton;
