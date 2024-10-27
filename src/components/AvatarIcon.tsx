import React from 'react';

interface AvatarIconProps {
  src: string;
  alt: string;
}

const AvatarIcon = ({ src, alt }: AvatarIconProps) => {
  return <img className="rounded-full w-8 border" src={src} alt={alt} />;
};

export default AvatarIcon;
