import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="o-nas" className="min-h-screen flex items-center px-4 
    md:px-16 lg:px-36 bg-gradient-to-r from-gray-100 to-gray-50 py-24">
      <div className="basis-1/3 relative hidden md:flex md:justify-end">
        <Image 
          src="/about.webp" 
          alt="O nas"
          width={500} 
          height={350}
          className="rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="md:pl-16 md:basis-2/3 max-w-[900px]">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4 border-l-4 border-red-700 pl-4">
          O NAS
        </h2>
        <p className="text-sm md:text-lg leading-relaxed text-gray-600 mb-6">
          Jamal Gastro to firma działająca od 2008 roku, 
          specjalizująca się w hurtowej sprzedaży sprzętu gastronomicznego, 
          dostarczaniu produktów fast food oraz serwisie urządzeń gastronomicznych. 
          Dzięki wieloletniemu doświadczeniu i zaangażowaniu, 
          oferujemy kompleksowe rozwiązania dla branży gastronomicznej.
        </p>
        <p className="text-sm md:text-lg leading-relaxed text-gray-600 mb-6">
          Nasza siedziba mieści się w Siemianowicach Śląskich, 
          przy ul. Jana Matejki 12. Obsługujemy klientów z całej 
          Polski, zapewniając najwyższą jakość usług, konkurencyjne 
          ceny oraz indywidualne podejście do każdego zamówienia.
        </p>
        <Link href="#oferta" className="bg-red-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-800 hover:shadow-lg transition-all duration-300">
          Sprawdź naszą ofertę
        </Link>
      </div>
    </section>
  );
}
