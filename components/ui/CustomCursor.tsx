"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const dotX = useSpring(rawX, { stiffness: 800, damping: 40, mass: 0.3 })
  const dotY = useSpring(rawY, { stiffness: 800, damping: 40, mass: 0.3 })

  const ringX = useSpring(rawX, { stiffness: 160, damping: 28, mass: 0.6 })
  const ringY = useSpring(rawY, { stiffness: 160, damping: 28, mass: 0.6 })

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.matchMedia("(pointer: fine) and (min-width: 768px)").matches)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]")) {
        setHovering(true)
      }
    }

    const onHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]")) {
        setHovering(false)
      }
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("mouseup", onUp)
    document.addEventListener("mouseover", onHoverStart)
    document.addEventListener("mouseout", onHoverEnd)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("mouseup", onUp)
      document.removeEventListener("mouseover", onHoverStart)
      document.removeEventListener("mouseout", onHoverEnd)
    }
  }, [isDesktop, rawX, rawY])

  if (!isDesktop) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovering ? 44 : clicking ? 28 : 36,
          height: hovering ? 44 : clicking ? 28 : 36,
          background: hovering
            ? "rgba(0,118,79,0.12)"
            : "rgba(140,193,176,0.08)",
          borderColor: hovering
            ? "rgba(0,118,79,0.7)"
            : "rgba(140,193,176,0.7)",
          borderWidth: hovering ? "1.5px" : "1px",
          borderStyle: "solid",
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: clicking ? 3 : hovering ? 5 : 6,
          height: clicking ? 3 : hovering ? 5 : 6,
          background: hovering ? "#00764F" : "#8CC1B0",
          boxShadow: hovering
            ? "0 0 8px rgba(0,118,79,0.6)"
            : "0 0 4px rgba(140,193,176,0.5)",
          scale: clicking ? 0.7 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  )
}
