'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const galleryItems = [
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
    image: "/assets/images/collection_of_sauce.jpg",
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
  {
    id: 7,
    title: "Vingear",
    category: "product",
    image: "/assets/images/IMG_20250806_144230.jpg",
    description: ""
  },
  {
    id: 8,
    title: "Chowmein Packet",
    category: "product",
    image: "/assets/images/IMG_20250806_144600.jpg",
    description: "Our products packed and ready for delivery."
  },

    {
    id: 9,
    title: "",
    category: "ambience",
    image: "/assets/images/IMG_20250807_130919.jpg",
    description: ""
  },

   {
    id: 10,
    title: "",
    category: "ambience",
    image: "/assets/images/IMG_20250807_130938.jpg",
    description: ""
  },

   {
    id: 11,
    title: "",
    category: "ambience",
    image: "/assets/images/IMG_20250807_130859.jpg",
    description: ""
  },

   {
    id: 12,
    title: "",
    category: "ambience",
    image: "/assets/images/IMG_20250807_061108.jpg",
    description: ""
  },

   {
    id: 13,
    title: "",
    category: "ambience",
    image: "/assets/images/IMG_20250807_062044.jpg",
    description: ""
  },

   {
    id: 14,
    title: "",
    category: "ambience",
    image: "/assets/images/IMG_20250807_062757.jpg",
    description: ""
  },

   {
    id: 15,
    title: "",
    category: "delivery",
    image: "/assets/images/IMG_20250807_072504.jpg",
    description: ""
  },


   {
    id: 16,
    title: "",
    category: "delivery",
    image: "/assets/images/IMG_20250807_072747.jpg",
    description: ""
  },

   {
    id: 17,
    title: "",
    category: "delivery",
    image: "/assets/images/IMG_20250807_073618.jpg",
    description: ""
  },

   {
    id: 18,
    title: "",
    category: "delivery",
    image: "/assets/images/IMG_20250807_073153.jpg",
    description: ""
  },

   {
    id: 19,
    title: "",
    category: "employ",
    image: "/assets/images/IMG_20250807_154858.jpg",
    description: ""
  },
  
   {
    id: 20,
    title: "",
    category: "employ",
    image: "/assets/images/IMG_20250807_154920.jpg",
    description: ""
  },

   {
    id: 21,
    title: "",
    category: "employ",
    image: "/assets/images/IMG_20250807_154939.jpg",
    description: ""
  },

   {
    id: 22,
    title: "",
    category: "employ",
    image: "/assets/images/IMG_20250807_165226.jpg",
    description: ""
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(null);

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const selectedImage = galleryItems.find(item => item.id === selectedId);
  const currentIndex = selectedId ? galleryItems.findIndex(item => item.id === selectedId) : -1;

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'product', name: 'Product' },
    { id: 'ambience', name: 'Ambience' },
    { id: 'delivery', name: 'Delivery' },
    { id: 'employ', name: 'Employ' },
    { id: 'other', name: 'Other' }
  ];

  const navigate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + galleryItems.length) % galleryItems.length;
    setSelectedId(galleryItems[newIndex].id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-25 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Our <span className="text-orange-500">Gallery</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the artistry behind Yasoda Chowmein through our visual journey
        </p>
      </motion.div>

      {/* Filter Controls */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl bg-white"
            onClick={() => setSelectedId(item.id)}
            layoutId={`card-${item.id}`}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.h3 
                className="text-2xl font-bold mb-2"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-gray-200"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {item.description}
              </motion.p>
              <motion.span 
                className="mt-3 inline-block px-3 py-1 bg-white text-orange-600 text-xs font-semibold rounded-full self-start"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                {item.category}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-${selectedId}`}
            >
              <button 
                className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedId(null)}
              >
                <FiX className="w-6 h-6 text-gray-800" />
              </button>
              
              <div className="aspect-[16/9] relative">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  priority
                />
                <button 
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                >
                  <FiChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button 
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); navigate(1); }}
                >
                  <FiChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full capitalize">
                      {selectedImage.category}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {currentIndex + 1} / {galleryItems.length}
                  </div>
                </div>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}