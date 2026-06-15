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
  { icon: ArrowLeft, title: "ارسال سریع", desc: "ارسال به سراسر ایران با بسته‌بندی اختصاصی LIA." },
  { icon: Heart, title: "مشتری‌مداری", desc: "پشتیبانی آنلاین و پاسخگویی سریع در تمام مراحل خرید." },
  { icon: Clock, title: "به‌روز بودن", desc: "هر هفته محصولات جدید با آخرین ترندهای روز دنیا." },
  { icon: Monitor, title: "خرید آسان", desc: "رابط کاربری ساده، درگاه امن و پرداخت راحت." },
  { icon: Star, title: "کیفیت برتر", desc: "انتخاب دقیق محصولات از بهترین تامین‌کنندگان داخلی و خارجی." },
]

const team = [
  { initial: "ع", name: "علی موهدی", role: "بنیان‌گذار و مدیر برند", bio: "ایده LIA از ذوق و علاقه لیا به طراحی جواهرات شکل گرفت." },
  { initial: "م", name: "مهدی فلاحتی", role: "طراح و توسعه‌دهنده", bio: "مسئول طراحی تجربه کاربری و ساختار فنی سایت LIA." },
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
    <main dir="rtl" className="font-vazir text-[#1a2e24]">

      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#e8f5ee] to-white px-5 md:px-8 flex justify-center">

        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#00c880]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00764F]/15 to-transparent" />

        <div className="max-w-7xl w-full flex justify-center">

          <div className="relative w-full max-w-2xl text-right p-8 md:p-12 rounded-3xl 
    bg-white/40 backdrop-blur-xl border border-white/40
    shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

            {/* light glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00c880]/20 blur-3xl rounded-full pointer-events-none" />

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00764F]/10 border border-[#00764F]/20 text-[11px] font-bold text-[#00764F] mb-5">
                <span className="w-[5px] h-[5px] rounded-full bg-[#00c880]" />
                درباره ما
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.07)}
              className="text-3xl md:text-4xl font-black text-[#0f1e16] leading-tight mb-4"
            >
              جواهرات و اکسسوری
              <br />
              <span className="text-[#00764F]">با کیفیت، با سلیقه</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="text-[14px] text-[#1e3828]/70 leading-[1.9] max-w-md"
            >
              LIA یک برند ایرانی متخصص در طراحی و عرضه اکسسوری‌های لوکس و محصولات
              آرایشی باکیفیت است. هدف ما این است که هر روز کمی زیباتر و باسلیقه‌تر
              باشید.
            </motion.p>

          </div>

        </div>
      </section>

      <section className="py-14 border-b border-[#00764F]/07 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold text-[#00764F] uppercase tracking-[.06em] mb-3 before:content-[''] before:w-4 before:h-[1.5px] before:bg-[#00c880] before:rounded">
              داستان ما
            </span>
            <h2 className="text-[20px] font-black text-[#0f1e16] mb-4">از یک ایده تا یک برند</h2>
            <div className="text-[13.5px] text-[#0f1e16]/58 leading-[1.95] space-y-3">
              <p>LIA در سال ۱۴۰۱ با یک ایده ساده شروع شد — عرضه اکسسوری‌هایی که هم زیبا باشند، هم باکیفیت و هم در دسترس. ما باور داریم که هر نفر لایق بهترین‌هاست.</p>
              <p>از همان ابتدا تمرکز ما روی انتخاب دقیق محصولات، بسته‌بندی اختصاصی و تجربه خرید ساده و لذت‌بخش بوده. امروز با صدها مشتری وفادار، همچنان همان مسیر را ادامه می‌دهیم.</p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#c8ead8] to-[#e8f5ee] border border-[#00764F]/10"
            style={{ aspectRatio: "4/3" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="absolute w-36 h-36 rounded-full border border-dashed border-[#00764F]/18"
              />
              <div
                className="absolute w-52 h-52 rounded-full border border-dashed border-[#00764F]/09"
              />
              <div className="text-center relative z-10">
                <div
                  className="text-[42px] font-black leading-none"
                  style={{
                    background: "linear-gradient(135deg,#00c880,#00764F)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "2px",
                  }}
                >
                  LIA
                </div>
                <div className="text-[9px] text-[#00764F]/40 tracking-[.22em] font-semibold mt-1 uppercase">
                  Accessories
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-[#f0f9f4] to-white border-b border-[#00764F]/06 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-right mb-7">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold text-[#00764F] uppercase tracking-[.06em] mb-2 before:content-[''] before:w-4 before:h-[1.5px] before:bg-[#00c880] before:rounded">
              ارزش‌های ما
            </span>
            <h2 className="text-[20px] font-black text-[#0f1e16]">چرا LIA؟</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className="group rounded-2xl p-5 transition-all duration-250 text-right"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-3"
                  style={{
                    background: "rgba(0,118,79,0.08)",
                    border: "1px solid rgba(0,118,79,0.12)",
                  }}
                >
                  <v.icon size={16} className="text-[#00764F]" />
                </div>
                <div className="text-[13px] font-black text-[#0f1e16] mb-1.5">{v.title}</div>
                <div className="text-[11.5px] text-[#0f1e16]/46 leading-[1.75]">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-right mb-7">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold text-[#00764F] uppercase tracking-[.06em] mb-2 before:content-[''] before:w-4 before:h-[1.5px] before:bg-[#00c880] before:rounded">
              تیم ما
            </span>
            <h2 className="text-[20px] font-black text-[#0f1e16]">پشت LIA چه کسانی هستند؟</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {team.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl text-center p-6 border border-[#00764F]/10"
                style={{ background: "linear-gradient(160deg,#f0f9f4,#e8f5ee)" }}
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-[22px] font-black text-white"
                  style={{ background: "linear-gradient(135deg,#00c880,#00764F)" }}
                >
                  {t.initial}
                </div>
                <div className="text-[13px] font-black text-[#0f1e16] mb-0.5">{t.name}</div>
                <div className="text-[11px] font-semibold text-[#00764F]/65 mb-2">{t.role}</div>
                <div className="text-[11px] text-[#0f1e16]/42 leading-[1.7]">{t.bio}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-14 px-5 md:px-8 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0f2e1c,#1a4a2a)" }}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00c880]/20 to-transparent" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-[#00c880]/15 blur-3xl pointer-events-none" />
        <div className="relative">
          <motion.h3 {...fadeUp(0)} className="text-[20px] font-black text-white mb-2">
            آماده‌اید با LIA همراه شوید؟
          </motion.h3>
          <motion.p {...fadeUp(0.06)} className="text-[13px] text-white/45 mb-6">
            محصولات منحصربه‌فرد ما را کشف کنید
          </motion.p>
          <motion.div {...fadeUp(0.1)}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#00c880,#00764F)",
                boxShadow: "0 4px 20px rgba(0,200,120,0.35)",
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