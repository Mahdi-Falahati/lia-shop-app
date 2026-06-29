"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-end">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/B1.JPG"
          alt="Banner Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 ">
        <div className="flex flex-col items-start">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-12"
          >
            <h2 
              className="text-white text-6xl font-light tracking-[0.2em] uppercase leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              STYLISH
            </h2>
            
            <span 
              className="text-[#d8c6b7] text-5xl  block z-20 relative lowercase"
              style={{ 
                fontFamily: "'Mrs Saint Delafield', cursive",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
              }}
            >
              and
            </span>

            <h2 
              className="text-white text-6xl font-light tracking-[0.2em] uppercase leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              TREND
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="/shop" 
              className="group relative inline-flex items-center justify-center px-26 py-2 border-[1.5px] border-white rounded-full bg-transparent overflow-hidden transition-all duration-500 hover:bg-white"
            >
              <span className="relative z-10 text-white text-2xl font-light tracking-wide transition-colors duration-500 group-hover:text-[#5b4638]">
                Shop Now
              </span>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
