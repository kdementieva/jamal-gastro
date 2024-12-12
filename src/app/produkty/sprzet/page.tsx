import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Sprzęt - Jamal Gastro",
  description: `Sprawdź szeroką ofertę sprzętu gastronomicznego 
dostępnego w Jamal Gastro. Oferujemy wysokiej jakości urządzenia i 
akcesoria niezbędne w profesjonalnej kuchni, takie jak piece, grille, 
lodówki, zamrażarki oraz drobny sprzęt kuchenny. Nasze produkty są 
idealne dla restauracji, firm cateringowych oraz gastronomii. 
Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych 
urządzeniach, warunkach współpracy i opcjach dostaw. Jesteśmy do 
Twojej dyspozycji i chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Sprzet() {
  const products: IProduct[] = [
    {title: "Nóż elektryczny do kebaba (używane i nowe)", img: "/sprzet.webp"},
    {title: "Silnik do maszyny kebab", img: "/sprzet.webp"},
    {title: "Silnik do maszyny kebab (POTIS)", img: "/sprzet.webp"},
    {title: "Toster opiekacz (saran) UŻYWKA", img: "/sprzet.webp"},
    {title: "Palnik do maszyny kebab", img: "/sprzet.webp"},
    {title: "Opiekacz do zapiekanek", img: "/sprzet.webp"},
    {title: "Piece do Pizzy", img: "/sprzet.webp"},
    {title: "Mikser do mieszania ciasta", img: "/sprzet.webp"},
    {title: "Frytkownice Gastronomiczne", img: "/sprzet.webp"},
    {title: "Lodówki", img: "/sprzet.webp"},
    {title: "Zamrażarki", img: "/sprzet.webp"},
    {title: "Okapy Gastronomiczne (różne wymiary)", img: "/sprzet.webp"}
  ]
 
  return (
    <ProductPage title="SPRZĘT" products={products} />
  );
}