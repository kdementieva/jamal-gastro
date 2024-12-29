import ProductPage from "@/components/product-page/ProductPage";

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
  const products: string[] = [
    "FOLIA ALUMINIOWA 800/G",
    "FOLIA SPOŻYWCZA (STRETCH)",
    "SERWETA ROZKŁADANA PREMIUM",
    "MENU BOX-125SZT",
    "OPAKOWANIE STYR 1/2 125SZTUK",
    "POJEMNIK PODWÓJNY HAM.DUŻY/125SZT",
    "POJEMNIK EPS HAMBURGER/125SZT",
    "EKO MISKA PAP. 1000ML/50SZT",
    "EKO MISKA PAP. 750ML/50SZT",
    "EKO MISKA PAP. 500ML/50SZT",
    "KUBEK PLASTIKOWY 680ML/25SZT",
    "KUBEK PLASTIKOWY 910ML/25SZT",
    "POKRYWKA KUBEK (PLASTIK) 680ML/50SZT",
    "POKRYWKA KUBEK (PLASTIK) 910ML/50SZT",
    "DONER BOX MINI 500ML/50SZT",
    "DONER BOX ŚREDNI 750ML/50SZT",
    "DONER BOX MEGA 1000ML/25SZT",
    "WIDELEC/NÓŻ PLASTIK/100SZT",
    "POJEMNIK 80ML/100SZT + WIECZKO 80MM/100SZT NA SOSY",
    "REKLAMOWKA MAŁA HDPE 25*45/100SZT",
    "REKLAMOWKA DUŻA HDPE 30*55/100SZT",
    "REKLAMOWKA NA ROLCE 15M/200SZT",
    "KAPSALON FOREMKA 100SZT/1000ML",
    "KAPSALON FOREMKA 100SZT/600ML",
    "TALERZ PAPIEROWY BIAŁY 24CM/100SZT",
    "WORKI NA ŚMIECI 60L",
    "WORKI NA ŚMIECI 120L",
    "RĘKAWICE LATEX XL/100SZT",
    "RĘKAWICE LATEX M/100SZT",
    "RĘKAWICE HDPE JEDNORAZOWE A'100M",
    "WORECZKI HDPE 10/27 1000SZT",
    "KOPERTA FRYTKA DUŻA PE.200G/200SZT",
    "KOPERTA FRYTKA MAŁA PE.100G/200SZT",
    "TOREBKA HAMBURGER 17*17 200SZT",
    "TOREBKA HAMBURGER 13*13 200SZT",
    "KOPERTA HOT-DOG 200SZT",
    "TOREBKA KEBAB 17*17 200SZT",
    "TACKA 14/25 A'500 WT",
    "TACKA ZAPIEKANKA 10*33CM/500SZT",
  ];

  const images: string[] = [
    "/opakowania/opakowania-1.webp",
    "/opakowania/opakowania-2.webp",
    "/opakowania/opakowania-3.webp",
    "/opakowania/opakowania-4.webp"
  ]
 
  return (
    <ProductPage title="OPAKOWANIA GASTRONOMICZNE" products={products} images={images} />
  );
}