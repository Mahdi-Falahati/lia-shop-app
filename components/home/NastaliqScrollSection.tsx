"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import localFont from 'next/font/local'

const nastaliq = localFont({ 
  src: '../../public/fonts/IranNastaliq.ttf', 
  variable: '--font-nastaliq'
})

export default function NastaliqScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const textX = useTransform(scrollYProgress, [0.1, 0.45], [-300, 0])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
  const balloonX = useTransform(scrollYProgress, [0.1, 0.45], [400, 0])
  const balloonOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
  const smoothBalloonX = useSpring(balloonX, { stiffness: 40, damping: 20 })

  return (
    <section 
      ref={containerRef} 
      className={`${nastaliq.variable} relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[#F9F6F2]`} 
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32">
        
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="order-2 md:order-1 z-10"
        >
          <h2 
            className="text-4xl md:text-6xl text-[#5b4638] text-center md:text-right"
            style={{ 
              fontFamily: 'var(--font-nastaliq), serif',
              lineHeight: '1.5',
              direction: 'rtl'
            }}
          >
            اکسسوری تکمیل‌کننده <br />
            <span className="text-[#9b765d]">استایل شماست...</span>
          </h2>
        </motion.div>

        {/* بالن گنده */}
        <motion.div
          style={{ x: smoothBalloonX, opacity: balloonOpacity }}
          className="order-1 md:order-2"
        >
          <motion.div
            animate={{ 
              y: [0, -40, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-72 h-72 md:w-[500px] md:h-[500px]"
          >
            <Image
              src="/Ballon.png"
              alt="Floating Balloon"
              fill
              priority
              className="object-contain drop-shadow-[0_30px_60px_rgba(91,70,56,0.15)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
