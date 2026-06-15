"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, Shield, Truck, Gem } from "lucide-react"

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

const floatingCards = [
  { top: "16%", right: "5%", label: "ضمانت اصالت کالا", sub: "تضمین کیفیت", delay: 0.9, floatDur: 5 },
  { top: "52%", right: "2%", label: "کیفیت تضمینی", sub: "تحویل درب منزل", delay: 1.1, floatDur: 6.5 },
  { top: "74%", left: "2%", label: "پشتیبانی لحظه‌ای", sub: "۷ روز هفته", delay: 1.3, floatDur: 4.5 },
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
      }, charIndex === 0 ? 500 : 52)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, 26)
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
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 })

  const orb1X = useTransform(springX, (v) => v * -22)
  const orb1Y = useTransform(springY, (v) => v * -22)
  const orb2X = useTransform(springX, (v) => v * 14)
  const orb2Y = useTransform(springY, (v) => v * 14)
  const cardTiltY = useTransform(springX, (v) => v * 6)
  const cardTiltX = useTransform(springY, (v) => v * -4)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2))
    mouseY.set(((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2))
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #001a0f 0%, #00341e 28%, #004d2c 52%, #00764F 80%, #1a9468 100%)" }}
    >
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(140,193,176,0.18)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_100%_100%,rgba(217,234,229,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_0%_0%,rgba(0,118,79,0.3)_0%,transparent_60%)]" />
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(140,193,176,0.5) 40px, rgba(140,193,176,0.5) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(140,193,176,0.5) 40px, rgba(140,193,176,0.5) 41px)`,
        }}
      />

      <motion.div
        className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: orb1X,
          y: orb1Y,
          background: "radial-gradient(circle, rgba(140,193,176,0.22) 0%, rgba(0,118,79,0.12) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="absolute bottom-[0%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{
          x: orb2X,
          y: orb2Y,
          background: "radial-gradient(circle, rgba(217,234,229,0.16) 0%, rgba(140,193,176,0.1) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <motion.div
        className="absolute top-[12%] left-[20%] w-48 h-48 rounded-3xl pointer-events-none opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{
          background: "linear-gradient(135deg, rgba(140,193,176,0.3) 0%, rgba(0,118,79,0.1) 100%)",
          border: "1px solid rgba(140,193,176,0.25)",
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[8%] w-24 h-24 rounded-full pointer-events-none opacity-30"
        animate={{ y: [0, -24, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "rgba(140,193,176,0.15)",
          border: "1px solid rgba(140,193,176,0.3)",
        }}
      />
      <motion.div
        className="absolute top-[45%] left-[5%] w-14 h-14 rounded-2xl pointer-events-none opacity-25"
        animate={{ y: [0, 16, 0], rotate: [0, -90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          background: "rgba(217,234,229,0.12)",
          border: "1px solid rgba(217,234,229,0.25)",
        }}
      />
      <motion.div
        className="absolute top-[25%] right-[28%] w-8 h-8 rounded-full pointer-events-none"
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ background: "rgba(140,193,176,0.5)" }}
      />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-28 pb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-[52%] text-right">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(140,193,176,0.12)",
                border: "1px solid rgba(140,193,176,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8CC1B0] animate-pulse" />
              <span className="text-[#D9EAE5] text-xs font-medium">مجموعه LIA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.2] text-white"
            >
              زیبایی در جزئیات
              <br />
              <span className="shimmer-text text-[0.9em]">
                <TypingText />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-5 text-[15px] text-white/60 max-w-md leading-loose"
            >
              مجموعه‌ای منتخب از اکسسوری‌های طراحی‌شده با دقت و ظرافت — برای لحظاتی که اهمیت دارند.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/shop" className="btn-primary gap-2 group">
                  مشاهده فروشگاه
                  <ArrowRight size={14} className="-rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="#categories" className="btn-ghost gap-2">
                  دسته بندی
                  <ArrowRight size={14} className="-rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex items-center gap-6"
            >
              {badges.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.72 + i * 0.1 }}
                  className="flex items-center gap-1.5 text-white/50 text-xs"
                >
                  <Icon size={12} className="text-[#8CC1B0]" />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hidden sm:flex sm:w-[48%] justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[340px] h-[420px]">
              <motion.div
                className="w-full h-full rounded-[2rem] overflow-hidden"
                style={{
                  rotateY: cardTiltY,
                  rotateX: cardTiltX,
                  transformStyle: "preserve-3d" as const,
                  background: "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(140,193,176,0.08) 100%)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 h-28 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,118,79,0.6) 0%, rgba(140,193,176,0.4) 100%)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    <Gem size={40} className="text-white/90" />
                  </motion.div>

                  <div className="text-center">
                    <p className="text-white/50 text-xs mb-1">کالکشن ویژه</p>
                    <p className="text-white font-bold text-lg">LIA Collection</p>
                    <p className="text-[#8CC1B0] text-sm mt-1">۱۴۰۴</p>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    {["گردنبند", "دستبند", "گوشواره"].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + i * 0.12 }}
                        className="flex items-center justify-between px-3 py-2 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <span className="text-white/40 text-[10px]">موجود</span>
                        <span className="text-white text-xs font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-[2rem] pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,118,79,0.1) 100%)",
                  }}
                />
              </motion.div>

              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  className="absolute z-10 px-3.5 py-2.5 rounded-2xl"
                  style={{
                    top: card.top,
                    right: card.right,
                    left: card.left,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: card.delay, duration: 0.5 },
                    scale: { delay: card.delay, duration: 0.5 },
                    y: { duration: card.floatDur, repeat: Infinity, ease: "easeInOut", delay: card.delay + 0.5 },
                  }}
                >
                  <p className="text-[#8CC1B0] text-[9px] font-medium text-right">{card.sub}</p>
                  <p className="text-white text-[11px] font-bold text-right">{card.label}</p>
                </motion.div>
              ))}

              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-64 h-8 rounded-full pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "radial-gradient(ellipse, rgba(0,118,79,0.4) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <p className="text-white/30 text-[11px] tracking-widest">اسکرول</p>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
