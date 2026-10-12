"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product, 1, {});
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col">
      <Link
        href={`/products/${product.id}`}
        className="block aspect-square bg-gray-50 overflow-hidden"
      >
        <img
          src={
            product.image_url ?? "https://placehold.co/400x400?text=No+Image"
          }
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full capitalize w-fit">
          {product.category}
        </span>

        <Link href={`/products/${product.id}`}>
          <h3 className="mt-2 font-semibold text-gray-900 line-clamp-2 hover:text-green-700 transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1.5">
          <StarRating />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.stock > 0 ? (
            <span className="text-xs text-green-600 font-medium">
              {product.stock} in stock
            </span>
          ) : (
            <span className="text-xs text-red-500 font-medium">
              Out of stock
            </span>
          )}
        </div>

        <button
          disabled={product.stock === 0}
          onClick={handleAdd}
          className="mt-4 w-full bg-green-800 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {product.stock === 0
            ? "Out of Stock"
            : added
              ? "✓ Added!"
              : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
