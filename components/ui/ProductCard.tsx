"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Eye, Heart } from "lucide-react"
import { useState } from "react"

type Props = {
  id: string
  name: string
  price: number
  image: string
  category?: string
}

export default function ProductCard({ id, name, price, image, category }: Props) {
  const [hovered, setHovered] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setWishlisted((w) => !w)
  }

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -5, scale: 1.012 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white
        shadow-[0_2px_12px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]
        hover:shadow-[0_20px_48px_rgba(0,118,79,0.18),0_6px_16px_rgba(0,0,0,0.08)]
        transition-shadow duration-400 cursor-none"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#F0F7F4] to-[#E6F1ED]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.09 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="absolute inset-0"
          animate={{
            background: hovered
              ? "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,20,12,0.62) 100%)"
              : "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.08) 100%)",
          }}
          transition={{ duration: 0.38 }}
        />

        <motion.button
          onClick={handleWishlist}
          whileHover={{ scale: 1.18 }}
          whileTap={{ scale: 0.88 }}
          aria-label="علاقه‌مندی‌ها"
          className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            wishlisted
              ? "bg-rose-500 shadow-rose-400/40"
              : "bg-white/70 backdrop-blur-md shadow-black/10 hover:bg-white/90"
          }`}
        >
          <Heart
            size={13}
            className={`transition-colors duration-200 ${
              wishlisted ? "fill-white text-white" : "text-gray-500"
            }`}
          />
        </motion.button>

        {category && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-md text-white/90 text-[10px] font-medium border border-white/15"
          >
            {category}
          </motion.div>
        )}

        <AnimatePresence>
          {hovered && (
            <motion.div
              key="overlay-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 inset-x-0 z-20 p-3 flex flex-col gap-2"
            >
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.035, y: -1 }}
                whileTap={{ scale: 0.965 }}
                className={`btn-card-primary w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold ${
                  addedToCart ? "btn-card-success" : ""
                }`}
              >
                <ShoppingCart size={13} />
                {addedToCart ? "به سبد اضافه شد ✓" : "افزودن به سبد"}
              </motion.button>

              <Link href={`/product/${id}`} className="block">
                <motion.div
                  whileHover={{ scale: 1.035, y: -1 }}
                  whileTap={{ scale: 0.965 }}
                  className="btn-card-ghost w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium"
                >
                  <Eye size={13} />
                  مشاهده جزئیات
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 text-right flex flex-col gap-1.5">
        <p className="text-[10px] font-semibold text-[#8CC1B0] tracking-wide uppercase">
          {category ?? "اکسسوری"}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-1 group-hover:text-[#00764F] transition-colors duration-200">
          {name}
        </h3>
        <div className="flex items-center justify-between mt-0.5">
          <div className="flex items-baseline gap-1">
            <span className="text-[15px] font-black text-[#00764F]">
              {price.toLocaleString("fa-IR")}
            </span>
            <span className="text-[10px] text-gray-400 font-medium">تومان</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
