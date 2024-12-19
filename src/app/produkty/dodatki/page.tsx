import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Dodatki",
  description: `Odkryj szeroką ofertę dodatków dostępnych 
w Jamal Gastro. W naszym asortymencie znajdziesz produkty takie jak papryka, kukurydza, oliwki, koncentraty, 
i wiele innych składników niezbędnych w profesjonalnej gastronomii. Idealne dla restauracji, barów i firm cateringowych, nasze dodatki 
pomogą wzbogacić smak i prezentację Twoich potraw. Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych produktach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji i chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Dodatki() {
  const products: string[] = [
    "PAPRYKA PEPPERONI CAŁA 4000G/1600G",
    "KUKURYDZA SŁODKA 2,5KG/1,5KG",
    "SAŁATKA SZWEDZKA 2,5KG",
    "OCET 10%",
    "CUKIER BIAŁY 1KG",
    "SÓL JODOWANA 1KG",
    "ZAPRAWA CYTRYNOWA 1L",
    "PAPRYKA ZEL. JALAPENO 3100ML",
    "OLIWKI ZIELONE KROJONE 3100ML/1560G",
    "OLIWKI CZARNE KROJONE 3100ML/1560G",
    "KONCENTRAT POMIDOROWY 30% 4500G",
    "CEBULA SMAŻONA 1KG",
  ];

  const images: string[] = [
    "/dodatki/cebula_prazona.webp",
    "/dodatki/kukurydza-slodka.webp",
    "/dodatki/oliwki-zielone-krojone.webp",
    "/dodatki/papryka-jalapeno.webp"
  ]
 
  return (
    <ProductPage title="DODATKI" products={products} images={images} />
  );
}