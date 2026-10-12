'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Order {
  id: number
  status: string
  total_price: number
  created_at: string
  items: { id: number; quantity: number; product: { name: string } }[]
}

export default function OrdersPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) { router.push('/login'); return }

    fetch('/api/orders/me', { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setOrders)
      .catch(() => router.push('/login'))
      .finally(() => setLoading(false))
  }, [router])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

          {loading ? (
            <p className="text-gray-400 text-center py-20">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-6">You haven&apos;t placed any orders yet.</p>
              <Link href="/" className="bg-green-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Link
                  key={order.id}
                  href={`/orders/${order.id}`}
                  className="block bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Order #{order.id}</p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {new Date(order.created_at).toLocaleDateString()} ·{' '}
                        {order.items.reduce((s, i) => s + i.quantity, 0)} items
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                        {order.items.map((i) => i.product.name).join(', ')}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="font-bold text-gray-900">${order.total_price.toFixed(2)}</p>
                      <span className="inline-block mt-1 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full capitalize">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
