import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Filter, 
  MapPin, 
  X, 
  CalendarDays, 
  SlidersHorizontal,
  Wifi,
  FlameKindling,
  Snowflake,
  Coffee,
  Dog,
  Bath
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Predefined list of amenities with their corresponding icons and identifiers
export const amenitiesData = [
  { id: "amenity-wifi", name: "Wifi", icon: "Wifi" },
  { id: "amenity-fireplace", name: "Fireplace", icon: "FlameKindling" },
  { id: "amenity-heating", name: "Heating", icon: "Snowflake" },
  { id: "amenity-coffee", name: "Coffee", icon: "Coffee" },
  { id: "amenity-pets", name: "Pet Friendly", icon: "Dog" },
  { id: "amenity-hottub", name: "Hot Tub", icon: "Bath" }
];

const FiltersPanel = ({
  isFiltersOpen,
  setIsFiltersOpen,
  priceRange,
  setPriceRange,
  selectedAmenities,
  toggleAmenity,
  selectedLocation,
  setSelectedLocation,
  locations,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  handleApplyFilters,
  handleResetFilters
}) => {
  // Utility function to dynamically render icons based on icon name
  // Maps icon names to their corresponding Lucide React components
  const getIconComponent = (iconName) => {
    // Object mapping icon names to their Lucide React components
    const icons = {
      Wifi,
      FlameKindling,
      Snowflake,
      Coffee,
      Dog,
      Bath
    };
    
    // Safely retrieve the icon component, return null if not found
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={14} className="mr-1" /> : null;
  };

  return (
    // Responsive container for filters panel with mobile and desktop layouts
    <div className={`lg:w-1/4 ${isFiltersOpen ? 'fixed inset-0 z-50 bg-white overflow-y-auto p-4 lg:static lg:block lg:p-0 lg:bg-transparent' : 'hidden lg:block'}`}>
      <Card className="p-4 sticky top-4">
        {/* Filters panel header with title and close button */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg flex items-center">
            <Filter size={18} className="mr-2" /> Filters
          </h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsFiltersOpen(false)}
            className="lg:hidden"
          >
            <X size={16} />
          </Button>
        </div>
        
        <div className="space-y-6">
          {/* Location filter with dropdown selection */}
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <MapPin size={16} className="mr-2" /> Location
            </h4>
            <select 
              className="w-full p-2 border rounded-md"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          
          {/* Date range filter with check-in and check-out inputs */}
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <CalendarDays size={16} className="mr-2" /> Dates
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkInDate && "text-muted-foreground"
                    )}
                  >
                    {checkInDate ? format(checkInDate, "MMM d, yyyy") : "Check-in date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                    disabled={(date) => {
                      return date < new Date(new Date().setHours(0, 0, 0, 0));
                    }}
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOutDate && "text-muted-foreground"
                    )}
                  >
                    {checkOutDate ? format(checkOutDate, "MMM d, yyyy") : "Check-out date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                    disabled={(date) => {
                      // Disable dates before check-in date or current date
                      const today = new Date(new Date().setHours(0, 0, 0, 0));
                      return date < today || (checkInDate ? date <= checkInDate : false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Price range filter with slider and min/max indicators */}
          <div>
            <div className="flex justify-between mb-2">
              <h4 className="font-medium flex items-center">
                <SlidersHorizontal size={16} className="mr-2" /> Price Range
              </h4>
              <span className="text-sm text-cabin-600">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
            <Slider
              defaultValue={[50, 350]}
              max={500}
              min={0}
              step={10}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value)}
              className="my-6"
            />
            <div className="flex justify-between text-xs text-cabin-500">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
          
          {/* Amenities filter with checkboxes and dynamic icons */}
          <div>
            <h4 className="font-medium mb-3">Amenities</h4>
            <div className="space-y-2">
              {amenitiesData.map((amenity) => (
                <div key={amenity.id} className="flex items-center">
                  <Checkbox 
                    id={amenity.id} 
                    checked={selectedAmenities.includes(amenity.name)}
                    onCheckedChange={() => toggleAmenity(amenity.name)}
                  />
                  <label htmlFor={amenity.id} className="ml-2 text-sm flex items-center">
                    {getIconComponent(amenity.icon)} {amenity.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Buttons to apply or reset filters */}
          <div className="flex gap-2">
            <Button 
              className="flex-1 bg-cabin-600 hover:bg-cabin-700 text-white"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleResetFilters}
            >
              Reset
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FiltersPanel;