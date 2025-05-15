import Link from "next/link"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#36454F]">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#708090]">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#708090]">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[#708090]">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#708090]">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message here..." className="border-gray-300 min-h-[150px]" />
                </div>
                <Button className="bg-[#7D3C98] hover:bg-[#7D3C98]/90 w-full md:w-auto">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#36454F]">Contact Information</h2>
              <p className="text-[#708090] mb-8">
                Our team is here to help you with any questions or concerns. Feel free to reach out to us through any of
                the following channels.
              </p>

              <div className="space-y-6">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-[#7D3C98]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#7D3C98]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#36454F] mb-1">Email Us</h3>
                      <p className="text-[#708090]">support@apexfitness.com</p>
                      <p className="text-[#708090]">info@apexfitness.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-[#7D3C98]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#7D3C98]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#36454F] mb-1">Call Us</h3>
                      <p className="text-[#708090]">+1 (555) 123-4567</p>
                      <p className="text-[#708090]">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-[#7D3C98]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#7D3C98]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#36454F] mb-1">Visit Us</h3>
                      <p className="text-[#708090]">123 Fitness Avenue</p>
                      <p className="text-[#708090]">New York, NY 10001</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#36454F]">Frequently Asked Questions</h2>
            <p className="text-[#708090] max-w-2xl mx-auto">
              Find quick answers to common questions about our services and support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#36454F]">{faq.question}</h3>
                  <p className="text-[#708090]">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#7D3C98]">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their fitness with ApexFitness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white" asChild>
              <Link href="/signup">Start Free Trial</Link>
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
      </section>

      <Footer />
    </div>
  )
}

const faqs = [
  {
    question: "How can I get technical support?",
    answer:
      "Our support team is available via email at support@apexfitness.com or by phone at +1 (555) 123-4567 during business hours. We typically respond to all inquiries within 24 hours.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service. Please contact our support team to process your refund.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "You can upgrade your plan at any time through your account dashboard or by contacting our support team.",
  },
  {
    question: "Do you have a physical location?",
    answer:
      "Yes, our headquarters is located in New York City. While most of our services are provided digitally, you're welcome to visit our office by appointment.",
  },
]
