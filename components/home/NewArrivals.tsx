"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"

export default function NewArrivals() {
  const items = products.slice(0, 4)

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
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-right text-lg font-bold">تازه‌‌واردها</h3>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: {} }}
        >
          {items.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -6 }}>
              <ProductCard
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                category={p.category}
                mode="shop"
                isFavorite={favoriteIds.includes(p.id)}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}