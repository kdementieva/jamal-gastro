import ProductPage from "@/components/product-page/ProductPage";

export const metadata = {
  title: "Przyprawy",
  description: `Odkryj szeroką ofertę przypraw dostępnych 
w Jamal Gastro. Oferujemy bogaty wybór aromatycznych przypraw. W naszym asortymencie 
znajdziesz produkty niezbędne do wzbogacenia smaku potraw, 
idealne dla restauracji, firm cateringowych oraz gastronomii. 
Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych produktach, 
warunkach współpracy i opcjach dostaw. Jesteśmy do Twojej dyspozycji i 
chętnie odpowiemy na wszystkie Twoje pytania.`
};

export default function Przyprawy() {
  const products: string[] = [
    "CHILLI GRYS 500G",
    "CHILLI KAROLINA (BARDZO OSTRA)",
    "CZOSNEK GRANULOWANY 1KG",
    "OREGANO 500G",
    "SUMAK 1KG",
    "PIETRUSZKA NAĆ 500G",
    "MIĘTA 500G",
    "KMIN RZYMSKI 500G",
    "KOLENDRA MIELONA 500G",
    "CURRY MIELONE 500G",
    "KOPER SUSZONY 500G",
    "PIEPRZ MIELONY 500G",
    "PRZYPRAWA DO KURCZAKA 500G",
    "PRZYPRAWA DO WOŁOWINY 500G",
  ];

  const images: string[] = [
    "/przyprawy/przyprawy-1.webp",
    "/przyprawy/przyprawy-2.webp",
    "/przyprawy/przyprawy-3.webp",
    "/przyprawy/przyprawy-4.webp"
  ]
 
  return (
    <ProductPage title="PRZYPRAWY" products={products} images={images} />
  );
}