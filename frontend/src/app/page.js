import HeroSection from "../components/Hero";
import OurStory from "../components/OurStory";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutPreview from "../components/About";
import BlogSection from "../components/blog";
import GalleryPage from "./gallery/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <FeaturedProducts />
      <AboutPreview />
      <GalleryPage />
    </>
  );
}