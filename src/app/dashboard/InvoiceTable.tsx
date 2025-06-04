"use client";

import { useAppSelector } from "@/store/hooks";


export default function InvoiceTable() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">پیش‌فاکتور محصولات</h2>
    
      {cartItems.length === 0 && (
        <p className="text-gray-500 mt-4">سبد خرید خالی است!</p>
      )}
    </div>
  );
}
