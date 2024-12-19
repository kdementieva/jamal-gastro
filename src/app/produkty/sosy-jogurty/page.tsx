import ProductPage from "@/components/product-page/ProductPage";

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
  const products: string[] = [
    "BUTELKA SOS CURRY 900G",
    "BUTELKA KETCHUP PREMIUM 1KG",
    "BUTELKA MAJONEZ 900G",
    "BUTELKA SOS BBQ PREMIUM 1KG",
    "BUTELKA SOS PIRI PIRI 1KG",
    "BUTELKA SOS SEROWY 900G",
    "BUTELKA SOS TYSIĄCA WYSP 900G",
    "JOGURT NATURALNY (GĘSTY) 3,5%/10KG",
    "KETCHUP 10KG",
    "KETCHUP 5KG",
    "KETCHUP HEINZ 10KG",
    "KETCHUP HEINZ 15KG/KARTON",
    "KETCHUP HEINZ 100 SZTUK PO 17 ML",
    "BAZA MAJONEZOWA",
    "MAJONEZ SAŁATKOWY 10KG",
    "MAJONEZ GASTRONOMICZNY 40% 10KG",
    "MAJONEZ 76% DHAKA PREMIUM",
    "MAJONEZ HEINZ 10KG",
    "SAMBAL RUDA 10KG",
    "SAMBAL GOOD 10KG",
    "SAMBAL BIAŁY EGIPT",
    "SOS VERSE ORIGINAL 15KG",
    "SOS CZOSNKOWY NIEDŹWIEDZI 10L",
    "SOS GYROS 5L",
    "SOS AMERYKAŃSKI 10L",
    "SOS ALGERIENNE 4,75KG",
  ];

  const images: string[] = [
    "/sosy-jogurty/jogurt-naturalny-gesty-10kg.webp",
    "/sosy-jogurty/ketchup-heinz-100szt-17ml.webp",
    "/sosy-jogurty/ketchup-heinz-10kg.webp",
    "/sosy-jogurty/majonez-heinz-10kg.webp"
  ]
 
  return (
    <ProductPage title="SOSY I JOGURTY" products={products} images={images} />
  );
}