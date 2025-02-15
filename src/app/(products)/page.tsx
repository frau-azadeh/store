"use client";

import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col items-center p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
          <CardContent className="text-center">
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.price.toLocaleString()} تومان</p>
          </CardContent>
          <CardFooter>
            <Link href={`/products/${product.id}`}>
              <Button>مشاهده محصول</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
