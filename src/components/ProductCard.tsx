"use client";

import { Product } from "@/types/products";
import Image from "next/image";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, price, image, category, gender, sizes, colors } = product;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, price: Number(product.price) })); // تبدیل price به عدد
    console.log("محصول اضافه شد:", product);
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600 text-sm">
        {category} - {gender}
      </p>
      <p className="text-gray-500 text-sm">سایزها: {sizes.join(", ")}</p>
      <p className="text-gray-500 text-sm">رنگ ها: {colors.join(", ")}</p>
      <p className="text-blue-500 font-bold">{price} تومان</p>
      <Button
        onClick={handleAddToCart}
        icon={<ShoppingCart size={18} />}
        className="bg-blue-500 text-white hover:bg-blue-600"
      >
        افزودن به سبد خرید
      </Button>
    </div>
  );
}
