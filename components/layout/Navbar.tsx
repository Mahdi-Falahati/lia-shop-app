"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ShoppingCart, CircleUser, X, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { usePathname } from "next/navigation"
import LiaLogo from "../ui/LiaLogo"

const navLinks = [
  { href: "/", label: "خانه", scroll: false },
  { href: "/shop", label: "فروشگاه", scroll: false },
  { href: "/wishlist", label: "علاقه‌مندی", scroll: false },
  { href: "/about", label: "درباره ما", scroll: false },
  { href: "/contact", label: "تماس", scroll: false },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (val) => {
    setScrolled(val > 50)
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id.replace("#", ""))
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(155,118,93,0.10)] border-b border-[#d8c6b7]/60"
          : "bg-[gradient-to-b from-black/52 to-black/8 backdrop-blur-[6px] border-b border-white/10 shadow-[0_2px_24px_rgba(0,0,0,0.22)]]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <LiaLogo />
          </Link>

          <nav className={`hidden md:flex items-center gap-0.5 ${scrolled ? "text-gray" : isHome ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" : "text-gray drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.scroll ? (e) => handleScrollLink(e as React.MouseEvent<HTMLAnchorElement>, link.href) : undefined}
                className={`nav-link-underline relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${scrolled
                  ? "text-gray-700 hover:text-[#5b4638] hover:bg-[#9b765d]/8"
                  : "text-white hover:text-white hover:bg-white/14 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="حساب کاربری"
              className={`w-10 h-10 cursor-pointer rounded-xl flex items-center justify-center transition-all duration-200 ${scrolled
                ? "text-gray-600 hover:text-[#5b4638] hover:bg-[#9b765d]/8"
                : !isHome
                  ? "text-gray/90 hover:text-gray hover:bg-white/15"
                  : "text-white/90 hover:text-gray hover:bg-gray/15"
                }`}
            >
              <Link href="/auth" aria-label="صفحه کاربری"> <CircleUser size={18} /> </Link>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="سبد خرید"
              className={`cursor-pointer relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${scrolled
                ? "text-gray-600 hover:text-[#5b4638] hover:bg-[#9b765d]/8"
                : !isHome
                  ? "text-gray hover:text-gray hover:bg-white/15"
                  : "text-white/90 hover:text-gray hover:bg-gray/15"
                }`}
            >
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full bg-gradient-to-br from-[#5b4638] to-[#9b765d] text-white text-[9px] font-bold flex items-center justify-center shadow-md leading-none px-1">
                ۰
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setMenuOpen(true)}
              aria-label="باز کردن منو"
              className={`md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-[5px] transition-all duration-200 ${scrolled ? "hover:bg-[#9b765d]/8" : "hover:bg-white/15"
                }`}
            >
              <span className={`block w-5 h-[2px] rounded-full transition-colors duration-300 ${scrolled ? "bg-gray-700" : "bg-white"}`} />
              <span className={`block w-3.5 h-[2px] rounded-full transition-colors duration-300 ${scrolled ? "bg-gray-700" : "bg-white"} mr-auto`} />
              <span className={`block w-5 h-[2px] rounded-full transition-colors duration-300 ${scrolled ? "bg-gray-700" : "bg-white"}`} />
            </motion.button>
          </div>

        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
              className="fixed inset-y-0 right-0 z-[70] w-[min(340px,88vw)] flex flex-col"
              style={{
                background: "linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(240,232,224,0.98) 100%)",
                backdropFilter: "blur(30px)",
                boxShadow: "-16px 0 60px rgba(155,118,93,0.14)",
              }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#d8c6b7]">
                <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md ring-1 ring-[#9b765d]/30">
                    <Image src="/favicon.png" alt="LIA" fill className="object-cover" />
                  </div>
                  <span className="text-lg font-black text-gradient">LIA</span>
                </Link>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.22 }}
                  onClick={() => setMenuOpen(false)}
                  aria-label="بستن منو"
                  className="w-9 h-9 rounded-xl hover:bg-[#9b765d]/8 flex items-center justify-center text-gray-500 hover:text-[#5b4638] transition-colors duration-200"
                >
                  <X size={19} />
                </motion.button>
              </div>

              <nav className="flex flex-col gap-1 px-3 py-5 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 + i * 0.055, duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={link.scroll ? (e) => handleScrollLink(e as React.MouseEvent<HTMLAnchorElement>, link.href) : () => setMenuOpen(false)}
                      className="group flex items-center justify-between px-4 py-3.5 rounded-2xl text-gray-800 hover:bg-[#9b765d]/8 hover:text-[#5b4638] transition-all duration-200 font-medium text-[15px] cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <ArrowLeft
                        size={14}
                        className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-[#5b4638]"
                      />
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.38 }}
                className="px-5 pb-8 pt-2"
              >
                <Link
                  href="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg,#9b765d,#5b4638)",
                    boxShadow: "0 4px 16px rgba(155,118,93,0.30)",
                  }}
                >
                  ورود به فروشگاه
                </Link>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}