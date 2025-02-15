"use client";

import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/store/cartSlice";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p className="text-center my-10">در حال بارگذاری...</p>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">سبد خرید</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">سبد خرید شما خالی است!</p>
      ) : (
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              className="w-full min-w-[250px] md:min-w-0 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <CardContent className="p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                   />
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>

                <p className="text-gray-500 text-sm">
                  قیمت واحد: {item.price.toLocaleString()} تومان
                </p>

                <p className="text-gray-700 font-bold">
                  قیمت کل: {(item.price * item.quantity).toLocaleString()} تومان
                </p>

                {/* کنترل تعداد */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </Button>
                    <span className="font-bold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
