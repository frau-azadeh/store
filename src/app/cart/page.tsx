"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "@/store/cartSlice";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p>در حال بارگذاری...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">سبد خرید</h1>
      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است!</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg shadow"
            >
              <div>
                <p className="font-bold">{item.name}</p>
                <p>قیمت: {item.price} تومان</p>
                <p>تعداد: {item.quantity}</p>
              </div>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={24} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
