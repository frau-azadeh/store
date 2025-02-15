"use client";

import { ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import productsData from "@/data/products.json";
import Link from "next/link";

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [cartCount, setCartCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  // جستجوی لحظه‌ای
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setSearchResults(results as Product[]);
  }, [searchQuery]);

  return (
    <div className="bg-white shadow-md p-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center gap-4">
        {/* منو همبرگری - موبایل */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* لوگو */}
        <h1 className="text-2xl font-bold cursor-pointer">
          <Link href="/">فروشگاه کفش</Link>
        </h1>

        {/* باکس جستجو */}
        <div className="relative flex-1 hidden md:flex justify-center">
          <div className="relative w-full max-w-[400px]">
            <input
              type="text"
              placeholder="جستجوی محصولات..."
              className="border rounded-lg p-2 pr-10 w-full focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute right-2 top-2 text-gray-500"
              size={20}
            />
          </div>

          {/* نتایج جستجو */}
          {searchQuery.trim() !== "" && (
            <div className="absolute top-full left-0 bg-white border w-full rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-50">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    className="block p-2 hover:bg-gray-100"
                  >
                    {product.name} - {product.price.toLocaleString()} تومان
                  </Link>
                ))
              ) : (
                <p className="p-3 text-gray-500">محصولی یافت نشد!</p>
              )}
            </div>
          )}
        </div>

        {/* ورود و ثبت‌نام و سبد خرید */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
          >
            <User size={20} />
            <span>ورود | ثبت‌نام</span>
          </Link>

          <div className="relative cursor-pointer">
            <ShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-gray-50 p-4 rounded-lg shadow">
          {/* جستجو */}
          <div className="relative">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              className="border rounded-lg p-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.trim() !== "" && (
              <div className="absolute top-full left-0 bg-white border w-full rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link
                      href={`/product/${product.id}`}
                      key={product.id}
                      className="block p-2 hover:bg-gray-100"
                    >
                      {product.name} - {product.price.toLocaleString()} تومان
                    </Link>
                  ))
                ) : (
                  <p className="p-3 text-gray-500">محصولی یافت نشد!</p>
                )}
              </div>
            )}
          </div>

          {/* ورود ثبت‌نام */}
          <Link
            href="/login"
            className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
          >
            <User size={20} />
            <span>ورود | ثبت‌نام</span>
          </Link>

          {/* سبد خرید */}
          <div className="flex items-center gap-2">
            <ShoppingCart size={24} />
            <span>سبد خرید ({cartCount})</span>
          </div>
        </div>
      )}
    </div>
  );
}
