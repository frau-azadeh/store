import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white shadow-[0_-4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="mx-auto w-full max-w-[1200px] pr-5 md:pr-0">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 ">
          <div className="lg:col-span-2 md:col-span-1 col-span-1 mt-4">
            <span className="text-base mb-5 block">فروشگاه کفش نقره</span>
            <ul className="text-xs leading-6 text-gray-300 cursor-pointer">
              <li>آدرس: تهران، ایران مال، طبقه اول </li>
              <li>شماره تماس: 02124000000</li>
            </ul>
            <div className="flex gap-5 mt-5">
              <InstagramIcon className="w-5 h-5 hover:text-blue-400 cursor-pointer duration-300 transition" />
              <TwitterIcon className="w-5 h-5 hover:text-blue-400 cursor-pointer duration-300 transition" />
              <GithubIcon className="w-5 h-5 hover:text-blue-400 cursor-pointer duration-300 transition" />
              <LinkedinIcon className="w-5 h-5 hover:text-blue-400 cursor-pointer duration-300 transition" />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-1 mt-4 ">
            <span className="text-base mb-5 block">درباره ما</span>
            <ul className="text-xs leading-6 text-gray-300 cursor-pointer">
              <li>درباره کفش نقره</li>
              <li>گزارش سالانه</li>
              <li>فرصت های شغلی</li>
              <li>مجله اینترنتی نقره</li>
              <li>مستندات فنی</li>
            </ul>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-1 mt-4">
            <span className="text-base mb-5 block">خدمات ما</span>
            <ul className="text-xs leading-6 text-gray-300 cursor-pointer">
              <li>خدمات ویژه مالی</li>
              <li>فروشگاه ها</li>
              <li>خدمات کسب و کارها</li>
              <li>خدمات سازمانی</li>
            </ul>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-1 mt-4">
            <span className="text-base mb-5 block">خدمات مشتریان</span>
            <ul className="text-xs leading-6 text-gray-300 cursor-pointer">
              <li>سوالات متداول</li>
              <li>قوانین و مقررات</li>
              <li>تماس با ما</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center  border-t border-gray-300 py-4 ">
          <p className="text-xs pt-2 pb-2">
            © 2025 فروشگاه کفش نقره | تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </div>
  );
}
