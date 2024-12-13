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
    {title: "FRYTURA 10L", img: "/tluszcze.webp"},
    {title: "FRYTURA 20L", img: "/tluszcze.webp"},
    {title: "FRYTURA PAN MAX 5L", img: "/tluszcze.webp"},
  ];  
 
  return (
    <ProductPage title="TŁUSZCZE" products={products} />
  );
}