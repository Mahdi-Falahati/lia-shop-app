"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const FloatingLuxury = () => {
    const containerRef = useRef(null)


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    })


    const xL = useTransform(scrollYProgress, [0, 1], [-600, 0])
    const xI = useTransform(scrollYProgress, [0, 1], [-900, 0])
    const xA = useTransform(scrollYProgress, [0, 1], [-1200, 0])
    const xBallon = useTransform(scrollYProgress, [0, 1], [-1500, 0])

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

    const rotate = useTransform(scrollYProgress, [0, 1], [-20, 0])

    const items = [
        { id: "A", src: "/A.png", alt: "A", x: xA },
        { id: "I", src: "/I.png", alt: "I", x: xI },
        { id: "L", src: "/L.png", alt: "L", x: xL },
    ]

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden bg-[#fdfaf7] py-20 md:py-32 min-h-[50vh] flex items-center"
        >
            <div className="container mx-auto flex flex-nowrap justify-center items-center gap-2 md:gap-10 px-4">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        style={{
                            x: item.x,
                            opacity: opacity,
                            rotate: rotate
                        }}
                        className="relative w-[22vw] h-[22vw] max-w-[240px] max-h-[240px] flex-shrink-0"
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            unoptimized
                            className="object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FloatingLuxury