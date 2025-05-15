"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("personal")

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[#7D3C98] to-[#9B59B6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FF6B6B] rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up">Pricing Plans</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Choose the perfect plan that fits your fitness needs and goals
          </p>
        </div>
      </section>

      {/* Plan Selector */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="personal" value={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="personal" className="text-sm md:text-base">
                    Personal
                  </TabsTrigger>
                  <TabsTrigger value="gym" className="text-sm md:text-base">
                    Gym Member
                  </TabsTrigger>
                  <TabsTrigger value="corporate" className="text-sm md:text-base">
                    Corporate
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Personal Plans */}
              <TabsContent value="personal" className="animate-fade-up">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#36454F]">Personal Fitness Plans</h2>
                  <p className="text-[#708090] mt-2 max-w-2xl mx-auto">
                    Designed for individuals looking to achieve their personal fitness goals
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <PricingCard
                    title="Starter Plan"
                    price="$9.99"
                    description="Perfect for beginners starting their fitness journey"
                    features={[
                      "Standard fitness plans",
                      "Basic diet recommendations",
                      "Basic activity tracking",
                      "Email support",
                    ]}
                    ctaText="Get Started"
                    ctaLink="/signup"
                    popular={false}
                  />

                  <PricingCard
                    title="Advanced Plan"
                    price="$19.99"
                    description="Comprehensive fitness solution for dedicated individuals"
                    features={[
                      "Personalized fitness plans",
                      "Customized diet plans",
                      "Real-time health monitoring",
                      "Reward system",
                      "Priority support",
                    ]}
                    ctaText="Get Started"
                    ctaLink="/signup"
                    popular={true}
                  />
                </div>
              </TabsContent>

              {/* Gym Member Plans */}
              <TabsContent value="gym" className="animate-fade-up">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#36454F]">Gym Subscriber Plans</h2>
                  <p className="text-[#708090] mt-2 max-w-2xl mx-auto">
                    Special plans for gym members to enhance their gym experience
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <PricingCard
                    title="Gym Connect"
                    price="$5.99"
                    description="Connect your gym membership with our smart platform"
                    features={[
                      "Personalized fitness plans",
                      "Smart equipment tracking",
                      "Gym usage analytics",
                      "Email support",
                    ]}
                    ctaText="Get Started"
                    ctaLink="/signup"
                    popular={false}
                  />

                  <PricingCard
                    title="Gym Premium"
                    price="$14.99"
                    description="Premium features for serious gym-goers"
                    features={[
                      "Personalized fitness plans",
                      "Real-time health monitoring",
                      "Priority equipment booking",
                      "Exclusive discounts on personal training",
                      "24/7 support",
                    ]}
                    ctaText="Get Started"
                    ctaLink="/signup"
                    popular={true}
                  />
                </div>
              </TabsContent>

              {/* Corporate Plans */}
              <TabsContent value="corporate" className="animate-fade-up">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#36454F]">Corporate Wellness Plans</h2>
                  <p className="text-[#708090] mt-2 max-w-2xl mx-auto">
                    Boost employee wellness and productivity with our corporate plans
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <PricingCard
                    title="Basic"
                    price="$99"
                    description="For small teams up to 10 employees"
                    features={[
                      "Standard fitness plans",
                      "Group challenges",
                      "Basic analytics dashboard",
                      "Email support",
                    ]}
                    ctaText="Contact Sales"
                    ctaLink="/contact"
                    popular={false}
                    period="per month"
                  />

                  <PricingCard
                    title="Pro"
                    price="$199"
                    description="For teams up to 20 employees"
                    features={[
                      "Personalized fitness plans",
                      "Health monitoring",
                      "Advanced analytics and reports",
                      "Team challenges and leaderboards",
                      "Dedicated account manager",
                    ]}
                    ctaText="Contact Sales"
                    ctaLink="/contact"
                    popular={true}
                    period="per month"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#36454F]">Frequently Asked Questions</h2>
            <p className="text-[#708090] mt-2 max-w-2xl mx-auto">Find answers to common questions about our plans</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#36454F]">{faq.question}</h3>
                <p className="text-[#708090]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#7D3C98]">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Choose a plan that works for you and transform your fitness experience today.
          </p>
          <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white" asChild>
            <Link href="/signup">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
  popular: boolean
  period?: string
}

function PricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  popular,
  period = "per month",
}: PricingCardProps) {
  return (
    <Card className={`relative transition-all hover:shadow-lg ${popular ? "border-[#7D3C98] shadow-md" : ""} h-full`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-[#7D3C98] text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-4xl font-bold text-[#36454F]">{price}</span>
          <span className="text-[#708090] ml-2">{period}</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-[#7D3C98] mr-2 flex-shrink-0" />
              <span className="text-[#708090]">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className={`w-full ${popular ? "bg-[#7D3C98] hover:bg-[#7D3C98]/90" : "bg-[#708090] hover:bg-[#708090]/90"}`}
          asChild
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "We offer a 7-day free trial for all our personal fitness plans. You can cancel anytime during the trial period.",
  },
  {
    question: "How do I connect my fitness wearables?",
    answer:
      "After signing up, you can connect your fitness wearables through the Settings section in your dashboard. We support most major brands including Fitbit, Apple Watch, and Garmin.",
  },
  {
    question: "Do you offer custom corporate plans?",
    answer:
      "Yes, we can create custom plans for larger organizations. Please contact our sales team through the Contact page for more information.",
  },
  {
    question: "How often are the fitness plans updated?",
    answer:
      "Your fitness plans are continuously updated based on your progress and feedback. Our AI analyzes your data to make adjustments that optimize your results.",
  },
]
