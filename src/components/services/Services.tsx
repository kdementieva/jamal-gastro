import Link from "next/link";
import Service from "@/components/services/service/Service";
import { IServiceProps } from "@/lib/types";

export default function Services() {
  const servicesItems: IServiceProps[] = [
    { title: "Skup/naprawa/sprzedaż sprzętu", img: "/wrench.svg", description: `Skupujemy, naprawiamy i sprzedajemy sprzęt gastronomiczny. 
Gwarantujemy szybką obsługę, rzetelną wycenę i profesjonalny serwis. Postaw na sprawdzone rozwiązania dla swojej kuchni!` },
    { title: "Sprzedaż produktów gastronomicznych", img: "/utensils.svg", description: `Oferujemy szeroki 
wybór produktów gastronomicznych – od świeżych składników po gotowe wyroby. 
Zapewniamy wysoką jakość, konkurencyjne ceny i szybką dostawę. 
Zadbaj o zaopatrzenie swojej kuchni z JAMAL-GASTRO!` },
    { title: "Sprzedaż opakowań", img: "/box.svg", description: `Oferujemy trwałe i funkcjonalne opakowania 
gastronomiczne – pudełka, pojemniki, torby i folie. Idealne do pakowania posiłków na wynos oraz cateringów. 
Zapewniamy szeroki wybór i atrakcyjne ceny!` }
  ];
  return (
    <section 
      id="oferta" 
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10"
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-10 py-10">
        NASZE USŁUGI
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mx-5">
        {servicesItems.map((item: IServiceProps) => (
          <Service key={item.img}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
      <Link href="/kontakt" className="mt-10 bg-shuttle-gray text-white px-6 py-3 rounded-lg shadow-md hover:bg-abbey transition-all duration-300">
          Skontaktuj się z nami
      </Link>
    </section>
  );
}
