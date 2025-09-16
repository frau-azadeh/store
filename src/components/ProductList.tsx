import productsData from "@/data/products.json";

import { Product } from "@/types/products";

import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = productsData.slice(0, 3) as Product[];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">محصولات ویژه</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
