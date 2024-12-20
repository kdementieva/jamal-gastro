import Image from "next/image";
import Link from "next/link";

export default function About() {
  const images = [
    { src: "/o-nas/o-nas-1.webp", alt: "Zdjęcie 1" },
    { src: "/o-nas/o-nas-2.webp", alt: "Zdjęcie 2" },
    { src: "/o-nas/o-nas-3.webp", alt: "Zdjęcie 3" },
    { src: "/o-nas/o-nas-4.webp", alt: "Zdjęcie 4" },
  ];

  return (
    <section
      id="o-nas"
      className="min-h-screen flex flex-col items-center px-4 md:px-16 lg:px-36 bg-gradient-to-r from-gray-100 to-gray-50 py-24"
    >

      <div className="max-w-[900px] mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8 border-l-4 border-red-700 pl-4">
          O NAS
        </h2>
        <p className="text-sm md:text-lg leading-relaxed text-gray-600 mb-6">
          Jamal Gastro to firma działająca od 2008 roku, specjalizująca się w
          hurtowej sprzedaży sprzętu gastronomicznego, dostarczaniu produktów
          fast food oraz serwisie urządzeń gastronomicznych. Dzięki
          wieloletniemu doświadczeniu i zaangażowaniu, oferujemy kompleksowe
          rozwiązania dla branży gastronomicznej.
        </p>
        <p className="text-sm md:text-lg leading-relaxed text-gray-600 mb-6">
          Nasza siedziba mieści się w Siemianowicach Śląskich, przy ul. Jana
          Matejki 12. Obsługujemy klientów z całej Polski, zapewniając
          najwyższą jakość usług, konkurencyjne ceny oraz indywidualne podejście
          do każdego zamówienia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-12 max-w-[1500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-72 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <Link
        href="#oferta"
        className="bg-red-700 text-white px-8 py-4 rounded-md shadow-md hover:bg-red-800 hover:shadow-lg transition-all duration-300"
      >
        Sprawdź naszą ofertę
      </Link>
    </section>
  );
}
