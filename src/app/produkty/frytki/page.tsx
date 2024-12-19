import ProductPage from "@/components/product-page/ProductPage";

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
  const products: string[] = [
    "FRYTKI MCCAIN 9MM/12,5KG",
    "FRYTKI TURBO AVIKO 10MM/12,5KG",
    "FRYTKI FARM FRIES 10MM/12,5KG",
    "FRYTKI KARBOWANE TURBO 10MM/12,5KG",
    "FRYTKI PROSTE BC 10MM",
  ];

  const images: string[] = [
    "/frytki/frytki-farm-fries.webp",
    "/frytki/frytki-karbowane-turbo.webp",
    "/frytki/frytki-mccain.webp",
    "/frytki/frytki-turbo-aviko.webp"
  ]
 
  return (
    <ProductPage title="FRYTKI" products={products} images={images} />
  );
}
