"use client"

import { motion } from "framer-motion"

const categories = [
  { id: 'c1', title: 'گردنبند', image: 'https://source.unsplash.com/800x600/?necklace' },
  { id: 'c2', title: 'دستبند', image: 'https://source.unsplash.com/800x600/?bracelet' },
  { id: 'c3', title: 'انگشتر', image: 'https://source.unsplash.com/800x600/?ring' },
  { id: 'c4', title: 'اکسسوری زنانه', image: 'https://source.unsplash.com/800x600/?fashion-accessory' },
]

export default function Categories() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-right text-lg font-bold mb-6">دسته‌بندی‌ها</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((c) => (
            <motion.div key={c.id} whileHover={{ scale: 1.03 }} className="group relative overflow-hidden rounded-lg">
              <img src={c.image} alt={c.title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h4 className="text-white text-sm font-semibold">{c.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
