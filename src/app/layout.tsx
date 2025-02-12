import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css"



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
        {children}
      </body>
    </html>
  );
}
