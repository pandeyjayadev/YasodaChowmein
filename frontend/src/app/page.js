import HeroSection from "../components/Hero";
import OurStory from "../components/OurStory";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutPreview from "../components/About";
import HomeGallerySection from "@/components/HomeGallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <FeaturedProducts />
      <AboutPreview />
      <HomeGallerySection />
    </>
  );
}