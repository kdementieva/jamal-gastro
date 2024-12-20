import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Sprzęt",
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
  const products: string[] = [
    "Nóż elektryczny do kebaba (używane i nowe)",
    "Silnik do maszyny kebab",
    "Silnik do maszyny kebab (POTIS)",
    "Toster opiekacz (saran) UŻYWKA",
    "Palnik do maszyny kebab",
    "Opiekacz do zapiekanek",
    "Piece do Pizzy",
    "Mikser do mieszania ciasta",
    "Frytkownice Gastronomiczne",
    "Lodówki",
    "Zamrażarki",
    "Okapy Gastronomiczne (różne wymiary)",
  ];

  const images: string[] = [
    "/sprzet/frytkownice-gastronomiczne.webp",
    "/sprzet/noz-elektryczny-do-kebaba.webp",
    "/sprzet/okapy-gastronomiczne.webp",
    "/sprzet/piece-do-pizzy.webp"
  ]
 
  return (
    <ProductPage title="SPRZĘT" products={products} images={images} />
  );
}