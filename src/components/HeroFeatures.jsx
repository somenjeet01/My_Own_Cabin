import React from "react"
import { motion } from "framer-motion"
import { Wifi, Coffee, MapPin, ThermometerSun } from "lucide-react"

/**
 * Component displaying feature highlights in the hero section
 */
const HeroFeatures = () => {
  // Feature items data for easy management
  const features = [
    {
      icon: <Wifi className="h-6 w-6 text-cabin-600" />,
      title: "High-Speed WiFi",
      delay: 0
    },
    {
      icon: <Coffee className="h-6 w-6 text-cabin-600" />,
      title: "Complimentary Coffee",
      delay: 0.1
    },
    {
      icon: <MapPin className="h-6 w-6 text-cabin-600" />,
      title: "Prime Locations",
      delay: 0.2
    },
    {
      icon: <ThermometerSun className="h-6 w-6 text-cabin-600" />,
      title: "Climate Control",
      delay: 0.3
    }
  ]

  return (
    <div className="bg-wood-50 py-10 border-t border-b border-cabin-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Map through the feature items */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="flex flex-col items-center"
            >
              <div className="bg-cabin-100 rounded-full p-3 mb-3">
                {feature.icon}
              </div>
              <h3 className="text-cabin-800 font-medium">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroFeatures
