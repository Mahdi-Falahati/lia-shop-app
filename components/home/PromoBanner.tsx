"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function PromoBanner() {
  return (
    <section className="py-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #00764F 0%, #1a9468 40%, #4ab890 100%)",
            boxShadow: "0 20px 60px rgba(0,118,79,0.3), 0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border border-white/8"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-xs font-medium mb-3">
                <Sparkles size={11} />
                پیشنهاد ویژه تابستان
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
                تخفیف تا ۳۰٪
                <br />
                <span className="text-[#D9EAE5]">روی محصولات منتخب</span>
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-sm">
                انتخاب‌های منتخب با تخفیف محدود — همین حالا بهترین زمان خرید است.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2.5 bg-white text-[#00764F] px-7 py-3.5 rounded-2xl font-bold text-sm
                  shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                  hover:bg-[#E6F1ED]
                  transition-all duration-300"
              >
                مشاهده فروشگاه
                <ArrowLeft size={14} className="-rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
