interface IProductProps {
  title: string;
}

export default function ProductPage({ title }: IProductProps) {
  return (
    <div 
      className="
        border border-gray-200 rounded-lg overflow-hidden shadow-md 
        hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer 
        max-w-xs p-3 h-14
      "
    >
      <p className="text-gray-600 text-sm md:text-base text-center font-semibold
        break-words flex items-center justify-center w-full h-full"
      >
        {title}
      </p>
    </div>
  );
}
