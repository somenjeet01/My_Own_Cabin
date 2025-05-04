import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"  // Uncomment this line
import NavbarLogo from "./navbar/NavbarLogo"
import DesktopNav from "./navbar/DesktopNav"
import MobileNav from "./navbar/MobileNav"
import MobileMenuButton from "./navbar/MobileMenuButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { isLoggedIn } = useAuth()  // Uncomment this line

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className="bg-card shadow-sm border-b relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <NavbarLogo />
            </div>
          </div>

          {/* Desktop navigation */}
          <DesktopNav />

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  )
}