import ProductPage from "@/components/product-page/ProductPage";
import { IProduct } from "@/lib/types";

export const metadata = {
  title: "Opakowania",
  description: `Sprawdź szeroką ofertę opakowań dostępnych w Jamal Gastro. 
Oferujemy wysokiej jakości opakowania gastronomiczne, takie jak pudełka 
na wynos, pojemniki na żywność, kubki, torby papierowe i plastikowe, folie 
spożywcze oraz opakowania ekologiczne. Nasze produkty są idealne dla 
restauracji, barów, firm cateringowych i gastronomii. Skontaktuj się z nami, 
aby dowiedzieć się więcej o dostępnych rodzajach opakowań, warunkach 
współpracy i dostawach. Jesteśmy do Twojej dyspozycji i chętnie odpowiemy 
na wszystkie Twoje pytania.`
};

export default function Opakowania() {
  const products: IProduct[] = [
    {title: "FOLIA ALUMINIOWA 300M", img: "/opakowania.webp"},
    {title: "FOLIA STRETCHOWA (STRETCH)", img: "/opakowania.webp"},
    {title: "SERWETA KUCHENNA PREMIUM", img: "/opakowania.webp"},
    {title: "RĘKAW DO PIECA", img: "/opakowania.webp"},
    {title: "OPAKOWANIE STYRO 12 SZTUK", img: "/opakowania.webp"},
    {title: "POJEMNIK PODŁOŻNY MAŁY/KSZTAŁTNY", img: "/opakowania.webp"},
    {title: "POJEMNIK NA ZGRZEWANIE DUŻY", img: "/opakowania.webp"},
    {title: "EKO MISA MAŁA 350ML", img: "/opakowania.webp"},
    {title: "EKO MISA ŚREDNIA 500ML", img: "/opakowania.webp"},
    {title: "EKO MISA DUŻA 750ML", img: "/opakowania.webp"},
    {title: "KUBEK MAŁY 180ML", img: "/opakowania.webp"},
    {title: "KUBEK ŚREDNI 300ML", img: "/opakowania.webp"},
    {title: "KUBEK DUŻY 500ML", img: "/opakowania.webp"},
    {title: "POKRYWKA KUBEK (PLASTIK) 180ML", img: "/opakowania.webp"},
    {title: "POKRYWKA KUBEK (PLASTIK) 300ML", img: "/opakowania.webp"},
    {title: "POKRYWKA KUBEK (PLASTIK) 500ML", img: "/opakowania.webp"},
    {title: "DOMKI NA BURGER MAŁE 9X9X5CM", img: "/opakowania.webp"},
    {title: "DOMKI NA BURGER ŚREDNIE 11X11X6CM", img: "/opakowania.webp"},
    {title: "DOMKI NA BURGER DUŻE 15X15X8CM", img: "/opakowania.webp"},
    {title: "WORECZKI DO MIKROFAL", img: "/opakowania.webp"},
    {title: "KIELISZKI NA LODY 200ML", img: "/opakowania.webp"},
    {title: "KIELISZKI NA LODY 300ML", img: "/opakowania.webp"},
    {title: "KIELISZKI NA LODY 500ML", img: "/opakowania.webp"},
    {title: "TACKA PAPIEROWA DO BURGERA MAŁA", img: "/opakowania.webp"},
    {title: "TACKA PAPIEROWA DO BURGERA DUŻA", img: "/opakowania.webp"},
    {title: "MISKA NA SOSY 60ML", img: "/opakowania.webp"},
    {title: "MISKA NA SOSY 120ML", img: "/opakowania.webp"},
    {title: "KUBECZKI NA LODY 60ML", img: "/opakowania.webp"},
    {title: "KUBECZKI NA LODY 100ML", img: "/opakowania.webp"},
    {title: "KUBECZKI NA LODY 150ML", img: "/opakowania.webp"},
    {title: "KUBECZKI NA LODY 200ML", img: "/opakowania.webp"},
    {title: "KUBECZKI NA LODY 500ML", img: "/opakowania.webp"},
    {title: "TORBY NA LUNCH PAPIEROWE", img: "/opakowania.webp"},
    {title: "TORBY NA ZAKUPY PAPIEROWE", img: "/opakowania.webp"},
    {title: "TORBY NA PIZZE PAPIEROWE", img: "/opakowania.webp"},
    {title: "TACKI DO PIZZY 30CM", img: "/opakowania.webp"},
    {title: "TACKI DO PIZZY 35CM", img: "/opakowania.webp"},
    {title: "TACKI DO PIZZY 40CM", img: "/opakowania.webp"},
  ];  
 
  return (
    <ProductPage title="OPAKOWANIA GASTRONOMICZNE" products={products} />
  );
}