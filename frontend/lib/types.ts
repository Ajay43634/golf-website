export interface Product {
  id: number
  name: string
  category: 'clubs' | 'balls' | 'apparel' | 'accessories'
  price: number
  description: string | null
  image_url: string | null
  stock: number
  is_featured: boolean
  attributes: Record<string, unknown>
  created_at: string
}

export interface User {
  id: number
  name: string
  email: string
  created_at: string
}

export interface Token {
  access_token: string
  token_type: string
}
