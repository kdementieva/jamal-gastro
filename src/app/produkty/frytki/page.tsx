import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Frytki",
  description: `Poznaj szeroką ofertę frytek dostępnych w Jamal Gastro. 
Oferujemy frytki najwyższej jakości, w tym prostokątne, karbowane, turbo, 
oraz specjalistyczne frytki do gastronomii. Nasze frytki doskonale sprawdzają się 
w restauracjach, barach, firmach cateringowych oraz innych lokalach gastronomicznych. 
Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych produktach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji i chętnie 
odpowiemy na wszystkie Twoje pytania.`
};

export default function Frytki() {
  const products: IProduct[] = [
    {title: "FRYTKI MCCAIN 9MM/12,5KG", img: "/sosy-jogurty.webp"},
    {title: "FRYTKI TURBO AVIKO 10MM/12,5KG", img: "/sosy-jogurty.webp"},
    {title: "FRYTKI FARM FRIES 10MM/12,5KG", img: "/sosy-jogurty.webp"},
    {title: "FRYTKI KARBOWANE TURBO 10MM/12,5KG", img: "/sosy-jogurty.webp"},
    {title: "FRYTKI PROSTE BC 10MM", img: "/sosy-jogurty.webp"},
  ];
 
  return (
    <ProductPage title="FRYTKI" products={products} />
  );
}
