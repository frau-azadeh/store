import type { Metadata } from "next";
import "@/app/globals.css";
import "../styles/fonts.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/store/Providers";

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
        </Providers>
      </body>
    </html>
  );
}
