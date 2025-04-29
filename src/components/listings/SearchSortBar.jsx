import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Calendar } from "lucide-react";
import DateRangePicker from "@/components/dateRangePicker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const SearchSortBar = ({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  setIsFiltersOpen,
  handleApplyFilters,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate
}) => {
  const [localSearch, setLocalSearch] = useState(searchTerm);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch);
    handleApplyFilters();
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Apply filters immediately when sort option changes
    setTimeout(() => handleApplyFilters(), 0);
  };

  // Format date range for display
  const getDateRangeText = () => {
    if (checkInDate && checkOutDate) {
      const checkInMonth = checkInDate.toLocaleDateString('en-US', { month: 'short' });
      const checkOutMonth = checkOutDate.toLocaleDateString('en-US', { month: 'short' });
      const checkInDay = checkInDate.getDate();
      const checkOutDay = checkOutDate.getDate();
      
      if (checkInMonth === checkOutMonth) {
        return `${checkInMonth} ${checkInDay}-${checkOutDay}`;
      }
      return `${checkInMonth} ${checkInDay} - ${checkOutMonth} ${checkOutDay}`;
    }
    return "Add dates";
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
      <form onSubmit={handleSearchSubmit} className="relative flex-grow w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cabin-500" size={18} />
        <Input 
          placeholder="Search by name or location..."
          className="pl-10 border-cabin-200 pr-16"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <Button 
          type="submit"
          className="absolute right-0 top-0 bg-cabin-600 hover:bg-cabin-700 h-full rounded-l-none"
          size="sm"
        >
          Search
        </Button>
      </form>
      
      {/* Date Range Picker */}
      {setCheckInDate && setCheckOutDate && (
        <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="hidden sm:flex items-center justify-center min-w-[150px]"
            >
              <Calendar size={16} className="mr-2" /> {getDateRangeText()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4" align="end">
            <p className="font-medium text-sm mb-2">Select dates</p>
            <DateRangePicker
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onCheckInChange={setCheckInDate}
              onCheckOutChange={setCheckOutDate}
            />
            <Button 
              className="mt-4 w-full" 
              onClick={() => {
                setIsDatePickerOpen(false);
                handleApplyFilters();
              }}
            >
              Apply Dates
            </Button>
          </PopoverContent>
        </Popover>
      )}

      <Button 
        variant="outline" 
        className="sm:hidden w-full flex items-center justify-center"
        onClick={() => setIsFiltersOpen(true)}
      >
        <Filter size={16} className="mr-2" /> Filters
      </Button>
      <div className="hidden sm:flex items-center gap-2 min-w-[200px]">
        <select 
          className="border border-cabin-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-cabin-500 w-full"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSortBar;