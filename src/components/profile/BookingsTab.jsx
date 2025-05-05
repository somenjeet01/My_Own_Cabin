import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home } from "lucide-react"

const BookingsTab = ({ bookings, onCancelBooking }) => {
  const navigate = useNavigate()

  return (
    <div>
      <h2 className="text-2xl font-playfair font-semibold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <Card className="p-8 text-center">
          <h3 className="text-lg font-medium mb-2">No bookings yet</h3>
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
            <Card key={booking.id} className="overflow-hidden">
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
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-cabin-600 mb-4">
                      {booking.cabin.location}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-cabin-500">Check-in</p>
                        <p className="font-medium">
                          {new Date(booking.checkIn).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-cabin-500">Check-out</p>
                        <p className="font-medium">
                          {new Date(booking.checkOut).toLocaleDateString()}
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
                        onClick={() => onCancelBooking(booking.id)}
                      >
                        Cancel Booking
                      </Button>
                    )}
                    {booking.status === "completed" && (
                      <Button variant="outline">Leave Review</Button>
                    )}
                    {booking.status === "cancelled" && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          navigate(`/listings/${booking.cabin.id}`)
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
  )
}

export default BookingsTab
