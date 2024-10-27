import React from 'react';
import Menu from './Menu';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="container pt-16 bg-gray-100 h-svh w-svw justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <Menu
        items={[
          { key: 'about', name: 'About', url: '/about' },
          { key: 'skills', name: 'Skills', url: '/skills' },
          { key: 'experience', name: 'Experience', url: '/experience' },
          { key: 'education', name: 'Education', url: '/education' },
          { key: 'hobbies', name: 'Hobbies', url: '/hobbies' },
          { key: 'contact', name: 'Contact', url: '/contact' },
        ]}
      ></Menu>
      <div className="m-auto w-fit">{children}</div>
    </div>
  );
};

export default Wrapper;
