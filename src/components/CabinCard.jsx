import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Wifi, Coffee, Snowflake } from "lucide-react";
import { cn } from "@/lib/utils";

function CabinCard({
  id,
  title,
  location,
  price,
  image,
  rating,
  reviewCount,
  capacity,
  featured = false,
  amenities = [],
  className
}) {
  const navigate = useNavigate();

  // Map amenity names to icons
  const amenityIcons = {
    wifi: <Wifi size={14} className="text-cabin-500" />,
    coffee: <Coffee size={14} className="text-cabin-500" />,
    heating: <Snowflake size={14} className="text-cabin-500" />,
  };
  
  return (
    <Card className={cn(
      "overflow-hidden transition-transform duration-300 hover:-translate-y-1 cabin-shadow h-full flex flex-col",
      featured && "border-cabin-900 border-2",
      className
    )}>
      <div className="relative">
        {featured && (
          <div className="absolute top-2 left-2 bg-cabin-600 text-white px-2 py-0.5 rounded-full text-xs font-medium z-10">
            Featured
          </div>
        )}
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
          <Star size={14} className="text-amber-500 mr-1" />
          <span className="text-xs font-medium text-cabin-800">
            {rating} ({reviewCount})
          </span>
        </div>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <div className="flex items-start justify-between">
          <h3 className="font-playfair font-medium text-lg text-cabin-800 line-clamp-1">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center mt-1 text-cabin-600 text-sm">
          <MapPin size={14} className="mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="flex items-center mt-1.5 space-x-1">
          {amenities.slice(0, 3).map((amenity) => (
            <div key={amenity} className="flex items-center bg-cabin-50 rounded-full px-2 py-0.5">
              {amenityIcons[amenity.toLowerCase()]}
              <span className="ml-1 text-xs">{amenity}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center mt-2">
          <Users size={14} className="text-cabin-500 mr-1" />
          <span className="text-xs text-cabin-600">Up to {capacity} guests</span>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-3 flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold text-cabin-800">₹{price}</span>
          <span className="text-cabin-500 text-xs ml-1">per night</span>
        </div>
        <Button
          onClick={() => navigate(`/listings/${id}`)}
          className="bg-cabin-600 hover:bg-cabin-700 text-white text-sm"
        >
          View Cabin
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CabinCard;