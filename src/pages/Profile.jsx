import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/context/AuthContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Spinner } from "@/components/ui/spinner"
import { User, Home, Heart, Calendar, Settings, LogOut } from "lucide-react"

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
      setBookings([
        {
          id: "book-1",
          cabin: {
            id: "1",
            title: "Rustic Pine Retreat",
            image:
              "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            location: "Woodland Heights, CA"
          },
          checkIn: "2025-06-15",
          checkOut: "2025-06-20",
          totalPrice: 945,
          status: "upcoming"
        },
        {
          id: "book-2",
          cabin: {
            id: "3",
            title: "Mountaintop Hideaway",
            image:
              "https://images.unsplash.com/photo-1501673618753-c18f6f2d6242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            location: "Pine Ridge, CO"
          },
          checkIn: "2025-07-10",
          checkOut: "2025-07-15",
          totalPrice: 1095,
          status: "upcoming"
        },
        {
          id: "book-3",
          cabin: {
            id: "5",
            title: "Riverside Log Cabin",
            image:
              "https://images.unsplash.com/photo-1569285105724-99283df87bd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            location: "Blue River, WA"
          },
          checkIn: "2025-03-05",
          checkOut: "2025-03-10",
          totalPrice: 1045,
          status: "completed"
        }
      ])

      setSavedCabins([
        {
          id: "2",
          title: "Lakeside Cabin Escape",
          location: "Crystal Lake, OR",
          price: 249,
          image:
            "https://images.unsplash.com/photo-1626268220643-21ae3508b3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          id: "6",
          title: "Alpine Treehouse",
          location: "Mountain Pass, MT",
          price: 279,
          image:
            "https://images.unsplash.com/photo-1636483725288-61a96dc65acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          id: "8",
          title: "Luxury Mountain View",
          location: "Aspen, CO",
          price: 349,
          image:
            "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
      ])

      setIsLoading(false)
    }, 1500)
  }, [toast, navigate, isLoggedIn, user])

  const handleLogout = () => {
    logout()
    navigate("/")
  }

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
                <Card className="p-6">
                  <div className="flex flex-col items-center text-center mb-6 pb-6 border-b">
                    <div className="w-24 h-24 bg-cabin-100 rounded-full flex items-center justify-center mb-4">
                      <User className="w-12 h-12 text-cabin-600" />
                    </div>
                    <h2 className="text-xl font-semibold">
                      {user?.username || "Demo User"}
                    </h2>
                    <p className="text-cabin-600">
                      {user?.email || "demo@example.com"}
                    </p>
                    <p className="text-sm text-cabin-500 mt-1">
                      Member since April 2025
                    </p>
                  </div>

                  <nav className="space-y-2">
                    <Button
                      variant={activeTab === "bookings" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("bookings")}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      My Bookings
                    </Button>
                    <Button
                      variant={activeTab === "saved" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("saved")}
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Saved Cabins
                    </Button>
                    <Button
                      variant={activeTab === "settings" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("settings")}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start mt-4 text-rose-600 hover:text-rose-700"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </Button>
                  </nav>
                </Card>
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
                      <div>
                        <h2 className="text-2xl font-playfair font-semibold mb-6">
                          My Bookings
                        </h2>

                        {bookings.length === 0 ? (
                          <Card className="p-8 text-center">
                            <h3 className="text-lg font-medium mb-2">
                              No bookings yet
                            </h3>
                            <p className="text-cabin-600 mb-4">
                              You haven't made any cabin reservations yet
                            </p>
                            <Button onClick={() => navigate("/listings")}>
                              <Home className="mr-2 h-4 w-4" />
                              Browse Cabins
                            </Button>
                          </Card>
                        ) : (
                          <div className="space-y-6">
                            {bookings.map(booking => (
                              <Card
                                key={booking.id}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col sm:flex-row">
                                  <div className="sm:w-1/3 h-48 sm:h-auto">
                                    <img
                                      src={booking.cabin.image}
                                      alt={booking.cabin.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                                    <div>
                                      <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold">
                                          {booking.cabin.title}
                                        </h3>
                                        <span
                                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            booking.status === "upcoming"
                                              ? "bg-green-100 text-green-800"
                                              : booking.status === "completed"
                                              ? "bg-blue-100 text-blue-800"
                                              : "bg-red-100 text-red-800"
                                          }`}
                                        >
                                          {booking.status
                                            .charAt(0)
                                            .toUpperCase() +
                                            booking.status.slice(1)}
                                        </span>
                                      </div>
                                      <p className="text-cabin-600 mb-4">
                                        {booking.cabin.location}
                                      </p>
                                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                        <div>
                                          <p className="text-cabin-500">
                                            Check-in
                                          </p>
                                          <p className="font-medium">
                                            {new Date(
                                              booking.checkIn
                                            ).toLocaleDateString()}
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-cabin-500">
                                            Check-out
                                          </p>
                                          <p className="font-medium">
                                            {new Date(
                                              booking.checkOut
                                            ).toLocaleDateString()}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t mt-2">
                                      <p className="font-semibold">
                                        Total: ${booking.totalPrice}
                                      </p>
                                      {booking.status === "upcoming" && (
                                        <Button
                                          variant="outline"
                                          className="text-rose-600 hover:text-rose-700"
                                          onClick={() =>
                                            handleCancelBooking(booking.id)
                                          }
                                        >
                                          Cancel Booking
                                        </Button>
                                      )}
                                      {booking.status === "completed" && (
                                        <Button variant="outline">
                                          Leave Review
                                        </Button>
                                      )}
                                      {booking.status === "cancelled" && (
                                        <Button
                                          variant="outline"
                                          onClick={() =>
                                            navigate(
                                              `/listings/${booking.cabin.id}`
                                            )
                                          }
                                        >
                                          Book Again
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "saved" && (
                      <div>
                        <h2 className="text-2xl font-playfair font-semibold mb-6">
                          Saved Cabins
                        </h2>

                        {savedCabins.length === 0 ? (
                          <Card className="p-8 text-center">
                            <h3 className="text-lg font-medium mb-2">
                              No saved cabins
                            </h3>
                            <p className="text-cabin-600 mb-4">
                              You haven't saved any cabins to your wishlist yet
                            </p>
                            <Button onClick={() => navigate("/listings")}>
                              <Home className="mr-2 h-4 w-4" />
                              Browse Cabins
                            </Button>
                          </Card>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {savedCabins.map(cabin => (
                              <Card key={cabin.id} className="overflow-hidden">
                                <div
                                  className="h-48 bg-cover bg-center cursor-pointer"
                                  style={{
                                    backgroundImage: `url(${cabin.image})`
                                  }}
                                  onClick={() =>
                                    navigate(`/listings/${cabin.id}`)
                                  }
                                ></div>
                                <div className="p-4">
                                  <h3 className="font-semibold">
                                    {cabin.title}
                                  </h3>
                                  <p className="text-cabin-600 text-sm">
                                    {cabin.location}
                                  </p>
                                  <div className="flex justify-between items-center mt-4">
                                    <p className="font-medium">
                                      ${cabin.price}{" "}
                                      <span className="text-sm font-normal text-cabin-500">
                                        / night
                                      </span>
                                    </p>
                                    <div className="flex space-x-2">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                          navigate(`/listings/${cabin.id}`)
                                        }
                                      >
                                        View
                                      </Button>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-rose-600 hover:text-rose-700"
                                        onClick={() =>
                                          handleRemoveSavedCabin(cabin.id)
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "settings" && (
                      <div>
                        <h2 className="text-2xl font-playfair font-semibold mb-6">
                          Account Settings
                        </h2>

                        <Card className="p-6">
                          <Tabs defaultValue="personal" className="w-full">
                            <TabsList className="mb-6">
                              <TabsTrigger value="personal">
                                Personal Info
                              </TabsTrigger>
                              <TabsTrigger value="security">
                                Security
                              </TabsTrigger>
                              <TabsTrigger value="preferences">
                                Preferences
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent value="personal" className="space-y-6">
                              <div>
                                <h3 className="text-lg font-medium mb-4">
                                  Personal Information
                                </h3>
                                <form
                                  onSubmit={handleProfileUpdate}
                                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Full Name
                                    </label>
                                    <input
                                      type="text"
                                      name="fullName"
                                      className="w-full p-2 border rounded-md"
                                      value={formData.fullName}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Email Address
                                    </label>
                                    <input
                                      type="email"
                                      name="email"
                                      className="w-full p-2 border rounded-md"
                                      value={formData.email}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Phone Number
                                    </label>
                                    <input
                                      type="tel"
                                      name="phone"
                                      className="w-full p-2 border rounded-md"
                                      value={formData.phone}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Date of Birth
                                    </label>
                                    <input
                                      type="date"
                                      name="dob"
                                      className="w-full p-2 border rounded-md"
                                      value={formData.dob}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div className="md:col-span-2">
                                    <Button type="submit">Save Changes</Button>
                                  </div>
                                </form>
                              </div>
                            </TabsContent>

                            <TabsContent value="security" className="space-y-6">
                              <div>
                                <h3 className="text-lg font-medium mb-4">
                                  Change Password
                                </h3>
                                <form className="space-y-4">
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Current Password
                                    </label>
                                    <input
                                      type="password"
                                      className="w-full p-2 border rounded-md"
                                      placeholder="••••••••"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      New Password
                                    </label>
                                    <input
                                      type="password"
                                      className="w-full p-2 border rounded-md"
                                      placeholder="••••••••"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Confirm New Password
                                    </label>
                                    <input
                                      type="password"
                                      className="w-full p-2 border rounded-md"
                                      placeholder="••••••••"
                                    />
                                  </div>
                                  <Button>Update Password</Button>
                                </form>
                              </div>
                            </TabsContent>

                            <TabsContent
                              value="preferences"
                              className="space-y-6"
                            >
                              <div>
                                <h3 className="text-lg font-medium mb-4">
                                  Email Preferences
                                </h3>
                                <div className="space-y-4">
                                  <div className="flex items-center">
                                    <input
                                      id="newsletter"
                                      type="checkbox"
                                      className="h-4 w-4"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="newsletter"
                                      className="ml-2 block text-sm text-gray-700"
                                    >
                                      Receive newsletters and updates
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <input
                                      id="deals"
                                      type="checkbox"
                                      className="h-4 w-4"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="deals"
                                      className="ml-2 block text-sm text-gray-700"
                                    >
                                      Receive special offers and deals
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <input
                                      id="booking-reminders"
                                      type="checkbox"
                                      className="h-4 w-4"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="booking-reminders"
                                      className="ml-2 block text-sm text-gray-700"
                                    >
                                      Booking reminders
                                    </label>
                                  </div>
                                  <Button>Save Preferences</Button>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </Card>
                      </div>
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
