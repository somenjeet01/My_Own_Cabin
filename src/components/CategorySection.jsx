import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function CategoryCard({ title, image, count, slug, className }) {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden cursor-pointer group h-60",
        className
      )}
      onClick={() => navigate(`/listings?category=${slug}`)}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-playfair text-xl font-medium">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span>{count} cabins</span>
          <ArrowRightCircle 
            size={20} 
            className="transform transition-transform group-hover:translate-x-1" 
          />
        </div>
      </div>
    </div>
  );
}

export default function CategorySection() {
  // Mock category data
  const categories = [
    {
      title: "Lakeside",
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      count: 24,
      slug: "lakeside"
    },
    {
      title: "Mountain View",
      image: "https://images.unsplash.com/photo-1740080156023-26bffa59d2a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      count: 18,
      slug: "mountain-view"
    },
    {
      title: "Forest Retreat",
      image: "https://plus.unsplash.com/premium_photo-1666539896803-d70435d30a45?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      count: 31,
      slug: "forest-retreat"
    },
    {
      title: "Luxury Cabins",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      count: 15,
      slug: "luxury"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto forest-pattern">
      <h2 className="text-2xl sm:text-3xl font-playfair font-semibold text-cabin-800 mb-2">
        Explore by Category
      </h2>
      <p className="text-cabin-600 mb-8 max-w-3xl">
        Find your perfect cabin getaway based on location and style
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            title={category.title}
            image={category.image}
            count={category.count}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
}
