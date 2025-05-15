"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Activity, BarChart2, Calendar, LogOut, MessageSquare, Settings, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()
  const [userName, setUserName] = useState("John Doe")
  const [userPlan, setUserPlan] = useState("Premium Plan")
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    const storedUserName = localStorage.getItem("userName") || "John Doe"

    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access the dashboard.",
        variant: "destructive",
      })
      router.push("/login")
    } else {
      setUserName(storedUserName)
      setIsLoading(false)
    }
  }, [router, toast])

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userName")
    localStorage.removeItem("userEmail")

    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    })

    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7D3C98]"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* User info for mobile - top right */}
      <div className="md:hidden fixed top-4 right-4 z-50 flex items-center bg-white rounded-full px-2 py-1 shadow-md">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="h-5 w-5 text-gray-500" />
        </div>
        <div className="ml-2 mr-1">
          <p className="text-xs font-medium text-gray-800">{userName}</p>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 fixed md:static top-0 left-0 z-40 w-[220px] h-full bg-white border-r flex flex-col`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            {/* Removed ApexFitness text as requested */}
            <button className="md:hidden p-1 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-6 w-6 text-gray-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">{userName}</p>
              <p className="text-xs text-gray-500">{userPlan}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className={`flex items-center px-3 py-2 rounded-md text-sm ${
                  pathname === "/dashboard"
                    ? "bg-[#7D3C98]/10 text-[#7D3C98] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Activity className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/workouts"
                className={`flex items-center px-3 py-2 rounded-md text-sm ${
                  pathname === "/dashboard/workouts"
                    ? "bg-[#7D3C98]/10 text-[#7D3C98] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="mr-3 h-5 w-5" />
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/progress"
                className={`flex items-center px-3 py-2 rounded-md text-sm ${
                  pathname === "/dashboard/progress"
                    ? "bg-[#7D3C98]/10 text-[#7D3C98] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BarChart2 className="mr-3 h-5 w-5" />
                Progress
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/chat"
                className={`flex items-center px-3 py-2 rounded-md text-sm ${
                  pathname === "/dashboard/chat"
                    ? "bg-[#7D3C98]/10 text-[#7D3C98] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                AI Chat
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className={`flex items-center px-3 py-2 rounded-md text-sm ${
                  pathname === "/dashboard/settings"
                    ? "bg-[#7D3C98]/10 text-[#7D3C98] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-2 w-full rounded-md text-sm text-gray-600 hover:bg-gray-100"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 overflow-auto pt-16 md:pt-0">
        <div className="min-h-screen bg-white">{children}</div>
      </div>
    </div>
  )
}
