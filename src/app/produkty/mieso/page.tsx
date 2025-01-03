import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Mięso",
  description: `Odkryj bogatą ofertę świeżych i 
najwyższej jakości mięs dostępnych w Jamal Gastro. 
W naszym asortymencie znajdziesz starannie wyselekcjonowane 
produkty mięsne, idealne do przygotowania pysznych potraw. 
Sprawdź naszą ofertę i skontaktuj się z nami, aby uzyskać więcej 
informacji na temat dostępnych rodzajów mięsa, możliwości 
współpracy oraz dostaw. Jesteśmy do Twojej dyspozycji i chętnie 
odpowiemy na wszystkie Twoje pytania.`
};

export default function Mieso() {
  const products: string[] = [
    "KEBAB MIELONY (BIRTAT) PREMIUM",
    "KEBAB MIELONY (WOŁ-INDYCZY) \"CLASSIC\"",
    "KEBAB SAHARA 25% BARAN (WOŁ-BARANIE)",
    "KEBAB Z KURCZAKA \"30/70\" MASALA",
    "KEBAB UDKO Z KURCZAKA",
    "KEBAB KRAFT WOŁOWY 90%",
    "KEBAB DROBIOWY \"NUR\" 50/50",
    "KEBAB NAZAR (WOŁ-INDYCZY)",
    "KEBAB WOŁOWO-INDYCZY \"NUR\"",
    "KEBAB WOŁOWY STEK W PŁATACH PREMIUM",
    "KEBAB WOŁOWY 70/30",
    "KEBAB WOŁOWY 100%",
  ]

  const images: string[] = [
    "/mieso/mieso-1.webp",
    "/mieso/mieso-2.webp",
    "/mieso/mieso-3.webp",
    "/mieso/mieso-4.webp"
  ]
 
  return (
    <ProductPage title="MIĘSO" products={products} images={images} />
  );
}