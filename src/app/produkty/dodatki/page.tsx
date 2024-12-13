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
    {title: "PAPRYKA PEPPERONI CAŁA 4000G/1600G", img: "/sosy-jogurty.webp"},
    {title: "KUKURYDZA SŁODKA 2,5KG/1,5KG", img: "/sosy-jogurty.webp"},
    {title: "SAŁATKA SZWEDZKA 2,5KG", img: "/sosy-jogurty.webp"},
    {title: "OCET 10%", img: "/sosy-jogurty.webp"},
    {title: "CUKIER BIAŁY 1KG", img: "/sosy-jogurty.webp"},
    {title: "SÓL JODOWANA 1KG", img: "/sosy-jogurty.webp"},
    {title: "ZAPRAWA CYTRYNOWA 1L", img: "/sosy-jogurty.webp"},
    {title: "PAPRYKA ŻEL. JALAPENO 3100ML", img: "/sosy-jogurty.webp"},
    {title: "OLIWKI ZIELONE KROJONE 3100ML/1560G", img: "/sosy-jogurty.webp"},
    {title: "OLIWKI CZARNE KROJONE 3100ML/1560G", img: "/sosy-jogurty.webp"},
    {title: "KONCENTRAT POMIDOROWY 30% 4500G", img: "/sosy-jogurty.webp"},
    {title: "CEBULA SMAŻONA 1KG", img: "/sosy-jogurty.webp"},
  ];
 
  return (
    <ProductPage title="DODATKI" products={products} />
  );
}