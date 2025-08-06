'use client';

import Image from 'next/image';
import Link from 'next/link';

// Product data (replace with your actual data source or API fetch)
const featuredProducts = [
  {
    id: 1,
    name: 'Special Chowmein',
    description: 'Our signature dish with secret spices',
    price: 'Rs. 250',
    image: '/assets/images/Chowmein.jpg',
    href: '/products/special-chowmein'
  },
  {
    id: 2,
    name: 'Veg Momo',
    description: 'Steamed dumplings with fresh vegetables',
    price: 'Rs. 180',
    image: '/assets/images/NAM04996.webp',
    href: '/products/veg-momo'
  },
  {
    id: 3,
    name: 'Chicken Sekuwa',
    description: 'Grilled chicken with Nepali spices',
    price: 'Rs. 320',
    image: '/assets/images/tAQg2w8kJr5NuDuM8Zr8XS-650-80.jpeg',
    href: '/products/chicken-sekuwa'
  }
];

// Product Card Component
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
            A taste of our most popular dishes
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
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}