'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Secret Behind Our Signature Chowmein',
    excerpt: 'Discover the family recipe that started it all and how we prepare it with modern techniques.',
    date: 'May 15, 2023',
    readTime: '4 min read',
    category: 'Recipes',
    image: '/assets/images/pasta-2054656_1280.jpg',
    href: '/blog/signature-chowmein'
  },
  {
    id: 2,
    title: 'Sustainable Sourcing in Nepali Cuisine',
    excerpt: 'How we partner with local farmers to bring you the freshest ingredients while supporting our community.',
    date: 'April 2, 2023',
    readTime: '6 min read',
    category: 'Sustainability',
    image: '/assets/images/spaghetti-316525_1280.jpg',
    href: '/blog/sustainable-sourcing'
  },
  {
    id: 3,
    title: 'The Evolution of Nepali Street Food',
    excerpt: 'From traditional markets to modern restaurants - how street food culture is changing in Kathmandu.',
    date: 'March 10, 2023',
    readTime: '5 min read',
    category: 'Culture',
    image: '/assets/images/NAM04996.webp',
    href: '/blog/nepali-street-food'
  }
];

export default function BlogSection() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Diagonal Top Border */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden transform -translate-y-1/2">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            d="M0,0 L1200,120 L1200,0 Z" 
            fill="#f97316" 
            opacity="0.1"
          />
          <path 
            d="M0,40 L1200,120 L1200,60 Z" 
            fill="#f97316" 
            opacity="0.3"
          />
          <path 
            d="M0,80 L1200,120 L1200,100 Z" 
            fill="#f97316"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-500 bg-orange-50 rounded-full mb-4">
            From Our Kitchen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Latest <span className="text-orange-500">Stories</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Recipes, culinary insights, and behind-the-scenes from Yasoda Chowmein
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors"
                >
                  Read more
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-all transform hover:scale-105"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

