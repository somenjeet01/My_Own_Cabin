import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { listings } from "@/data/listings";
import {
  MapPin,
  Star,
  User,
  Calendar,
  Users,
  ArrowLeft,
  Heart,
} from "lucide-react";

const ListingDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isHeartActive, setIsHeartActive] = useState(false);

  const listing = listings.find((l) => l.id === id) || listings[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn />

      <main className="flex-grow py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-4">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-cabin-600 hover:text-cabin-800 hover:bg-cabin-50 flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" /> Back to listings
            </Button>
          </div>

          {/* Listing header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-cabin-800 mb-2">
                {listing.title}
              </h1>
              <div className="flex items-center text-cabin-600">
                <MapPin size={16} className="mr-1" />
                <span>{listing.location}</span>
                <div className="mx-2 text-cabin-300">•</div>
                <div className="flex items-center">
                  <Star
                    size={16}
                    className="text-amber-500 mr-1 fill-amber-500"
                  />
                  <span className="font-medium">{listing.rating}</span>
                  <span className="ml-1">({listing.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className={`mt-2 md:mt-0 ${
                isHeartActive
                  ? "bg-pink-50 text-pink-600 border-pink-200"
                  : "text-cabin-600 border-cabin-200"
              }`}
              onClick={() => setIsHeartActive(!isHeartActive)}
            >
              <Heart
                size={16}
                className={`mr-1 ${isHeartActive ? "fill-pink-600" : ""}`}
              />
              {isHeartActive ? "Saved" : "Save"}
            </Button>
          </div>

          {/* Image gallery */}
          <div className="mb-8">
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-2">
              <img
                src={listing.images[activeImage]}
                alt={`${listing.title} view ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {listing.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-[4/3] overflow-hidden rounded-lg cursor-pointer border-2 ${
                    activeImage === index
                      ? "border-cabin-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${listing.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <h2 className="text-xl font-semibold font-playfair">
                      Cabin hosted by {listing.host.name}
                    </h2>
                  </div>
                  <div className="flex items-center text-cabin-600 text-sm">
                    <Users size={16} className="mr-1" />
                    <span>{listing.capacity} guests</span>
                    <span className="mx-2">•</span>
                    <span>
                      {listing.bedrooms}{" "}
                      {listing.bedrooms === 1 ? "bedroom" : "bedrooms"}
                    </span>
                    <span className="mx-2">•</span>
                    <span>
                      {listing.bathrooms}{" "}
                      {listing.bathrooms === 1 ? "bathroom" : "bathrooms"}
                    </span>
                  </div>
                </div>
                <Avatar className="h-12 w-12 border-2 border-white shadow">
                  <AvatarImage
                    src={listing.host.avatar}
                    alt={listing.host.name}
                  />
                  <AvatarFallback>{listing.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>

              <div className="border-t border-b py-6 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
                  <div className="flex items-center">
                    <User size={18} className="text-cabin-500 mr-2" />
                    <div>
                      <div className="font-medium">
                        Hosted by {listing.host.name}
                      </div>
                      <div className="text-cabin-500 text-sm">
                        Since {listing.host.joined}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star size={18} className="text-cabin-500 mr-2" />
                    <div>
                      <div className="font-medium">{listing.rating} rating</div>
                      <div className="text-cabin-500 text-sm">
                        {listing.reviewCount} reviews
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="text-cabin-500 mr-2" />
                    <div>
                      <div className="font-medium">
                        {listing.host.responseRate}% response rate
                      </div>
                      <div className="text-cabin-500 text-sm">
                        Quick responses
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-playfair font-medium mb-4">
                  About this cabin
                </h3>
                <p className="text-cabin-700 mb-4">{listing.description}</p>
                <p className="text-cabin-700">
                  This cabin is perfect for couples or small families looking to
                  disconnect from the hustle and bustle of city life. The
                  surrounding area offers wonderful hiking trails, fishing
                  spots, and wildlife viewing opportunities. Inside, you'll find
                  comfortable furnishings, a fully-equipped kitchen, and all the
                  amenities needed for a relaxing stay.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-playfair font-medium mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {listing.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <amenity.icon size={18} className="text-cabin-500 mr-2" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Tabs defaultValue="reviews" className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="reviews">
                    Reviews ({listing.reviewCount})
                  </TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>

                <TabsContent value="reviews">
                  <div className="flex items-center mb-6">
                    <Star
                      size={24}
                      className="text-amber-500 fill-amber-500 mr-2"
                    />
                    <span className="text-xl font-medium mr-2">
                      {listing.rating}
                    </span>
                    <span className="text-cabin-600">
                      · {listing.reviewCount} reviews
                    </span>
                  </div>

                  <div className="space-y-6">
                    {listing.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center mb-3">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage
                              src={review.user.avatar}
                              alt={review.user.name}
                            />
                            <AvatarFallback>
                              {review.user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {review.user.name}
                            </div>
                            <div className="text-cabin-500 text-sm">
                              {review.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${
                                i < review.rating
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-gray-300"
                              } mr-0.5`}
                            />
                          ))}
                        </div>
                        <p className="text-cabin-700">{review.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Leave a review section */}
                  <div className="mt-8 border-t pt-6">
                    <h4 className="text-lg font-medium mb-4">Leave a review</h4>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="rating">Rating</Label>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={20}
                              className="text-gray-300 hover:text-amber-500 cursor-pointer mr-1"
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="comment">Your review</Label>
                        <Textarea
                          id="comment"
                          placeholder="Write your experience with this cabin..."
                          className="mt-1 resize-none h-32"
                        />
                      </div>
                      <Button className="bg-cabin-600 hover:bg-cabin-700">
                        Submit Review
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="location">
                  <div className="rounded-lg overflow-hidden h-80 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-cabin-600 mb-2">
                        Map view would appear here
                      </p>
                      <p className="text-sm text-cabin-500">
                        Located in {listing.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">About the area</h4>
                    <p className="text-cabin-700 mb-4">
                      This cabin is located in the beautiful Woodland Heights
                      area, surrounded by pine trees and nature trails. It's an
                      ideal location for hiking, fishing, and enjoying the
                      outdoors.
                    </p>
                    <div className="mt-4">
                      <h5 className="font-medium mb-2">Nearby attractions:</h5>
                      <ul className="list-disc list-inside text-cabin-700">
                        <li>Crystal Lake (15 min drive)</li>
                        <li>Mountain Trail Hiking (10 min drive)</li>
                        <li>Local Winery (20 min drive)</li>
                        <li>River Fishing Spots (5 min drive)</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking sidebar */}
            <div>
              <div className="bg-white rounded-lg border shadow-sm p-6 sticky top-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-semibold">
                    ₹{listing.price}
                    </span>
                    <span className="text-cabin-500"> / night</span>
                  </div>
                  <div className="flex items-center">
                    <Star
                      size={16}
                      className="text-amber-500 fill-amber-500 mr-1"
                    />
                    <span>{listing.rating}</span>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden mb-4">
                  <div className="grid grid-cols-2">
                    <div className="border-r border-b p-3">
                      <div className="text-xs font-medium">CHECK-IN</div>
                      <div className="mt-1">Add date</div>
                    </div>
                    <div className="border-b p-3">
                      <div className="text-xs font-medium">CHECKOUT</div>
                      <div className="mt-1">Add date</div>
                    </div>
                    <div className="col-span-2 p-3">
                      <div className="text-xs font-medium">GUESTS</div>
                      <div className="mt-1">
                        1 guest{" "}
                        <span className="float-right text-cabin-400">▼</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-cabin-600 hover:bg-cabin-700 text-white mb-4">
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-cabin-300 text-cabin-700 hover:bg-cabin-50 mb-6"
                >
                  Contact Host
                </Button>

                <div className="text-center text-sm text-cabin-500">
                  You won't be charged yet
                </div>

                <div className="border-t mt-4 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>₹{listing.price} x 5 nights</span>
                    <span>₹{listing.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>₹85</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>₹75</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                    <span>Total before taxes</span>
                    <span>₹{listing.price * 5 + 85 + 75}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListingDetail;
