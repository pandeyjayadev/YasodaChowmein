'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming Bardiya&apos;s favorite chowmein destination
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-semibold text-orange-500 mb-12 text-center"
          >
            Meet The <span className="text-gray-900">Visionaries</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <Image
                    src="/assets/images/owner1.jpg"
                    alt="Owner 1 Name"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Owner 1 Name</h3>
                <p className="text-orange-500 font-medium mb-4">Co-Founder & CEO</p>
                <p className="text-gray-600 leading-relaxed">
                  Culinary visionary with 15+ years experience, blending traditional Nepali flavors with modern techniques to create our signature taste.
                </p>
                <div className="mt-6 w-full border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-500">&quot;Our mission is to share authentic Nepali flavors with the world&quot;</p>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <Image
                    src="/assets/images/owner2.jpg"
                    alt="Owner 2 Name"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Owner 2 Name</h3>
                <p className="text-orange-500 font-medium mb-4">Co-Founder & Head Chef</p>
                <p className="text-gray-600 leading-relaxed">
                  Master chef trained in both Nepali and Asian cuisines, dedicated to perfecting every recipe that comes out of our kitchen.
                </p>
                <div className="mt-6 w-full border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-500">&quot;Great food starts with passion and the finest ingredients&quot;</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <motion.div 
                variants={fadeIn}
                className="lg:w-1/2 p-10 flex flex-col justify-center"
              >
                <h2 className="text-3xl font-semibold text-orange-500 mb-6">Our Humble Beginnings</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  What started as a small family recipe passed down through generations has blossomed into Kathmandu&apos;s most beloved chowmein destination. Founded in 2010, Yasoda Chowmein began as a single kitchen with a big dream.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through years of perfecting our craft, we&apos;ve stayed true to our roots while innovating to meet modern tastes. Every dish carries the love and tradition of Nepali home cooking.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold">2010</span>
                  </div>
                  <p className="text-gray-600">Founded in Kathmandu</p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                className="lg:w-1/2 h-96 lg:h-auto relative"
              >
                <Image
                  src="/assets/images/spaghetti-316525_1280.jpg"
                  alt="Our kitchen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white rounded-2xl overflow-hidden shadow-lg p-10"
          >
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To revolutionize Nepali street food by elevating traditional flavors with premium ingredients while maintaining authentic tastes that remind you of home.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">
                  Source 90% of ingredients from local Nepali farmers
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">
                  Maintain zero-compromise quality standards
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">
                  Create memorable dining experiences
                </p>
              </div>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white rounded-2xl overflow-hidden shadow-lg p-10"
          >
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Core Values</h2>
            </div>
            <div className="space-y-6">
              {[
                { title: "Authenticity", desc: "Preserving traditional Nepali flavors while innovating respectfully" },
                { title: "Community", desc: "Supporting local farmers and businesses in our supply chain" },
                { title: "Sustainability", desc: "Eco-friendly packaging and waste reduction initiatives" },
                { title: "Excellence", desc: "Relentless pursuit of culinary perfection in every dish" },
                { title: "Hospitality", desc: "Treating every customer like family" }
              ].map((value, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 h-10 w-10 bg-orange-50 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-500 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}