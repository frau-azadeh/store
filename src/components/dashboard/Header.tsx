"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center">
      {/* موبایل منو */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      <h1 className="text-lg font-semibold hidden md:block">داشبورد مدیریت</h1>

      <div>👤 ادمین</div>
    </div>
  );
}
