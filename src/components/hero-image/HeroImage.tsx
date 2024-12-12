import Link from "next/link";

export default function HeroImage() {
  return (
    <div 
      id="strona-glowna" 
      className="h-screen bg-cover bg-center bg-hero-image relative"
    >
      <div 
        className="absolute inset-0 bg-black/60"
      ></div>
      <div 
        className="absolute flex flex-col justify-center items-center w-full h-full z-10
          space-y-5 px-10"
      >
        <h1 
          className="inset-0 flex items-center justify-center 
          text-white text-2xl font-semibold md:text-4xl 
          animate-slideUp delay-[300ms]"
        >
          JAMAL GASTRO
        </h1>
        <p 
          className="inset-0 flex items-center justify-center 
          text-white text-center text-sm md:text-lg 
          animate-slideUp delay-[500ms]"
        >
          Hurtownia gastronomiczna, kebab-FastFood, naprawa 
          urządzeń gastronomicznych, maszyny kebab.
        </p>
        <Link 
          href="#produkty" 
          className="bg-tussock text-white text-sm px-4 py-2 rounded-md shadow-md 
          hover:bg-laser hover:shadow-lg transition-all duration-300 md:px-6 md:py-4 
          animate-slideUp"
        >
          Sprawdź nasze produkty
        </Link>
      </div>
    </div>
  );
}