"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, CircleFadingPlus, MessageCircle } from "lucide-react"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true }
})

const card =
    "group relative overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/50 rounded-2xl p-6 text-center " +
    "shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.18)] " +
    "transition-all duration-500 hover:-translate-y-1 cursor-pointer"

export default function ContactPage() {
    return (
        <main className="relative overflow-hidden bg-gradient-to-b from-[#e8f5ee] via-white to-white py-24 px-5 md:px-8 text-right">

            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00c880]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-40 -right-24 w-80 h-80 bg-[#00764F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto">

                {/* ✅ هدر راست‌چین شد */}
                <motion.div {...fadeUp()} className="mb-16 text-right">

                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00764F]/10 border border-[#00764F]/20 text-[11px] font-bold text-[#00764F] mb-5">
                        تماس با ما
                    </span>

                    <h1 className="text-3xl md:text-4xl font-black text-[#0f1e16] mb-4">
                        با ما در ارتباط باشید
                    </h1>

                    <p className="text-sm text-[#1e3828]/70 max-w-xl leading-7">
                        برای سوال درباره محصولات، سفارش یا همکاری می‌توانید از طریق راه‌های زیر
                        با تیم LIA در ارتباط باشید.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* ✅ PHONE → tel */}

                    <motion.a
                        {...fadeUp(0.1)}
                        href="tel:09120000000"
                        className={card}
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-70 pointer-events-none" />

                        <div className="relative w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[#00764F]/15 text-[#00764F] mb-4">
                            <Phone size={20} />
                        </div>

                        <p className="relative text-xs text-gray-500 mb-1">تلفن</p>
                        <p className="relative text-sm font-semibold">09120000000</p>
                    </motion.a>


                    {/* ✅ EMAIL → mailto */}

                    <motion.a
                        {...fadeUp(0.15)}
                        href="mailto:lia@gmail.com"
                        className={card}
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-70 pointer-events-none" />

                        <div className="relative w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[#00764F]/15 text-[#00764F] mb-4">
                            <Mail size={20} />
                        </div>

                        <p className="relative text-xs text-gray-500 mb-1">ایمیل</p>
                        <p className="relative text-sm font-semibold">lia@gmail.com</p>
                    </motion.a>


                    {/* Instagram */}

                    <motion.a
                        {...fadeUp(0.2)}
                        href="https://instagram.com"
                        target="_blank"
                        className={card}
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-70 pointer-events-none" />

                        <div className="relative w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[#00764F]/15 text-[#00764F] mb-4">
                            <CircleFadingPlus size={20} />
                        </div>

                        <p className="relative text-xs text-gray-500 mb-1">اینستاگرام</p>
                        <p className="relative text-sm font-semibold">@lia.shop</p>
                    </motion.a>


                    {/* WhatsApp */}

                    <motion.a
                        {...fadeUp(0.25)}
                        href="https://wa.me/989120000000"
                        target="_blank"
                        className={card}
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-70 pointer-events-none" />

                        <div className="relative w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[#00764F]/15 text-[#00764F] mb-4">
                            <MessageCircle size={20} />
                        </div>

                        <p className="relative text-xs text-gray-500 mb-1">واتساپ</p>
                        <p className="relative text-sm font-semibold">ارسال پیام</p>
                    </motion.a>

                </div>

                {/* آدرس */}

                <motion.div {...fadeUp(0.35)} className="mt-16 flex justify-center">

                    <div className="relative max-w-xl w-full text-center bg-white/30 backdrop-blur-2xl border border-white/50 rounded-3xl p-8
          shadow-[0_20px_70px_rgba(0,0,0,0.12)]">

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-70 pointer-events-none" />

                        <div className="relative flex justify-center mb-4 text-[#00764F]">
                            <MapPin size={22} />
                        </div>

                        <p className="relative text-sm text-gray-600 leading-7">
                            ایران، تهران
                            <br />
                            فروشگاه آنلاین اکسسوری LIA
                        </p>

                    </div>

                </motion.div>

            </div>

        </main>
    )
}