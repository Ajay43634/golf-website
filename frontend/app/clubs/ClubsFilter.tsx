'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import type { Product } from '@/lib/types'

const TABS = ['All', 'Drivers', 'Fairways', 'Hybrids', 'Irons', 'Wedges', 'Putters']

function getSubCategory(product: Product): string {
  const name = product.name.toLowerCase()
  if (name.includes('driver')) return 'Drivers'
  if (name.includes('fairway')) return 'Fairways'
  if (name.includes('hybrid')) return 'Hybrids'
  if (name.includes('iron')) return 'Irons'
  if (name.includes('wedge')) return 'Wedges'
  if (name.includes('putter')) return 'Putters'
  return 'Other'
}

export default function ClubsFilter({ products }: { products: Product[] }) {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? products : products.filter((p) => getSubCategory(p) === active)

  return (
    <>
      <div className="flex gap-2 flex-wrap mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              active === tab
                ? 'bg-green-800 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-lg">
          No products found in this sub-category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}
