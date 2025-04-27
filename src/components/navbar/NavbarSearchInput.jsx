import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const NavbarSearchInput = ({ className = "", isMobile = false, toggleMenu }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const searchValue = e.target.value;
      navigate(`/listings?search=${searchValue}`);
      
      // Close mobile menu if applicable
      if (isMobile && toggleMenu) {
        toggleMenu();
      }
    }
  };

  return (
    <div className={`bg-cabin-50 rounded-${isMobile ? 'md' : 'full'} flex items-center pr-2 border focus-within:ring-1 focus-within:ring-cabin-500 focus-within:border-cabin-500 ${className}`}>
      <input
        type="text"
        placeholder="Search cabins..."
        className="bg-transparent border-0 focus:outline-none py-1 px-3 text-sm w-full"
        onKeyPress={handleSearch}
      />
      <Search className="h-4 w-4 text-cabin-500" />
    </div>
  );
};

export default NavbarSearchInput;