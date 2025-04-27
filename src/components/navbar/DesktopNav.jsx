import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, MapPin, PlusCircle, User, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import NavbarSearchInput from "./NavbarSearchInput";

const DesktopNav = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="hidden sm:flex items-center space-x-4">
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className={cn(
          "text-cabin-700 hover:bg-cabin-50 flex items-center",
          location.pathname === "/" && "bg-cabin-50"
        )}
      >
        <Home className="mr-2 h-4 w-4" /> Home
      </Button>
      
      <Button
        variant="ghost"
        onClick={() => navigate("/listings")}
        className={cn(
          "text-cabin-700 hover:bg-cabin-50 flex items-center",
          location.pathname === "/listings" && "bg-cabin-50"
        )}
      >
        <MapPin className="mr-2 h-4 w-4" /> Cabins
      </Button>
      
      <NavbarSearchInput />
      
      {isLoggedIn ? (
        <>
          <Button
            variant="outline"
            onClick={() => navigate("/listings/new")}
            className="text-cabin-600 border-cabin-300 hover:bg-cabin-50 flex items-center"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> New Listing
          </Button>
          <Button
            onClick={() => navigate("/profile")}
            className={cn(
              "bg-wood-600 hover:bg-wood-700 text-white",
              location.pathname === "/profile" && "bg-wood-700"
            )}
          >
            <User className="mr-2 h-4 w-4" /> My Account
          </Button>
        </>
      ) : (
        <Button
          onClick={() => navigate("/login")}
          className="bg-cabin-600 hover:bg-cabin-700 text-white flex items-center"
        >
          <LogIn className="mr-2 h-4 w-4" /> Login
        </Button>
      )}
    </div>
  );
};

export default DesktopNav;