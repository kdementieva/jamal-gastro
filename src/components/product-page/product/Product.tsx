import Image from "next/image";

interface IProductProps {
  title: string;
  img: string;
}

export default function ProductPage({ title, img }: IProductProps) {
  return (
    <div 
      className="
        border border-gray-200 rounded-lg overflow-hidden shadow-md 
        hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer 
        max-w-xs
      "
    >
      <Image 
        src={img} 
        alt={title} 
        width={400} 
        height={150} 
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <p 
          className="text-gray-600 text-sm md:text-base mt-1 
            break-words"
        >
          {title}
        </p>
      </div>
    </div>
  );
}
