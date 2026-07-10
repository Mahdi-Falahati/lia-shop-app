"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"

const beautyItems = [
  { id: "b1", name: "کرم مرطوب‌کننده روز", price: 185000, image: "/p1.jpg", category: "آرایشی بهداشتی" },
  { id: "b2", name: "سرم روشن‌کننده ویتامین C", price: 265000, image: "/p2.jpg", category: "آرایشی بهداشتی" },
  { id: "b3", name: "ماسک شب آرگان", price: 149000, image: "/p3.jpg", category: "آرایشی بهداشتی" },
  { id: "b4", name: "اسپری تثبیت‌کننده آرایش", price: 98000, image: "/p1.jpg", category: "آرایشی بهداشتی" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const

export default function BeautySection() {
  const [favoriteIds, setFavoriteIds] = useState<(string | number)[]>([])

  const handleToggleFavorite = (id: string | number) => {
    setFavoriteIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#9b765d]">
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">انتخاب خودکار</span>
            </div>
            <h2 className="text-3xl font-bold text-[#3a3836]">محصولات تصادفی</h2>
          </div>
          
          <Link href="/shop" className="group flex items-center gap-2 text-[#5a5855] hover:text-[#3a3836] transition-colors">
            <span className="text-sm font-medium">مشاهده فروشگاه</span>
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {beautyItems.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <ProductCard
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                isFavorite={favoriteIds.includes(item.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}