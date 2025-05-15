import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Dumbbell, Heart, Award, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Parallax and Animation */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto animate-fade-up relative z-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
              Transform Your <span className="text-[#FF6B6B]">Fitness</span> Journey with AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in text-center">
              Personalized workout plans, nutrition guidance, and real-time tracking powered by cutting-edge AI
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white animate-bounce-subtle" asChild>
                <Link href="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Company Information with Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#36454F] relative inline-block">
              Our Mission
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FF6B6B]"></span>
            </h2>
            <p className="text-lg text-[#708090] leading-relaxed">
              At ApexFitness, we're revolutionizing the fitness industry by combining cutting-edge AI technology with
              personalized fitness solutions. Our mission is to make fitness accessible, enjoyable, and effective for
              everyone, regardless of their fitness level or goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 animate-slide-right">
              <h3 className="text-2xl font-bold mb-4 text-[#36454F]">Why Choose ApexFitness?</h3>
              <div className="space-y-4">
                {[
                  "AI-powered personalization that adapts to your progress",
                  "Seamless integration with fitness wearables and smart equipment",
                  "Comprehensive approach to fitness, nutrition, and wellness",
                  "Community support and expert guidance",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="h-5 w-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                    <p className="text-[#708090]">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center md:justify-start mt-6">
                <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-left">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 mx-auto">
                <Image src="/images/fitness-training.jpg" alt="Fitness Training" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Animated Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#36454F] relative inline-block">
              Our Features
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FF6B6B]"></span>
            </h2>
            <p className="text-lg text-[#708090] max-w-2xl mx-auto">
              Discover how ApexFitness can transform your fitness journey with our innovative features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card
              className="hover:shadow-lg transition-all hover:scale-105 border-t-4 border-t-[#7D3C98] animate-fade-up mx-auto w-full"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#7D3C98]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Dumbbell className="h-8 w-8 text-[#7D3C98]" />
                </div>
                <CardTitle>Personalized Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Tailored fitness and diet plans based on your unique body type, goals, and preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-all hover:scale-105 border-t-4 border-t-[#7D3C98] animate-fade-up mx-auto w-full"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#7D3C98]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-[#7D3C98]" />
                </div>
                <CardTitle>Health Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Real-time health tracking with wearable integration to keep you on track with your fitness journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-all hover:scale-105 border-t-4 border-t-[#7D3C98] animate-fade-up mx-auto w-full"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#7D3C98]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#7D3C98]"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <CardTitle>Smart Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Track your gym equipment usage and get recommendations for optimal workout efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-all hover:scale-105 border-t-4 border-t-[#7D3C98] animate-fade-up mx-auto w-full"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#7D3C98]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-[#7D3C98]" />
                </div>
                <CardTitle>Reward System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Earn rewards and achievements as you progress, keeping you motivated throughout your fitness journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials with Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#36454F] relative inline-block">
              What Clients Say
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FF6B6B]"></span>
            </h2>
            <p className="text-lg text-[#708090] max-w-2xl mx-auto">
              Hear from our community of fitness enthusiasts who have transformed their lives with ApexFitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all animate-fade-up mx-auto w-full"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#36454F]">{testimonial.name}</h4>
                      <p className="text-sm text-[#708090]">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <svg
                      className="absolute -top-2 -left-2 h-8 w-8 text-[#7D3C98]/20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-[#708090] italic pl-6">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-20 bg-gradient-to-br from-[#7D3C98] to-[#9B59B6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FF6B6B] rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of satisfied users who have achieved their fitness goals with ApexFitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white animate-pulse" asChild>
                <Link href="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Fitness Enthusiast",
    quote:
      "ApexFitness completely transformed my approach to working out. The personalized plans are exactly what I needed to stay consistent and see real results.",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    name: "Michael Chen",
    title: "Gym Member",
    quote:
      "The smart equipment tracking feature has been a game-changer for my gym sessions. I'm more efficient and focused than ever before.",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    name: "Emily Rodriguez",
    title: "Corporate Client",
    quote:
      "Implementing ApexFitness for our company wellness program has improved team morale and productivity. The group challenges are especially popular!",
    avatar: "/images/testimonial-3.jpg",
  },
]
