import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 text-background top-0 px-10 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">Manawatu Lutheran Parish</div>
      <div className="flex space-x-6 text-lg">
        <a href="#services" className="hover:text-secondary">
          Services
        </a>
        <a href="#about" className="hover:text-secondary">
          About
        </a>
        <a href="#contact" className="hover:text-secondary">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
