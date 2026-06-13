"use client"

import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ShoppingCart, Eye, Heart } from "lucide-react"
import { useState, useRef } from "react"

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
  const cardRef = useRef<HTMLElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 22 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 22 })
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(((e.clientX - rect.left) / rect.width) - 0.5)
    mouseY.set(((e.clientY - rect.top) / rect.height) - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2200)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setWishlisted((w) => !w)
  }

  return (
    <motion.article
      ref={cardRef}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => { setHovered(false); handleMouseLeave() }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d" as const,
        transformPerspective: 700,
      }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white
        shadow-[0_2px_14px_rgba(0,0,0,0.07),0_1px_4px_rgba(0,0,0,0.04)]
        hover:shadow-[0_24px_56px_rgba(0,118,79,0.2),0_8px_20px_rgba(0,0,0,0.1)]"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#EEF7F3] to-[#E0EFE8]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />

        <AnimatePresence>
          {hovered && (
            <motion.div
              key="glare"
              className="absolute inset-0 pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.12) 0%, transparent 60%)`,
              }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="absolute inset-0"
          animate={{
            background: hovered
              ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,15,8,0.68) 100%)"
              : "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.1) 100%)",
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.button
          onClick={handleWishlist}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
          aria-label="علاقه‌مندی‌ها"
          className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            wishlisted ? "bg-rose-500 shadow-rose-400/40" : "bg-white/75 backdrop-blur-md shadow-black/10 hover:bg-white"
          }`}
        >
          <Heart
            size={13}
            className={`transition-all duration-200 ${wishlisted ? "fill-white text-white scale-110" : "text-gray-500"}`}
          />
        </motion.button>

        {category && (
          <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{
              background: "rgba(0,0,0,0.28)",
              backdropFilter: "blur(10px)",
              color: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {category}
          </div>
        )}

        <AnimatePresence>
          {hovered && (
            <motion.div
              key="overlay-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 inset-x-0 z-20 p-3 flex flex-col gap-2"
            >
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-250"
                style={addedToCart ? {
                  background: "linear-gradient(135deg, #00c870 0%, #00a855 100%)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 4px 20px rgba(0,200,112,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                } : {
                  background: "linear-gradient(135deg, rgba(0,118,79,0.95) 0%, rgba(26,148,104,0.95) 100%)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 18px rgba(0,118,79,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ShoppingCart size={13} />
                {addedToCart ? "به سبد اضافه شد ✓" : "افزودن به سبد"}
              </motion.button>

              <Link href={`/product/${id}`} className="block">
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    backdropFilter: "blur(14px)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.28)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  <Eye size={13} />
                  مشاهده جزئیات
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className="p-4 text-right flex flex-col gap-1.5"
        style={{ transform: "translateZ(4px)" }}
      >
        <p className="text-[10px] font-bold text-[#8CC1B0] tracking-widest uppercase">
          {category ?? "اکسسوری"}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-1 group-hover:text-[#00764F] transition-colors duration-250">
          {name}
        </h3>
        <div className="flex items-center justify-between mt-0.5">
          <div className="flex items-baseline gap-1">
            <span className="text-[15px] font-black text-[#00764F]">
              {price.toLocaleString("fa-IR")}
            </span>
            <span className="text-[10px] text-gray-400 font-medium">تومان</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleAddToCart}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{
              background: "rgba(0,118,79,0.08)",
              border: "1px solid rgba(0,118,79,0.15)",
            }}
          >
            <ShoppingCart size={12} className="text-[#00764F]" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}
