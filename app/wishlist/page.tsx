"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"

const initialFavorites = [
  {
    id: 101,
    name: "گردنبند مینیمال طلا طرح LIA",
    price: 450000,
    image: "/p.jpg",
    category: "گردنبند",
    isFavorite: true,
  },
  {
    id: 102,
    name: "دستبند استیل زنانه ظریف",
    price: 320000,
    image: "/p2.jpg",
    category: "دستبند",
    isFavorite: true,
  },
  {
    id: 103,
    name: "گوشواره لوله‌ای مدل کلاسیک",
    price: 290000,
    image: "/p3.jpg",
    category: "گوشواره",
    isFavorite: true,
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(initialFavorites)

  const handleRemoveFavorite = (id: string | number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id))
  }

  const handleAddToCart = (id: string | number) => {
    console.log(`محصول ${id} به سبد اضافه شد`)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#e8f5ee] via-white to-white py-24 px-5 md:px-8 text-right">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00c880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00764F]/10 border border-[#00764F]/20 text-[11px] font-bold text-[#00764F] mb-4">
            لیست محبوب
          </span>

          <h1 className="text-3xl md:text-4xl font-black text-[#0f1e16]">
            علاقه‌مندی‌های من
          </h1>
        </div>

        <AnimatePresence mode="popLayout">
          {favorites.length > 0 ? (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 18 }}
                  transition={{ duration: 0.28 }}
                >
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    isFavorite={true}
                    mode="favorites"
                    onToggleFavorite={handleRemoveFavorite}
                    onAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center text-center py-28"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#00764F]/10 text-[#00764F] mb-6">
                <Heart size={32} />
              </div>

              <h2 className="text-xl font-bold mb-3 text-gray-800">
                لیست علاقه‌مندی‌های شما خالی است آرسی
              </h2>

              <p className="text-gray-500 mb-8 text-sm max-w-sm leading-6">
                هر زمان محصولی را پسندیدی، روی آیکون قلب کلیک کن تا اینجا ذخیره شود.
              </p>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#00764F] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#005e3f] transition duration-300 shadow-lg shadow-[#00764F]/25"
              >
                برو به فروشگاه
                <ShoppingBag size={16} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}