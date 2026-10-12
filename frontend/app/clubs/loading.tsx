import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ProductGridSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-green-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 bg-green-800 rounded w-32 animate-pulse" />
            <div className="h-4 bg-green-800 rounded w-56 mt-2 animate-pulse" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex gap-2 mb-8">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-9 w-20 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>
          <ProductGridSkeleton count={4} />
        </div>
      </main>
      <Footer />
    </>
  )
}
