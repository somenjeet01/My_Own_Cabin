import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
//import { Amenity } from "@/components/listings/FiltersPanel";

export const useListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 350]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("featured");
  const [allListings, setAllListings] = useState([]);
  const { toast } = useToast();
  //const navigate = useNavigate();

  const itemsPerPage = 6;

  const listings = [
    {
      id: "1",
      title: "Rustic Pine Retreat",
      location: "Woodland Heights, CA",
      price: 189,
      image: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?...",
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
      image: "https://images.unsplash.com/photo-1626268220643-21ae3508b3b1?...",
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
      image: "https://images.unsplash.com/photo-1501673618753-c18f6f2d6242?...",
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
      image: "https://images.unsplash.com/photo-1635320714782-9be556f15b44?...",
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
      image: "https://images.unsplash.com/photo-1569285105724-99283df87bd8?...",
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
      image: "https://images.unsplash.com/photo-1636483725288-61a96dc65acf?...",
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
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?...",
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
      image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?...",
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

    toast({
      title: "Filters Applied",
      description: `Found ${filteredListings.length} cabins matching your criteria`,
    });

    const params = new URLSearchParams(searchParams);
    if (selectedLocation) params.set("location", selectedLocation);
    if (priceRange[0] !== 50 || priceRange[1] !== 350) {
      params.set("minPrice", priceRange[0].toString());
      params.set("maxPrice", priceRange[1].toString());
    }
    if (selectedAmenities.length > 0) {
      params.set("amenities", selectedAmenities.join(','));
    }
    setSearchParams(params);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setPriceRange([50, 350]);
    setSelectedAmenities([]);
    setSelectedLocation("");
    setSortOption("featured");
    setSearchParams(new URLSearchParams());
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared",
    });
  };

  const sortListings = (listings) => {
    switch (sortOption) {
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
      const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
      const matchesAmenities = selectedAmenities.length === 0 ||
        selectedAmenities.every(amenity =>
          listing.amenities.includes(amenity)
        );
      const matchesLocation = !selectedLocation ||
        listing.location.includes(selectedLocation);

      return matchesSearch && matchesPrice && matchesAmenities && matchesLocation;
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
    }, 1500);
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
