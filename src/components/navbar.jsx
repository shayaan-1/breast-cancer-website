import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/assets/icon.png"
            alt="Bi Cure AI Logo"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-pink-700">
            Bi Cure AI
          </h1>
        </div>

        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-pink-600"></span>
            <span className="block w-8 h-1 bg-pink-600"></span>
            <span className="block w-8 h-1 bg-pink-600"></span>
          </div>
        </div>

        <nav
          className={`absolute md:relative md:flex md:space-x-6 items-center md:bg-transparent bg-white top-full left-0 w-full md:w-auto md:p-0 p-4 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#home" className="block md:inline text-lg text-gray-600 hover:text-pink-600 py-2">
            Home
          </a>
          <a href="#about" className="block md:inline text-lg text-gray-600 hover:text-pink-600 py-2">
            About
          </a>
          <a href="#contact" className="block md:inline text-lg text-gray-600 hover:text-pink-600 py-2">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <button className="px-6 py-2 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition-all">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
