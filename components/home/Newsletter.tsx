export default function Newsletter() {
  return (
    <section className="py-12 bg-brand-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-lg p-8 bg-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-lg font-bold">از جدیدترین‌ها باخبر شوید</h4>
            <p className="text-sm text-gray-600">عضویت در خبرنامه تا از تخفیف‌ها و مجموعه‌های جدید مطلع شوید.</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <input placeholder="آدرس ایمیل شما" className="px-4 py-2 border rounded-md text-right w-full md:w-80" />
              <button className="bg-brand text-white px-4 py-2 rounded-md">عضویت</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
