'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'
import QuantityInput from '@/components/QuantityInput'

export default function CartPage() {
  const { items, count, total, removeFromCart, updateQuantity } = useCart()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Your Cart {count > 0 && <span className="text-gray-400 font-normal text-xl">({count} {count === 1 ? 'item' : 'items'})</span>}
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-500 text-lg mb-6">Your cart is empty.</p>
              <Link href="/" className="bg-green-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Line items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-5">
                    <Link href={`/products/${item.product_id}`} className="shrink-0">
                      <img
                        src={item.product.image_url ?? 'https://placehold.co/100x100?text=No+Image'}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-xl bg-gray-50"
                      />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${item.product_id}`}>
                        <h3 className="font-semibold text-gray-900 hover:text-green-700 transition-colors line-clamp-2">
                          {item.product.name}
                        </h3>
                      </Link>

                      {Object.entries(item.attributes).length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                          {Object.entries(item.attributes).map(([k, v]) => (
                            <span key={k} className="text-xs text-gray-500 capitalize">
                              {k.replace('_', ' ')}: <span className="text-gray-700 font-medium">{v}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                        <QuantityInput
                          value={item.quantity}
                          onChange={(q) => updateQuantity(item.id, q)}
                          max={item.product.stock}
                        />
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm text-red-500 hover:text-red-700 transition-colors font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({count} items)</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Link
                    href="/orders/checkout"
                    className="mt-6 block w-full bg-green-800 text-white text-center py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    Place Order
                  </Link>

                  <Link href="/" className="mt-3 block text-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
