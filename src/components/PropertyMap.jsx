import React, { useEffect, useRef, useState } from "react"
// import "mapbox-gl/dist/mapbox-gl.css"

// Using an iframe-based Google Maps approach as a more reliable alternative
const PropertyMap = ({
  address,
  title,
  className = "",
  height = "400px",
  zoom = 15,
  interactive = true
}) => {
  const [loading, setLoading] = useState(true)
  const iframeRef = useRef(null)

  // Function to encode the address for the Google Maps URL
  const getEncodedAddress = address => {
    return encodeURIComponent(address)
  }

  // Function to generate the Google Maps URL
  const getMapsUrl = address => {
    const encodedAddress = getEncodedAddress(address)
    const mode = interactive ? "place" : "search"
    return `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=${zoom}&output=embed&iwloc=${mode}`
  }

  useEffect(() => {
    // Handle iframe load event
    const handleLoad = () => {
      setLoading(false)
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", handleLoad)
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleLoad)
      }
    }
  }, [address])

  return (
    <div
      className={`relative rounded-lg overflow-hidden ${className}`}
      style={{ height }}
    >
      <iframe
        ref={iframeRef}
        title={`Map for ${title}`}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling={interactive ? "yes" : "no"}
        marginHeight={0}
        marginWidth={0}
        src={getMapsUrl(address)}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex items-center space-x-2">
            <div className="animate-spin h-5 w-5 border-2 border-blue-600 rounded-full border-t-transparent"></div>
            <span>Loading map...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default PropertyMap
