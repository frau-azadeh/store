"use client";

import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/types/products";
import products from "@/data/products.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Ruler } from "lucide-react";
import Image from "next/image";

interface CartItem extends Product {
  quantity: number;
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return <div>محصول پیدا نشد</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("لطفا سایز را انتخاب کنید");
      return;
    }
    if (!selectedColor) {
      alert("لطفا رنگ را انتخاب کنید");
      return;
    }

    const item: CartItem = {
      ...product,
      quantity,
      gender: product.gender as "زنانه" | "مردانه" | "اسپورت",
    };
    dispatch(addToCart(item));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 bg-white shadow-lg rounded-xl">
      {/* تصویر */}
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* جزئیات */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 flex items-center gap-2 mb-3">
            <Ruler size={18} className="text-gray-500" /> دسته‌بندی:{" "}
            {product.category} - {product.gender}
          </p>

          {/* انتخاب سایز */}
          <div className="mb-4">
            <p className="text-gray-700 font-semibold mb-2">انتخاب سایز:</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded px-3 py-1 ${
                    selectedSize === size
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  } hover:bg-blue-100 transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* انتخاب رنگ */}
          <div className="mb-4">
            <p className="text-gray-700 font-semibold mb-2">انتخاب رنگ:</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`border rounded-full px-3 py-1 ${
                    selectedColor === color
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  } hover:bg-blue-100 transition`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* تعداد */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-700">تعداد:</span>
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16"
              min={1}
            />
          </div>

          {/* قیمت */}
          <p className="text-blue-600 font-bold text-2xl mb-4">
            {product.price.toLocaleString()} تومان
          </p>
        </div>

        {/* دکمه افزودن به سبد */}
        <Button
          onClick={handleAddToCart}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center gap-2 hover:opacity-90 transition"
        >
          <ShoppingCart size={20} />
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}
