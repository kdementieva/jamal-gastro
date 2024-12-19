import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Napoje",
  description: `Poznaj szeroką ofertę napojów dostępnych w Jamal Gastro. 
Oferujemy różnorodne napoje, takie jak soki, napoje owocowe, ayran i wiele innych, 
idealne dla restauracji, barów, firm cateringowych oraz gastronomii. 
Nasze produkty wyróżniają się najwyższą jakością i wyjątkowym smakiem. 
Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych napojach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji 
i chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Napoje() {
  const products: string[] = [
    "DIMES MANGO 330ML/24SZT.",
    "DIMES BRZOSKWINIA 330ML/24SZT.",
    "DIMES GRANAT 330ML/24SZT.",
    "DIMES MULTIWITAMINA 330ML/24SZT.",
    "DIMES POMARAŃCZA 330ML/24SZT.",
    "TURTAMEK ANANAS 250ML/24SZT.",
    "TURTAMEK WIŚNIA 250ML/24SZT.",
    "TURTAMEK MORELA 250ML/24SZT.",
    "AYRAN 250ML",
  ];

  const images: string[] = [
    "/napoje/dimes-brzoskwinia.webp",
    "/napoje/dimes-multiwitamina.webp",
    "/napoje/turtamek-ananas.webp",
    "/napoje/turtamek-wisnia.webp"
  ]
 
  return (
    <ProductPage title="NAPOJE" products={products} images={images} />
  );
}