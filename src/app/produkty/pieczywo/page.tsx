import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Pieczywo - Jamal Gastro",
  description: `Poznaj szeroką ofertę pieczywa dostępnego w Jamal Gastro. 
Oferujemy świeże i mrożone pieczywo najwyższej jakości, w tym chleby, bułki,
oraz bagietki. Nasze pieczywo jest idealne dla restauracji, 
barów, firm cateringowych oraz gastronomii. Skontaktuj się z nami, 
aby dowiedzieć się więcej o dostępnych produktach, warunkach współpracy 
i opcjach dostaw. Jesteśmy do Twojej dyspozycji i chętnie odpowiemy 
na wszystkie Twoje pytania.`
};

export default function Pieczywo() {
  const products: IProduct[] = [
    {title: "CHLEB TURECKI", img: "/pieczywo.webp"},
    {title: "TORTILLA 20CM", img: "/pieczywo.webp"},
    {title: "TORTILLA 25CM", img: "/pieczywo.webp"},
    {title: "TORTILLA 30CM", img: "/pieczywo.webp"},
    {title: "TORTILLA 30CM (GRUBA)", img: "/pieczywo.webp"},
    {title: "TORTILLA 35CM", img: "/pieczywo.webp"},
    {title: "PITA CHLEB ARABSKI/20CM", img: "/pieczywo.webp"},
    {title: "PITA CHLEB ARABSKI/22CM", img: "/pieczywo.webp"},
    {title: "PITA CHLEB ARABSKI/25CM", img: "/pieczywo.webp"},
    {title: "PITA CHLEB ARABSKI/30CM", img: "/pieczywo.webp"},
    {title: "BUŁKA KEBAB STANDARD", img: "/pieczywo.webp"},
    {title: "BUŁKA KEBAB MAŁA", img: "/pieczywo.webp"},
    {title: "BUŁKA BURGER 150/DUŻA PREMIUM", img: "/pieczywo.webp"},
    {title: "BUŁKA HAMBURGER DUŻA", img: "/pieczywo.webp"},
    {title: "BUŁKA HAMBURGER MAŁA", img: "/pieczywo.webp"},
  ];  
 
  return (
    <ProductPage title="PIECZYWO" products={products} />
  );
}
