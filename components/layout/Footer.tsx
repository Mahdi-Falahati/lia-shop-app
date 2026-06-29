"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Shield, Lock } from "lucide-react"
import LiaLogo from "../ui/LiaLogo"

const columns = [
  {
    title: "فروشگاه",
    links: [
      { label: "همه محصولات", href: "/shop" },
      { label: "دسته‌بندی‌ها", href: "/#categories" },
      { label: "آرایشی بهداشتی", href: "/beauty" },
      { label: "تخفیف‌های ویژه", href: "/sale" },
      { label: "علاقه‌مندی‌ها", href: "/wishlist" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "تماس با ما", href: "/contact" },
      { label: "راهنمای خرید", href: "/guide" },
      { label: "سوالات متداول", href: "/faq" },
      { label: "شرایط بازگشت", href: "/returns" },
    ],
  },
]

const contactItems = [
  // { icon: MapPin, text: "تهران، خیابان ولیعصر" },
  { icon: Phone, text: "09928565924", ltr: true },
  // { icon: Mail, text: "info@lia.shop", ltr: true },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <LiaLogo/>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              لیا نمادی از ظرافت و زیبایی. فعالیت خود را از سال ۱۴۰۲ با عشق شروع کردیم.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-slate-900 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href} className="flex justify-center md:justify-start">
                    <Link href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">تماس با ما</h4>
            <ul className="space-y-4">
              {contactItems.map((item, i) => (
                <li key={i} className="flex justify-center mt-2 md:justify-start items-center gap-3 text-slate-500 text-sm">
                  <item.icon size={16} />
                  <span dir={item.ltr ? "ltr" : undefined}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© ۱۴۰۴ LIA - تمامی حقوق محفوظ است</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2"><Shield size={14} /> ضمانت اصالت</div>
            <div className="flex items-center gap-2"><Lock size={14} /> پرداخت امن</div>
          </div>
        </div>
        <Link href="#" className="block mt-4 text-center text-sm italic font-semibold hover:text-slate-900 transition-colors">
          طراحی توسط مهدی فلاحتی
        </Link>
      </div>
    </footer>
  )
}