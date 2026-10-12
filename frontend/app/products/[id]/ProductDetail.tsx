"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import SelectField from "@/components/SelectField";
import SizeSelector from "@/components/SizeSelector";
import QuantityInput from "@/components/QuantityInput";
import { useCart } from "@/context/CartContext";

type SelectorDef = {
  key: string;
  label: string;
  type: "select" | "size";
  options: string[];
};

function getSelectors(product: Product): SelectorDef[] {
  const attrs = product.attributes as Record<string, string[]>;

  switch (product.category) {
    case "clubs":
      return [
        {
          key: "hand",
          label: "Hand",
          type: "select",
          options: attrs.hand ?? [],
        },
        {
          key: "loft",
          label: "Club / Loft",
          type: "size",
          options: attrs.loft ?? [],
        },
        {
          key: "flex",
          label: "Flex",
          type: "select",
          options: attrs.flex ?? [],
        },
        {
          key: "shaft_material",
          label: "Shaft Material",
          type: "select",
          options: attrs.shaft_material ?? [],
        },
        {
          key: "shaft_model",
          label: "Shaft Model",
          type: "select",
          options: attrs.shaft_model ?? [],
        },
      ];
    case "balls":
      return [
        {
          key: "color",
          label: "Color",
          type: "size",
          options: attrs.color ?? [],
        },
        {
          key: "quantity",
          label: "Package Quantity",
          type: "size",
          options: attrs.quantity ?? [],
        },
      ];
    case "apparel":
      return [
        {
          key: "color",
          label: "Color",
          type: "size",
          options: attrs.color ?? [],
        },
        { key: "size", label: "Size", type: "size", options: attrs.size ?? [] },
        {
          key: "quantity",
          label: "Package Quantity",
          type: "size",
          options: attrs.quantity ?? [],
        },
      ];
    case "accessories":
      return [
        {
          key: "color",
          label: "Color",
          type: "size",
          options: attrs.color ?? [],
        },
        {
          key: "glove_size",
          label: "Glove Size",
          type: "size",
          options: attrs.glove_size ?? [],
        },
        {
          key: "quantity",
          label: "Package Quantity",
          type: "size",
          options: attrs.quantity ?? [],
        },
      ];
    default:
      return [];
  }
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-200"} fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="text-sm text-gray-500 ml-1">(24 reviews)</span>
    </div>
  );
}

const STATIC_REVIEWS = [
  {
    name: "James T.",
    rating: 5,
    date: "May 2026",
    text: "Absolutely love this product. The quality is outstanding and it has genuinely improved my game on the course.",
  },
  {
    name: "Sarah M.",
    rating: 5,
    date: "April 2026",
    text: "Great value for the price. Shipping was fast and the product matched the description perfectly.",
  },
  {
    name: "David R.",
    rating: 4,
    date: "March 2026",
    text: "Very solid purchase. I've used it for a few rounds now and it performs exactly as expected. Highly recommend.",
  },
];

export default function ProductDetail({ product }: { product: Product }) {
  const selectors = getSelectors(product);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [buyQty, setBuyQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const allSelected = selectors.every((s) => selections[s.key]);

  function setSelection(key: string, value: string) {
    setSelections((prev) => ({ ...prev, [key]: value }));
  }

  function handleAddToCart() {
    addToCart(product, buyQty, selections as Record<string, string>);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
          <img
            src={
              product.image_url ?? "https://placehold.co/600x600?text=No+Image"
            }
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full capitalize w-fit">
            {product.category}
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h1>

          <div className="mt-2">
            <StarRating count={5} />
          </div>

          <p className="mt-4 text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          {product.description && (
            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          <div className="mt-6 space-y-5 border-t border-gray-100 pt-6">
            {selectors.map((s) =>
              s.type === "select" ? (
                <SelectField
                  key={s.key}
                  label={s.label}
                  options={s.options}
                  value={selections[s.key] ?? ""}
                  onChange={(v) => setSelection(s.key, v)}
                />
              ) : (
                <SizeSelector
                  key={s.key}
                  label={s.label}
                  options={s.options}
                  value={selections[s.key] ?? ""}
                  onChange={(v) => setSelection(s.key, v)}
                />
              ),
            )}

            <QuantityInput
              value={buyQty}
              onChange={setBuyQty}
              max={product.stock}
            />
          </div>

          {!allSelected && selectors.length > 0 && (
            <p className="mt-4 text-sm text-amber-600 font-medium">
              Please select all options above to add to cart.
            </p>
          )}

          <button
            disabled={!allSelected || product.stock === 0}
            onClick={handleAddToCart}
            className="mt-6 w-full bg-green-800 text-white py-4 rounded-xl text-base font-semibold hover:bg-green-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {product.stock === 0
              ? "Out of Stock"
              : added
                ? "✓ Added to Cart!"
                : "Add to Cart"}
          </button>

          <p className="mt-3 text-sm text-gray-400 text-center">
            {product.stock > 0
              ? `${product.stock} units available`
              : "Currently unavailable"}
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-20 border-t border-gray-100 pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Customer Reviews
        </h2>
        <div className="space-y-6">
          {STATIC_REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
