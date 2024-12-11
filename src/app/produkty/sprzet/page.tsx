import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export default function Pieczywo() {
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