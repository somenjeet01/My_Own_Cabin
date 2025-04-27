import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity group">
      <div className="relative">
        <Home className="h-8 w-8 text-cabin-600 transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute -inset-1.5 bg-cabin-100 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <span className="ml-2 text-lg sm:text-xl font-playfair font-semibold text-cabin-800">
        Comfy Cabin
      </span>
    </Link>
  );
};

export default NavbarLogo;