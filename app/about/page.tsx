"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Shield, ArrowLeft, Heart, Clock, Monitor, Star } from "lucide-react"

const stats = [
  { num: "+۵۰۰۰", label: "مشتری راضی" },
  { num: "+۲۰۰", label: "محصول منحصربه‌فرد" },
  { num: "۳ سال", label: "تجربه و اعتماد" },
]

const values = [
  { icon: Shield, title: "ضمانت اصالت کالا", desc: "تمامی محصولات ما اصل و دارای گارانتی بازگشت هستند." },
  { icon: ArrowLeft, title: "ارسال سریع", desc: "ارسال به سراسر ایران با بسته‌بندی اختصاصی LIA Design." },
  { icon: Heart, title: "مشتری‌مداری", desc: "پشتیبانی آنلاین و پاسخگویی سریع در تمام مراحل خرید." },
  { icon: Clock, title: "به‌روز بودن", desc: "هر هفته محصولات جدید با آخرین ترندهای روز دنیا." },
  { icon: Monitor, title: "خرید آسان", desc: "رابط کاربری ساده، درگاه امن و پرداخت راحت." },
  { icon: Star, title: "کیفیت برتر", desc: "انتخاب دقیق محصولات از بهترین تامین‌کنندگان داخلی و خارجی." },
]

