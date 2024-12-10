import Image from 'next/image';
import { IServiceProps } from '@/lib/types'

export default function Service({ title, img, description }: IServiceProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <Image 
        src={img} 
        alt={description} 
        width={100} 
        height={100} 
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold mt-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}
