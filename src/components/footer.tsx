import React from 'react';

const Footer = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
    <footer className={`${className} bg-gray-500 fixed inset-x-0 bottom-0`}>
      {children}
    </footer>
  );
};

export default Footer;
