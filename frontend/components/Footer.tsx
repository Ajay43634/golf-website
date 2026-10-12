import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-extrabold">FairwayPro</h3>
            <p className="mt-2 text-green-300 text-sm leading-relaxed">
              Premium golf equipment for every level of player. From tee to green, we have you covered.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-green-200 mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-green-300">
              {['clubs', 'balls', 'apparel', 'accessories'].map((cat) => (
                <li key={cat}>
                  <Link href={`/${cat}`} className="capitalize hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-green-200 mb-3">Account</h4>
            <ul className="space-y-2 text-sm text-green-300">
              <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Register</Link></li>
              <li><Link href="/orders" className="hover:text-white transition-colors">My Orders</Link></li>
              <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-green-800 text-center text-sm text-green-500">
          © {new Date().getFullYear()} FairwayPro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
