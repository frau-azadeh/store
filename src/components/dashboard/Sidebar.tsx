"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const MenuItems = () => (
    <nav className="space-y-2">
      <Link
        href="/dashboard"
        className="block p-3 rounded-lg hover:bg-gray-100"
      >
        داشبورد
      </Link>
      <Link href="/products" className="block p-3 rounded-lg hover:bg-gray-100">
        محصولات
      </Link>
      <Link href="/orders" className="block p-3 rounded-lg hover:bg-gray-100">
        سفارشات
      </Link>
    </nav>
  );

  return (
    <div className="md:w-64 bg-white shadow-lg h-screen p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">پنل مدیریت</h2>
      <MenuItems />
    </div>
  );
}
