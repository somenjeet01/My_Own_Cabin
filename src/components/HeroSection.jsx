import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DateRangePicker from "@/components/DateRangePicker";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState(undefined);
  const [checkOutDate, setCheckOutDate] = useState(undefined);
  
  // Handle search form submission
  const handleSearch = () => {
    // Build query parameters
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (checkInDate) params.append("checkIn", checkInDate.toISOString());
    if (checkOutDate) params.append("checkOut", checkOutDate.toISOString());
    
    // Navigate to listings with search params
    navigate(`/listings?${params.toString()}`);
  };
  
  return (
    <div className="relative">
      {/* Hero background image with overlay */}
      <div 
        className="h-[750px] bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663950775089-8d7a3d89fb97?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 bg-cabin-600/80 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              Find your perfect cabin retreat
            </motion.span>
            
            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 text-shadow leading-tight"
            >
              Escape to <span className="text-cabin-200">Nature's</span> Embrace
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 max-w-2xl text-white/90 text-shadow"
            >
              Discover secluded cabins nestled in pristine wilderness, offering the perfect blend of comfort and adventure for your next getaway
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button 
                onClick={() => navigate('/listings')}
                className="bg-cabin-600 hover:bg-cabin-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg group"
                size="lg"
              >
                Browse All Cabins <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => {
                  const searchElement = document.getElementById('cabin-search');
                  if (searchElement) {
                    searchElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }} 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg transition-all duration-300"
                size="lg"
              >
                Find Your Cabin
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Search box */}
      <div id="cabin-search" className="max-w-5xl mx-auto px-4 sm:px-6 relative -mt-28 z-10 mb-24">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-2xl p-8 hover-lift"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-playfair font-semibold text-cabin-800 mb-2">Find Your Perfect Cabin</h3>
            <p className="text-cabin-600">Search our handpicked collection of premium cabins</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Location input */}
            <div className="space-y-2 md:col-span-4">
              <label className="font-medium text-cabin-800 flex items-center text-sm">
                <MapPin size={16} className="mr-1.5" /> Location
              </label>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you going?"
                className="w-full rounded-lg border border-cabin-200 px-4 py-3 focus:border-cabin-500 focus:ring-cabin-500 bg-wood-50"
              />
            </div>
            
            {/* Date picker */}
            <div className="space-y-2 md:col-span-6">
              <label className="font-medium text-cabin-800 text-sm">
                Check-in / Check-out
              </label>
              <DateRangePicker
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                onCheckInChange={setCheckInDate}
                onCheckOutChange={setCheckOutDate}
              />
            </div>
            
            {/* Search button */}
            <div className="flex flex-col justify-end md:col-span-2">
              <Button 
                onClick={handleSearch}
                className="bg-cabin-600 hover:bg-cabin-700 w-full transition-all py-6 text-base font-medium rounded-lg"
              >
                <Search size={18} className="mr-2" /> Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}