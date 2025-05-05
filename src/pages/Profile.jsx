import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/context/AuthContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import { Spinner } from "@/components/ui/spinner"
import ProfileSidebar from "@/components/profile/ProfileSidebar"
import BookingsTab from "@/components/profile/BookingsTab"
import SavedCabinsTab from "@/components/profile/SavedCabinsTab"
import AccountSettingsTab from "@/components/profile/AccountSettingsTab"
import { mockBookings, mockSavedCabins } from "@/data/ProfileMockData"

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("bookings")
  const { toast } = useToast()
  const navigate = useNavigate()
  const { user, isLoggedIn, logout, updateUserProfile } = useAuth()

  const [bookings, setBookings] = useState([])
  const [savedCabins, setSavedCabins] = useState([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: ""
  })

  useEffect(() => {
    // Check if user is logged in
    if (!isLoggedIn) {
      toast({
        title: "Access denied",
        description: "Please log in to view your profile",
        variant: "destructive"
      })
      navigate("/login", { state: { from: { pathname: "/profile" } } })
      return
    }

    // Set form data based on user info
    if (user) {
      setFormData({
        fullName: user.username || "",
        email: user.email || "",
        phone: "+1 (555) 123-4567",
        dob: "1990-01-01"
      })
    }

    // Simulate data loading
    setIsLoading(true)

    // Load mock data
    setTimeout(() => {
      setBookings(mockBookings)
      setSavedCabins(mockSavedCabins)
      setIsLoading(false)
    }, 1500)
  }, [toast, navigate, isLoggedIn, user])

  const handleRemoveSavedCabin = id => {
    setSavedCabins(savedCabins.filter(cabin => cabin.id !== id))
    toast({
      title: "Cabin removed",
      description: "The cabin has been removed from your saved list"
    })
  }

  const handleCancelBooking = id => {
    setBookings(
      bookings.map(booking =>
        booking.id === id ? { ...booking, status: "cancelled" } : booking
      )
    )
    toast({
      title: "Booking cancelled",
      description: "Your booking has been cancelled"
    })
  }

  const handleProfileUpdate = e => {
    e.preventDefault()

    if (user) {
      updateUserProfile({
        username: formData.fullName,
        email: formData.email
      })
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="md:w-1/4">
                <ProfileSidebar
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>

              {/* Main content */}
              <div className="md:w-3/4">
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <Spinner size="lg" />
                  </div>
                ) : (
                  <>
                    {activeTab === "bookings" && (
                      <BookingsTab
                        bookings={bookings}
                        onCancelBooking={handleCancelBooking}
                      />
                    )}

                    {activeTab === "saved" && (
                      <SavedCabinsTab
                        savedCabins={savedCabins}
                        onRemoveSavedCabin={handleRemoveSavedCabin}
                      />
                    )}

                    {activeTab === "settings" && (
                      <AccountSettingsTab
                        formData={formData}
                        onInputChange={handleInputChange}
                        onProfileUpdate={handleProfileUpdate}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}

export default Profile
