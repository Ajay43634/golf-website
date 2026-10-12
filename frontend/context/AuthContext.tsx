'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

interface AuthUser {
  id: number
  name: string
  email: string
}

interface AuthContextValue {
  user: AuthUser | null
  token: string | null
  login: (token: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<AuthUser | null>(null)

  const fetchMe = useCallback(async (t: string) => {
    try {
      const res = await fetch('/api/users/me', {
        headers: { Authorization: `Bearer ${t}` },
      })
      if (res.ok) {
        setUser(await res.json())
      } else {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
      }
    } catch {
      setToken(null)
      setUser(null)
    }
  }, [])

  // Rehydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('token')
    if (stored) {
      setToken(stored)
      fetchMe(stored)
    }
  }, [fetchMe])

  const login = async (t: string) => {
    localStorage.setItem('token', t)
    setToken(t)
    await fetchMe(t)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
