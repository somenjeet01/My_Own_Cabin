
import React from "react";



const ListingsHeader = ({ className }) => {
  return (
    <div className={`bg-wood-100 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 -6 -8">
        <h1 className="text-3xl -5xl font-playfair font-semibold text-cabin-800 mb-4 animate-fade-in">
          Find Your Perfect Cabin
        </h1>
        <p className="text-lg text-cabin-600 mb-6 max-w-3xl animate-fade-in">
          Browse our collection of handpicked cabins for your next wilderness retreat
        </p>
        <div className="h-1 w-24 bg-cabin-500 rounded animate-fade-in"></div>
      </div>
    </div>
  );
};

export default ListingsHeader;
