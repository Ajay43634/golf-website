const SERVER_URL = process.env.API_URL ?? 'http://backend:4000'
const CLIENT_URL = process.env.NEXT_PUBLIC_API_URL ?? '/api'

function baseUrl() {
  return typeof window === 'undefined' ? SERVER_URL : CLIENT_URL
}

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${baseUrl()}${path}`, {
    cache: 'no-store',
    ...options,
  })
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`)
  return res.json() as Promise<T>
}
