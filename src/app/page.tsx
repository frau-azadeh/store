import ProductCard from "@/componets/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/products";

export default function HomePage() {
  const products = productsData as Product[];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
