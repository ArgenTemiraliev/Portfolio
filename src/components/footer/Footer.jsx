import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 ">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
