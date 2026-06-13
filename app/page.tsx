import Hero from "@/components/home/Hero"
import PromoBanner from "@/components/home/PromoBanner"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import BeautySection from "@/components/home/BeautySection"
import SocialJoin from "@/components/home/SocialJoin"

export default function Home() {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <FeaturedProducts />
      <div id="categories">
        <Categories />
      </div>
      <BeautySection />
      <SocialJoin />
    </main>
  )
}
