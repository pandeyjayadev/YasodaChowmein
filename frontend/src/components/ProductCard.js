'use client';

import Image from 'next/image';
import Link from 'next/link';
import { STRAPI_API_URL } from '@/lib/api';

const ProductCard = ({ product }) => (
  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="relative h-70 w-full bg-gray-100 flex items-center justify-center">
      {product.attributes.image?.data?.attributes?.url ? (
        <>
          <Image
            src={`${STRAPI_API_URL}${product.attributes.image.data.attributes.url}`}
            alt={product.attributes.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </>
      ) : (
        <div className="text-gray-500 text-center p-4">Image not available</div>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900">{product.attributes.name}</h3>
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
        {product.attributes.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-orange-500 font-medium">Rs. {product.attributes.price}</span>
        <Link 
          href={`/products/${product.attributes.slug}`}
          className="text-sm font-medium text-orange-600 hover:text-orange-500"
        >
          View details →
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;