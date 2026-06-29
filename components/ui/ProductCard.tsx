"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"

interface ProductCardProps {
  id: string | number
  name: string
  price: string | number
  image: string
  isFavorite?: boolean
  onToggleFavorite?: (id: string | number) => void
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative flex flex-col rounded-[32px] bg-white p-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#fcfaf8]">
        <Link href={`/product/${id}`} className="block h-full w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>

        {/* دکمه لایک مینیمال */}
        <button
          onClick={(e) => {
            e.preventDefault()
            onToggleFavorite?.(id)
          }}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-md transition-all hover:bg-white hover:scale-110 active:scale-90"
        >
          <Heart
            size={16}
            className={`transition-all duration-300 ${
              isFavorite 
                ? "fill-[#ff8fa3] text-[#ff8fa3]" 
                : "text-[#d8c6b7]"
            }`}
          />
        </button>
      </div>

      {/* اطلاعات محصول */}
      <div className="mt-4 px-1 pb-2 text-center">
        <Link href={`/product/${id}`}>
          <h3 className="text-[14px] font-medium text-[#4a4846] line-clamp-1 transition-colors hover:text-[#ff8fa3]">
            {name}
          </h3>
        </Link>
        
        <div className="mt-1.5 flex items-center justify-center gap-1">
          <span className="text-[16px] font-black text-[#3a3836]">
            {Number(price).toLocaleString("fa-IR")}
          </span>
          <span className="text-[9px] font-bold text-[#b4a79e] uppercase tracking-wider">تومان</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard;