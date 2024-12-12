import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Mrożonki - Jamal Gastro",
  description: `Poznaj szeroką ofertę mrożonek 
dostępnych w Jamal Gastro. W naszym asortymencie znajdziesz 
świeże i starannie wyselekcjonowane produkty mrożone, 
takie jak warzywa, mięsa, frytki oraz inne mrożonki. 
Sprawdź naszą ofertę i skontaktuj się z nami, aby uzyskać 
więcej informacji na temat dostępnych produktów, 
współpracy oraz opcji dostaw. Jesteśmy do Twojej dyspozycji 
i chętnie odpowiemy na wszystkie Twoje pytania.`
};



export default function Mrozonki() {
  const products: IProduct[] = [
    {title: "Frytki MCCAIN 9mm", img: "/mrozonki.webp"},
    {title: "Frytki TURBO AVIKO 10mm", img: "/mrozonki.webp"},
    {title: "Falafel 50szt", img: "/mrozonki.webp"},
    {title: "Nuggets premium", img: "/mrozonki.webp"},
    {title: "Nuggets tańszy", img: "/mrozonki.webp"},
    {title: "Krążki cebulowe 1kg", img: "/mrozonki.webp"},
    {title: "Zapiekanka-max 200g XL", img: "/mrozonki.webp"},
    {title: "Zapiekanka-mega 300g XXL", img: "/mrozonki.webp"},
    {title: "Mięso hamburger (ZRAZ) drób.125/g", img: "/mrozonki.webp"},
    {title: "Mięso hamburger (ZRAZ) drób.140/g", img: "/mrozonki.webp"},
    {title: "Mięso burger wołowy 100% 150g", img: "/mrozonki.webp"},
    {title: "Mięso burger wołowy 100% 200g", img: "/mrozonki.webp"}
  ]
 
  return (
    <ProductPage title="PRODUKTY MROŻONE" products={products} />
  );
}