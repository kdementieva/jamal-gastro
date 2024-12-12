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
    {title: "Bułka kebab duża", img: "/pieczywo.webp"},
    {title: "Bułka ham - mała i duża", img: "/pieczywo.webp"},
    {title: "Bułka kebab mała", img: "/pieczywo.webp"},
    {title: "Bułka hot-dog", img: "/pieczywo.webp"},
    {title: "Chleb turecki 30cm", img: "/pieczywo.webp"},
    {title: "Tortilla 25cm", img: "/pieczywo.webp"},
    {title: "Tortilla 30cm", img: "/pieczywo.webp"},
    {title: "Chleb arabski/22cm", img: "/pieczywo.webp"},
    {title: "Chleb arabski/25cm", img: "/pieczywo.webp"},
    {title: "Chleb arabski/30cm", img: "/pieczywo.webp"},
    {title: "Bułka burger 24szt (czarny sezam)", img: "/pieczywo.webp"},
    {title: "Bułka burger 24szt (biały sezam)", img: "/pieczywo.webp"},
    {title: "Lawasz tortilla fresh 35cm", img: "/pieczywo.webp"},
    {title: "Lawasz tortilla fresh 37cm", img: "/pieczywo.webp"},
  ]
 
  return (
    <ProductPage title="PIECZYWO" products={products} />
  );
}
