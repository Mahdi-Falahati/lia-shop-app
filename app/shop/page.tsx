"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SlidersHorizontal, X, ChevronDown, Search, Sparkles, Gem } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"
import { ACCESSORY_CATEGORIES, ACCESSORY_PRODUCTS, BEAUTY_CATEGORIES, BEAUTY_PRODUCTS } from "@/data/products"

type ShopMode = "accessory" | "beauty"

const SORT_OPTIONS = [
  { value: "newest", label: "جدیدترین" },
  { value: "cheapest", label: "ارزان‌ترین" },
  { value: "expensive", label: "گران‌ترین" },
]

const MAX_PRICE = 1000000

function formatPrice(n: number) {
  return n.toLocaleString("fa-IR") + " تومان"
}

const THEME = {
  accessory: {
    pillActive: "linear-gradient(135deg,#9b765d,#5b4638)",
    accent: "#9b765d",
    accentDark: "#5b4638",
    border: "#d8c6b7",
    subtle: "#f0e8e0",
    text: "#2a1a0e",
    labelClass: "text-[#9b765d]",
    badgeClass: "bg-[#5b4638]/10 border-[#5b4638]/15 text-[#5b4638]",
    dotClass: "bg-[#9b765d]",
    shadow: "rgba(91,70,56,0.12)",
    icon: Gem,
    name: "اکسسوری",
  },
  beauty: {
    pillActive: "linear-gradient(135deg,#c9728d,#8b3a5a)",
    accent: "#c9728d",
    accentDark: "#8b3a5a",
    border: "#f0c8d5",
    subtle: "#fdf0f3",
    text: "#2d0f1a",
    labelClass: "text-[#c9728d]",
    badgeClass: "bg-[#8b3a5a]/10 border-[#8b3a5a]/15 text-[#8b3a5a]",
    dotClass: "bg-[#c9728d]",
    shadow: "rgba(139,58,90,0.12)",
    icon: Sparkles,
    name: "آرایشی بهداشتی",
  },
}

