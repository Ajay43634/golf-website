import Link from "next/link";
import { apiFetch } from "@/lib/api";
import type { Product } from "@/lib/types";
import { getMockFeatured } from "@/lib/mockData";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"} fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="aspect-square bg-gray-50 overflow-hidden">
        <img
          src={
            product.image_url ?? "https://placehold.co/400x400?text=No+Image"
          }
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full capitalize">
          {product.category}
        </span>
        <h3 className="mt-3 font-semibold text-gray-900 line-clamp-2 group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>
        <div className="mt-1.5">
          <StarRating count={5} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-green-700 font-semibold group-hover:underline">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function FeaturedProducts() {
  let products: Product[] = [];
  try {
    products = await apiFetch<Product[]>("/products/featured");
  } catch {
    products = getMockFeatured();
  }
  const display = products.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-2 text-gray-500">Top picks from our collection</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {display.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/clubs"
            className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Shop All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
