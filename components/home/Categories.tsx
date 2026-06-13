"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  { id: "c1", title: "گردنبند",        subtitle: "Necklace", href: "/shop?category=necklace", color: "green" },
  { id: "c2", title: "دستبند",         subtitle: "Bracelet", href: "/shop?category=bracelet", color: "teal"  },
  { id: "c3", title: "انگشتر",         subtitle: "Ring",     href: "/shop?category=ring",     color: "green" },
  { id: "c4", title: "آرایشی بهداشتی", subtitle: "Beauty",   href: "/beauty",                 color: "teal"  },
]

const dot: Record<string, string> = {
  green: "from-[#00c880] to-[#00764F] shadow-[0_0_0_2.5px_rgba(0,200,120,.15)]",
  teal:  "from-[#8CC1B0] to-[#5a9e8a] shadow-[0_0_0_2.5px_rgba(140,193,176,.2)]",
}

export default function Categories() {
  return (
    <section
      dir="rtl"
      className="py-10 bg-gradient-to-b from-[#dff0e8] to-[#f0f8f3] relative"
      style={{ boxShadow: "inset 0 1px 0 rgba(0,118,79,0.10), inset 0 -1px 0 rgba(0,118,79,0.07)" }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00764F]/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00764F]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-start gap-2 mb-5"
        >
          <h2 className="text-[15px] font-black text-[#1a2e24]">دسته‌بندی محصولات</h2>
          <span className="w-5 h-[2.5px] rounded-full bg-gradient-to-l from-[#00764F] to-[#8CC1B0]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex flex-wrap gap-2 justify-around"
        >
          {categories.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Link
                href={c.href}
                className="group inline-flex items-center gap-[7px] px-4 py-[9px] rounded-full transition-all duration-250 no-underline"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,1)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = ""
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)"
                }}
              >
                <span className={`w-[7px] h-[7px] rounded-full bg-gradient-to-br flex-shrink-0 transition-transform duration-250 group-hover:scale-125 ${dot[c.color]}`} />
                <span className="text-[13px] font-bold text-[#1e3828]">{c.title}</span>
                <span className="text-[9.5px] font-medium text-[#1e3828]/38 tracking-[.04em]">{c.subtitle}</span>
                <span className="text-[11px] text-[#1e3828]/28 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-2px] transition-all duration-250">←</span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: categories.length * 0.06 }}
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-[7px] px-4 py-[9px] rounded-full transition-all duration-250 no-underline"
              style={{
                background: "rgba(0,118,79,0.08)",
                border: "1px solid rgba(0,118,79,0.2)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = ""
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-gradient-to-br from-[#00c880] to-[#00764F] flex-shrink-0 transition-transform duration-250 group-hover:scale-125 shadow-[0_0_0_2.5px_rgba(0,200,120,.2)]" />
              <span className="text-[13px] font-bold text-[#00764F]">همه محصولات</span>
              <span className="text-[9.5px] font-medium text-[#00764F]/40 tracking-[.04em]">All</span>
              <span className="text-[11px] text-[#00764F]/40 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-2px] transition-all duration-250">←</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}