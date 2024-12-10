import About from "@/components/about/About";
import HeroImage from "@/components/hero-image/HeroImage";
import ProductsCaterories from "@/components/products-categories/ProductsCategories";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <HeroImage />
      <About />
      <Services />
      <ProductsCaterories />
    </div>
  );
}