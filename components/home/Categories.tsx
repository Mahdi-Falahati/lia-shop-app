"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  {
    id: "c1",
    title: "گردنبند",
    subtitle: "Necklace",
    href: "/shop?category=necklace",
    image: "/p1.jpg",
    accent: "#00764F",
  },
  {
    id: "c2",
    title: "دستبند",
    subtitle: "Bracelet",
    href: "/shop?category=bracelet",
    image: "/p2.jpg",
    accent: "#8CC1B0",
  },
  {
    id: "c3",
    title: "انگشتر",
    subtitle: "Ring",
    href: "/shop?category=ring",
    image: "/p3.jpg",
    accent: "#00764F",
  },
  {
    id: "c4",
    title: "آرایشی بهداشتی",
    subtitle: "Beauty",
    href: "/beauty",
    image: "/p2.jpg",
    accent: "#8CC1B0",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export default function Categories() {
  return (
    <section className="py-14 bg-gradient-to-b from-[#E6F1ED]/30 to-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-right mb-8"
        >
          <p className="text-[11px] font-bold text-[#8CC1B0] tracking-[0.2em] uppercase mb-2">
            دسته‌بندی محصولات
          </p>
          <h2 className="text-xl md:text-2xl font-black text-gray-800">
            کالکشن‌های ما
          </h2>
          <div className="mt-2.5 w-8 h-[3px] bg-gradient-to-l from-[#00764F] to-[#8CC1B0] rounded-full mr-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {categories.map((c) => (
            <motion.div key={c.id} variants={cardVariants}>
              <Link href={c.href} className="block">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-xl"
                  style={{
                    aspectRatio: "2/3",
                    boxShadow: "0 3px 14px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at bottom, ${c.accent}38 0%, transparent 65%)` }}
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-3.5 pb-4">
                    <motion.div
                      className="w-5 h-[2px] rounded-full mb-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: c.accent }}
                    />
                    <p className="text-white/40 text-[9px] font-medium tracking-widest uppercase mb-0.5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      {c.subtitle}
                    </p>
                    <h4 className="text-white text-[14px] font-bold leading-tight drop-shadow-sm">
                      {c.title}
                    </h4>

                    <div className="mt-2.5 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
                      <div
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.14)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          color: "#ffffff",
                        }}
                      >
                        مشاهده
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
                          <path d="M7 5H3M5 3L3 5L5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.1), 0 18px 44px ${c.accent}28` }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
