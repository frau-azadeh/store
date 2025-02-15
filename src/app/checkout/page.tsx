"use client";

import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="text-center mt-10">در حال بارگذاری...</div>;
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">تایید و پرداخت</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">سبد خرید شما خالی است.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.price} تومان x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-blue-600">
                  {item.price * item.quantity} تومان
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <span className="text-lg font-bold">مجموع کل:</span>
            <span className="text-xl font-bold text-green-600">{totalPrice} تومان</span>
          </div>
          <button className="w-full bg-green-500 text-white p-3 rounded-lg mt-4 hover:bg-green-600 transition">
            تایید و پرداخت
          </button>
        </div>
      )}
    </div>
  );
}
