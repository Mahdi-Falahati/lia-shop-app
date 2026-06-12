"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-brand-bg py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-right">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-brand mb-4"
          >
            اکسسوری‌های دست‌ساز؛ جلوه‌ای متفاوت
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 mb-6 max-w-md"
          >
            انتخاب‌های مینیمال و مدرن برای استایل روزمره شما
          </motion.p>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/shop" className="inline-block bg-brand text-white px-6 py-3 rounded-md">
              مشاهده محصولات
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-64 h-64 bg-white rounded-xl shadow-md flex items-center justify-center">
            <img src="/favicon.jpg" alt="product" className="w-full h-full object-cover rounded-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
