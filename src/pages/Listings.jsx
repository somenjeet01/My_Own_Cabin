
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ListingsHeader from "@/components/listings/ListingsHeader";
import FiltersPanel from "@/components/listings/FiltersPanel";
import SearchSortBar from "@/components/listings/SearchSortBar";
import ListingsGrid from "@/components/listings/ListingsGrid";
import ListingsPagination from "@/components/listings/ListingsPagination";
import { useListings } from "@/hooks/useListings";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Listings = () => {
  
  const {
    searchTerm,
    setSearchTerm,
    isLoading,
    sortOption,
    setSortOption,
    isFiltersOpen,
    setIsFiltersOpen,
    priceRange,
    setPriceRange,
    selectedAmenities,
    toggleAmenity,
    selectedLocation,
    setSelectedLocation,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    locations,
    filteredListings,
    paginatedListings,
    currentPage,
    totalPages,
    handleApplyFilters,
    handleResetFilters,
    handlePageChange
  } = useListings();

  const { toast } = useToast();
  
  // Show a toast when component mounts to help users understand how to use the page
  useEffect(() => {
    toast({
      title: "Welcome to Cabin Listings",
      description: "Use filters to find your perfect cabin getaway!",
      type: "success",
      duration: 2000,
    });
  }, []);
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={true} />
        <ListingsHeader />
        
        <main className="flex-grow py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters section */}
              <FiltersPanel
                isFiltersOpen={isFiltersOpen}
                setIsFiltersOpen={setIsFiltersOpen}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedAmenities={selectedAmenities}
                toggleAmenity={toggleAmenity}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                locations={locations}
                checkInDate={checkInDate}
                setCheckInDate={setCheckInDate}
                checkOutDate={checkOutDate}
                setCheckOutDate={setCheckOutDate}
                handleApplyFilters={handleApplyFilters}
                handleResetFilters={handleResetFilters}
              />
              
              {/* Main content */}
              <div className="lg:w-3/4">
                {/* Search and filter bar */}
                <SearchSortBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                  setIsFiltersOpen={setIsFiltersOpen}
                  handleApplyFilters={handleApplyFilters}
                />
                
                {/* Results count */}
                <p className="text-cabin-600 mb-6">
                  {isLoading ? 
                    "Finding the best cabins for you..." : 
                    `Showing ${filteredListings.length} cabin${filteredListings.length !== 1 ? 's' : ''}`
                  }
                </p>
                
                {/* Listings grid */}
                <ListingsGrid
                  isLoading={isLoading}
                  paginatedListings={paginatedListings}
                  filteredListings={filteredListings}
                  handleResetFilters={handleResetFilters}
                />
                
                {/* Pagination */}
                {!isLoading && filteredListings.length > 0 && (
                  <ListingsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Listings;