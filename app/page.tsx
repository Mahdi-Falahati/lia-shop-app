import Hero from "@/components/home/Hero"
import PromoBanner from "@/components/home/PromoBanner"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import BeautySection from "@/components/home/BeautySection"
import SocialJoin from "@/components/home/SocialJoin"
import InfoSection from "@/components/home/InfoSection"
import FloatingLuxury from "@/components/home/FloatingLuxury"
import RingSizeGuide from "@/components/home/RingSizeGuide"
import NastaliqScrollSection from "@/components/home/NastaliqScrollSection"
import CategoryShowcase from "@/components/home/Categoryshowcase"

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryShowcase />
      <NastaliqScrollSection />
      <PromoBanner />
      <BeautySection />
      <RingSizeGuide />
      <InfoSection />
      <SocialJoin />
      <FloatingLuxury />
    </main>
  )
}
