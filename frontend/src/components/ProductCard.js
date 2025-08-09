'use client';

import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => (
  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="relative h-70 w-full">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-orange-500 font-medium">{product.price}</span>
        <Link 
          href={product.href}
          className="text-sm font-medium text-orange-600 hover:text-orange-500"
        >
          View details →
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;