import {
  Wifi,
  FlameKindling,
  Coffee,
  Dog,
  Bath,
  Car,
  Utensils,
  Flame,
  Umbrella,
  Mountain,
  Snowflake,
  Tv,
  Waves,
  Sun,
} from "lucide-react";

export const listings = [
  {
    id: "1",
    title: "Rustic Pine Retreat",
    description:
      "Escape to this charming cabin nestled among towering pine trees. This beautiful retreat offers a perfect blend of rustic charm and modern comforts. Enjoy a morning coffee on the spacious deck overlooking the forest, spend your days exploring nearby hiking trails, and end your evenings stargazing by the outdoor fire pit.",
    location: "Woodland Heights, California",
    price: 1890,
    rating: 4.9,
    reviewCount: 128,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    host: {
      name: "John Smith",
      joined: "2019",
      avatar: "https://i.pravatar.cc/150?img=13",
      responseRate: 99,
    },
    amenities: [
      { name: "Wifi", icon: Wifi },
      { name: "Fireplace", icon: FlameKindling },
      { name: "Heating", icon: Snowflake },
      { name: "Coffee Maker", icon: Coffee },
      { name: "Pet Friendly", icon: Dog },
      { name: "Hot Tub", icon: Bath },
      { name: "Parking", icon: Car },
      { name: "Kitchen", icon: Utensils },
      { name: "TV", icon: Tv },
    ],
    images: [
      "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1472831818955-3b659a9c47e7?auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1586744627062-45ddb3a6b8be?auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1606823616058-541d53078058?auto=format&fit=crop&w=1470&q=80",
    ],
    reviews: [
      {
        id: "1",
        user: {
          name: "Sarah Thompson",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
        date: "August 2023",
        rating: 5,
        text: "This cabin was absolutely perfect! The location is stunning, with beautiful views of the forest. Inside was clean, cozy and had everything we needed. The fireplace was a wonderful touch for cool evenings. We'll definitely be back!",
      },
      {
        id: "2",
        user: {
          name: "Michael Chen",
          avatar: "https://i.pravatar.cc/150?img=8",
        },
        date: "July 2023",
        rating: 5,
        text: "We had a fantastic weekend at this cabin. The hot tub under the stars was magical, and the kitchen was well-equipped for cooking. The host was responsive and helpful with local recommendations. Already planning our next visit!",
      },
      {
        id: "3",
        user: {
          name: "Emily Johnson",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
        date: "June 2023",
        rating: 4,
        text: "Lovely cabin in a beautiful setting. Very comfortable and clean. The only reason for 4 stars instead of 5 is that the wifi was a bit spotty, but that's to be expected in a remote location. Would definitely recommend for a peaceful getaway.",
      },
    ],
  },
  {
    id: "2",
    title: "Coastal Cliff Cabin",
    description:
      "Perched above dramatic cliffs, this coastal cabin offers breathtaking ocean views and fresh sea air. Enjoy morning walks along the shore, evenings by the fireplace, and stunning sunsets from the wraparound deck.",
    location: "Alleppey, Kerala",
    price: 3949,
    rating: 4.6,
    reviewCount: 74,
    capacity: 4,
    bedrooms: 1,
    bathrooms: 1,
    host: {
      name: "Priya Menon",
      joined: "2020",
      avatar: "https://i.pravatar.cc/150?img=21",
      responseRate: 98,
    },
    amenities: [
      { name: "Wifi", icon: Wifi },
      { name: "Heating", icon: Snowflake },
      { name: "Coffee Maker", icon: Coffee },
      { name: "Beach Access", icon: Umbrella },
      { name: "Parking", icon: Car },
      { name: "Pet Friendly", icon: Dog },
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1710119487488-91802d3343e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29hc3RhbCUyMENsaWZmJTIwQ2FiaW58ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1713854092239-fe2c69ccc529?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29hc3RhbCUyMENsaWZmJTIwQ2FiaW58ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1718939044081-49e7894d451d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: [
      {
        id: "1",
        user: {
          name: "Aarav R.",
          avatar: "https://i.pravatar.cc/150?img=22",
        },
        date: "March 2024",
        rating: 5,
        text: "Peaceful and picturesque! The view of the ocean from the deck was unforgettable. Great host and clean space. Highly recommend for couples.",
      },
      {
        id: "2",
        user: {
          name: "Nisha Kapoor",
          avatar: "https://i.pravatar.cc/150?img=11",
        },
        date: "February 2024",
        rating: 4,
        text: "Loved the cabin! Just wish the hot water lasted a bit longer. Otherwise, a dream stay!",
      },
    ],
  },
  {
    id: "3",
    title: "Forest Edge Getaway",
    description:
      "Unplug and reconnect with nature at this cozy hideaway on the edge of a dense forest. Perfect for birdwatchers and nature lovers, this cabin offers a serene environment with all the essentials.",
    location: "Coorg, Karnataka",
    price: 1249,
    rating: 4.5,
    reviewCount: 103,
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    host: {
      name: "Ravi Narayan",
      joined: "2021",
      avatar: "https://i.pravatar.cc/150?img=27",
      responseRate: 96,
    },
    amenities: [
      { name: "Wifi", icon: Wifi },
      { name: "Heating", icon: Snowflake },
      { name: "BBQ", icon: Flame },
      { name: "Fire Pit", icon: FlameKindling },
      { name: "Parking", icon: Car },
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1690164161383-f5ff30a790bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9yZXN0JTIwRWRnZSUyMEdldGF3YXl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1672196807460-ef13d2f8c74f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rm9yZXN0JTIwRWRnZSUyMEdldGF3YXl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1695729822038-0171cc43f4c0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729522605438-1faacf1ed13e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: [
      {
        id: "1",
        user: {
          name: "Vikram S.",
          avatar: "https://i.pravatar.cc/150?img=16",
        },
        date: "January 2024",
        rating: 4,
        text: "Very calm and quiet. Loved the morning walks in the forest. Cabin could use a few more utensils but overall great stay!",
      },
      {
        id: "2",
        user: {
          name: "Maya Desai",
          avatar: "https://i.pravatar.cc/150?img=9",
        },
        date: "December 2023",
        rating: 5,
        text: "Exactly what we needed for a digital detox. Ravi was super helpful and check-in was seamless.",
      },
    ],
  },

  {
    id: "4",
    title: "Luxury Mountain View Lodge",
    description:
      "Indulge in an unforgettable escape at this luxurious mountain-view cabin, perched high above the valley. Featuring elegant interiors and panoramic vistas of the forested peaks, this modern retreat offers the perfect balance of nature and comfort. Wake up to sunrise views from the master bedroom, unwind in the private hot tub under starry skies, and enjoy evenings by the indoor fireplace or on the expansive deck with a glass of wine.",
    location: "Sierra Crest Ridge, California",
    price: 2890,
    rating: 4.97,
    reviewCount: 212,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    host: {
      name: "Elena Brooks",
      joined: "2018",
      avatar: "https://i.pravatar.cc/150?img=48",
      responseRate: 100,
    },
    amenities: [
      { name: "High-Speed Wifi", icon: Wifi },
      { name: "Indoor Fireplace", icon: FlameKindling },
      { name: "Central Heating & Cooling", icon: Snowflake },
      { name: "Gourmet Coffee Station", icon: Coffee },
      { name: "Pet Friendly", icon: Dog },
      { name: "Private Hot Tub", icon: Bath },
      { name: "Covered Parking", icon: Car },
      { name: "Full Kitchen", icon: Utensils },
      { name: "Smart TV", icon: Tv },
      { name: "Mountain View Deck", icon: Mountain },
    ],
    images: [
      "https://images.unsplash.com/photo-1641977078461-f038aa0f1395?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617225628230-f8d3ac280bb0?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716292690672-cac6b9008447?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1684248529600-4f0400e1eb22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: [
      {
        id: "1",
        user: {
          name: "Anna Rivera",
          avatar: "https://i.pravatar.cc/150?img=20",
        },
        date: "May 2024",
        rating: 5,
        text: "Absolutely stunning! The views were breathtaking and the cabin was spotless and luxurious. The hot tub on the deck with a mountain backdrop was unforgettable. Will be returning for sure!",
      },
      {
        id: "2",
        user: {
          name: "David Kim",
          avatar: "https://i.pravatar.cc/150?img=31",
        },
        date: "April 2024",
        rating: 5,
        text: "Best Airbnb experience we've had. Everything from the design to the details felt high-end. Peaceful, private, and perfectly maintained. Elena was a fantastic host.",
      },
      {
        id: "3",
        user: {
          name: "Lena Patel",
          avatar: "https://i.pravatar.cc/150?img=14",
        },
        date: "March 2024",
        rating: 4.8,
        text: "Loved our stay at this mountain lodge! The deck view in the morning was unbeatable. Only minor issue was figuring out the smart TV setup, but everything else was flawless.",
      },
    ],
  },

  {
  id: "5",
  title: "Riverside Log Cabin",
  description:
    "Unwind in this cozy log cabin tucked along the serene riverbank. With the gentle sound of flowing water and the scent of pine in the air, this rustic retreat is ideal for nature lovers. Relax on the wraparound porch, dip your toes in the private riverside access, and enjoy evenings by the stone fireplace or under the stars by the fire pit.",
  location: "Willow Creek, Oregon",
  price: 1009,
  rating: 4.85,
  reviewCount: 174,
  capacity: 5,
  bedrooms: 2,
  bathrooms: 1,
  host: {
    name: "Laura Bennett",
    joined: "2020",
    avatar: "https://i.pravatar.cc/150?img=24",
    responseRate: 98,
  },
  amenities: [
    { name: "Wifi", icon: Wifi },
    { name: "Fireplace", icon: FlameKindling },
    { name: "Heating", icon: Snowflake },
    { name: "Coffee Maker", icon: Coffee },
    { name: "Pet Friendly", icon: Dog },
    { name: "Fire Pit", icon: FlameKindling },
    { name: "River Access", icon: Waves },
    { name: "Deck & Hammock", icon: Sun },
    { name: "Kitchen", icon: Utensils },
    { name: "TV", icon: Tv },
  ],
  images: [
    "https://images.unsplash.com/photo-1651469347257-393c8256ae06?q=80&w=1266&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592704720264-19bd4e54bb56?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729614295462-0475a4847191?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  reviews: [
    {
      id: "1",
      user: {
        name: "Jacob Martin",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      date: "April 2024",
      rating: 5,
      text: "The perfect riverside escape. Waking up to the sound of water was so peaceful. The cabin was warm, charming, and well-equipped. Loved the hammock near the river!",
    },
    {
      id: "2",
      user: {
        name: "Nina Roberts",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      date: "March 2024",
      rating: 4.9,
      text: "Really cozy and authentic log cabin experience. Laura was an amazing host. The private river access made it feel like our own little world.",
    },
    {
      id: "3",
      user: {
        name: "Aaron White",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      date: "February 2024",
      rating: 4.7,
      text: "Beautiful cabin in a magical setting. Only minor issue was the road getting in during heavy rain, but everything else was top-notch. Great for a peaceful weekend.",
    },
  ],
}

  
];
  