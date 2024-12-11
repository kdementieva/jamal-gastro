import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export default function Pieczywo() {
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