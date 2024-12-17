import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Mrożonki",
  description: `Poznaj szeroką ofertę mrożonek 
dostępnych w Jamal Gastro. W naszym asortymencie znajdziesz 
świeże i starannie wyselekcjonowane produkty mrożone, 
takie jak warzywa, mięsa, frytki oraz inne mrożonki. 
Sprawdź naszą ofertę i skontaktuj się z nami, aby uzyskać 
więcej informacji na temat dostępnych produktów, 
współpracy oraz opcji dostaw. Jesteśmy do Twojej dyspozycji 
i chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Mrozonki() {
  const products: IProduct[] = [
    {title: "FALAFEL 50 SZTUK", img: "/mrozonki/falafel.webp"},
    {title: "NUGGETS Z KURCZAKA 1KG", img: "/mrozonki/nuggets-kurczaka1kg.webp"},
    {title: "NUGGETS Z KURCZAKA 1KG PREMIUM", img: "/mrozonki/nuggets-premium.webp"},
    {title: "STRIPSY Z KURCZAKA 1KG", img: "/mrozonki/stripsy-z-kurczaka.webp"},
    {title: "KRĄŻKI CEBULOWE 1KG", img: "/mrozonki/krazki-cebulowe.webp"},
    {title: "ZAPIEKANKA-MAX 200G XL", img: "/mrozonki/zapiekanka-max-XL.webp"},
    {title: "ZAPIEKANKA MEGA 300G XXL", img: "/mrozonki/zapiekanka-mega-XXL.webp"},
    {title: "MIĘSO HAMBURGER (ZRAZ) DRÓB 125G", img: "/mrozonki/mieso-hamburger-125g.webp"},
    {title: "AVES 125G MIĘSO HAMBURGER", img: "/mrozonki/AVES-mieso-hamburger.webp"},
    {title: "MIĘSO HAMBURGER (ZRAZ) DRÓB 140G", img: "/mrozonki/mieso-hamburger-140g.webp"},
    {title: "MIĘSO BURGER WOŁOWY 100% 150G", img: "/mrozonki/mieso-burger-wolowy150g.webp"},
    {title: "MIĘSO BURGER WOŁOWY 100% 200G", img: "/mrozonki/mieso-burger-wolowy200g.webp"},
    {title: "BURGER CHICKEN (KOTLET Z KURCZAKA) 1KG", img: "/mrozonki/burger-chicken.webp"},
    {title: "BAKLAVA ORZECHOWA 1KG", img: "/mrozonki/baklava-orzechowa.webp"},
  ];  
 
  return (
    <ProductPage title="PRODUKTY MROŻONE" products={products} />
  );
}