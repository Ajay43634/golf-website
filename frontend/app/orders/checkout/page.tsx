'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, count, refreshCart } = useCart()
  const [placing, setPlacing] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) router.push('/login?next=/orders/checkout')
  }, [router])

  async function handlePlaceOrder() {
    const token = localStorage.getItem('token')
    if (!token) { router.push('/login?next=/orders/checkout'); return }

    setPlacing(true)
    setError('')

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.detail ?? 'Failed to place order.')
        return
      }

      const order = await res.json()
      await refreshCart()
      router.push(`/orders/${order.id}`)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setPlacing(false)
    }
  }

  if (count === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
            <Link href="/" className="bg-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              Shop Now
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          {/* Order items summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900">Order Summary</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 px-6 py-4">
                  <img
                    src={item.product.image_url ?? 'https://placehold.co/64x64?text=No+Image'}
                    alt={item.product.name}
                    className="w-14 h-14 object-cover rounded-xl bg-gray-50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 line-clamp-1">{item.product.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900 shrink-0">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping note */}
          <div className="bg-green-50 border border-green-100 rounded-xl px-5 py-4 mb-6 text-sm text-green-800">
            Free standard shipping on all orders. No payment required for this demo.
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-6 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            onClick={handlePlaceOrder}
            disabled={placing}
            className="w-full bg-green-800 text-white py-4 rounded-xl text-base font-semibold hover:bg-green-700 transition-colors disabled:opacity-60"
          >
            {placing ? 'Placing Order...' : 'Confirm & Place Order'}
          </button>

          <Link href="/cart" className="mt-4 block text-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← Back to Cart
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
