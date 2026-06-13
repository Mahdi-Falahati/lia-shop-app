"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowLeft } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-[#E6F1ED]/30 to-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-10 bg-white border border-[#D9EAE5]/60
            shadow-[0_4px_32px_rgba(0,118,79,0.06),0_1px_8px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F1ED] text-[#00764F] text-xs font-semibold mb-3">
                <Mail size={11} />
                خبرنامه LIA
              </div>
              <h4 className="text-xl md:text-2xl font-black text-gray-800">
                از جدیدترین‌ها باخبر شوید
              </h4>
              <p className="text-sm text-gray-500 mt-1.5 max-w-xs">
                عضویت در خبرنامه تا از تخفیف‌ها و مجموعه‌های جدید مطلع شوید.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#E6F1ED] text-[#00764F] font-semibold text-sm"
                >
                  ✓ با موفقیت عضو شدید!
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      boxShadow: focused
                        ? "0 0 0 3px rgba(0,118,79,0.15), 0 4px 12px rgba(0,118,79,0.08)"
                        : "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                    className="relative rounded-xl overflow-hidden border border-[#D9EAE5] transition-colors duration-200"
                    style={{ borderColor: focused ? "#8CC1B0" : undefined }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="آدرس ایمیل شما"
                      dir="rtl"
                      className="px-4 py-3 text-sm text-right bg-white outline-none w-full md:w-72 text-gray-700 placeholder:text-gray-400"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary gap-1.5 shrink-0"
                  >
                    عضویت
                    <ArrowLeft size={13} className="-rotate-180" />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
