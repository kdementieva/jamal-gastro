import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Przyprawy",
  description: `Odkryj szeroką ofertę przypraw dostępnych 
w Jamal Gastro. Oferujemy bogaty wybór aromatycznych przypraw. W naszym asortymencie 
znajdziesz produkty niezbędne do wzbogacenia smaku potraw, 
idealne dla restauracji, firm cateringowych oraz gastronomii. 
Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych produktach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji i 
chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Przyprawy() {
  const products: IProduct[] = [
    {title: "CHILLI GRYS 500G", img: "/sosy-jogurty.webp"},
    {title: "CHILLI KAROLINA (BARDZO OSTRA)", img: "/sosy-jogurty.webp"},
    {title: "CZOSNEK GRANULOWANY 1KG", img: "/sosy-jogurty.webp"},
    {title: "OREGANO 500G", img: "/sosy-jogurty.webp"},
    {title: "SUMAK 1KG", img: "/sosy-jogurty.webp"},
    {title: "PIETRUSZKA NAĆ 500G", img: "/sosy-jogurty.webp"},
    {title: "MIĘTA 500G", img: "/sosy-jogurty.webp"},
    {title: "KMIN RZYMSKI 500G", img: "/sosy-jogurty.webp"},
    {title: "KOLENDRA MIELONA 500G", img: "/sosy-jogurty.webp"},
    {title: "CURRY MIELONE 500G", img: "/sosy-jogurty.webp"},
    {title: "KOPER SUSZONY 500G", img: "/sosy-jogurty.webp"},
    {title: "PIEPRZ MIELONY 500G", img: "/sosy-jogurty.webp"},
    {title: "PRZYPRAWA DO KURCZAKA 500G", img: "/sosy-jogurty.webp"},
    {title: "PRZYPRAWA DO WOŁOWINY 500G", img: "/sosy-jogurty.webp"},
  ];  
 
  return (
    <ProductPage title="PRZYPRAWY" products={products} />
  );
}