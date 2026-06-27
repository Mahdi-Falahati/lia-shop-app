"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiaLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  light?: boolean
}

export default function LiaLogo({ 
  className, 
  size = "md",
  light = false
}: LiaLogoProps) {
  
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  }

  const textColor = light ? "text-white" : "text-[#5A5855]"

  return (
    <div className={cn("relative inline-flex flex-col items-center", className)}>
      <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn(
          "font-serif italic lowercase tracking-tight leading-none",
          "after:content-[''] after:absolute after:-right-1 after:top-1 after:w-1 after:h-1 after:bg-pink-300 after:rounded-full after:opacity-60", // یه نقطه کیوت صورتی ملایم
          sizeClasses[size],
          textColor
        )}
        style={{ fontFamily: "'Mrs Saint Delafield', cursive", fontWeight: 300 }}
      >
        lia
      </motion.span>

      <motion.span
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        animate={{ opacity: 0.7, letterSpacing: "0.5em" }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={cn(
          "uppercase font-light mt-1 select-none",
          textColor
        )}
        style={{ fontSize: "0.22em" }}
      >
        design
      </motion.span>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "40%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className={cn("h-[1px] mt-2 opacity-20", light ? "bg-white" : "bg-[#5A5855]")}
      />
    </div>
  )
}
