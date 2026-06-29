"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const channels = [
  {
    id: "bale",
    name: "بله",
    handle: "@lia_deesign",
    description: "به کانال ما بپیوندید و از جدیدترین محصولات و تخفیف‌ها باخبر شوید.",
    href: "https://ble.ir/lia_deesign",
    gradient: "linear-gradient(135deg, #1a73d4 0%, #0f56b3 100%)",
    glow: "rgba(26,115,212,0.35)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" aria-hidden>
        <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.15" />
        <path
          d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm5.5 8.5l-2 9.5c-.15.68-.55.85-1.1.53l-3-2.22-1.44 1.39c-.16.16-.3.3-.6.3l.21-3.03 5.52-4.99c.24-.21-.05-.33-.37-.12l-6.82 4.3-2.94-.92c-.64-.2-.65-.64.13-.95l11.47-4.42c.53-.19 1 .13.94.63z"
          fill="white"
        />
      </svg>
    ),
    memberLabel: "عضو کانال",
    cta: "عضویت در بله",
  },
  {
    id: "instagram",
    name: "اینستاگرام",
    handle: "@lia_deesign",
    description: "ما را در اینستاگرام دنبال کنید و از پشت‌صحنه و کالکشن‌های جدید لذت ببرید.",
    href: "https://instagram.com/lia_deesign",
    gradient: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    glow: "rgba(220,39,67,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    memberLabel: "دنبال‌کننده",
    cta: "دنبال کردن در اینستاگرام",
  },
]

export default function SocialJoin() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#E6F1ED]/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] font-bold text-gray-800 tracking-widest uppercase mb-2">
            با ما همراه باشید
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-[#5b4638]">
            در شبکه‌های اجتماعی
          </h2>
          <p className="mt-2 inline-block text-sm text-gray-500 max-w-md mx-auto">
            از جدیدترین محصولات، تخفیف‌های ویژه و کالکشن‌های جدید باخبر شوید
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-start gap-5 p-6 rounded-3xl overflow-hidden block"
                style={{
                  background: ch.gradient,
                  boxShadow: `0 8px 32px ${ch.glow}, 0 2px 8px rgba(0,0,0,0.1)`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />

                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center mt-0.5"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {ch.icon}
                </div>

                <div className="flex-1 text-right min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <ExternalLink size={14} className="text-white/50 group-hover:text-white/80 transition-colors duration-200 shrink-0" />
                    <div>
                      <h3 className="text-white font-black text-lg leading-none">{ch.name}</h3>
                      <p className="text-white/70 text-xs mt-0.5">{ch.handle}</p>
                    </div>
                  </div>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed">{ch.description}</p>

                  <motion.div
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl text-sm font-bold"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#ffffff",
                      backdropFilter: "blur(8px)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                    whileHover={{ background: "rgba(255,255,255,0.28)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {ch.cta}
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
