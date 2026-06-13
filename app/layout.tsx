import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import CustomCursor from "@/components/ui/CustomCursor"

export const metadata: Metadata = {
  title: "LIA — اکسسوری‌های لوکس",
  description: "مجموعه‌ای منتخب از اکسسوری‌های لوکس با طراحی مدرن",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-white text-gray-800 antialiased">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
