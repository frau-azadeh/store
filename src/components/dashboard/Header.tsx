"use client";

export default function Header() {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center">
      {/* موبایل منو */}
      <div className="md:hidden"></div>

      <h1 className="text-lg font-semibold hidden md:block">داشبورد مدیریت</h1>

      <div>👤 ادمین</div>
    </div>
  );
}
