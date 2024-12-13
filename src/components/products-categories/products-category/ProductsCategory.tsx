import Image from "next/image";
import Link from "next/link";
import { ICategoriesProps } from "@/lib/types";

export default function ProductsCategory({ title, img, description, url }: ICategoriesProps) {
  return (
    <div 
      className="
      border border-gray-200 rounded-lg overflow-hidden shadow-md 
      hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer 
      max-w-xs h-90
      "
    >
      <Image 
        src={img} 
        alt={description} 
        width={400} 
        height={150} 
        className="w-full h-40 object-cover"
        priority={true}
      />
      <div className="p-3">
        <h2 className="font-bold text-lg text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mt-1 h-24">
          {description}
        </p>
        <Link 
          href={`/produkty/${url}`}
          className="
            mt-3 bg-red-700 text-white py-2 px-3 
            rounded-md block w-full text-center 
            hover:bg-red-800 transition-all duration-300"
          >
            Sprawdź
        </Link>
      </div>
    </div>
  );
}
