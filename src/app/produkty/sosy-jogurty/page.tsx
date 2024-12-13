import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Sosy i jogurty",
  description: `Poznaj bogatą ofertę sosów i jogurtów dostępnych w 
Jamal Gastro. Oferujemy szeroki wybór sosów, w tym sosy klasyczne, 
egzotyczne, pikantne, majonezy, ketchupy i dipy. W naszej ofercie 
znajdziesz także różnorodne jogurty naturalne, greckie oraz produkty na 
bazie jogurtu, które doskonale wzbogacą smak Twoich potraw. Nasze produkty 
są idealne dla restauracji, firm cateringowych oraz gastronomii. 
Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych produktach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji 
i chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Sosy_jogurty() {
  const products: IProduct[] = [
    {title: "BUTELKA SOS CURRY 900G", img: "/sosy-jogurty.webp"},
    {title: "BUTELKA KETCHUP PREMIUM 1KG", img: "/sosy-jogurty.webp"},
    {title: "BUTELKA MAJONEZ 900G", img: "/sosy-jogurty.webp"},
    {title: "BUTELKA SOS BBQ PREMIUM 1KG", img: "/sosy-jogurty.webp"},
    {title: "BUTELKA SOS PIRI PIRI 1KG", img: "/sosy-jogurty.webp"},
    {title: "BUTELKA SOS SEROWY 900G", img: "/sosy-jogurty.webp"},
    {title: "BUTELKA SOS TYSIĄCA WYSP 900G", img: "/sosy-jogurty.webp"},
    {title: "JOGURT NATURALNY (GĘSTY) 3,5%/10KG", img: "/sosy-jogurty.webp"},
    {title: "KETCHUP 10KG", img: "/sosy-jogurty.webp"},
    {title: "KETCHUP 5KG", img: "/sosy-jogurty.webp"},
    {title: "KETCHUP HEINZ 10KG", img: "/sosy-jogurty.webp"},
    {title: "KETCHUP HEINZ 15KG/KARTON", img: "/sosy-jogurty.webp"},
    {title: "KETCHUP HEINZ 100 SZTUK PO 17 ML", img: "/sosy-jogurty.webp"},
    {title: "BAZA MAJONEZOWA", img: "/sosy-jogurty.webp"},
    {title: "MAJONEZ SAŁATKOWY 10KG", img: "/sosy-jogurty.webp"},
    {title: "MAJONEZ GASTRONOMICZNY 40% 10KG", img: "/sosy-jogurty.webp"},
    {title: "MAJONEZ 76% DHAKA PREMIUM", img: "/sosy-jogurty.webp"},
    {title: "MAJONEZ HEINZ 10KG", img: "/sosy-jogurty.webp"},
    {title: "SAMBAL RUDA 10KG", img: "/sosy-jogurty.webp"},
    {title: "SAMBAL GOOD 10KG", img: "/sosy-jogurty.webp"},
    {title: "SAMBAL BIAŁY EKOIPT", img: "/sosy-jogurty.webp"},
    {title: "SOS VERSE ORIGINAL 15KG", img: "/sosy-jogurty.webp"},
    {title: "SOS CZOSNKOWY NIEDŹWIEDZI 10L", img: "/sosy-jogurty.webp"},
    {title: "SOS GYROS 5L", img: "/sosy-jogurty.webp"},
    {title: "SOS AMERYKAŃSKI 10L", img: "/sosy-jogurty.webp"},
    {title: "SOS ALGERIENNE 4,75KG", img: "/sosy-jogurty.webp"},
  ];  
 
  return (
    <ProductPage title="SOSY I JOGURTY" products={products} />
  );
}