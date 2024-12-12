import { IProduct } from "@/lib/types";
import Product from "@/components/product-page/product/Product";

interface IProductPageProps {
  title: string;
  products: IProduct[];
}

export default function ProductPage({ title, products }: IProductPageProps) {
  return (
    <main className="flex flex-col w-full md:h-[calc(100vh-104px)] md:overflow-y-scroll">
      <h2 className="text-4xl font-semibold text-gray-800 mb-10 pt-10 pl-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mx-5 pb-5">
        {products.map((product: IProduct) => (
          <Product key={product.title} title={product.title} img={product.img} />
        ))}
      </div>
    </main>
  );
}
