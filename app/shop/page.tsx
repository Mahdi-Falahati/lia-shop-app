import { Suspense } from "react"
import ShopContent from "./ShopContent"

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoadingFallback />}>
      <ShopContent />
    </Suspense>
  )
}

function ShopLoadingFallback() {
  return (
    <main dir="rtl" className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-8 flex items-center justify-center">
      <div className="text-sm text-gray-400">در حال بارگذاری فروشگاه...</div>
    </main>
  )
}