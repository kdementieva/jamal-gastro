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

export default function SosyJogurty() {
  const products: IProduct[] = [
    {title: "BUTELKA SOS CURRY 900G", img: "/sosy-jogurty/butelka-sos-curry.webp"},
    {title: "BUTELKA KETCHUP PREMIUM 1KG", img: "/sosy-jogurty/butelka-ketchup-premium-1kg.webp"},
    {title: "BUTELKA MAJONEZ 900G", img: "/sosy-jogurty/butelka-majonez-900g.webp"},
    {title: "BUTELKA SOS BBQ PREMIUM 1KG", img: "/sosy-jogurty/butelka-sos-bbq-premium-1kg.webp"},
    {title: "BUTELKA SOS PIRI PIRI 1KG", img: "/sosy-jogurty/butelka-sos-piri-piri-1kg.webp"},
    {title: "BUTELKA SOS SEROWY 900G", img: "/sosy-jogurty/butelka-sos-serowy-900g.webp"},
    {title: "BUTELKA SOS TYSIĄCA WYSP 900G", img: "/sosy-jogurty/butelka-sos-tysiaca-wysp-900g.webp"},
    {title: "JOGURT NATURALNY (GĘSTY) 3,5%/10KG", img: "/sosy-jogurty/jogurt-naturalny-gesty-10kg.webp"},
    {title: "KETCHUP 10KG", img: "/sosy-jogurty/ketchup-10kg.webp"},
    {title: "KETCHUP 5KG", img: "/sosy-jogurty/ketchup-5kg.webp"},
    {title: "KETCHUP HEINZ 10KG", img: "/sosy-jogurty/ketchup-heinz-10kg.webp"},
    {title: "KETCHUP HEINZ 15KG/KARTON", img: "/sosy-jogurty/ketchup-heinz-15kg-karton.webp"},
    {title: "KETCHUP HEINZ 100 SZTUK PO 17 ML", img: "/sosy-jogurty/ketchup-heinz-100szt-17ml.webp"},
    {title: "BAZA MAJONEZOWA", img: "/sosy-jogurty/baza-majonezowa.webp"},
    {title: "MAJONEZ SAŁATKOWY 10KG", img: "/sosy-jogurty/majonez-salatkowy-10kg.webp"},
    {title: "MAJONEZ GASTRONOMICZNY 40% 10KG", img: "/sosy-jogurty/majonez-gastronomiczny.webp"},
    {title: "MAJONEZ 76% DHAKA PREMIUM", img: "/sosy-jogurty/majonez-premium-76.webp"},
    {title: "MAJONEZ HEINZ 10KG", img: "/sosy-jogurty/majonez-heinz-10kg.webp"},
    {title: "SAMBAL RUDA 10KG", img: "/sosy-jogurty/sambal-ruda-10kg.webp"},
    {title: "SAMBAL GOOD 10KG", img: "/sosy-jogurty/sambal-good-10kg.webp"},
    {title: "SAMBAL BIAŁY EKOIPT", img: "/sosy-jogurty/sambal-bialy-ekoipt.webp"},
    {title: "SOS VERSE ORIGINAL 15KG", img: "/sosy-jogurty/sos-vegse-original-15kg.webp"},
    {title: "SOS CZOSNKOWY NIEDŹWIEDZI 10L", img: "/sosy-jogurty/sos-czosnek-niedzwiedzi-10kg.webp"},
    {title: "SOS GYROS 5L", img: "/sosy-jogurty/sos-gyros-5l.webp"},
    {title: "SOS AMERYKAŃSKI 10L", img: "/sosy-jogurty/sos-amerykanski-10l.webp"},
    {title: "SOS ALGERIENNE 4,75KG", img: "/sosy-jogurty/sos-algerienne.webp"},
  ];  
 
  return (
    <ProductPage title="SOSY I JOGURTY" products={products} />
  );
}