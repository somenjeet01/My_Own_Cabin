import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

function Testimonial({ name, location, text, avatar, rating, occupation }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="bg-white shadow-md border border-cabin-100 hover:shadow-lg transition-shadow duration-300 h-full relative overflow-hidden">
        <div className="absolute -right-4 -top-4 text-cabin-100 opacity-20">
          <Quote size={80} />
        </div>
        <CardContent className="pt-6 relative z-10 h-full flex flex-col">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                }
              />
            ))}
          </div>
          <p className="text-cabin-700 italic mb-6 flex-grow">{text}</p>
          <div className="flex items-center mt-auto">
            <Avatar className="h-12 w-12 mr-3 border-2 border-cabin-200">
              <AvatarImage src={avatar} alt={name} className="object-cover" />
              <AvatarFallback className="bg-cabin-500 text-white">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-cabin-800">{name}</p>
              <p className="text-sm text-cabin-500">
                {occupation ? `${occupation}, ${location}` : location}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Harsh Kumar Barick",
      location: "Delhi",
      occupation: "Photographer",
      text: "The Ridgetop Retreat exceeded all expectations. We woke up to breathtaking mountain views each morning and spent evenings stargazing from the hot tub. The attention to detail in the cabin made it feel like a luxury escape in nature.",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Aman Raj kake",
      location: "Karnataka",

      occupation: "Software Engineer",
      text: "As someone who's always connected, I was skeptical about a cabin getaway. This experience changed my perspective completely. The Lakeside Cabin was the perfect balance of rustic charm and modern amenities. The fishing was incredible!",
      avatar:
        "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Sonal Kumari",
      location: "Mumbai",
      occupation: "Travel Blogger",
      text: "I booked the Cozy Cabin for a weekend getaway with friends, and it was the best decision ever! The cabin was beautifully decorated, and we loved the outdoor fire pit. We made memories that will last a lifetime.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1732738372665-cefc61e5e4d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Ankit Sharma",
      location: "Himachal Pradesh",
      occupation: "Writer",
      text: "I rented the Mountain Writing Retreat to finish my novel, and it was the most productive month I've had in years. The cabin's peaceful atmosphere, stunning views, and absence of distractions created the perfect creative environment.",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-wood-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-cabin-800 mb-4">
          Guest Experiences
        </h2>
        <div className="h-1 w-24 bg-cabin-500 rounded mx-auto mb-4"></div>
        <p className="text-cabin-600 max-w-2xl mx-auto text-lg">
          Discover what makes our cabins special through the eyes of our guests
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Testimonial
              name={item.name}
              location={item.location}
              occupation={item.occupation}
              text={item.text}
              avatar={item.avatar}
              rating={item.rating}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
        <a
          href="/listings"
          className="inline-block text-cabin-700 border-b-2 border-cabin-500 hover:text-cabin-800 transition-colors pb-1 font-medium"
        >
          Find Your Perfect Cabin Getaway →
        </a>
      </motion.div>
    </div>
  );
}
