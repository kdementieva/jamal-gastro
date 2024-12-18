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
    {title: "FOLIA ALUMINIOWA 800/G", img: "/opakowania/folia-aluminiowa-300m.webp"},
    {title: "FOLIA SPOŻYWCZA (STRETCH)", img: "/opakowania/folia-spozywcza.webp"},
    {title: "SERWETA ROZKŁADANA PREMIUM", img: "/opakowania/serweta-rozkladana-premium.webp"},
    {title: "MENU BOX-125SZT", img: "/opakowania/menu-box-125szt.webp"},
    {title: "OPAKOWANIE STYR 1/2 125SZTUK", img: "/opakowania/opakowanie-styr-1-2-125szt.webp"},
    {title: "POJEMNIK PODWÓJNY HAM.DUŻY/125SZT", img: "/opakowania/pojemnik-podwojny-ham-duzy.webp"},
    {title: "POJEMNIK EPS HAMBURGER/125SZT", img: "/opakowania/pojemnik-eps-hamburger.webp"},
    {title: "EKO MISKA PAP. 1000ML/50SZT", img: "/opakowania/eko-miska-pap-1000ml.webp"},
    {title: "EKO MISKA PAP. 750ML/50SZT", img: "/opakowania/eko-miska-pap-750ml.webp"},
    {title: "EKO MISKA PAP. 500ML/50SZT", img: "/opakowania/eko-miska-pap-500ml.webp"},
    {title: "KUBEK PLASTIKOWY 680ML/25SZT", img: "/opakowania/kubek-plastik-680ml-z-pokrywka.webp"},
    {title: "KUBEK PLASTIKOWY 910ML/25SZT", img: "/opakowania/kubek-plastikowy-910ml-z-pokrywka.webp"},
    {title: "POKRYWKA KUBEK (PLASTIK) 680ML/50SZT", img: "/opakowania/kubek-plastik-680ml-z-pokrywka.webp"},
    {title: "POKRYWKA KUBEK (PLASTIK) 910ML/50SZT", img: "/opakowania/kubek-plastikowy-910ml-z-pokrywka.webp"},
    {title: "DONER BOX MINI 500ML/50SZT", img: "/opakowania/doner-box-mini-500ml.webp"},
    {title: "DONER BOX ŚREDNI 750ML/50SZT", img: "/opakowania/doner-box-sredni-750ml.webp"},
    {title: "DONER BOX MEGA 1000ML/25SZT", img: "/opakowania/doner-box-mega-1000ml.webp"},
    {title: "WIDELEC/NÓŻ PLASTIK/100SZT", img: "/opakowania/widelec-noz-plastik-100szt.webp"},
    {title: "POJEMNIK 80ML/100SZT + WIECZKO 80MM/100SZT NA SOSY", img: "/opakowania/pojemnik-80ml.webp"},
    {title: "REKLAMOWKA MAŁA HDPE 25*45/100SZT", img: "/opakowania/reklamowka-mala-25-45.webp"},
    {title: "REKLAMOWKA DUŻA HDPE 30*55/100SZT", img: "/opakowania/reklamowka-duza-30-55.webp"},
    {title: "REKLAMOWKA NA ROLCE 15M/200SZT", img: "/opakowania/reklamowka-na-rolce.webp"},
    {title: "KAPSALON FOREMKA 100SZT/1000ML", img: "/opakowania/kapsalon-foremka-1000ml.webp"},
    {title: "KAPSALON FOREMKA 100SZT/600ML", img: "/opakowania/kapsalon-foremka-600ml.webp"},
    {title: "TALERZ PAPIEROWY BIAŁY 24CM/100SZT", img: "/opakowania/Talerz-papierowy-bialy-24cm.webp"},
    {title: "WORKI NA ŚMIECI 60L", img: "/opakowania/worki-na-smieci-60l.webp"},
    {title: "WORKI NA ŚMIECI 120L", img: "/opakowania/worki-na-smieci-120l.webp"},
    {title: "RĘKAWICE LATEX XL/100SZT", img: "/opakowania/rekawice-latex-xl.webp"},
    {title: "RĘKAWICE LATEX M/100SZT", img: "/opakowania/rekawice-latex-m.webp"},
    {title: "RĘKAWICE HDPE JEDNORAZOWE A'100M", img: "/opakowania/rekawice-hdpe-jednorazowe.webp"},
    {title: "WORECZKI HDPE 10/27 1000SZT", img: "/opakowania/woreczki-hdpe-10-27.webp"},
    {title: "KOPERTA FRYTKA DUŻA PE.200G/200SZT", img: "/opakowania/koperta-frytka-duza.webp"},
    {title: "KOPERTA FRYTKA MAŁA PE.100G/200SZT", img: "/opakowania/koperta-frytka-mala.webp"},
    {title: "TOREBKA HAMBURGER 17*17 200SZT", img: "/opakowania/torebka-hamburger-17-17.webp"},
    {title: "TOREBKA HAMBURGER 13*13 200SZT", img: "/opakowania/torebka-hamburger-13-13.webp"},
    {title: "KOPERTA HOT-DOG 200SZT", img: "/opakowania/koperta-hot-dog.webp"},
    {title: "TOREBKA KEBAB 17*17 200SZT", img: "/opakowania/torebka-kebab-17-17.webp"},
    {title: "TACKA 14/25 A'500 WT", img: "/opakowania/tacka-14-25.webp"},
    {title: "TACKA ZAPIEKANKA 10*33CM/500SZT", img: "/opakowania/tacka-zapiekanka.webp"}
  ];  
 
  return (
    <ProductPage title="OPAKOWANIA GASTRONOMICZNE" products={products} />
  );
}