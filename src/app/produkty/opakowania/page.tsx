import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export default function Pieczywo() {
  const products: IProduct[] = [
    {title: "Tacka zapiekanka 500szt", img: "/opakowania.webp"},
    {title: "Talerz papierowy biały 25cm/100szt", img: "/opakowania.webp"},
    {title: "Torebka frytki - duża 200/g 200szt", img: "/opakowania.webp"},
    {title: "Torebka frytki - mała 100/g 200szt", img: "/opakowania.webp"},
    {title: "Torebka hamburger 13*13 200szt", img: "/opakowania.webp"},
    {title: "Torebka hamburger 17*17 200szt", img: "/opakowania.webp"},
    {title: "Torebka hot-dog 200szt", img: "/opakowania.webp"},
    {title: "Torebka kebab 15*15 200szt", img: "/opakowania.webp"},
    {title: "Torebka kebab 17*17 200szt", img: "/opakowania.webp"},
    {title: "Woreczek HDPE 14/27 A 1000szt", img: "/opakowania.webp"},
    {title: "Kubek pap. do kawy 250ml/100szt", img: "/opakowania.webp"},
    {title: "(Kapsalon) foremki aluminiowe 100szt", img: "/opakowania.webp"},
    {title: "Kapsalon/foremka 100szt/600ml", img: "/opakowania.webp"},
    {title: "Worki na śmieci LED 120l/25szt", img: "/opakowania.webp"},
    {title: "Worki na śmieci 60l", img: "/opakowania.webp"},
    {title: "Folia aluminiowa 800g", img: "/opakowania.webp"},
    {title: "Folia spożywcza (stretch)", img: "/opakowania.webp"},
    {title: "Serwetki gastronomiczne 500szt", img: "/opakowania.webp"},
    {title: "Serwetka rozłożona 350g", img: "/opakowania.webp"},
    {title: "Kubek styropianowy do kebaba/680ml 25szt", img: "/opakowania.webp"},
    {title: "Kubek styropianowy do kebaba/910ml 25szt", img: "/opakowania.webp"},
    {title: "Pokrywka kubek (plastik) 680ml/50szt", img: "/opakowania.webp"},
    {title: "Pokrywka kubek (styropian) 910ml/25szt", img: "/opakowania.webp"},
    {title: "Doner box mini 500ml 50szt", img: "/opakowania.webp"},
    {title: "Doner box duży 750ml 50szt", img: "/opakowania.webp"},
    {title: "Doner box mega 1000ml 25szt", img: "/opakowania.webp"},
    {title: "Widelec/nóż plastik 100szt", img: "/opakowania.webp"},
    {title: "Opakowanie styropianowe (obiadowe) 3-dzielne/2-dzielne/125szt", img: "/opakowania.webp"},
    {title: "Pojemnik 80 ml/100szt + wieczko 80mm/100szt sosy", img: "/opakowania.webp"},
    {title: "Pojemnik podwójny ham/duży 125szt", img: "/opakowania.webp"},
    {title: "Reklamówka 30*55/10kg 200szt", img: "/opakowania.webp"},
    {title: "Reklamówka 25*45/5kg 200szt", img: "/opakowania.webp"}
  ]
 
  return (
    <ProductPage title="OPAKOWANIA GASTRONOMICZNE" products={products} />
  );
}