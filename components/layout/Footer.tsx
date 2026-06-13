"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Heart, Shield, Lock } from "lucide-react"

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
  { icon: MapPin, text: "تهران، خیابان ولیعصر" },
  { icon: Phone, text: "۰۲۱-۸۸۰۰۰۰۰۰", ltr: true },
  { icon: Mail, text: "info@lia.shop", ltr: true },
]

const socialItems = [
  {
    label: "اینستاگرام",
    href: "https://instagram.com/lia.shop",
    accent: "#e4405f",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "بله",
    href: "https://ble.ir/lia_shop",
    accent: "#1a73d4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]" aria-hidden>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 5.5l-1.2 5.7c-.09.41-.33.51-.66.32l-1.8-1.33-.87.84c-.1.1-.18.18-.36.18l.13-1.82 3.31-2.99c.14-.13-.03-.2-.22-.07l-4.09 2.58-1.77-.55c-.38-.12-.39-.38.08-.57l6.88-2.65c.32-.12.6.08.57.38z" />
      </svg>
    ),
  },
  {
    label: "واتساپ",
    href: "https://wa.me/989000000000",
    accent: "#25d366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

const trustBadges = [
  { icon: Shield, label: "ضمانت اصالت کالا" },
  { icon: Lock, label: "درگاه پرداخت امن" },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06120a 0%, #040d07 100%)" }}
    >
      {/* top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00c880]/50 to-transparent" />

      {/* ambient glow */}
      <div
        className="absolute top-0 inset-x-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,180,100,0.10) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr] gap-8 pt-12 pb-8 border-b border-white/[0.05]">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative w-[42px] h-[42px] rounded-xl overflow-hidden shrink-0"
                style={{ background: "linear-gradient(135deg,#00c880,#006b40)" }}
              >
                <Image src="/favicon.png" alt="LIA" fill className="object-cover" />
              </motion.div>
              <div className="leading-none">
                <span
                  className="text-[21px] font-black block tracking-wide"
                  style={{
                    background: "linear-gradient(135deg,#5fffc0,#00c880)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  LIA
                </span>
                <span className="text-[8px] text-[#8CC1B0]/38 font-semibold tracking-[0.22em] uppercase">
                  ACCESSORIES
                </span>
              </div>
            </Link>

            <p className="text-[12.5px] text-white/36 leading-[1.9] text-right mb-5 max-w-[220px]">
              اکسسوری‌های لوکس و محصولات آرایشی با کیفیت بالا و طراحی مدرن برای افراد با سلیقه.
            </p>

            <div className="flex items-center gap-2 justify-end">
              {socialItems.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ duration: 0.18 }}
                  className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.32)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.accent
                    e.currentTarget.style.background = s.accent + "1a"
                    e.currentTarget.style.borderColor = s.accent + "44"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.32)"
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="text-mist-300">
              <h4 className="text-white/68 font-bold text-[12px] mb-4 pb-[10px] relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[22px] after:h-[1.5px] after:bg-gradient-to-l after:from-[#00c880] after:to-transparent">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[10px] items-center">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[12.5px] text-white/36 hover:text-white/78 transition-colors duration-200"
                    >
                      <span className="w-[3px] h-[3px] rounded-full bg-white/12 group-hover:bg-[#00c880] transition-colors duration-200 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="text-right">
            <h4 className="text-white/68 font-bold text-[12px] mb-4 pb-[10px] relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[22px] after:h-[1.5px] after:bg-gradient-to-l after:from-[#00c880] after:to-transparent">
              تماس با ما
            </h4>
            <ul className="flex flex-col gap-[14px]">
              {contactItems.map(({ icon: Icon, text, ltr }) => (
                <li key={text} className="flex items-start gap-[10px] justify-end">
                  <p
                    className="text-white/42 text-[12px] leading-snug"
                    dir={ltr ? "ltr" : undefined}
                  >
                    {text}
                  </p>
                  <div
                    className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(0,118,79,0.16)",
                      border: "1px solid rgba(0,118,79,0.26)",
                    }}
                  >
                    <Icon size={12} className="text-[#5bbf9a]" />
                  </div>
                </li>
              ))}

              {/* Online support badge */}
              <li>
                <div
                  className="mt-2 p-[10px_12px] rounded-[10px] flex items-center gap-2 justify-end"
                  style={{
                    background: "rgba(0,118,79,0.10)",
                    border: "1px solid rgba(0,118,79,0.20)",
                  }}
                >
                  <div className="text-right">
                    <p className="text-[10.5px] font-bold text-[#00c880]/75">پشتیبانی آنلاین</p>
                    <p className="text-[10px] text-white/28">شنبه تا پنجشنبه ۹–۲۱</p>
                  </div>
                  <span
                    className="w-[7px] h-[7px] rounded-full bg-[#00c880] shrink-0 animate-pulse"
                    style={{ boxShadow: "0 0 6px rgba(0,200,120,0.6)" }}
                  />
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="py-[14px] flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
          <p className="text-[11px] text-white/18 order-3 sm:order-1">
            © ۱۴۰۴ LIA — تمامی حقوق محفوظ است
          </p>

          <div className="hidden sm:flex items-center gap-2 order-2">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-[6px] px-[11px] py-[5px] rounded-[8px]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-[10.5px] text-white/28">{label}</span>
                <Icon size={11} className="text-[#00c880]/55" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center my-3">
          <motion.a
            href="https://mahdi.ir"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            className="group inline-flex items-center gap-1.5 text-[11px] text-white/20 hover:text-white/45 transition-colors duration-200 order-1 sm:order-3"
          >
            طراحی با
            <Heart size={9} className="text-rose-500/60 group-hover:text-rose-400 transition-colors duration-200 fill-rose-500/60" />
            توسط
            <span className="font-large text-[#8CC1B0]/50 group-hover:text-[#8CC1B0] transition-colors duration-200">
              مهدی فلاحتی
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}