'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  QuestionMarkCircleIcon,
  SparklesIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

export default function FAQUnderConstructionPage() {
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

  const commonQuestions = [
    {
      question: "What products do you manufacture?",
      preview: "Raw chowmein noodles, authentic sauces, and vinegar"
    },
    {
      question: "Do you supply to restaurants?",
      preview: "Wholesale and bulk orders for restaurants and retailers"
    },
    {
      question: "What are your shelf life and storage requirements?",
      preview: "Product freshness and proper storage guidelines"
    },
    {
      question: "Do you offer custom sauce formulations?",
      preview: "Private label and custom recipe development services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
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
            <QuestionMarkCircleIcon className="h-16 w-16 text-orange-500 animate-pulse" />
            
            {/* Floating sparkles */}
            <SparklesIcon className="h-6 w-6 text-orange-300 absolute top-4 right-6 animate-bounce delay-100" />
            <SparklesIcon className="h-4 w-4 text-yellow-400 absolute bottom-6 left-4 animate-bounce delay-500" />
            <SparklesIcon className="h-5 w-5 text-orange-300 absolute top-8 left-2 animate-bounce delay-700" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          FAQ Coming Soon
        </h1>
        
        {/* Animated Subheading */}
        <h2 className="text-xl sm:text-2xl text-gray-600 mb-8">
          We&apos;re preparing comprehensive answers{dots}
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Our FAQ section is being carefully crafted to answer all your questions about 
            our raw chowmein noodles, authentic sauces, and vinegar products. From storage 
            instructions to wholesale inquiries, we&apos;ve got you covered.
          </p>
          
          {/* Progress Indicator */}
          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
          <p className="text-sm text-gray-500">FAQ Development: 70% Complete</p>
        </div>

        {/* Preview Questions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Questions We&apos;re Answering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonQuestions.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircleIcon className="h-4 w-4 text-orange-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.question}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            What to Expect
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-orange-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Product Information</h4>
              <p className="text-sm text-gray-600">
                Detailed specs, ingredients, and usage instructions for all our products
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ExclamationCircleIcon className="h-6 w-6 text-orange-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Inquiries</h4>
              <p className="text-sm text-gray-600">
                Wholesale pricing, minimum orders, and partnership opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircleIcon className="h-6 w-6 text-orange-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality & Safety</h4>
              <p className="text-sm text-gray-600">
                Food safety standards, certifications, and quality assurance processes
              </p>
            </div>
          </div>
        </div>

        {/* Immediate Help */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Need Help Right Now?
          </h3>
          <p className="text-orange-100 mb-6">
            While our FAQ is under construction, our team is ready to assist you directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 hover:bg-gray-50 font-medium rounded-lg transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Factory Info</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg">
              <span className="font-medium text-gray-900">Fresh Daily</span>
              <p className="text-gray-600">Raw chowmein made fresh every day</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <span className="font-medium text-gray-900">Authentic Recipes</span>
              <p className="text-gray-600">Traditional sauce and vinegar formulations</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <span className="font-medium text-gray-900">Bulk Supply</span>
              <p className="text-gray-600">Wholesale orders for restaurants & retailers</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Expected Launch</h4>
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
            <ClockIcon className="h-4 w-4 mr-2" />
            FAQ Available Soon
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center pb-12">
        <p className="text-sm text-gray-500">
          Fresh answers coming your way, just like our fresh chowmein! 🍜
        </p>
      </div>
    </div>
  );
}