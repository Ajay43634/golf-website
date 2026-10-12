import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ProductGridSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-blue-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 bg-blue-800 rounded w-32 animate-pulse" />
            <div className="h-4 bg-blue-800 rounded w-56 mt-2 animate-pulse" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ProductGridSkeleton count={4} />
        </div>
      </main>
      <Footer />
    </>
  )
}
