import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * About section component with statistics
 */
const AboutSection = () => {
  // Animation variants for sequential animations
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Stats data for easy management
  const stats = [
    { value: "150+", label: "Unique Cabins" },
    { value: "50+", label: "Locations" },
    { value: "3000+", label: "Happy Guests" },
    { value: "4.9/5", label: "Guest Rating" },
  ];

  return (
    <div className="bg-wood-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          {/* Image section */}
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0 order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -z-10 -inset-1 rounded-lg bg-gradient-to-r from-cabin-200 to-cabin-300 opacity-30 blur-lg"></div>
              <div className="relative image-zoom rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1473773386757-42bbe7288351?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cabin interior"
                  className="w-full h-96 object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Cabin exterior"
                  className="w-40 h-40 object-cover rounded-lg border-4 border-white shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content section */}
          <div className="md:w-1/2 order-1 md:order-2">
            <motion.div
              initial="initial"
              whileInView="animate"
              custom={0}
              variants={fadeInUpVariants}
              className="inline-block mb-2 px-4 py-1 bg-cabin-100 text-cabin-700 rounded-full text-sm font-medium"
            >
              Our Story
            </motion.div>

            <motion.h2
              initial="initial"
              whileInView="animate"
              custom={0}
              variants={fadeInUpVariants}
              className="text-3xl sm:text-4xl font-playfair font-semibold text-cabin-800 mb-6"
            >
              Your Perfect Cabin Getaway
            </motion.h2>

            <motion.p
              initial="initial"
              whileInView="animate"
              custom={1}
              variants={fadeInUpVariants}
              className="text-cabin-600 mb-6 text-lg"
            >
              At Comfy Cabin Explorer, we curate the finest cabin experiences in
              the most beautiful natural settings. Whether you're looking for a
              romantic retreat, family adventure, or solitary escape, we have
              the perfect cabin waiting for you.
            </motion.p>

            <motion.p
              initial="initial"
              whileInView="animate"
              custom={2}
              variants={fadeInUpVariants}
              className="text-cabin-600 mb-8"
            >
              Our cabins offer modern amenities while maintaining rustic charm,
              ensuring your stay is comfortable and memorable. From lakeside
              cabins with private docks to mountain retreats with panoramic
              views, find your ideal escape.
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white rounded-lg p-4 text-center border border-cabin-200 transition-all duration-200"
                >
                  <div className="text-3xl font-semibold text-cabin-700 font-playfair">
                    {stat.value}
                  </div>
                  <div className="text-cabin-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA link */}
            <motion.div
              initial="initial"
              whileInView="animate"
              custom={4}
              variants={fadeInUpVariants}
              className="mt-8"
            >
              <a
                href="/listings"
                className="inline-flex items-center text-cabin-700 border-b-2 border-cabin-500 hover:text-cabin-800 transition-colors pb-1 font-medium group"
              >
                Browse our cabin collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
