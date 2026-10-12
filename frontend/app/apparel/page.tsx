import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Golf Apparel | FairwayPro",
  description:
    "Golf polos, pants, hats and more from Nike, TravisMathew and other top brands.",
};
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { apiFetch } from "@/lib/api";
import type { Product } from "@/lib/types";
import { getMockByCategory } from "@/lib/mockData";

export default async function ApparelPage() {
  let products: Product[] = [];
  try {
    products = await apiFetch<Product[]>("/products?category=apparel");
  } catch {
    products = getMockByCategory("apparel");
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-slate-800 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Golf Apparel</h1>
            <p className="mt-1 text-slate-300">Polos, pants, hats & more</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
