import React from 'react';
import Home from '../pages/home';
import Motivation from '../pages/motivation';
import DesignPage from '../pages/design';
import ContactPage from '../pages/contact';

const menuItems = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    key: 'motivation',
    name: 'Motivation',
    path: '/motivation',
    element: <Motivation />,
  },
  {
    key: 'design',
    name: 'Design',
    path: '/design',
    element: <DesignPage />,
  },
  {
    key: 'contact',
    name: 'Contact',
    path: '/contact',
    element: <ContactPage />,
  },
];

export default menuItems;
