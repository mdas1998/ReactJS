import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <div className="text-sm text-center md:text-left">
          © Facebook | All Rights Reserved
        </div>
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
          <li><a href="#">Contact</a></li>
          <li><a href="#">Policies</a></li>
          <li><a href="#">Agreements</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
