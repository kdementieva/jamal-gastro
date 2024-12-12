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
    {title: "Kebab mielony (woł-indycze) 'EFES-POL'", img: "/mieso-kebab.webp"},
    {title: "Kebab mielony (woł-cielęce) 'EFES-SULTAN'", img: "/mieso-kebab.webp"},
    {title: "Kebab mielony (woł-baranie) 'EFES-KUZU'", img: "/mieso-kebab.webp"},
    {title: "Kebab mielony (wołowy) 'EFES-ELIF'", img: "/mieso-kebab.webp"},
    {title: "Kebab mielony (BIRTAT) PREMIUM", img: "/mieso-kebab.webp"},
    {title: "Kebab mielony (woł-cielęce) 'EURO-DONER'", img: "/mieso-kebab.webp"},
    {title: "Kebab sahara 25% baran (woł-baranie)", img: "/mieso-kebab.webp"},
    {title: "Kebab z kurczaka '50/50' BERLIN", img: "/mieso-kebab.webp"},
    {title: "Kebab z kurczaka '50/50' 'EFES-POL'", img: "/mieso-kebab.webp"},
    {title: "Kurczak masala", img: "/mieso-kebab.webp"},
    {title: "Classic", img: "/mieso-kebab.webp"}
  ]
 
  return (
    <ProductPage title="MIĘSO" products={products} />
  );
}