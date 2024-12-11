import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export default function Pieczywo() {
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