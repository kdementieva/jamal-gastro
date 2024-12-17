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
    {title: "Nóż elektryczny do kebaba (używane i nowe)", img: "/sprzet/noz-elektryczny-do-kebaba.webp"},
    {title: "Silnik do maszyny kebab", img: "/sprzet/silnik-do-maszyny-kebab.webp"},
    {title: "Silnik do maszyny kebab (POTIS)", img: "/sprzet/silnik-do-maszyny-kebab-potis.webp"},
    {title: "Toster opiekacz (saran) UŻYWKA", img: "/sprzet/toster-opiekacz-saran.webp"},
    {title: "Palnik do maszyny kebab", img: "/sprzet/palnik-do-maszyny-kebab.webp"},
    {title: "Opiekacz do zapiekanek", img: "/sprzet/opiekacz-do-zapiekanek.webp"},
    {title: "Piece do Pizzy", img: "/sprzet/piece-do-pizzy.webp"},
    {title: "Mikser do mieszania ciasta", img: "/sprzet/mikser-do-mieszania-ciasta.webp"},
    {title: "Frytkownice Gastronomiczne", img: "/sprzet/frytkownice-gastronomiczne.webp"},
    {title: "Lodówki", img: "/sprzet/lodowki.webp"},
    {title: "Zamrażarki", img: "/sprzet/zamrazarki.webp"},
    {title: "Okapy Gastronomiczne (różne wymiary)", img: "/sprzet/okapy-gastronomiczne.webp"}
  ]
 
  return (
    <ProductPage title="SPRZĘT" products={products} />
  );
}