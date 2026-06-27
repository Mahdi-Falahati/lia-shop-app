import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Cormorant_Garamond, Mrs_Saint_Delafield } from 'next/font/google'

const serifFont = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-serif' 
})

const scriptFont = Mrs_Saint_Delafield({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script'
})

export const metadata: Metadata = {
  title: "LIA — اکسسوری‌های لوکس",
  description: "مجموعه‌ای منتخب از اکسسوری‌های لوکس با طراحی مدرن",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${serifFont.variable} ${scriptFont.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
