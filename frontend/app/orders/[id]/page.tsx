'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface OrderItem {
  id: number
  product_id: number
  quantity: number
  unit_price: number
  product: { id: number; name: string; image_url: string | null; category: string }
}

interface Order {
  id: number
  status: string
  total_price: number
  created_at: string
  items: OrderItem[]
}

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) { router.push('/login'); return }

    fetch(`/api/orders/${params.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setOrder)
      .catch(() => router.push('/orders'))
      .finally(() => setLoading(false))
  }, [params.id, router])

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-400">Loading order...</p>
        </main>
        <Footer />
      </>
    )
  }

  if (!order) return null

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Confirmation banner */}
          <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-6 mb-8 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-green-900">Order Confirmed!</h1>
            <p className="mt-1 text-green-700 text-sm">Order #{order.id} · {new Date(order.created_at).toLocaleDateString()}</p>
          </div>

          {/* Items */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900">Items Ordered</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 px-6 py-4">
                  <img
                    src={item.product.image_url ?? 'https://placehold.co/64x64?text=No+Image'}
                    alt={item.product.name}
                    className="w-14 h-14 object-cover rounded-xl bg-gray-50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.product_id}`} className="font-medium text-gray-900 hover:text-green-700 transition-colors line-clamp-1">
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500">Qty: {item.quantity} · ${item.unit_price.toFixed(2)} each</p>
                  </div>
                  <p className="font-semibold text-gray-900 shrink-0">
                    ${(item.unit_price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-xl font-bold text-gray-900">${order.total_price.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/orders" className="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              View All Orders
            </Link>
            <Link href="/" className="flex-1 bg-green-800 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
