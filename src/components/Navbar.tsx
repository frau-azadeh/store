"use client";

import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">فروشگاه کفش</h1>
      <div className="flex items-center gap-4">
        <span className="text-blue-600 font-semibold">سبد خرید: {cartCount} کالا</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">ورود / ثبت‌نام</button>
      </div>
    </header>
  );
}
