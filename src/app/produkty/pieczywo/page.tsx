import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export default function Pieczywo() {
  const products: IProduct[] = [
    {title: "Bułka kebab duża", img: "/pieczywo.webp"},
    {title: "Bułka ham - mała i duża", img: "/pieczywo.webp"},
    {title: "Bułka kebab mała", img: "/pieczywo.webp"},
    {title: "Bułka hot-dog", img: "/pieczywo.webp"},
    {title: "Chleb turecki 30cm", img: "/pieczywo.webp"},
    {title: "Tortilla 25cm", img: "/pieczywo.webp"},
    {title: "Tortilla 30cm", img: "/pieczywo.webp"},
    {title: "Chleb arabski/22cm", img: "/pieczywo.webp"},
    {title: "Chleb arabski/25cm", img: "/pieczywo.webp"},
    {title: "Chleb arabski/30cm", img: "/pieczywo.webp"},
    {title: "Bułka burger 24szt (czarny sezam)", img: "/pieczywo.webp"},
    {title: "Bułka burger 24szt (biały sezam)", img: "/pieczywo.webp"},
    {title: "Lawasz tortilla fresh 35cm", img: "/pieczywo.webp"},
    {title: "Lawasz tortilla fresh 37cm", img: "/pieczywo.webp"},
  ]
 
  return (
    <ProductPage title="PIECZYWO" products={products} />
  );
}
