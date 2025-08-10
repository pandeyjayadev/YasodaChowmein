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

          
          <div className="md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-10 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <Image
                    src="/assets/images/owner.jpg"
                    alt="Narayan Bhakt Oli (Founder of yasoda chumin tatha sauce udyog)"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Narayan Bhakta Oli</h3>
                <p className="text-orange-500 font-medium mb-4">Founder</p>
                <p className="text-gray-600 leading-relaxed">
                                    &quot;यासोदा चौमिन केवल व्यापार मात्र होइन — यो हाम्रो कडा मेहनत, इमानदारी र समुदायप्रतिको माया बाट बनेको सपना हो। हामी सानो बाट सुरु गरेका थियौं, तर गुणस्तर र स्वादप्रतिको हाम्रो प्रतिबद्धता कहिल्यै परिवर्तन भएको छैन। हाम्रा उत्पादनहरूले हरेक दिन मानिसको अनुहारमा मुस्कान ल्याएको देख्दा गर्व लाग्छ।&quot;

                </p>
                <div className="mt-6 w-full border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-500">&quot;Our mission is to share authentic Nepali flavors with the world&quot;</p>
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
                   <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Our Beginning</h2>
            </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  यासोदा चौमिनको यात्रा सानो सपना बाट सुरु भयो — हाम्रो समुदायलाई स्वादिष्ट र गुणस्तरीय चौमिन र ससका उत्पादनहरू उपलब्ध गराउने लक्ष्यका साथ। चार जना समर्पित कर्मचारी र सानो कार्यस्थलबाट, हामीले प्रत्येक उत्पादन प्रेम र मेहनतका साथ बनाउन सुरु गर्यौं।

सुरुवाती दिनमा, प्रत्येक प्याकेट हातैले तयार हुन्थ्यो, प्रत्येक रेसिपी माया सहित परिक्षण हुन्थ्यो, र प्रत्येक ग्राहकको मुस्कानले हामीलाई अघि बढ्ने हौसला दिन्थ्यो। हाम्रो उद्देश्य सधैं एकै थियो: राम्रो स्वाद दिनु, गुणस्तर कायम राख्नु, र इमान्दारीका साथ ग्राहकलाई सेवा गर्नु।

सानो सुरुवातबाट हाम्रो क्षेत्रमा विश्वासिलो नाम बन्नसम्मको यात्रा अझै जारी छ — र पहिलो दिनको जस्तै स्वाद, गुणस्तर र माया कायम राख्ने हाम्रो वाचा यथावत छ।

                </p>
    
                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold">2076</span>
                  </div>
                  <p className="text-gray-600">Founded in Bardiya</p>
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