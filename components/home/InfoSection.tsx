"use client"

import { motion } from "framer-motion"
import { Droplets, Package, Truck } from "lucide-react"

const items = [
  {
    icon: Droplets,
    title: "مراقبت از اکسسوری",
    list: [
      "عدم تماس با مواد شوینده، عطر و لوسیون",
      "خارج کردن قبل از حمام و ورزش",
    ],
  },
  {
    icon: Package,
    title: "نحوه پیگیری مرسولات",
    list: [
      "مرسولات پستی: کد رهگیری در کانال تلگرام",
      "تیپاکس: ارسال کد رهگیری از طریق پیامک",
    ],
  },
  {
    icon: Truck,
    title: "نحوه ارسال",
    list: [
      "ارسال پستی سراسر کشور (۳ تا ۷ روز کاری)",
      "ارسال فوری با تیپاکس (۱ تا ۳ روز کاری)",
    ],
  },
]

export default function InfoSection() {
  return (
    <section className="bg-[#E5E2DD] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-right group"
            >
              <div className="mb-6 text-[#5A5855]">
                <item.icon size={30} strokeWidth={1.2} />
              </div>
              
              <h3 className="text-[#3A3836] text-lg font-medium mb-6 tracking-tight">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.list.map((text, i) => (
                  <li 
                    key={i} 
                    className="text-[#5A5855] text-[13px] leading-relaxed flex items-center gap-2 justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8C8A85] shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}