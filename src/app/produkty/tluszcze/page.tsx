import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Tłuszcze",
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
  const products: string[] = [
    "FRYTURA 10L",
    "FRYTURA 20L",
    "FRYTURA PAN MAX 5L",
  ];

  const images: string[] = [
    "/tluszcze/tluszcze-1.webp",
    "/tluszcze/tluszcze-2.webp",
    "/tluszcze/tluszcze-3.webp",
    "/tluszcze/tluszcze-4.webp"
  ]
 
  return (
    <ProductPage title="TŁUSZCZE" products={products} images={images} />
  );
}