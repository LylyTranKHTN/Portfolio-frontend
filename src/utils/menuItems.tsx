import React from 'react';
import Home from '../pages/home';
import AboutMe from '../pages/aboutme';
import Motivation from '../pages/motivation';
import DesignPage from '../pages/design';

const menuItems = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    key: 'about-me',
    name: 'About Me',
    path: '/about-me',
    element: <AboutMe />,
  },

  {
    key: 'motivation',
    name: 'Motivation',
    path: '/motivation',
    element: <Motivation />,
  },
  {
    key: 'design',
    name: 'Adjust Design',
    path: '/design',
    element: <DesignPage />,
  },
  { key: 'contact', name: 'Contact', path: '/contact' },
];

export default menuItems;
