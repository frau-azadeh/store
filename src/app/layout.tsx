import { Providers } from "@/store/Providers";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "../styles/fonts.css";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "فروشگاه ما",
  description: "تمامی اجناس خود را از فروشگاه ما تهیه نمایید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
