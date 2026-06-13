"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react"

const shopLinks = [
  { label: "فروشگاه", href: "/shop" },
  { label: "دسته‌بندی‌ها", href: "/#categories" },
  { label: "آرایشی بهداشتی", href: "/beauty" },
  { label: "تخفیف‌ها", href: "/sale" },
  { label: "تازه‌واردها", href: "/new" },
]

const helpLinks = [
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
  { label: "راهنمای خرید", href: "/guide" },
  { label: "سوالات متداول", href: "/faq" },
  { label: "شرایط بازگشت", href: "/returns" },
]

const socialLinks = [
  {
    label: "اینستاگرام",
    href: "https://instagram.com/lia.shop",
    hoverColor: "#e4405f",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "بله",
    href: "https://ble.ir/lia_shop",
    hoverColor: "#1a73d4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]" aria-hidden>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 5.5l-1.2 5.7c-.09.41-.33.51-.66.32l-1.8-1.33-.87.84c-.1.1-.18.18-.36.18l.13-1.82 3.31-2.99c.14-.13-.03-.2-.22-.07l-4.09 2.58-1.77-.55c-.38-.12-.39-.38.08-.57l6.88-2.65c.32-.12.6.08.57.38z" />
      </svg>
    ),
  },
]

const colVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" as const } },
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#071810" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00764F]/50 to-transparent" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(0,118,79,0.1) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, rgba(140,193,176,0.05) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-14">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl p-6 md:p-8 mb-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0,118,79,0.18) 0%, rgba(140,193,176,0.1) 100%)",
            border: "1px solid rgba(0,118,79,0.25)",
          }}
        >
          <p className="text-white/75 text-[15px] md:text-base leading-relaxed font-medium">
            از جدیدترین محصولات، تخفیف‌های ویژه و کالکشن‌های جدید باخبر شوید
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white/70 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff"
                  e.currentTarget.style.background = s.hoverColor + "22"
                  e.currentTarget.style.borderColor = s.hoverColor + "55"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)"
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)"
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
                }}
              >
                {s.icon}
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10"
        >
          <motion.div variants={colVariants}>
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <motion.div
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: "spring", stiffness: 280, damping: 16 }}
                className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-[#00764F]/40 shadow-lg shadow-black/30"
              >
                <Image src="/favicon.png" alt="LIA" fill className="object-cover" />
              </motion.div>
              <div>
                <span className="text-xl font-black text-gradient block leading-none">LIA</span>
                <span className="text-[9px] text-[#8CC1B0]/55 font-semibold tracking-[0.2em] uppercase">ACCESSORIES</span>
              </div>
            </Link>
            <p className="text-[13px] text-white/50 leading-[1.85] text-right max-w-[200px]">
              اکسسوری‌های لوکس و محصولات آرایشی با کیفیت و طراحی مدرن.
            </p>
          </motion.div>

          <motion.div variants={colVariants} className="text-right">
            <h4 className="text-white/85 font-bold text-[13px] mb-4 flex items-center justify-end gap-2">
              <span>فروشگاه</span>
              <span className="w-4 h-px bg-[#00764F]/70" />
            </h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-white/48 hover:text-[#8CC1B0] transition-colors duration-200"
                  >
                    <ArrowLeft
                      size={10}
                      className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-[#8CC1B0] shrink-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={colVariants} className="text-right">
            <h4 className="text-white/85 font-bold text-[13px] mb-4 flex items-center justify-end gap-2">
              <span>راهنما</span>
              <span className="w-4 h-px bg-[#00764F]/70" />
            </h4>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-white/48 hover:text-[#8CC1B0] transition-colors duration-200"
                  >
                    <ArrowLeft
                      size={10}
                      className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-[#8CC1B0] shrink-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={colVariants} className="text-right">
            <h4 className="text-white/85 font-bold text-[13px] mb-4 flex items-center justify-end gap-2">
              <span>تماس</span>
              <span className="w-4 h-px bg-[#00764F]/70" />
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { icon: MapPin, main: "تهران، خیابان ولیعصر", sub: "آدرس فروشگاه" },
                { icon: Phone, main: "۰۲۱-۸۸۰۰۰۰۰۰", sub: "شنبه تا چهارشنبه", ltr: true },
                { icon: Mail, main: "info@lia.shop", sub: "پشتیبانی آنلاین", ltr: true },
              ].map(({ icon: Icon, main, sub, ltr }) => (
                <li key={sub} className="flex items-center gap-2.5 justify-end">
                  <div className="text-right">
                    <p className={`text-white/60 text-[12.5px]`} dir={ltr ? "ltr" : undefined}>{main}</p>
                    <p className="text-white/28 text-[10px] mt-0.5">{sub}</p>
                  </div>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,118,79,0.16)", border: "1px solid rgba(0,118,79,0.28)" }}
                  >
                    <Icon size={12} className="text-[#8CC1B0]" />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/[0.07] py-4">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <motion.a
              href="https://mahdi.ir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.18 }}
              className="group inline-flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/55 transition-colors duration-200"
            >
              طراحی شده توسط
              <span className="font-bold text-[#8CC1B0]/70 group-hover:text-[#8CC1B0] transition-colors duration-200">
                مهدی فلاحتی
              </span>
              <span className="text-white/18 group-hover:text-[#8CC1B0]/50 font-mono text-[10px] transition-colors duration-200">
                mahdi.ir
              </span>
            </motion.a>
            <p className="text-[10px] text-white/18">
              © ۱۴۰۴ LIA — تمامی حقوق محفوظ است
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
