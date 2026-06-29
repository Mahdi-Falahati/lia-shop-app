"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    label: "گوشواره",
    image: "/earing.webp",
    filter: "گوشواره",
    radiusClass: "rounded-tr-[40%]",
    orderClass: "order-1 md:order-1",
  },
  {
    label: "دستبند",
    image: "/bracelet.webp",
    filter: "دستبند",
    radiusClass: "",
    orderClass: "order-3 md:order-2",
  },
  {
    label: "گردنبند",
    image: "/necklace.webp",
    filter: "گردنبند",
    radiusClass: "",
    orderClass: "order-4 md:order-3",
  },
  {
    label: "انگشتر",
    image: "/ring.webp",
    filter: "انگشتر",
    radiusClass: "rounded-tl-[40%]",
    orderClass: "order-2 md:order-4",
  },
]

export default function CategoryShowcase() {
  return (
    <section dir="rtl" className="w-full px-4 md:px-8 py-10 font-vazir">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-6 text-right"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5b4638]/10 border border-[#5b4638]/15 text-[11px] font-bold text-[#5b4638] mb-2">
            <span className="w-[5px] h-[5px] rounded-full bg-[#9b765d]" />
            دسته‌بندی‌ها
          </span>
          <h2 className="text-xl md:text-2xl font-black text-[#2a1a0e]">بر اساس نوع اکسسوری</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.filter}
              className={cat.orderClass}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: i * 0.07 }}
            >
              <Link
                href={`/shop?category=${encodeURIComponent(cat.filter)}`}
                className={`group relative block overflow-hidden aspect-[3/4] w-full ${cat.radiusClass} rounded-none`}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/65" />

                <div className="absolute bottom-0 inset-x-0 p-4">
                  <span className="block text-white font-black text-[15px] md:text-[17px] leading-tight drop-shadow-sm">
                    {cat.label}
                  </span>
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 2px rgba(155,118,93,0.6)",
                    borderRadius: "inherit",
                  }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}