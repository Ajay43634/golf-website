import Link from 'next/link'

const categories = [
  {
    name: 'Clubs',
    href: '/clubs',
    description: 'Drivers, irons, wedges & putters',
    bg: 'bg-green-700 hover:bg-green-600',
    icon: '🏌️',
  },
  {
    name: 'Balls',
    href: '/balls',
    description: 'Tour performance to everyday play',
    bg: 'bg-blue-700 hover:bg-blue-600',
    icon: '⛳',
  },
  {
    name: 'Apparel',
    href: '/apparel',
    description: 'Polos, pants, hats & more',
    bg: 'bg-slate-700 hover:bg-slate-600',
    icon: '👕',
  },
  {
    name: 'Accessories',
    href: '/accessories',
    description: 'Gloves, bags, tees & essentials',
    bg: 'bg-amber-700 hover:bg-amber-600',
    icon: '🧤',
  },
]

export default function BrowseByCategory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          <p className="mt-2 text-gray-500">Find exactly what you need</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`${cat.bg} text-white rounded-2xl p-7 transition-colors group`}
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold">{cat.name}</h3>
              <p className="mt-1 text-sm opacity-75">{cat.description}</p>
              <div className="mt-5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Shop now →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
