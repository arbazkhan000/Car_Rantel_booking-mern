import { Car, Menu } from 'lucide-react';

import React, { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F1F5F9] flex items-center justify-between px-8 py-4 relative">
      {/* Logo */}
      <div className="flex items-center font-bold text-2xl gap-2">
        <Car  size={32} />
        CarRantel
      </div>
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 items-center font-medium text-base transition-all">
        <li><a href="/" className="font-medium hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="/cars" className="font-medium hover:text-blue-600 transition-colors">Cars</a></li>
        {/* <li><a href="/about" className="font-medium hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="/contact" className="font-medium hover:text-blue-600 transition-colors">Contact</a></li> */}
      </ul>



<div className='flex items-center space-x-3'>
<button className='rounded-md py-2 px-4 border border-[#1e293b] bg-[#1e293b] text-white hover:bg-transparent hover:text-black '>
        login
      </button>
    
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden bg-transparent border-none cursor-pointer z-20"
        aria-label="Toggle menu"
      >
        <Menu size={32} />
      </button>
</div>
      
      {/* Hamburger for mobile */}
      
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 absolute top-20 right-8 bg-white shadow-lg rounded-lg p-6 z-30 md:hidden animate-fade-in">
          <li><a href="/" className="font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/cars" className="font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Cars</a></li>
          <li><a href="/about" className="font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="/contact" className="font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}