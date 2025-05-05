import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User, Calendar, Heart, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center text-center mb-6 pb-6 border-b">
        <div className="w-24 h-24 bg-cabin-100 rounded-full flex items-center justify-center mb-4">
          <User className="w-12 h-12 text-cabin-600" />
        </div>
        <h2 className="text-xl font-semibold">
          {user?.username || "Demo User"}
        </h2>
        <p className="text-cabin-600">{user?.email || "demo@example.com"}</p>
        <p className="text-sm text-cabin-500 mt-1">Member since April 2025</p>
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
  )
}

export default ProfileSidebar
