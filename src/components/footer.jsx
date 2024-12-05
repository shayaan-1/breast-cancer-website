import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-center py-6 md:py-8">
      <p className="text-gray-600">© 2024&nbsp;&nbsp;B-Cure AI. All rights reserved.</p>
      <div className="mt-4 space-x-4 md:space-x-6">
        <a href="#privacy" className="text-gray-700 hover:text-pink-600 text-sm md:text-base">
          Privacy Policy
        </a>
        <a href="#terms" className="text-gray-700 hover:text-pink-600 text-sm md:text-base">
          Terms of Service
        </a>
        <a href="#support" className="text-gray-700 hover:text-pink-600 text-sm md:text-base">
          Support
        </a>
      </div>
    </footer>
  );
};

export default Footer;
