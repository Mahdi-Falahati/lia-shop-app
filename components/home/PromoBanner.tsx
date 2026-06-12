import Link from "next/link"

export default function PromoBanner() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-xl p-8 bg-gradient-to-r from-brand to-brand-bg text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h3 className="text-2xl font-bold">یک پیشنهاد ویژه برای تابستان</h3>
            <p className="mt-2 text-sm">انتخاب‌های منتخب با تخفیف محدود؛ حالا بهترین زمان خرید است.</p>
          </div>
          <div>
            <Link href="/shop" className="inline-block bg-white text-brand px-5 py-3 rounded-md font-semibold">مشاهده فروشگاه</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
