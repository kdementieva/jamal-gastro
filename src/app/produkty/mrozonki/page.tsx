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
    {title: "FALAFEL 50 SZTUK", img: "/mrozonki.webp"},
    {title: "NUGGETS Z KURCZAKA 1KG", img: "/mrozonki.webp"},
    {title: "NUGGETS Z KURCZAKA 1KG PREMIUM", img: "/mrozonki.webp"},
    {title: "STRIPSY Z KURCZAKA 1KG", img: "/mrozonki.webp"},
    {title: "KRĄŻKI CEBULOWE 1KG", img: "/mrozonki.webp"},
    {title: "ZAPIEKANKA-MAX 200G XL", img: "/mrozonki.webp"},
    {title: "ZAPIEKANKA MEGA 300G XXL", img: "/mrozonki.webp"},
    {title: "MIĘSO HAMBURGER (ZRAZ) DRÓB 125G", img: "/mrozonki.webp"},
    {title: "AVES 125G MIĘSO HAMBURGER", img: "/mrozonki.webp"},
    {title: "MIĘSO HAMBURGER (ZRAZ) DRÓB 140G", img: "/mrozonki.webp"},
    {title: "MIĘSO BURGER WOŁOWY 100% 150G", img: "/mrozonki.webp"},
    {title: "MIĘSO BURGER WOŁOWY 100% 200G", img: "/mrozonki.webp"},
    {title: "BURGER CHICKEN (KOTLET Z KURCZAKA) 1KG", img: "/mrozonki.webp"},
    {title: "BAKLAVA ORZECHOWA 1KG", img: "/mrozonki.webp"},
  ];  
 
  return (
    <ProductPage title="PRODUKTY MROŻONE" products={products} />
  );
}