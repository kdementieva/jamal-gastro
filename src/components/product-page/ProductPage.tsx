import Product from "@/components/product-page/product/Product";
import Image from "next/image";

interface IProductPageProps {
  title: string;
  products: string[];
  images: string[];
}

export default function ProductPage({ title, products, images }: IProductPageProps) {
  return (
    <main className="flex flex-col w-full md:h-[calc(100vh-104px)] md:overflow-y-scroll">
      <h2 className="text-4xl font-semibold text-gray-800 mb-10 pt-10 pl-10">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mx-5 pb-5">
        {images.map((item: string) => (
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md 
            hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer 
            max-w-xs" key={item}>
            <Image
              src={item} 
              alt={item} 
              width={350} 
              height={350}
              className="w-full h-56 object-cover"
              priority={true}
            />
          </div>

        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mx-5 pb-5">
        {products.map((product: string) => (
          <Product key={product} title={product} />
        ))}
      </div>
    </main>
  );
}
