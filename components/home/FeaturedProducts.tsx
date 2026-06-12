"use client"

import { motion } from "framer-motion"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"

export default function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">محصولات منتخب</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {products.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -6 }}>
              <ProductCard id={p.id} name={p.name} price={p.price} image={p.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
