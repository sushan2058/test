"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OnboardingPage() {
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // This is a placeholder for authentication check
    // In a real app, you would check if the user is authenticated
    // For demo purposes, we'll just show a message and redirect
    toast({
      title: "Authentication Required",
      description: "Please create an account to access the onboarding process.",
      variant: "destructive",
    })

    // Redirect to signup after a short delay
    const timeout = setTimeout(() => {
      router.push("/signup")
    }, 2000)

    return () => clearTimeout(timeout)
  }, [router, toast])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Redirecting to signup...</h1>
          <p className="mb-6">You need to create an account to access the onboarding process.</p>
          <Button onClick={() => router.push("/signup")}>Go to Signup</Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
