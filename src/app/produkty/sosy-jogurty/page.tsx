import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export default function Pieczywo() {
  const products: IProduct[] = [
    {title: "Jogurt typu grecki 10kg/10%", img: "/sosy-jogurty.webp"},
    {title: "Jogurt naturalny do sosów 10kg 3,5%", img: "/sosy-jogurty.webp"},
    {title: "Jogurt kremowy turecki 10kg GĘSTY", img: "/sosy-jogurty.webp"},
    {title: "Sos curry 3kg", img: "/sosy-jogurty.webp"},
    {title: "Sos hamburgerowy/curry butelka 900g", img: "/sosy-jogurty.webp"},
    {title: "Ketchup premium butelka 1kg", img: "/sosy-jogurty.webp"},
    {title: "Ketchup 5kg pikantny i łagodny", img: "/sosy-jogurty.webp"},
    {title: "Ketchup 10kg", img: "/sosy-jogurty.webp"},
    {title: "Sos gyros (arabski) 5kg", img: "/sosy-jogurty.webp"},
    {title: "Sos amerykański 10kg", img: "/sosy-jogurty.webp"},
    {title: "Baza majonezowa", img: "/sosy-jogurty.webp"},
    {title: "Majonez top chef 10kg", img: "/sosy-jogurty.webp"},
    {title: "Majonez gastronomiczny 40% 10kg", img: "/sosy-jogurty.webp"},
    {title: "Sambal do sosu ostrego (papryczki chilli czerwone)", img: "/sosy-jogurty.webp"},
    {title: "Sos czosnkowy niedzwiedzi 10l", img: "/sosy-jogurty.webp"},
    {title: "Sos turecki piri piri (ostry)", img: "/sosy-jogurty.webp"},
    {title: "Sos algerian 5kg", img: "/sosy-jogurty.webp"}
  ]
 
  return (
    <ProductPage title="SOSY I JOGURTY" products={products} />
  );
}