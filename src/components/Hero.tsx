import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-blue-50 h-[400px] flex items-center justify-between px-8 rounded-lg overflow-hidden">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          جدیدترین مدل‌های کفش
        </h1>
        <p className="text-gray-700 mb-6">با بهترین کیفیت و قیمت‌های ویژه</p>
      </div>
      <Image
        src="/images/hero-shoes.png"
        alt="کفش"
        width={300}
        height={300}
        className="object-cover"
      />
    </div>
  );
}
