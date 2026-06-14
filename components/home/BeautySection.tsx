"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"

const beautyItems = [
  {
    id: "b1",
    name: "کرم مرطوب‌کننده روز",
    price: 185000,
    image: "/p1.jpg",
    category: "آرایشی بهداشتی",
  },
  {
    id: "b2",
    name: "سرم روشن‌کننده ویتامین C",
    price: 265000,
    image: "/p2.jpg",
    category: "آرایشی بهداشتی",
  },
  {
    id: "b3",
    name: "ماسک شب آرگان",
    price: 149000,
    image: "/p3.jpg",
    category: "آرایشی بهداشتی",
  },
  {
    id: "b4",
    name: "اسپری تثبیت‌کننده آرایش",
    price: 98000,
    image: "/p1.jpg",
    category: "آرایشی بهداشتی",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.52, ease: "easeOut" as const },
  },
}

export default function BeautySection() {
  const [favoriteIds, setFavoriteIds] = useState<Array<string | number>>([])

  const handleToggleFavorite = (id: string | number) => {
    setFavoriteIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    )
  }

  const handleAddToCart = (id: string | number) => {
    console.log(`محصول ${id} به سبد خرید اضافه شد`)
  }

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

          <Link
            href="/beauty"
            className="btn-outline-brand group hidden md:flex items-center gap-2"
          >
            مشاهده همه
            <ArrowLeft
              size={13}
              className="-rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5"
        >
          {beautyItems.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <ProductCard
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                category={item.category}
                mode="shop"
                isFavorite={favoriteIds.includes(item.id)}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          ))}
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