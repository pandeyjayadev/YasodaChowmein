import HeroSection from "../components/Hero";
import OurStory from "../components/OurStory";
import FeaturedProducts from "../components/ProductCard";
import AboutPreview from "../components/About";
import BlogSection from "../components/blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <FeaturedProducts />
      <AboutPreview />
      <BlogSection />
    </>
  );
}