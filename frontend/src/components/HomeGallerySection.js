'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Shared gallery items data (should be in a separate file for reuse)
const galleryItems = [
  // ... same gallery items array as before ...
];

export default function HomeGallerySection() {
  // Select 6 items for the homepage preview
  const previewItems = [
      {
    id: 1,
    title: "Our Banner",
    category: "other",
    image: "/assets/images/IMG_20250806_162744.jpg",
    description: "Showcase banner"
  },
  {
    id: 2,
    title: "Company Logo",
    category: "other",
    image: "/assets/images/logo.png",
    description: "Our logo"
  },
  {
    id: 3,
    title: "Chilly Sauce",
    category: "product",
    image: "/assets/images/IMG_20250806_134311.jpg",
    description: ""
  },
  {
    id: 4,
    title: "All sauce",
    category: "product",
    image: "/assets/images/IMG_20250806_134702.jpg",
    description: ""
  },
  {
    id: 6,
    title: "Vegetable chatani sauce",
    category: "product",
    image: "/assets/images/IMG_20250806_144139.jpg",
    description: "Our delicious sauce."
  },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            A glimpse of our products and environment
          </p>
        </motion.div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={item.title || item.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/gallery">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              View Full Gallery
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}