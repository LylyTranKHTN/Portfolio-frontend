import React from 'react';
import Menu from './Menu';
import { menuItems } from '@utils';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  // get current route url
  const currentUrl = window.location.pathname;

  return (
    <div className="bg-primary-light h-svh w-svw justify-center">
      <Menu items={menuItems} activeKey={currentUrl}></Menu>
      <div className=" m-auto w-fit pt-14">{children}</div>
    </div>
  );
};

export default Wrapper;
