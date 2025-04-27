import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";
import MobileMenuButton from "./navbar/MobileMenuButton";

export default function Navbar({ isLoggedIn: propIsLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const { isLoggedIn, logout } = useAuth();
  
  // Use prop if provided, otherwise fall back to context
  const authState = propIsLoggedIn !== undefined ? propIsLoggedIn : isLoggedIn;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    setIsMenuOpen(false); // Close menu on logout
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-card shadow-sm border-b relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavbarLogo />
            </div>
          </div>
          
          {/* Desktop navigation */}
          <DesktopNav 
            isLoggedIn={authState} 
            onLogout={handleLogout}
          />
          
          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <MobileMenuButton 
              isMenuOpen={isMenuOpen} 
              toggleMenu={toggleMenu} 
            />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <MobileNav 
        isMenuOpen={isMenuOpen}
        isLoggedIn={authState}
        onLogout={handleLogout}
        toggleMenu={toggleMenu}
      />
    </nav>
  );
}
