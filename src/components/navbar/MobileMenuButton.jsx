import React from "react";
import { Menu, X } from "lucide-react";

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="inline-flex items-center justify-center p-2 rounded-md text-cabin-700 hover:text-cabin-900 hover:bg-cabin-50 focus:outline-none"
      aria-expanded={isMenuOpen}
    >
      <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
      {isMenuOpen ? (
        <X className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default MobileMenuButton;