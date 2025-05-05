import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home } from "lucide-react"

const SavedCabinsTab = ({ savedCabins, onRemoveSavedCabin }) => {
  const navigate = useNavigate()

  return (
    <div>
      <h2 className="text-2xl font-playfair font-semibold mb-6">
        Saved Cabins
      </h2>

      {savedCabins.length === 0 ? (
        <Card className="p-8 text-center">
          <h3 className="text-lg font-medium mb-2">No saved cabins</h3>
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
                style={{ backgroundImage: `url(${cabin.image})` }}
                onClick={() => navigate(`/listings/${cabin.id}`)}
              ></div>
              <div className="p-4">
                <h3 className="font-semibold">{cabin.title}</h3>
                <p className="text-cabin-600 text-sm">{cabin.location}</p>
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
                      onClick={() => navigate(`/listings/${cabin.id}`)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-rose-600 hover:text-rose-700"
                      onClick={() => onRemoveSavedCabin(cabin.id)}
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
  )
}

export default SavedCabinsTab
