import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export default function Pieczywo() {
  const products: IProduct[] = [
    {title: "Frytura GOLDPALM/JAGR 10kg", img: "/tluszcze.webp"},
    {title: "Frytura płynna PAN MAX 5kg", img: "/tluszcze.webp"},
    {title: "Olej 5l", img: "/tluszcze.webp"}
  ]
 
  return (
    <ProductPage title="TŁUSZCZE" products={products} />
  );
}