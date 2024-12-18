import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Mięso - Jamal Gastro",
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
  const products: IProduct[] = [
    {title: "KEBAB MIELONY (BIRTAT) PREMIUM", img: "/mieso/kebab-mielony-birtat-premium.webp"},
    {title: "KEBAB MIELONY (WOŁ-INDYCZY) \"CLASSIC\"", img: "/mieso/kebab-mielony-wol-ind.webp"},
    {title: "KEBAB SAHARA 25% BARAN (WOŁ-BARANIE)", img: "/mieso/kebab-sahara-25-baran.webp"},
    {title: "KEBAB Z KURCZAKA \"30/70\" MASALA", img: "/mieso/kebab-z-kurczaka-masala.webp"},
    {title: "KEBAB UDKO Z KURCZAKA", img: "/mieso/kebab-udko-z-kurczaka.webp"},
    {title: "KEBAB KRAFT WOŁOWY 90%", img: "/mieso/kebab-kraft-wolowy.webp"},
    {title: "KEBAB DROBIOWY \"NUR\" 50/50", img: "/mieso/kebab-drobiowy-nur-50-50.webp"},
    {title: "KEBAB NAZAR (WOŁ-INDYCZY)", img: "/mieso/kebab-nazar.webp"},
    {title: "KEBAB WOŁOWO-INDYCZY \"NUR\"", img: "/mieso/kebab-wol-ind-nur.webp"},
    {title: "KEBAB WOŁOWY STEK W PŁATACH PREMIUM", img: "/mieso/kebab-wolowy-stek-w-platkach-premium.webp"},
    {title: "KEBAB WOŁOWY 70/30", img: "/mieso/kebab-wolowy-70-30.webp"},
    {title: "KEBAB WOŁOWY 100%", img: "/mieso/kebab-wolowy100.webp"}
  ]
 
  return (
    <ProductPage title="MIĘSO" products={products} />
  );
}