import ProductsCategory from "@/components/products-categories/products-category/ProductsCategory";
import { ICategoriesProps } from "@/lib/types";

export default function ProductsCategories() {
  const categoryItems: ICategoriesProps[] = [
    { title: "Pieczywo", img: "/pieczywo.webp", description: `Świeże, 
  aromatyczne pieczywo prosto z piekarni. Naturalny smak i idealna 
  chrupkość każdego dnia.`, url: 'pieczywo' },
    { title: "Mięso kebab", img: "/mieso-kebab.webp", description: `Soczyste i 
  aromatyczne mięso kebab, zawsze świeżo przygotowane. Gwarancja smaku, który 
  pokochasz.`, url: 'mieso'  },
    { title: "Sprzęt", img: "/sprzet.webp", description: `Nowoczesny sprzęt 
  gastronomiczny dla Twojej kuchni. Niezawodność i wydajność na najwyższym 
  poziomie.`, url: 'sprzet'  },
    { title: "Opakowania", img: "/opakowania.webp", description: `Funkcjonalne 
  i trwałe opakowania do gastronomii. Bezpieczne przechowywanie i wygodne 
  pakowanie.`, url: 'opakowania'  },
    { title: "Produkty mrożone", img: "/mrozonki.webp", description: `Świeżość 
  zamknięta w każdej mrożonce. Smaczne i zdrowe produkty, zawsze gotowe do 
  użycia.`, url: 'mrozonki'  },
    { title: "Tłuszcze", img: "/tluszcze.webp", description: `Najwyższej 
  jakości tłuszcze do gotowania i pieczenia. Gwarancja smaku i idealnej 
  konsystencji.`, url: 'tluszcze'  },
    { title: "Sosy i jogurty", img: "/sosy-jogurty.webp", description: `Kremowe 
  jogurty i pyszne sosy w różnych smakach. Niezbędne dodatki do każdej 
  potrawy.`, url: 'sosy-jogurty'  },
    { title: "Przyprawy", img: "/sosy-jogurty.webp", description: `
  Aromatyczne przyprawy, które wzbogacą każde danie. Intensywny smak i naturalna świeżość.`, url: 'przyprawy'  },
    { title: "Dodatki", img: "/sosy-jogurty.webp", description: `Różnorodne dodatki, które uzupełnią Twoje potrawy. Smaczne i najwyższej jakości.`, url: 'dodatki' },
    { title: "Frytki", img: "/sosy-jogurty.webp", description: `Chrupiące i smaczne frytki w różnych wariantach. Idealne jako dodatek do każdej potrawy.`, url: 'frytki' },
    { title: "Napoje", img: "/sosy-jogurty.webp", description: `Bogata oferta napojów owocowych i klasycznych. Doskonałe do posiłków i na każdą okazję.`, url: 'napoje' },
  ];
  
  return (
    <section 
      id="produkty" 
      className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-50 flex flex-col items-center justify-center py-10"
    >
      <h2 className="text-3xl font-semibold text-gray-800 my-10">
        NASZE PRODUKTY
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mx-5">
      {categoryItems.map((item: ICategoriesProps) => (
          <ProductsCategory key={item.title}
            title={item.title}
            img={item.img}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}
