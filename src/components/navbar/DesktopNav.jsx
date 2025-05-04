import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, MapPin, PlusCircle, User, LogIn, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import NavbarSearchInput from "./NavbarSearchInput"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/context/AuthContext"

const DesktopNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isLoggedIn, user, logout } = useAuth()

  return (
    <div className="hidden sm:flex items-center space-x-4">
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className={cn(
          "text-cabin-700 hover:bg-cabin-50 flex items-center",
          location.pathname === "/" && "bg-cabin-50"
        )}
      >
        <Home className="mr-2 h-4 w-4" /> Home
      </Button>

      <Button
        variant="ghost"
        onClick={() => navigate("/listings")}
        className={cn(
          "text-cabin-700 hover:bg-cabin-50 flex items-center",
          location.pathname === "/listings" && "bg-cabin-50"
        )}
      >
        <MapPin className="mr-2 h-4 w-4" /> Cabins
      </Button>

      <NavbarSearchInput />

      {isLoggedIn ? (
        <>
          <Button
            variant="outline"
            onClick={() => navigate("/listings/new")}
            className="text-cabin-600 border-cabin-300 hover:bg-cabin-50 flex items-center"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> New Listing
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-wood-600 hover:bg-wood-700 text-white">
                <User className="mr-2 h-4 w-4" />
                {user?.name || "My Account"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/listings/saved")}>
                <MapPin className="mr-2 h-4 w-4" /> Saved Cabins
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  logout()
                  navigate("/")
                }}
                className="text-rose-600 hover:text-rose-700 focus:text-rose-700"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Button
          onClick={() => navigate("/login")}
          className="bg-cabin-600 hover:bg-cabin-700 text-white flex items-center"
        >
          <LogIn className="mr-2 h-4 w-4" /> Login
        </Button>
      )}
    </div>
  )
}

export default DesktopNav
