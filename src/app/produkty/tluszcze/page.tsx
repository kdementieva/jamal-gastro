import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Tłuszcze - Jamal Gastro",
  description: `Poznaj szeroką ofertę tłuszczów dostępnych w Jamal Gastro. 
Oferujemy różnorodne tłuszcze spożywcze, takie jak oleje roślinne, 
tłuszcze do smażenia oraz specjalistyczne tłuszcze gastronomiczne. 
Nasze produkty są idealne do przygotowywania potraw w restauracjach,
firmach cateringowych oraz w gastronomii. Skontaktuj się z nami, aby 
dowiedzieć się więcej o dostępnych produktach, warunkach współpracy i 
opcjach dostaw. Jesteśmy do Twojej dyspozycji i chętnie odpowiemy na 
wszystkie Twoje pytania.`
};

export default function Tluszcze() {
  const products: IProduct[] = [
    {title: "Frytura GOLDPALM/JAGR 10kg", img: "/tluszcze.webp"},
    {title: "Frytura płynna PAN MAX 5kg", img: "/tluszcze.webp"},
    {title: "Olej 5l", img: "/tluszcze.webp"}
  ]
 
  return (
    <ProductPage title="TŁUSZCZE" products={products} />
  );
}