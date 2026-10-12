import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Golf Clubs | FairwayPro",
  description:
    "Shop drivers, fairways, hybrids, irons, wedges and putters from top brands.",
};
import Footer from "@/components/Footer";
import ClubsFilter from "./ClubsFilter";
import { apiFetch } from "@/lib/api";
import type { Product } from "@/lib/types";
import { getMockByCategory } from "@/lib/mockData";

export default async function ClubsPage() {
  let products: Product[] = [];
  try {
    products = await apiFetch<Product[]>("/products?category=clubs");
  } catch {
    products = getMockByCategory("clubs");
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-green-900 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Golf Clubs</h1>
            <p className="mt-1 text-green-300">
              Drivers, fairways, hybrids, irons, wedges & putters
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ClubsFilter products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}
