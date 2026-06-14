"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, CircleFadingPlus } from "lucide-react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
})

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#e8f5ee] to-white py-24 px-5 md:px-8 text-right">

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#00c880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* heading */}

        <motion.div {...fadeUp()} className="mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00764F]/10 border border-[#00764F]/20 text-[11px] font-bold text-[#00764F] mb-5">
            تماس با ما
          </span>

          <h1 className="text-3xl md:text-4xl font-black text-[#0f1e16] mb-4">
            با ما در ارتباط باشید
          </h1>

          <p className="text-sm text-[#1e3828]/70 max-w-lg">
            اگر سوالی درباره محصولات، سفارش یا همکاری دارید از طریق فرم زیر یا
            اطلاعات تماس با ما در ارتباط باشید.
          </p>
        </motion.div>

        {/* content */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* form */}

          <motion.div
            {...fadeUp(0.1)}
            className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-3xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >

            <div className="space-y-4">

              <input
                type="text"
                placeholder="نام شما"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#00764F] outline-none text-sm"
              />

              <input
                type="email"
                placeholder="ایمیل"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#00764F] outline-none text-sm"
              />

              <textarea
                placeholder="پیام شما..."
                rows={5}
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#00764F] outline-none text-sm resize-none"
              />

              <button className="w-full h-12 rounded-xl bg-[#00764F] text-white text-sm font-semibold hover:bg-[#006243] transition">
                ارسال پیام
              </button>

            </div>

          </motion.div>

          {/* contact info */}

          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col gap-5"
          >

            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex items-center gap-4 shadow-sm">

              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00764F]/10 text-[#00764F]">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-500">تلفن</p>
                <p className="text-sm font-semibold">0912 000 0000</p>
              </div>

            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex items-center gap-4 shadow-sm">

              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00764F]/10 text-[#00764F]">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-500">ایمیل</p>
                <p className="text-sm font-semibold">info@lia-shop.ir</p>
              </div>

            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex items-center gap-4 shadow-sm">

              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00764F]/10 text-[#00764F]">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-500">آدرس</p>
                <p className="text-sm font-semibold">ایران، تهران</p>
              </div>

            </div>

            <a
              href="https://instagram.com"
              className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:border-[#00764F]/30 transition"
            >

              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00764F]/10 text-[#00764F]">
                <CircleFadingPlus size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-500">اینستاگرام</p>
                <p className="text-sm font-semibold">@lia.shop</p>
              </div>

            </a>

          </motion.div>

        </div>

      </div>
    </main>
  )
}