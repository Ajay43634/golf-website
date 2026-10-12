import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ProductDetailSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <ProductDetailSkeleton />
      </main>
      <Footer />
    </>
  )
}
