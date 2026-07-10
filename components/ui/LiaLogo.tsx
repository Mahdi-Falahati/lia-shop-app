"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiaLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export default function LiaLogo({
  className,
  size = "md",
}: LiaLogoProps) {
  const sizeClasses = {
    sm: "w-16 md:w-20",
    md: "w-20 md:w-28",
    lg: "w-28 md:w-40",
    xl: "w-40 md:w-56",
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("relative inline-flex", sizeClasses[size], className)}
    >
      <Image
        src="/lialogo.png"
        alt="Lia Design Logo"
        width={600}
        height={300}
        priority
        className="h-auto w-full object-contain select-none"
      />
    </motion.div>
  )
}