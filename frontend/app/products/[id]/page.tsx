import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "./ProductDetail";
import { apiFetch } from "@/lib/api";
import type { Product } from "@/lib/types";
import { getMockById } from "@/lib/mockData";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const product = await apiFetch<Product>(`/products/${params.id}`);
    return {
      title: `${product.name} | FairwayPro`,
      description: product.description ?? `Shop ${product.name} at FairwayPro.`,
    };
  } catch {
    const mock = getMockById(Number(params.id));
    if (mock)
      return {
        title: `${mock.name} | FairwayPro`,
        description: mock.description ?? "",
      };
    return { title: "Product | FairwayPro" };
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  let product: Product | undefined;

  try {
    product = await apiFetch<Product>(`/products/${params.id}`);
  } catch {
    product = getMockById(Number(params.id));
  }

  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
