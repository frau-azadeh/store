"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import { Product } from "@/types/products";
import Marquee from "react-fast-marquee";

export default function CategoriesCarousel() {
  const products = productsData as Product[];
  const repeatedProducts = [
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
  ];

  return (
    <div className="relative bg-gray-50 py-6">
      <Marquee gradient={false} speed={30} pauseOnHover={true}>
        {repeatedProducts.map((product, index) => (
          <div
            key={index}
            className="w-[140px] bg-white shadow rounded-lg p-1 flex flex-col items-center mx-[1px]"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={130}
                height={100}
                className="rounded-md object-cover"
              />
              <p className="text-center mt-1 font-semibold text-xs">
                {product.name}
              </p>
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
