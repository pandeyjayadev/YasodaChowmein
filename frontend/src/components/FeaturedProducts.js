
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { featuredProducts } from '@/lib/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="relative bg-red-50 py-16 md:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-orange-500">Specialties</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular items
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-all transform hover:scale-105"
          >
            View All Product
          </Link>
        </div>
      </div>
    </section>
  );
}
