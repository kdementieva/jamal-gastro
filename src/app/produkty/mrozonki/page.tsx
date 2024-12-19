import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Mrożonki",
  description: `Poznaj szeroką ofertę mrożonek 
dostępnych w Jamal Gastro. W naszym asortymencie znajdziesz 
świeże i starannie wyselekcjonowane produkty mrożone, 
takie jak warzywa, mięsa, frytki oraz inne mrożonki. 
Sprawdź naszą ofertę i skontaktuj się z nami, aby uzyskać 
więcej informacji na temat dostępnych produktów, 
współpracy oraz opcji dostaw. Jesteśmy do Twojej dyspozycji 
i chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Mrozonki() {
  const products: string[] = [
    "FALAFEL 50 SZTUK",
    "NUGGETS Z KURCZAKA 1KG",
    "NUGGETS Z KURCZAKA 1KG PREMIUM",
    "STRIPSY Z KURCZAKA 1KG",
    "KRĄŻKI CEBULOWE 1KG",
    "ZAPIEKANKA-MAX 200G XL",
    "ZAPIEKANKA MEGA 300G XXL",
    "MIĘSO HAMBURGER (ZRAZ) DRÓB 125G",
    "AVES 125G MIĘSO HAMBURGER",
    "MIĘSO HAMBURGER (ZRAZ) DRÓB 140G",
    "MIĘSO BURGER WOŁOWY 100% 150G",
    "MIĘSO BURGER WOŁOWY 100% 200G",
    "BURGER CHICKEN (KOTLET Z KURCZAKA) 1KG",
    "BAKLAVA ORZECHOWA 1KG",
  ];

  const images: string[] = [
    "/mrozonki/baklava-orzechowa.webp",
    "/mrozonki/mieso-burger-wolowy200g.webp",
    "/mrozonki/nuggetsy.webp",
    "/mrozonki/zapiekanka-max-XL.webp"
  ]
 
  return (
    <ProductPage title="PRODUKTY MROŻONE" products={products} images={images} />
  );
}