import React from 'react';
import CabinCard from '@/components/CabinCard';
import CabinCardSkeleton from '@/components/CabinCardSkeleton';
import { Button } from '@/components/ui/button';

const ListingsGrid = ({ isLoading, paginatedListings, filteredListings, handleResetFilters }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <CabinCardSkeleton key={index} />
        ))}
      </div>
    );
  }
  
  if (filteredListings.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No cabins found</h3>
        <p className="text-cabin-600 mb-4">
          Try adjusting your search or filter criteria
        </p>
        <Button 
          variant="outline" 
          onClick={handleResetFilters}
        >
          Reset Filters
        </Button>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {paginatedListings.map((listing, index) => (
        <div 
          className="transition-all duration-300 hover:translate-y-[-5px]"
          style={{ 
            animationDelay: `${index * 100}ms`,
            opacity: 0,
            animation: 'fade-in 0.5s ease forwards'
          }}
          key={listing.id}
        >
          <CabinCard
            id={listing.id}
            title={listing.title}
            location={listing.location}
            price={listing.price}
            image={listing.image}
            rating={listing.rating}
            reviewCount={listing.reviewCount}
            capacity={listing.capacity}
            featured={listing.featured}
            amenities={listing.amenities}
          />
        </div>
      ))}
    </div>
  );
};

export default ListingsGrid;