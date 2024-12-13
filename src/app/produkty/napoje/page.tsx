import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

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
  const products: IProduct[] = [
    {title: "DIMES MANGO 330ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "DIMES BRZOSKWINIA 330ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "DIMES GRANAT 330ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "DIMES MULTIWITAMINA 330ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "DIMES POMARAŃCZA 330ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "TURTAMEK ANANAS 250ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "TURTAMEK WIŚNIA 250ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "TURTAMEK MORELA 250ML/24SZT.", img: "/sosy-jogurty.webp"},
    {title: "AYRAN 250ML", img: "/sosy-jogurty.webp"},
  ];  
 
  return (
    <ProductPage title="NAPOJE" products={products} />
  );
}