"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"
import { ArrowLeft } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
}

export default function FeaturedProducts() {
  const [favoriteIds, setFavoriteIds] = useState<Array<string | number>>([])

  const handleToggleFavorite = (id: string | number) => {
    setFavoriteIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E6F1ED]/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div className="text-right">
            <p className="text-xs font-semibold text-[#8CC1B0] uppercase tracking-widest mb-2">
              کالکشن ویژه
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">
              محصولات منتخب
            </h2>
            <div className="mt-2 w-12 h-1 bg-gradient-to-l from-[#00764F] to-[#8CC1B0] rounded-full mr-auto" />
          </div>

          <Link
            href="/shop"
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
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {products.map((p) => (
            <motion.div key={p.id} variants={cardVariants}>
              <ProductCard
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                isFavorite={favoriteIds.includes(p.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center md:hidden"
        >
          <Link href="/shop" className="btn-outline-brand flex items-center gap-2">
            مشاهده همه محصولات
            <ArrowLeft size={13} className="-rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}