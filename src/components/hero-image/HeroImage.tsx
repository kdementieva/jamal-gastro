export default function HeroImage() {
  return (
    <div className="h-screen bg-cover bg-center bg-hero-image relative 
      after:content-[''] after:absolute after:inset-0 after:bg-black/60"
    >
      <div className="absolute flex flex-col justify-center items-center w-full h-full z-10
        space-y-5 px-10"
      >
        <h1 className="inset-0 flex items-center justify-center 
          text-white text-2xl font-semibold md:text-4xl"
        >
          JAMAL GASTRO
        </h1>
        <p className="inset-0 flex items-center justify-center 
          text-white text-center text-sm md:text-lg">
            Hurtownia gastronomiczna, kebab-FastFood, naprawa 
            urządzeń gastronomicznych, maszyny kebab.
        </p>
        <button className="bg-laser text-white 
        text-sm px-4 py-2 rounded-md shadow-md hover:bg-tussock
        hover:shadow-lg transition-all duration-300 md:px-6 md:py-4">
          Sprawdź nasze produkty
        </button>
      </div>
    </div>
  );
}
