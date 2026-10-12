'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

const CATEGORIES = ['clubs', 'balls', 'apparel', 'accessories']

export default function Navbar() {
  const { count } = useCart()
  const { user, logout } = useAuth()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLogout() {
    logout()
    setMenuOpen(false)
    router.push('/')
  }

  return (
    <nav className="bg-green-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight hover:text-green-300 transition-colors" onClick={() => setMenuOpen(false)}>
            FairwayPro
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {CATEGORIES.map((cat) => (
              <Link key={cat} href={`/${cat}`} className="capitalize text-sm font-medium hover:text-green-300 transition-colors">
                {cat}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Search — desktop only */}
            <div className="hidden sm:flex items-center bg-green-800 rounded-lg px-3 py-1.5 gap-2">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search products..." className="bg-transparent text-sm text-white placeholder-green-400 outline-none w-36" />
            </div>

            {/* User */}
            {user ? (
              <div className="hidden sm:flex items-center gap-3">
                <Link href="/orders" className="text-sm font-medium text-green-200 hover:text-white transition-colors">
                  Hi, {user.name.split(' ')[0]}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-xs font-semibold text-green-300 hover:text-white border border-green-700 hover:border-green-400 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden sm:block p-2 rounded-full hover:bg-green-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            )}

            {/* Cart */}
            <Link href="/cart" className="relative p-2 rounded-full hover:bg-green-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-yellow-400 text-green-900 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-green-800 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-800 px-4 pb-4 pt-2 space-y-1">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/${cat}`}
              onClick={() => setMenuOpen(false)}
              className="block capitalize px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors"
            >
              {cat}
            </Link>
          ))}
          <div className="border-t border-green-800 pt-2 mt-2">
            {user ? (
              <>
                <Link href="/orders" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
                  My Orders
                </Link>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-green-300 hover:bg-green-800 transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
                  Login
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
