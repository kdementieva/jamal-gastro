import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Pieczywo",
  description: `Poznaj szeroką ofertę pieczywa dostępnego w Jamal Gastro. 
Oferujemy świeże i mrożone pieczywo najwyższej jakości, w tym chleby, bułki,
oraz bagietki. Nasze pieczywo jest idealne dla restauracji, 
barów, firm cateringowych oraz gastronomii. Skontaktuj się z nami, 
aby dowiedzieć się więcej o dostępnych produktach, warunkach współpracy 
i opcjach dostaw. Jesteśmy do Twojej dyspozycji i chętnie odpowiemy 
na wszystkie Twoje pytania.`
};

export default function Pieczywo() {
  const products: string[] = [
    "CHLEB TURECKI",
    "TORTILLA 20CM",
    "TORTILLA 25CM",
    "TORTILLA 30CM",
    "TORTILLA 30CM (GRUBA)",
    "TORTILLA 35CM",
    "PITA CHLEB ARABSKI/20CM",
    "PITA CHLEB ARABSKI/22CM",
    "PITA CHLEB ARABSKI/25CM",
    "PITA CHLEB ARABSKI/30CM",
    "BUŁKA KEBAB STANDARD",
    "BUŁKA KEBAB MAŁA",
    "BUŁKA BURGER 150/DUŻA PREMIUM",
    "BUŁKA HAMBURGER DUŻA",
    "BUŁKA HAMBURGER MAŁA",
  ];

  const images: string[] = [
    "/pieczywo/pieczywo-1.webp",
    "/pieczywo/pieczywo-2.webp",
    "/pieczywo/pieczywo-3.webp",
    "/pieczywo/pieczywo-4.webp"
  ]
 
  return (
    <ProductPage title="PIECZYWO" products={products} images={images} />
  );
}
