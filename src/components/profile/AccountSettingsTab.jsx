import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AccountSettingsTab = ({ formData, onInputChange, onProfileUpdate }) => {
  return (
    <div>
      <h2 className="text-2xl font-playfair font-semibold mb-6">
        Account Settings
      </h2>

      <Card className="p-6">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <form
                onSubmit={onProfileUpdate}
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
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
              <h3 className="text-lg font-medium mb-4">Change Password</h3>
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

          <TabsContent value="preferences" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Email Preferences</h3>
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
  )
}

export default AccountSettingsTab
