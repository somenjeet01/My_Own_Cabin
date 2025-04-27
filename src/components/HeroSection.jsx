import React from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <div className="relative">
      {/* Hero background image */}
      <div 
        className="h-[700px] bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663950775089-8d7a3d89fb97?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 bg-cabin-600/80 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              Discover the perfect escape
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 text-shadow leading-tight"
            >
              Find Your <span className="text-cabin-200">Perfect</span> Wilderness Retreat
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 max-w-2xl text-white/90 text-shadow"
            >
              Escape to nature in our hand-picked collection of cozy cabins, nestled in the most beautiful locations across the country.
            </motion.p>
            
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
                Explore Cabins <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => navigate('/listings')} 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg transition-all duration-300"
                size="lg"
              >
                View Locations
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Search bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative -mt-24 z-10 mb-24">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-2xl p-8 hover-lift"
        >
          <div className="mb-5">
            <h3 className="text-2xl font-playfair font-semibold text-cabin-800 mb-2">Find Your Cabin</h3>
            <p className="text-cabin-600">Search our collection of premium cabins</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-2">
              <label className="font-medium text-cabin-800 flex items-center text-sm">
                <MapPin size={16} className="mr-1.5" /> Location
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full rounded-lg border border-cabin-200 px-4 py-3 focus:border-cabin-500 focus:ring-cabin-500 bg-wood-50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-medium text-cabin-800 flex items-center text-sm">
                <Calendar size={16} className="mr-1.5" /> Check-in / Check-out
              </label>
              <input
                type="text" 
                placeholder="Add dates"
                className="w-full rounded-lg border border-cabin-200 px-4 py-3 focus:border-cabin-500 focus:ring-cabin-500 bg-wood-50"
              />
            </div>
            
            <div className="flex flex-col justify-end">
              <Button className="bg-cabin-600 hover:bg-cabin-700 w-full transition-all py-6 text-base font-medium rounded-lg">
                <Search size={18} className="mr-2" /> Search Cabins
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
