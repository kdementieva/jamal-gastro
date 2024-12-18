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
    {title: "CHILLI GRYS 500G", img: "/przyprawy/chilli-grys.webp"},
    {title: "CHILLI KAROLINA (BARDZO OSTRA)", img: "/przyprawy/chilli-karolina.webp"},
    {title: "CZOSNEK GRANULOWANY 1KG", img: "/przyprawy/czosnek_granulowany_1kg.webp"},
    {title: "OREGANO 500G", img: "/przyprawy/oregano-500g.webp"},
    {title: "SUMAK 1KG", img: "/przyprawy/sumak-1kg.webp"},
    {title: "PIETRUSZKA NAĆ 500G", img: "/przyprawy/pietruszka-nac.webp"},
    {title: "MIĘTA 500G", img: "/przyprawy/mięta-500g.webp"},
    {title: "KMIN RZYMSKI 500G", img: "/przyprawy/kmin-rzymski-500g.webp"},
    {title: "KOLENDRA MIELONA 500G", img: "/przyprawy/kolendra-mielona-500g.webp"},
    {title: "CURRY MIELONE 500G", img: "/przyprawy/curry-mielone.webp"},
    {title: "KOPER SUSZONY 500G", img: "/przyprawy/koper-suszony.webp"},
    {title: "PIEPRZ MIELONY 500G", img: "/przyprawy/pieprz-mielony-500g.webp"},
    {title: "PRZYPRAWA DO KURCZAKA 500G", img: "/przyprawy/przyprawa-do-kurczaka-500g.webp"},
    {title: "PRZYPRAWA DO WOŁOWINY 500G", img: "/przyprawy/przyprawa-do-wolowiny-.webp"},
  ];  
 
  return (
    <ProductPage title="PRZYPRAWY" products={products} />
  );
}