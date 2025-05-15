import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/images/apex-logo.png" alt="ApexFitness Logo" width={40} height={40} className="mr-2" />
            <span className="text-xl font-bold text-[#36454F]">ApexFitness</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#7D3C98]">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-[#7D3C98]">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#7D3C98]">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-[#7D3C98]">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#7D3C98]">
              Terms
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} ApexFitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
