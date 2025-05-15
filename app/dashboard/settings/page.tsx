"use client"

import type * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  // Account settings state
  const [accountSettings, setAccountSettings] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "••••••••",
  })

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    workoutReminders: true,
    progressUpdates: false,
    newFeatures: true,
  })

  // Privacy settings state
  const [privacySettings, setPrivacySettings] = useState({
    shareWorkoutData: false,
    shareProgressPhotos: false,
    allowDataAnalysis: true,
  })

  // Connected accounts state
  const [connectedAccounts, setConnectedAccounts] = useState({
    fitbit: false,
    googleFit: false,
    appleHealth: false,
  })

  // Handle account form submission
  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Account updated",
        description: "Your account information has been updated successfully.",
      })
    }, 1000)
  }

  // Handle notification toggle
  const handleNotificationToggle = (key: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }))
  }

  // Handle privacy toggle
  const handlePrivacyToggle = (key: string) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }))
  }

  // Handle connected account toggle
  const handleConnectedAccountToggle = (key: string) => {
    setConnectedAccounts((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof connectedAccounts],
    }))

    toast({
      title: connectedAccounts[key as keyof typeof connectedAccounts] ? `Disconnected ${key}` : `Connected ${key}`,
      description: connectedAccounts[key as keyof typeof connectedAccounts]
        ? `Your ${key} account has been disconnected.`
        : `Your ${key} account has been connected successfully.`,
    })
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#36454F] mb-2">Settings</h1>
      <p className="text-[#708090] mb-6">Manage your account settings and preferences</p>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8 bg-gray-100">
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="privacy"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            Privacy
          </TabsTrigger>
          <TabsTrigger
            value="connected"
            className="data-[state=active]:bg-[#7D3C98]/10 data-[state=active]:text-[#7D3C98]"
          >
            Connected
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#36454F] mb-4">Account Information</h2>

            <form onSubmit={handleAccountSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={accountSettings.name}
                  onChange={(e) => setAccountSettings({ ...accountSettings, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={accountSettings.email}
                  onChange={(e) => setAccountSettings({ ...accountSettings, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Button type="button" variant="link" className="p-0 h-auto text-[#7D3C98]">
                    Change Password
                  </Button>
                </div>
                <Input id="password" type="password" value={accountSettings.password} disabled />
              </div>

              <div className="pt-4">
                <Button type="submit" className="bg-[#7D3C98] hover:bg-[#7D3C98]/90" disabled={loading}>
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-[#36454F] mb-4">Danger Zone</h3>
              <p className="text-sm text-[#708090] mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#36454F] mb-4">Notification Preferences</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">Email Notifications</h3>
                  <p className="text-sm text-[#708090]">Receive emails about your account activity</p>
                </div>
                <Switch
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={() => handleNotificationToggle("emailNotifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">Push Notifications</h3>
                  <p className="text-sm text-[#708090]">Receive push notifications on your devices</p>
                </div>
                <Switch
                  checked={notificationSettings.pushNotifications}
                  onCheckedChange={() => handleNotificationToggle("pushNotifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">Workout Reminders</h3>
                  <p className="text-sm text-[#708090]">Get reminded about your scheduled workouts</p>
                </div>
                <Switch
                  checked={notificationSettings.workoutReminders}
                  onCheckedChange={() => handleNotificationToggle("workoutReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">Progress Updates</h3>
                  <p className="text-sm text-[#708090]">Receive weekly progress reports</p>
                </div>
                <Switch
                  checked={notificationSettings.progressUpdates}
                  onCheckedChange={() => handleNotificationToggle("progressUpdates")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">New Features</h3>
                  <p className="text-sm text-[#708090]">Be the first to know about new features</p>
                </div>
                <Switch
                  checked={notificationSettings.newFeatures}
                  onCheckedChange={() => handleNotificationToggle("newFeatures")}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#36454F] mb-4">Privacy Settings</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">Share Workout Data</h3>
                  <p className="text-sm text-[#708090]">Allow sharing your workout data with friends</p>
                </div>
                <Switch
                  checked={privacySettings.shareWorkoutData}
                  onCheckedChange={() => handlePrivacyToggle("shareWorkoutData")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">Share Progress Photos</h3>
                  <p className="text-sm text-[#708090]">Allow sharing your progress photos with friends</p>
                </div>
                <Switch
                  checked={privacySettings.shareProgressPhotos}
                  onCheckedChange={() => handlePrivacyToggle("shareProgressPhotos")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#36454F]">Allow Data Analysis</h3>
                  <p className="text-sm text-[#708090]">Allow us to analyze your data to improve recommendations</p>
                </div>
                <Switch
                  checked={privacySettings.allowDataAnalysis}
                  onCheckedChange={() => handlePrivacyToggle("allowDataAnalysis")}
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-[#36454F] mb-4">Data Management</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="w-auto">
                  Download My Data
                </Button>
                <Button variant="outline" className="w-auto text-red-500 border-red-200 hover:bg-red-50">
                  Delete All My Data
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Connected Accounts */}
        <TabsContent value="connected">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#36454F] mb-4">Connected Accounts</h2>
            <p className="text-sm text-[#708090] mb-6">Connect your fitness devices and apps to sync your data</p>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7D3C98]/10 flex items-center justify-center mr-4">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#7D3C98">
                      <path d="M17.7,16.6h-4.2v-4.2h4.2V16.6z M12.7,16.6H8.5v-4.2h4.2V16.6z M17.7,11.6h-4.2V7.4h4.2V11.6z M12.7,11.6H8.5V7.4h4.2V11.6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#36454F]">Fitbit</h3>
                    <p className="text-sm text-[#708090]">Connect your Fitbit device</p>
                  </div>
                </div>
                <Switch
                  checked={connectedAccounts.fitbit}
                  onCheckedChange={() => handleConnectedAccountToggle("fitbit")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7D3C98]/10 flex items-center justify-center mr-4">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#7D3C98">
                      <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M16.64,16.64c-1.16,1.16-2.42,1.9-3.54,2.17V17.5c0-0.28-0.22-0.5-0.5-0.5s-0.5,0.22-0.5,0.5v1.31c-1.12-0.27-2.38-1.01-3.54-2.17c-1.16-1.16-1.9-2.42-2.17-3.54H7.5c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5H6.19c0.27-1.12,1.01-2.38,2.17-3.54c1.16-1.16,2.42-1.9,3.54-2.17V7.5c0,0.28,0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5V6.19c1.12,0.27,2.38,1.01,3.54,2.17c1.16,1.16,1.9,2.42,2.17,3.54H17.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5h1.31C17.54,14.22,16.8,15.48,16.64,16.64z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#36454F]">Google Fit</h3>
                    <p className="text-sm text-[#708090]">Connect your Google Fit account</p>
                  </div>
                </div>
                <Switch
                  checked={connectedAccounts.googleFit}
                  onCheckedChange={() => handleConnectedAccountToggle("googleFit")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7D3C98]/10 flex items-center justify-center mr-4">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#7D3C98">
                      <path d="M19.03,6.03L19.03,6.03c-1.44-1.44-3.14-2.1-5.03-2.1c-1.89,0-3.59,0.66-5.03,2.1c-1.44,1.44-2.1,3.14-2.1,5.03c0,1.89,0.66,3.59,2.1,5.03c1.44,1.44,3.14,2.1,5.03,2.1c1.89,0,3.59-0.66,5.03-2.1c1.44-1.44,2.1-3.14,2.1-5.03C21.13,9.17,20.47,7.47,19.03,6.03z M16.58,16.58c-0.7,0.7-1.63,1.08-2.58,1.08c-0.95,0-1.88-0.38-2.58-1.08c-0.7-0.7-1.08-1.63-1.08-2.58c0-0.95,0.38-1.88,1.08-2.58c0.7-0.7,1.63-1.08,2.58-1.08c0.95,0,1.88,0.38,2.58,1.08c0.7,0.7,1.08,1.63,1.08,2.58C17.66,14.95,17.28,15.88,16.58,16.58z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#36454F]">Apple Health</h3>
                    <p className="text-sm text-[#708090]">Connect your Apple Health account</p>
                  </div>
                </div>
                <Switch
                  checked={connectedAccounts.appleHealth}
                  onCheckedChange={() => handleConnectedAccountToggle("appleHealth")}
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
