import Hero from "@/components/home/Hero"
import PromoBanner from "@/components/home/PromoBanner"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import NewArrivals from "@/components/home/NewArrivals"
import Newsletter from "@/components/home/Newsletter"

export default function Home() {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <FeaturedProducts />
      <Categories />
      <NewArrivals />
      <Newsletter />
    </main>
  )
}
