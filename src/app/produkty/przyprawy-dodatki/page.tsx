import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Przyprawy i dodatki - Jamal Gastro",
  description: `Odkryj szeroką ofertę przypraw i dodatków dostępnych 
w Jamal Gastro. Oferujemy bogaty wybór aromatycznych przypraw, 
sosów oraz dodatków spożywczych. W naszym asortymencie 
znajdziesz produkty niezbędne do wzbogacenia smaku potraw, 
idealne dla restauracji, firm cateringowych oraz gastronomii. 
Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych produktach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji i 
chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Przyprawy_dodatki() {
  const products: IProduct[] = [
    {title: "Chilli grys 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Chilli karolina (bardzo ostra)", img: "/przyprawy-dodatki.webp"},
    {title: "Czosnek granulowany 1kg", img: "/przyprawy-dodatki.webp"},
    {title: "Oregano 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Sumak 1000g", img: "/przyprawy-dodatki.webp"},
    {title: "Pietruszka nać 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Mięta 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Kminek mielone 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Kolendra mielona 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Curry mielone 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Koper suszony 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Pieprz mielony 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Przyprawa do kurczaka 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Przyprawa do wołowiny 500g", img: "/przyprawy-dodatki.webp"},
    {title: "Papryka jalapeno ostra 2,89kg", img: "/przyprawy-dodatki.webp"},
    {title: "Cebula smażona 1kg", img: "/przyprawy-dodatki.webp"},
    {title: "Koncentrat pomidorowy 4500g", img: "/przyprawy-dodatki.webp"},
    {title: "Ayran 250ml", img: "/przyprawy-dodatki.webp"}

  ]
 
  return (
    <ProductPage title="PRZYPRAWY I DODATKI" products={products} />
  );
}