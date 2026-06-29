"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/ui/backBTN";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductView({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  function handleAddToCart() {
    console.log("add to cart", product);
  }

  return (
    <div className="min-h-screen pt-[120px] pb-32 px-6 relative">
      <BackButton />
      {/* background */}
      <div className="absolute inset-0 -z-10 
      bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_40%)]"/>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* product image */}
        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          className="relative aspect-square rounded-[32px] overflow-hidden
          bg-slate-100 border border-slate-200
          shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
        >
 
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover transition duration-700 hover:scale-110"
          />

          {/* price badge */}
          <div className="absolute top-5 right-5 px-4 py-2 rounded-xl
          bg-white/80 backdrop-blur-md border border-slate-200
          text-sm font-semibold text-slate-700 shadow">
            {product.price.toLocaleString()} تومان
          </div>

        </motion.div>

        {/* info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="space-y-8"
        >

          <div className="space-y-3">

            <p className="text-xs tracking-widest uppercase text-slate-400">
              {product.category}
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
              {product.name}
            </h1>

          </div>

          <p className="text-slate-600 leading-relaxed max-w-xl">
            محصولی با طراحی مدرن و کیفیت ساخت بالا. این متن توضیح نمونه
            برای نمایش ساختار صفحه محصول است و بعداً با توضیحات واقعی
            جایگزین می‌شود.
          </p>

          {/* buttons */}
          <div className="flex gap-4 pt-6 items-center">

            {/* add to cart */}
            <button
              onClick={handleAddToCart}
              className="group cursor-pointer relative px-8 py-3.5 rounded-2xl
              bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500
              text-white font-medium
              transition-all duration-300
              hover:-translate-y-1 hover:scale-[1.02]
              active:scale-[0.97]
              shadow-[0_10px_30px_rgba(99,102,241,0.35)]
              hover:shadow-[0_20px_60px_rgba(99,102,241,0.45)]
              overflow-hidden"
            >

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <span className="absolute inset-0 bg-gradient-to-r 
                from-transparent via-white/30 to-transparent
                -translate-x-full group-hover:translate-x-full duration-700"/>
              </span>

              <span className="relative flex items-center gap-2">
                افزودن به سبد خرید

                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                  />
                </svg>
              </span>

            </button>

            {/* favorite */}
            <button
              onClick={() => setLiked(!liked)}
              className={`group cursor-pointer w-12 h-12 rounded-2xl flex items-center justify-center
              border transition-all duration-300 hover:-translate-y-1
              ${
                liked
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 border-transparent text-white shadow-[0_10px_30px_rgba(244,63,94,0.35)]"
                  : "bg-white border-slate-200 text-slate-500 hover:border-violet-400 hover:text-violet-500"
              }`}
            >

              <svg
                className={`w-5 h-5 transition ${
                  liked ? "scale-110" : "group-hover:scale-110"
                }`}
                fill={liked ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318
                  a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682
                  a4.5 4.5 0 010-6.364z"
                />
              </svg>

            </button>

          </div>

        </motion.div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 md:hidden
      bg-white/90 backdrop-blur-xl border-t border-slate-200
      p-4 flex justify-between items-center">

        <span className="font-semibold text-slate-900">
          {product.price.toLocaleString()} تومان
        </span>

        <button
          onClick={handleAddToCart}
          className="px-6 py-3 rounded-xl
          bg-gradient-to-r from-indigo-500 to-violet-500
          text-white font-medium shadow-lg"
        >
          افزودن
        </button>

      </div>

    </div>
  );
}