export default function ShopPage() {
  const [mode, setMode] = useState<ShopMode>("accessory")
  const [activeCategory, setActiveCategory] = useState("همه")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, MAX_PRICE])
  const [sort, setSort] = useState("newest")
  const [search, setSearch] = useState("")
  const [sheetOpen, setSheetOpen] = useState(false)
  const [favorites, setFavorites] = useState<number[]>(
    [...ACCESSORY_PRODUCTS, ...BEAUTY_PRODUCTS].filter((p) => p.isFavorite).map((p) => p.id)
  )

  const t = THEME[mode]
  const categories = mode === "accessory" ? ACCESSORY_CATEGORIES : BEAUTY_CATEGORIES
  const allProducts = mode === "accessory" ? ACCESSORY_PRODUCTS : BEAUTY_PRODUCTS

  const switchMode = (m: ShopMode) => {
    setMode(m)
    setActiveCategory("همه")
    setPriceRange([0, MAX_PRICE])
    setSearch("")
    setSort("newest")
  }

  const filtered = useMemo(() => {
    let list = [...allProducts]
    if (activeCategory !== "همه") list = list.filter((p) => p.category === activeCategory)
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    if (search.trim()) list = list.filter((p) => p.name.includes(search.trim()))
    if (sort === "cheapest") list.sort((a, b) => a.price - b.price)
    if (sort === "expensive") list.sort((a, b) => b.price - a.price)
    return list
  }, [mode, activeCategory, priceRange, sort, search, allProducts])

  const handleToggleFavorite = (id: number | string) => {
    const numId = Number(id)
    setFavorites((prev) =>
      prev.includes(numId) ? prev.filter((f) => f !== numId) : [...prev, numId]
    )
  }

  const handleAddToCart = (id: number | string) => {
    console.log("add to cart", id)
  }

  const resetFilters = () => {
    setActiveCategory("همه")
    setPriceRange([0, MAX_PRICE])
    setSearch("")
  }

  const hasActiveFilters = activeCategory !== "همه" || priceRange[0] > 0 || priceRange[1] < MAX_PRICE

  const FilterContent = () => (
    <div className="space-y-7" dir="rtl">
      <div>
        <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${t.labelClass}`}>دسته‌بندی</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: t.pillActive, color: "white" }
                  : { background: t.subtle, color: t.accentDark }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${t.labelClass}`}>رنج قیمت</p>
        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={MAX_PRICE}
            step={10000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
            style={{ accentColor: t.accent }}
          />
          <div className="flex justify-between text-[11.5px] font-medium" style={{ color: t.accentDark + "b0" }}>
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={resetFilters}
          className="w-full py-2.5 rounded-xl text-[12.5px] font-semibold transition-colors bg-white"
          style={{ color: t.accentDark, border: `1px solid ${t.border}` }}
        >
          پاک کردن فیلترها
        </button>
      )}
    </div>
  )

  return (
    <main dir="rtl" className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-8 font-vazir">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold mb-4 ${t.badgeClass}`}>
              <span className={`w-[5px] h-[5px] rounded-full ${t.dotClass}`} />
              فروشگاه LIA Design
            </span>

            <div className="flex items-center gap-4 flex-wrap">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={mode}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl md:text-3xl font-black"
                  style={{ color: t.text }}
                >
                  {mode === "accessory" ? "اکسسوری و جواهرات" : "آرایشی بهداشتی"}
                </motion.h1>
              </AnimatePresence>

              <div
                className="flex items-center p-1 rounded-2xl gap-1"
                style={{ background: "#f5f0ee", border: "1px solid #e4d8d0" }}
              >
                {(["accessory", "beauty"] as ShopMode[]).map((m) => {
                  const th = THEME[m]
                  const isActive = mode === m
                  const Icon = th.icon
                  return (
                    <button
                      key={m}
                      onClick={() => switchMode(m)}
                      className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all duration-250"
                      style={
                        isActive
                          ? { background: th.pillActive, color: "white", boxShadow: `0 3px 12px ${th.shadow}` }
                          : { color: th.accentDark, background: "transparent" }
                      }
                    >
                      <Icon size={14} />
                      {th.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="relative flex-1">
            <Search size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: t.accent + "90" }} />
            <input
              type="text"
              placeholder="جستجو در محصولات..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-9 pl-4 py-2.5 rounded-xl text-[13px] outline-none transition-colors bg-white"
              style={{ border: `1px solid ${t.border}`, color: t.text }}
            />
          </div>

          <div className="relative hidden md:block">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none pr-3.5 pl-8 py-2.5 rounded-xl text-[13px] font-medium outline-none cursor-pointer bg-white"
              style={{ border: `1px solid ${t.border}`, color: t.accentDark }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: t.accent }} />
          </div>

          <button
            onClick={() => setSheetOpen(true)}
            className="md:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold bg-white relative"
            style={{ border: `1px solid ${t.border}`, color: t.accentDark }}
          >
            <SlidersHorizontal size={15} />
            فیلتر
            {hasActiveFilters && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-[9px] flex items-center justify-center font-bold" style={{ background: t.accent }}>!</span>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2 mb-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: t.pillActive, color: "white", boxShadow: `0 3px 12px ${t.shadow}` }
                  : { background: t.subtle, color: t.accentDark }
              }
            >
              {cat}
            </button>
          ))}
          <div className="mr-auto flex items-center gap-3">
            <span className="text-[12px]" style={{ color: t.accent + "aa" }}>{filtered.length} محصول</span>
            {hasActiveFilters && (
              <button onClick={resetFilters} className="text-[11.5px] font-semibold underline underline-offset-2" style={{ color: t.accentDark }}>
                پاک کردن
              </button>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 mb-6">
          <span className={`text-[11px] font-bold uppercase tracking-widest ${t.labelClass}`}>رنج قیمت:</span>
          <input
            type="range" min={0} max={MAX_PRICE} step={10000} value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-48" style={{ accentColor: t.accent }}
          />
          <span className="text-[12px] font-medium" style={{ color: t.accentDark }}>تا {formatPrice(priceRange[1])}</span>
        </div>

        <div className="md:hidden flex items-center justify-between mb-4">
          <span className="text-[12px]" style={{ color: t.accent + "aa" }}>{filtered.length} محصول</span>
          <div className="relative">
            <select
              value={sort} onChange={(e) => setSort(e.target.value)}
              className="appearance-none pr-3 pl-7 py-2 rounded-xl text-[12.5px] font-medium outline-none bg-white"
              style={{ border: `1px solid ${t.border}`, color: t.accentDark }}
            >
              {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronDown size={12} className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: t.accent }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                  {filtered.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.22, delay: i * 0.03 }}
                    >
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        isFavorite={favorites.includes(product.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onAddToCart={handleAddToCart}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-28 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: t.subtle }}>
                    <Search size={24} style={{ color: t.accent }} />
                  </div>
                  <p className="text-[15px] font-bold mb-1" style={{ color: t.text }}>محصولی پیدا نشد</p>
                  <p className="text-[13px] mb-5" style={{ color: t.accent + "90" }}>فیلترها را تغییر بده</p>
                  <button onClick={resetFilters} className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-white" style={{ background: t.pillActive }}>
                    پاک کردن فیلترها
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {sheetOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              onClick={() => setSheetOpen(false)} className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />
            <motion.div key="sheet" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 36 }}
              className="fixed bottom-0 inset-x-0 z-[70] rounded-t-3xl bg-white px-5 pt-5 pb-10"
              style={{ boxShadow: `0 -12px 40px ${t.shadow}` }}
            >
              <div className="w-10 h-1 rounded-full mx-auto mb-5" style={{ background: t.border }} />
              <div className="flex items-center justify-between mb-5">
                <p className="text-[15px] font-black" style={{ color: t.text }}>فیلترها</p>
                <button onClick={() => setSheetOpen(false)} className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: t.subtle, color: t.accentDark }}>
                  <X size={15} />
                </button>
              </div>
              <FilterContent />
              <button onClick={() => setSheetOpen(false)} className="mt-6 w-full py-3.5 rounded-2xl text-[13.5px] font-bold text-white" style={{ background: t.pillActive }}>
                نمایش {filtered.length} محصول
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}