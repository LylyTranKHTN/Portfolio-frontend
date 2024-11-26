import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  type: 'warning' | 'error' | 'success';
}

const Modal = () => {
  return (
    <div>
      <h1>Modal</h1>
    </div>
  );
};

export default Modal;
