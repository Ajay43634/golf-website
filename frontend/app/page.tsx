import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrowseByCategory from '@/components/BrowseByCategory'
import Footer from '@/components/Footer'

function Hero() {
  return (
    <div className="bg-gradient-to-br from-green-950 via-green-900 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Elevate Your Game
        </h1>
        <p className="mt-6 text-xl text-green-200 max-w-2xl mx-auto">
          Premium golf equipment trusted by players at every level. From tee to green, we have everything you need.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/clubs"
            className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow"
          >
            Shop Now
          </Link>
          <Link
            href="/clubs"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
          >
            View Clubs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <BrowseByCategory />
      <Footer />
    </>
  )
}
