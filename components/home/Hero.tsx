"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Star, Shield, Truck } from "lucide-react"

const TYPING_LINES = [
  "اکسسوری‌های لوکس برای شما",
  "زیبایی در هر جزئیات",
  "انتخاب‌های منحصر به‌فرد",
]

const badges = [
  { icon: Star, label: "کیفیت تضمینی" },
  { icon: Truck, label: "ارسال سریع" },
  { icon: Shield, label: "پرداخت امن" },
]

function TypingText() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    const current = TYPING_LINES[lineIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, charIndex === 0 ? 500 : 55)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, 28)
    } else {
      setDeleting(false)
      setLineIndex((l) => (l + 1) % TYPING_LINES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, lineIndex])

  return (
    <span>
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] align-middle bg-[#8CC1B0] mr-1 rounded-sm animate-pulse" />
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const cardRotateY = useTransform(springX, (v) => v * 8)
  const cardRotateX = useTransform(springY, (v) => v * -6)
  const blob1X = useTransform(springX, (v) => v * -18)
  const blob1Y = useTransform(springY, (v) => v * -18)
  const floatCardX = useTransform(springX, (v) => v * -12)
  const pillX = useTransform(springX, (v) => v * 10)
  const pillY = useTransform(springY, (v) => v * -10)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.width / 2
    const cy = rect.height / 2
    mouseX.set(((e.clientX - rect.left) - cx) / cx)
    mouseY.set(((e.clientY - rect.top) - cy) / cy)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img
          src="/favicon2.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-black/45 to-[#00764F]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-[10%] left-[8%] w-72 h-72 rounded-full opacity-25 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #8CC1B0 0%, #00764F 60%, transparent 100%)" }} />
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] right-[5%] w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #D9EAE5 0%, #8CC1B0 50%, transparent 100%)" }} />
      </motion.div>

      <motion.div
        className="absolute top-[18%] left-[15%] w-56 h-56 rounded-3xl border border-white/10 opacity-25 pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{  x: floatCardX, background: "linear-gradient(135deg, rgba(140,193,176,0.15) 0%, rgba(0,118,79,0.05) 100%)" }}
      />

      <motion.div
        style={{ x: pillX }}
        className="absolute bottom-[30%] left-[5%] w-20 h-20 rounded-full border border-white/20 opacity-40 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[35%] right-[10%] w-12 h-12 rounded-xl border border-[#8CC1B0]/30 opacity-50 pointer-events-none"
        animate={{ rotate: [0, 180, 360], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ background: "rgba(140,193,176,0.1)" }}
      />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-28 pb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="w-full lg:w-1/2 text-right">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-white/80 text-xs mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#01E194] animate-pulse" />
              مجموعه تابستان ۱۴۰۴
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.15] text-white"
            >
              زیبایی در جزئیات
              <br />
              <span className="shimmer-text">
                <TypingText />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-5 text-base text-white/70 max-w-md leading-relaxed"
            >
              مجموعه‌ای منتخب از اکسسوری‌های طراحی‌شده با دقت و ظرافت — برای لحظاتی که اهمیت دارند.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/shop" className="btn-primary gap-2 group">
                  مشاهده فروشگاه
                  <ArrowLeft size={14} className="-rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/collections" className="btn-ghost gap-2">
                  کالکشن جدید
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="mt-10 flex items-center gap-5"
            >
              {badges.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.12 }}
                  className="flex items-center gap-1.5 text-white/60 text-xs"
                >
                  <Icon size={13} className="text-[#8CC1B0]" />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ y: imgY }}
            className="hidden lg:flex lg:w-1/2 justify-center items-center"
          >
            <div className="relative w-[400px] h-[460px]">
              <motion.div
                style={{
                  rotateY: cardRotateY,
                  rotateX: cardRotateX,
                  transformStyle: "preserve-3d" as const,
                }}
                className="w-full h-full rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src="/favicon1.png" alt="محصول ویژه" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 glass-light rounded-2xl px-4 py-3 shadow-xl border border-white/60"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 0.9, duration: 0.6 },
                  x: { delay: 0.9, duration: 0.6 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                }}
              >
                <p className="text-[10px] text-gray-500 text-right">محبوب‌ترین</p>
                <p className="text-sm font-bold text-[#00764F] text-right">گردنبند مرواریدی</p>
                <p className="text-xs text-gray-600 text-right">۱۲۹,۰۰۰ تومان</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2.5 border border-white/20 shadow-lg"
                style={{ y: pillY }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1 rtl:space-x-reverse">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8CC1B0] to-[#00764F] border-2 border-white/20" />
                    ))}
                  </div>
                  <p className="text-white text-[11px] font-medium">+۲۸۰ خریدار</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-10 w-20 h-20 rounded-2xl glass border border-white/15 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-2xl text-white/60">✦</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <p className="text-white/40 text-xs">اسکرول کنید</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
