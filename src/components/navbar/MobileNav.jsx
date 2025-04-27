import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Home, MapPin, PlusCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import NavbarSearchInput from "./NavbarSearchInput";

const MobileNav = ({ isMenuOpen, isLoggedIn, onLogout, toggleMenu }) => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <div
      className={cn(
        "sm:hidden absolute w-full bg-white shadow-lg border-t z-50 transform transition-transform",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Button
          variant="ghost"
          onClick={() => handleNavigation("/")}
          className="w-full justify-start text-cabin-700 hover:bg-cabin-50 flex items-center"
        >
          <Home className="mr-2 h-4 w-4" /> Home
        </Button>
        
        <Button
          variant="ghost"
          onClick={() => handleNavigation("/listings")}
          className="w-full justify-start text-cabin-700 hover:bg-cabin-50 flex items-center"
        >
          <MapPin className="mr-2 h-4 w-4" /> Cabins
        </Button>
        
        <div className="p-2">
          <NavbarSearchInput isMobile={true} toggleMenu={toggleMenu} />
        </div>
        
        {isLoggedIn ? (
          <>
            <Button
              variant="outline"
              onClick={() => handleNavigation("/listings/new")}
              className="w-full justify-start text-cabin-600 border-cabin-300 hover:bg-cabin-50"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> New Listing
            </Button>
            <Button
              onClick={() => handleNavigation("/profile")}
              className="w-full justify-start bg-wood-600 hover:bg-wood-700 text-white"
            >
              <User className="mr-2 h-4 w-4" /> My Account
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                onLogout();
                toggleMenu();
              }}
              className="w-full justify-start text-rose-600 hover:text-rose-700"
            >
              <LogIn className="mr-2 h-4 w-4" /> Logout
            </Button>
          </>
        ) : (
          <Button
            onClick={() => handleNavigation("/login")}
            className="w-full justify-start bg-cabin-600 hover:bg-cabin-700 text-white"
          >
            <LogIn className="mr-2 h-4 w-4" /> Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default MobileNav;