"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

const beautyItems = [
  {
    id: "b1",
    name: "کرم مرطوب‌کننده روز",
    price: 185000,
    image: "/p1.jpg",
    tag: "پرفروش",
  },
  {
    id: "b2",
    name: "سرم روشن‌کننده ویتامین C",
    price: 265000,
    image: "/p2.jpg",
    tag: "جدید",
  },
  {
    id: "b3",
    name: "ماسک شب آرگان",
    price: 149000,
    image: "/p3.jpg",
    tag: "محبوب",
  },
  {
    id: "b4",
    name: "اسپری تثبیت‌کننده آرایش",
    price: 98000,
    image: "/p1.jpg",
    tag: "تخفیف",
  },
]

const tagColors: Record<string, { bg: string; text: string }> = {
  پرفروش: { bg: "rgba(0,118,79,0.12)", text: "#00764F" },
  جدید: { bg: "rgba(1,225,148,0.15)", text: "#009960" },
  محبوب: { bg: "rgba(140,193,176,0.2)", text: "#4a8a75" },
  تخفیف: { bg: "rgba(220,38,38,0.1)", text: "#dc2626" },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export default function BeautySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div className="text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F1ED] text-[#00764F] text-[11px] font-semibold mb-3">
              <Sparkles size={10} />
              آرایشی و بهداشتی
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">
              محصولات آرایشی
            </h2>
            <div className="mt-2 w-10 h-1 bg-gradient-to-l from-[#00764F] to-[#8CC1B0] rounded-full mr-auto" />
          </div>

          <Link href="/beauty" className="btn-outline-brand group hidden md:flex items-center gap-2">
            مشاهده همه
            <ArrowLeft size={13} className="-rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5"
        >
          {beautyItems.map((item) => {
            const tagStyle = tagColors[item.tag] ?? tagColors["محبوب"]
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <motion.article
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl overflow-hidden bg-white
                    shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_20px_48px_rgba(0,118,79,0.16),0_6px_16px_rgba(0,0,0,0.08)]
                    transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-gradient-to-br from-[#EEF7F3] to-[#E0EFE8]">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: tagStyle.bg, color: tagStyle.text, border: `1px solid ${tagStyle.text}30` }}
                    >
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-3.5 text-right">
                    <h3 className="text-[13px] font-semibold text-gray-800 line-clamp-1 group-hover:text-[#00764F] transition-colors duration-200">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-black text-[#00764F]">
                          {item.price.toLocaleString("fa-IR")}
                        </span>
                        <span className="text-[9px] text-gray-400">تومان</span>
                      </div>
                      <Link
                        href={`/beauty/${item.id}`}
                        className="text-[10px] font-medium text-[#8CC1B0] hover:text-[#00764F] transition-colors duration-200"
                      >
                        جزئیات
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center md:hidden"
        >
          <Link href="/beauty" className="btn-outline-brand flex items-center gap-2">
            مشاهده همه محصولات آرایشی
            <ArrowLeft size={13} className="-rotate-180" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
