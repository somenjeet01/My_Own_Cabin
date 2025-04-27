
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";



const SearchSortBar = ({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  setIsFiltersOpen
}) => {
  return (
    <div className="flex flex-col -row gap-4 mb-6 items-center">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cabin-500" size={18} />
        <Input 
          placeholder="Search by name or location..."
          className="pl-10 border-cabin-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Button 
        variant="outline" 
        className=" w-full flex items-center justify-center"
        onClick={() => setIsFiltersOpen(true)}
      >
        <Filter size={16} className="mr-2" /> Filters
      </Button>
      <div className="hidden  items-center gap-2">
        <select 
          className="border border-cabin-200 rounded-md p-2 text-sm -none -1 -cabin-500"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="featured">Sort </option>
          <option value="price-low"> to High</option>
          <option value="price-high"> to Low</option>
          <option value="rating"> to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSortBar;