const team = [
  { initial: "ع", name: "علی موهدی", role: "بنیان‌گذار و مدیر برند", bio: "ایده LIA Design از ذوق و علاقه لیا به طراحی جواهرات شکل گرفت." },
  { initial: "م", name: "مهدی فلاحتی", role: "طراح و توسعه‌دهنده", bio: "مسئول طراحی تجربه کاربری و ساختار فنی سایت LIA Design." },
  { initial: "س", name: "سارا رضایی", role: "مسئول پشتیبانی", bio: "همراه مشتریان در تمام مراحل خرید و پاسخگویی سریع." },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function About() {
  return (
    <main dir="rtl" className="font-vazir text-[#2a1a0e]">

      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#f0e8e0] to-white px-5 md:px-8 flex justify-center">

        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#9b765d]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5b4638]/15 to-transparent" />

        <div className="max-w-7xl w-full flex justify-center">

          <div className="relative w-full max-w-2xl text-right p-8 md:p-12 rounded-3xl 
    bg-white/40 backdrop-blur-xl border border-white/40
    shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#9b765d]/15 blur-3xl rounded-full pointer-events-none" />

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5b4638]/10 border border-[#5b4638]/20 text-[11px] font-bold text-[#5b4638] mb-5">
                <span className="w-[5px] h-[5px] rounded-full bg-[#9b765d]" />
                درباره ما
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.07)}
              className="text-3xl md:text-4xl font-black text-[#2a1a0e] leading-tight mb-4"
            >
              جواهرات و اکسسوری
              <br />
              <span className="text-[#5b4638]">با کیفیت، با سلیقه</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="text-[14px] text-[#2a1a0e]/65 leading-[1.9] max-w-md"
            >
              LIA Design یک برند ایرانی متخصص در طراحی و عرضه اکسسوری‌های لوکس و محصولات
              آرایشی باکیفیت است. هدف ما این است که هر روز کمی زیباتر و باسلیقه‌تر
              باشید.
            </motion.p>

          </div>

        </div>
      </section>

      <section className="py-14 border-b border-[#9b765d]/12 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold text-[#5b4638] uppercase tracking-[.06em] mb-3 before:content-[''] before:w-4 before:h-[1.5px] before:bg-[#9b765d] before:rounded">
              داستان ما
            </span>
            <h2 className="text-[20px] font-black text-[#2a1a0e] mb-4">از یک ایده تا یک برند</h2>
            <div className="text-[13.5px] text-[#2a1a0e]/55 leading-[1.95] space-y-3">
              <p>LIA Design در سال ۱۴۰۱ با یک ایده ساده شروع شد — عرضه اکسسوری‌هایی که هم زیبا باشند، هم باکیفیت و هم در دسترس. ما باور داریم که هر نفر لایق بهترین‌هاست.</p>
              <p>از همان ابتدا تمرکز ما روی انتخاب دقیق محصولات، بسته‌بندی اختصاصی و تجربه خرید ساده و لذت‌بخش بوده. امروز با صدها مشتری وفادار، همچنان همان مسیر را ادامه می‌دهیم.</p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative rounded-2xl overflow-hidden border border-[#d8c6b7]/40"
            style={{
              background: "linear-gradient(135deg, #f0e8e0, #faf6f3)",
              aspectRatio: "4/3",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#9b765d]/20" />
              <div className="absolute w-52 h-52 rounded-full border border-dashed border-[#9b765d]/10" />
              <div className="text-center relative z-10">
                <div
                  className="text-[42px] font-black leading-none"
                  style={{ fontFamily: "'Mrs Saint Delafield', cursive"}}
                >
                  LIA Design
                </div>
                <div className="text-[9px] text-[#9b765d]/45 tracking-[.22em] font-semibold mt-1 uppercase">
                  Accessories
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 border-b border-[#9b765d]/08 px-5 md:px-8" style={{ background: "linear-gradient(to bottom, #faf6f3, white)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-right mb-7">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold text-[#5b4638] uppercase tracking-[.06em] mb-2 before:content-[''] before:w-4 before:h-[1.5px] before:bg-[#9b765d] before:rounded">
              ارزش‌های ما
            </span>
            <h2 className="text-[20px] font-black text-[#2a1a0e]" style={{ fontFamily: "'Mrs Saint Delafield', cursive"}}>چرا LIA Design؟</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className="group rounded-2xl p-5 transition-all duration-250 text-right"
                style={{
                  background: "rgba(255,255,255,0.80)",
                  border: "1px solid rgba(216,198,183,0.45)",
                  boxShadow: "0 2px 14px rgba(91,70,56,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-3"
                  style={{
                    background: "rgba(155,118,93,0.10)",
                    border: "1px solid rgba(155,118,93,0.18)",
                  }}
                >
                  <v.icon size={16} className="text-[#5b4638]" />
                </div>
                <div className="text-[13px] font-black text-[#2a1a0e] mb-1.5">{v.title}</div>
                <div className="text-[11.5px] text-[#2a1a0e]/44 leading-[1.75]">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-right mb-7">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold text-[#5b4638] uppercase tracking-[.06em] mb-2 before:content-[''] before:w-4 before:h-[1.5px] before:bg-[#9b765d] before:rounded">
              تیم ما
            </span>
            <h2 className="text-[20px] font-black text-[#2a1a0e]" style={{ fontFamily: "'Mrs Saint Delafield', cursive"}}>پشت LIA Design چه کسانی هستند؟</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {team.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl text-center p-6 border border-[#d8c6b7]/35"
                style={{ background: "linear-gradient(160deg,#faf6f3,#f0e8e0)" }}
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-[22px] font-black text-white"
                  style={{ background: "linear-gradient(135deg,#9b765d,#5b4638)" }}
                >
                  {t.initial}
                </div>
                <div className="text-[13px] font-black text-[#2a1a0e] mb-0.5">{t.name}</div>
                <div className="text-[11px] font-semibold text-[#5b4638]/65 mb-2">{t.role}</div>
                <div className="text-[11px] text-[#2a1a0e]/42 leading-[1.7]">{t.bio}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-14 px-5 md:px-8 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#2a1a0e,#3d2618)" }}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9b765d]/25 to-transparent" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-[#9b765d]/12 blur-3xl pointer-events-none" />
        <div className="relative">
          <motion.h3 {...fadeUp(0)} className="text-[20px] font-black text-white mb-2" style={{ fontFamily: "'Mrs Saint Delafield', cursive"}}>
            آماده‌اید با LIA Design همراه شوید؟
          </motion.h3>
          <motion.p {...fadeUp(0.06)} className="text-[13px] text-white/40 mb-6">
            محصولات منحصربه‌فرد ما را کشف کنید
          </motion.p>
          <motion.div {...fadeUp(0.1)}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#9b765d,#5b4638)",
                boxShadow: "0 4px 20px rgba(155,118,93,0.35)",
              }}
            >
              مشاهده فروشگاه
              <ArrowLeft size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}