import Link from "next/link";

export const metadata = {
  title: "Kontakt",
  description: `Skontaktuj się z Jamal Gastro — sprawdź 
nasze dane kontaktowe, godziny otwarcia oraz lokalizację. 
Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania 
dotyczące naszych usług oraz współpracy. 
Zapraszamy do kontaktu telefonicznego, mailowego lub 
bezpośrednich odwiedzin.`
};

export default function Kontakt() {
  return (
    <main className="min-h-[calc(100vh-104px)] flex items-center justify-center bg-gray-100">
      <div 
        className="w-full max-w-[1200px] bg-white rounded-lg shadow-2xl grid grid-cols-1 lg:grid-cols-2 
        animate-fadeIn"
      >
        <div 
          className="p-6 sm:p-8 md:p-10 lg:p-12 
          animate-slideUp delay-[200ms]"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-left 
            lg:text-left animate-slideUp delay-[300ms]"
          >
            Skontaktuj się z nami
          </h2>
          
          <div 
            className="space-y-6 text-gray-700 text-base sm:text-lg text-left lg:text-left 
            animate-slideUp delay-[400ms]"
          >
            <p className="font-semibold">JAMAL-GASTRO MUSTAFA AL-KOUBAISY</p>
            <p>ul. Jana Matejki 12, 41-100 Siemianowice Śląskie</p> 
            <p className="break-words w-72">
              <p className="font-semibold">Telefon:</p>
              <Link href="tel:+48507027767" className="text-sky-700 hover:underline">
                507 027 767
              </Link>
              <span> - Mustafa Al-Koubaisy </span>
              <Link href="tel:+48510824856" className="text-sky-700 hover:underline">
                510 824 856
              </Link>
              <span> - Biuro</span>
            </p>
            <p>
              <span className="font-semibold">Adres Email: </span>
              <Link href="mailto:mustafagastro@gmail.com" className="text-sky-700 hover:underline">
                mustafagastro@gmail.com
              </Link>
            </p>
            <p>
              <span className="font-semibold">NIP:</span> 6342719312
            </p>
            <p>
              <span className="font-semibold">REGON:</span> 362684794
            </p>
          </div>
        </div>

        <div 
          className="bg-gray-50 p-6 sm:p-8 md:p-10 lg:p-12 
          animate-slideInFromRight delay-[500ms]"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-left 
            lg:text-left animate-slideUp delay-[600ms]"
          >
            Lokalizacja
          </h2>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.1535794890944!2d19.021099476764998!3d50.30061597144185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce9f4ad37f65%3A0x4c0c758e743e15a8!2sJana%20Matejki%2012%2C%2041-100%20Siemianowice%20%C5%9Al%C4%85skie!5e0!3m2!1spl!2spl!4v1697043829405!5m2!1spl!2spl"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] border-0 
            animate-fadeIn delay-[700ms]"
            loading="lazy"
            allowFullScreen
            title="Mapa z lokalizacją firmy"
          ></iframe>
        </div>
        
      </div>
    </main>
  );
}
