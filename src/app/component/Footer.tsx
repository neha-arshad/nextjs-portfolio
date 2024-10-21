import React from 'react'



const Footer = () => {
  return (
    <footer className="footer border-t-[#33353F] border-l-transparent border-r-transparent text-green-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-lg"></span>
        <p className="text-sm">
           {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
