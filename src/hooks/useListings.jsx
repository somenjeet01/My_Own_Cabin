import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
//import { Amenity } from "@/components/listings/FiltersPanel"; // This import may still throw error unless 'Amenity' is a component. Otherwise remove.

export const useListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";

  const initialPriceMin = parseInt(searchParams.get("minPrice") || "50");
  const initialPriceMax = parseInt(searchParams.get("maxPrice") || "350");
  const initialLocation = searchParams.get("location") || "";
  const initialAmenities = searchParams.get("amenities")?.split(",") || [];
  const initialDates = {
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
  };

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([initialPriceMin, initialPriceMax]);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAmenities, setSelectedAmenities] = useState(
    initialAmenities.filter(item => 
      ["Wifi", "Fireplace", "Heating", "Coffee", "Pet Friendly", "Hot Tub"].includes(item)
    )
  );
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [checkInDate, setCheckInDate] = useState(
    initialDates.checkIn ? new Date(initialDates.checkIn) : undefined
  );
  const [checkOutDate, setCheckOutDate] = useState(
    initialDates.checkOut ? new Date(initialDates.checkOut) : undefined
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(searchParams.get("sort") || "featured");
  const [allListings, setAllListings] = useState([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const itemsPerPage = 6;

  const listings = [
    {
      id: "1",
      title: "Rustic Pine Retreat",
      location: "Woodland Heights, CA",
      price: 189,
      image: "https://images.unsplash.com/photo-1718132043666-aeda4b92341e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVzdGljJTIwUGluZSUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D",
      rating: 4.9,
      reviewCount: 128,
      capacity: 4,
      featured: true,
      amenities: ["Wifi", "Fireplace", "Hot Tub"]
    },
    {
      id: "2",
      title: "Lakeside Cabin Escape",
      location: "Crystal Lake, OR",
      price: 249,
      image: "https://plus.unsplash.com/premium_photo-1745138601115-bee6dab1638f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGFrZXNpZGUlMjBDYWJpbiUyMEVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.8,
      reviewCount: 95,
      capacity: 6,
      featured: true,
      amenities: ["Wifi", "Coffee", "Heating"]
    },
    {
      id: "3",
      title: "Mountaintop Hideaway",
      location: "Pine Ridge, CO",
      price: 219,
      image: "https://images.unsplash.com/photo-1560441357-c2ffe0d5ffc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW50b3AlMjBIaWRlYXdheXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.7,
      reviewCount: 87,
      capacity: 5,
      featured: true,
      amenities: ["Wifi", "Heating", "BBQ"]
    },
    {
      id: "4",
      title: "Cozy Forest Cabin",
      location: "Redwood Forest, CA",
      price: 159,
      image: "https://images.unsplash.com/photo-1699209148943-acacf2821f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q296eSUyMEZvcmVzdCUyMENhYmlufGVufDB8fDB8fHww",
      rating: 4.6,
      reviewCount: 62,
      capacity: 3,
      featured: false,
      amenities: ["Fireplace", "Coffee"]
    },
    {
      id: "5",
      title: "Riverside Log Cabin",
      location: "Blue River, WA",
      price: 209,
      image: "https://images.unsplash.com/photo-1653051993873-071d589ba16e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJpdmVyc2lkZSUyMExvZyUyMENhYmlufGVufDB8fDB8fHww",
      rating: 4.8,
      reviewCount: 104,
      capacity: 6,
      featured: false,
      amenities: ["Wifi", "Heating", "BBQ"]
    },
    {
      id: "6",
      title: "Alpine Treehouse",
      location: "Mountain Pass, MT",
      price: 279,
      image: "https://images.unsplash.com/photo-1636483725288-61a96dc65acf?auto=format&fit=crop&w=1470&q=80",
      rating: 4.9,
      reviewCount: 75,
      capacity: 4,
      featured: false,
      amenities: ["Wifi", "Hot Tub", "Coffee"]
    },
    {
      id: "7",
      title: "Creekside Cottage",
      location: "Silver Creek, ID",
      price: 199,
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1470&q=80",
      rating: 4.7,
      reviewCount: 92,
      capacity: 4,
      featured: false,
      amenities: ["Pet Friendly", "Fireplace", "Coffee"]
    },
    {
      id: "8",
      title: "Luxury Mountain View",
      location: "Aspen, CO",
      price: 349,
      image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1470&q=80",
      rating: 5.0,
      reviewCount: 47,
      capacity: 8,
      featured: true,
      amenities: ["Wifi", "Hot Tub", "Heating", "Pet Friendly"]
    }
  ];

  const locations = [...new Set(listings.map(listing => listing.location.split(',')[1].trim()))];

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleApplyFilters = () => {
    setIsFiltersOpen(false);

    const params = new URLSearchParams();

    if (searchTerm) params.set("search", searchTerm);
    if (selectedLocation) params.set("location", selectedLocation);
    if (priceRange[0] !== 50 || priceRange[1] !== 350) {
      params.set("minPrice", priceRange[0].toString());
      params.set("maxPrice", priceRange[1].toString());
    }
    if (selectedAmenities.length > 0) {
      params.set("amenities", selectedAmenities.join(','));
    }
    if (checkInDate) {
      params.set("checkIn", checkInDate.toISOString().split('T')[0]);
    }
    if (checkOutDate) {
      params.set("checkOut", checkOutDate.toISOString().split('T')[0]);
    }
    if (sortOption !== "featured") {
      params.set("sort", sortOption);
    }

    setSearchParams(params);

    const filteredCount = filterListings().length;
    toast({
      title: "Filters Applied",
      description: `Found ${filteredCount} cabins matching your criteria`,
    });

    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setPriceRange([50, 350]);
    setSelectedAmenities([]);
    setSelectedLocation("");
    setSortOption("featured");
    setCheckInDate(undefined);
    setCheckOutDate(undefined);
    setSearchParams(new URLSearchParams());
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared",
    });
  };

  const sortListings = (listings) => {
    switch(sortOption) {
      case "price-low":
        return [...listings].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...listings].sort((a, b) => b.price - a.price);
      case "rating":
        return [...listings].sort((a, b) => b.rating - a.rating);
      case "featured":
      default:
        return [...listings].sort((a, b) => (a.featured === b.featured) ? 0 : a.featured ? -1 : 1);
    }
  };

  const filterListings = () => {
    return allListings.filter(listing => {
      const matchesSearch = searchTerm ? 
                          (listing.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          listing.location.toLowerCase().includes(searchTerm.toLowerCase())) : true;

      const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];

      const matchesAmenities = selectedAmenities.length === 0 || 
                             selectedAmenities.every(amenity => 
                              listing.amenities.includes(amenity));

      const matchesLocation = !selectedLocation || 
                            listing.location.includes(selectedLocation);

      const matchesDates = true;

      return matchesSearch && matchesPrice && matchesAmenities && matchesLocation && matchesDates;
    });
  };

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      if (categoryFilter) {
        toast({
          title: "Category Filter Applied",
          description: `Showing results for "${categoryFilter}" cabins`,
        });
      }

      setAllListings(listings);
      setIsLoading(false);
    }, 500);
  }, [categoryFilter, toast]);

  const filteredListings = sortListings(filterListings());

  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
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
  };
};
