import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id='main' className="bg-gradient-to-r from-blue-900 to-black text-blue-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="text-blue-400 text-3xl font-bold">A.</h1>
          </div>
          <div className="content hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#main" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#project" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div className="icon-content md:hidden text-blue-400 text-2xl cursor-pointer" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 transition-all duration-300`}>
          <ul className="flex flex-col space-y-4 text-center">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Projects</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
