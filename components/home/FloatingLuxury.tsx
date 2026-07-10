"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const FloatingLuxury = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    })

    const textX = useTransform(scrollYProgress, [0, 1], [-250, 0])
    const imageX = useTransform(scrollYProgress, [0, 1], [250, 0])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

    return (
        <section
            dir="ltr"
            ref={containerRef}
            className="relative overflow-hidden bg-[#fdfaf7] py-6"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse items-center gap-14 md:flex-row md:justify-between">
                    <motion.div
                        style={{ x: textX, opacity }}
                        className="max-w-2xl text-center md:text-left"
                    >
                        <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                            Lia Design
                            <br />
                            <span className="italic font-light">
                                a fusion of beauty,
                                <br />
                                authenticity,
                            </span>
                            <br />
                            <span className="font-medium">and your brilliance.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ x: imageX, opacity }}
                        className="relative h-[320px] w-[260px] md:h-[520px] md:w-[420px]"
                    >
                        <Image
                            src="/doll.png"
                            alt="Lia Design"
                            fill
                            priority
                            unoptimized
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FloatingLuxury