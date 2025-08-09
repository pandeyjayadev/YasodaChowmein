'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  WrenchScrewdriverIcon,
  SparklesIcon,
  ClockIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function UnderConstructionPage() {
  const [dots, setDots] = useState('');

  // Animated loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Icon Animation */}
        <div className="relative mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-orange-100 rounded-full mb-8 relative">
            <WrenchScrewdriverIcon className="h-16 w-16 text-orange-500 animate-bounce" />
            
            {/* Floating sparkles */}
            <SparklesIcon className="h-6 w-6 text-orange-300 absolute top-4 right-6 animate-pulse" />
            <SparklesIcon className="h-4 w-4 text-orange-400 absolute bottom-6 left-4 animate-pulse delay-300" />
            <SparklesIcon className="h-5 w-5 text-orange-300 absolute top-8 left-2 animate-pulse delay-700" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Under Construction
        </h1>
        
        {/* Animated Subheading */}
        <h2 className="text-xl sm:text-2xl text-gray-600 mb-8">
          We&apos;re cooking up something amazing{dots}
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Our blog is currently being prepared with fresh content, delicious recipes, 
            and stories from our kitchen. Just like our signature Chowmein, 
            we&apos;re taking the time to make it perfect.
          </p>
          
          {/* Progress Indicator */}
          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
          </div>
          <p className="text-sm text-gray-500">Development Progress: 65% Complete</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <ClockIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-sm text-gray-600">
              Family recipes and cooking secrets passed down through generations
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <SparklesIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fresh Content</h3>
            <p className="text-sm text-gray-600">
              Behind-the-scenes stories and culinary tips from our experienced chefs
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <HomeIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-sm text-gray-600">
              Connect with fellow food lovers and share your own culinary adventures
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            Want to be the first to know when our blog launches? 
            Follow us on social media or visit our restaurant!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
            >
              View Our Product
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Expected Launch</h4>
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
            <ClockIcon className="h-4 w-4 mr-2" />
            Coming This Month
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center pb-12">
        <p className="text-sm text-gray-500">
          Thank you for your patience while we prepare something special for you! 🍜
        </p>
      </div>
    </div>
  );
}