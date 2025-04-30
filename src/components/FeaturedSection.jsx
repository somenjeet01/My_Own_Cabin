import React from "react";
import CabinCard from "@/components/CabinCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function FeaturedSection() {
  const navigate = useNavigate();

  // Mock data for featured cabins
  const featuredCabins = [
    {
      id: "1",
      title: "Rustic Pine Retreat",
      location: "Manali, Himachal Pradesh",
      price: 419,
      image: "https://images.unsplash.com/photo-1718132043666-aeda4b92341e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      reviewCount: 128,
      capacity: 4,
      featured: true,
      amenities: ["Wifi", "Fireplace", "Hot Tub"]
    },
    {
      id: "2",
      title: "Lakeside Cabin Escape",
      location: "Nainital, Uttarakhand",
      price: 249,
      image: "https://images.unsplash.com/photo-1693639283335-47e9a100f5b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      reviewCount: 95,
      capacity: 6,
      featured: true,
      amenities: ["Wifi", "Coffee", "Heating"]
    },
    {
      id: "3",
      title: "Mountaintop Hideaway",
      location: "Munnar, Kerala",
      price: 599,
      image: "https://images.unsplash.com/photo-1454356953725-635ce829de44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7,
      reviewCount: 87,
      capacity: 5,
      featured: true,
      amenities: ["Wifi", "Heating", "BBQ"]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-cabin-800">
            Featured Cabins
          </h2>
          <p className="text-cabin-600 mt-2 max-w-2xl">
            Hand-picked cozy retreats with stunning views and exceptional amenities
          </p>
        </div>
        <Button 
          onClick={() => navigate('/listings')}
          variant="outline" 
          className="mt-4 sm:mt-0 border-cabin-300 text-cabin-700 hover:bg-cabin-50"
        >
          View All Cabins
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCabins.map((cabin) => (
          <CabinCard
            key={cabin.id}
            id={cabin.id}
            title={cabin.title}
            location={cabin.location}
            price={cabin.price}
            image={cabin.image}
            rating={cabin.rating}
            reviewCount={cabin.reviewCount}
            capacity={cabin.capacity}
            featured={cabin.featured}
            amenities={cabin.amenities}
          />
        ))}
      </div>
    </div>
  );
}
