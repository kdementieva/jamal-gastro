import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Dodatki",
  description: `Odkryj szeroką ofertę dodatków dostępnych 
w Jamal Gastro. W naszym asortymencie znajdziesz produkty takie jak papryka, kukurydza, oliwki, koncentraty, 
i wiele innych składników niezbędnych w profesjonalnej gastronomii. Idealne dla restauracji, barów i firm cateringowych, nasze dodatki 
pomogą wzbogacić smak i prezentację Twoich potraw. Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych produktach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji i chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Dodatki() {
  const products: IProduct[] = [
    {title: "PAPRYKA PEPPERONI CAŁA 4000G/1600G", img: "/dodatki/papryka-pepperoni-cała.webp"},
    {title: "KUKURYDZA SŁODKA 2,5KG/1,5KG", img: "/dodatki/kukurydza-slodka.webp"},
    {title: "SAŁATKA SZWEDZKA 2,5KG", img: "/dodatki/salatka-szwedzka.webp"},
    {title: "OCET 10%", img: "/dodatki/ocet-10.webp"},
    {title: "CUKIER BIAŁY 1KG", img: "/dodatki/cukier-bialy1kg.webp"},
    {title: "SÓL JODOWANA 1KG", img: "/dodatki/sol-jodowana1kg.webp"},
    {title: "ZAPRAWA CYTRYNOWA 1L", img: "/dodatki/zaprawa-cytrynowa-1l.webp"},
    {title: "PAPRYKA ZEL. JALAPENO 3100ML", img: "/dodatki/papryka-jalapeno.webp"},
    {title: "OLIWKI ZIELONE KROJONE 3100ML/1560G", img: "/dodatki/oliwki-zielone-krojone.webp"},
    {title: "OLIWKI CZARNE KROJONE 3100ML/1560G", img: "/dodatki/oliwki-czarne-krojone.webp"},
    {title: "KONCENTRAT POMIDOROWY 30% 4500G", img: "/dodatki/koncentrat-pomidorowy.webp"},
    {title: "CEBULA SMAŻONA 1KG", img: "/dodatki/cebula-smazona.webp"},
  ];
 
  return (
    <ProductPage title="DODATKI" products={products} />
  );
}