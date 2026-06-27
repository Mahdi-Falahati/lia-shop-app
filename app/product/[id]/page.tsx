import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductView from "./ProductView";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return notFound();

  return <ProductView product={product} />;
}
