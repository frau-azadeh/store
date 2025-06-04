import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <div >
      <div className="container mx-auto px-4">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ProductList />
      </div>
    </div>
  );
}
