'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  MagnifyingGlassIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function Animated404Page() {
  const [floatingElements, setFloatingElements] = useState([]);
  const [searchShake, setSearchShake] = useState(false);

  // Generate floating noodle elements
  useEffect(() => {
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 0.5,
      duration: 3 + Math.random() * 2,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setFloatingElements(elements);
  }, []);

  // Trigger search animation
  const handleSearchClick = () => {
    setSearchShake(true);
    setTimeout(() => setSearchShake(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden py-25">
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-10 pointer-events-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        >
          <div className="w-8 h-8 bg-orange-300 rounded-full animate-bounce" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="relative">
            {/* Main 404 Text */}
            <h1 className="text-8xl sm:text-9xl font-bold text-gray-200 select-none">
              4
              <span className="inline-block animate-spin text-orange-300">
                🍜
              </span>
              4
            </h1>
            
            {/* Overlaid animated text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl sm:text-7xl font-bold text-orange-500 animate-pulse">
                404
              </span>
            </div>

            {/* Floating sparkles around 404 */}
            <SparklesIcon className="absolute -top-4 -left-4 h-8 w-8 text-yellow-400 animate-ping" />
            <SparklesIcon className="absolute -bottom-4 -right-4 h-6 w-6 text-orange-400 animate-ping delay-300" />
            <SparklesIcon className="absolute top-1/2 -right-8 h-5 w-5 text-yellow-300 animate-ping delay-700" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Oops! Recipe Not Found
          </h2>
          
          <div className="animate-fade-in-up delay-200">
            <p className="text-xl text-gray-600 mb-6">
              Looks like this page got mixed up with our noodles! 
            </p>
            <p className="text-gray-500">
              The page you&apos;re looking for might have been moved, deleted, or perhaps 
              it&apos;s still cooking in our factory. Don&apos;t worry - we&apos;ll help you find what you need!
            </p>
          </div>
        </div>

        {/* Animated Search Icon */}
        <div className="mb-8">
          <div 
            className={`inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${
              searchShake ? 'animate-bounce' : ''
            }`}
            onClick={handleSearchClick}
          >
            <MagnifyingGlassIcon className="h-12 w-12 text-orange-500 animate-pulse" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Click to search!</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-400">
          <Link 
            href="/"
            className="group inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <HomeIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Back to Home
          </Link>
          
          <Link 
            href="/products"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            <SparklesIcon className="h-5 w-5 mr-2 group-hover:animate-spin" />
            View Products
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <ArrowPathIcon className="h-5 w-5 mr-2 group-hover:animate-spin" />
            Go Back
          </button>
        </div>

        {/* Fun Fact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md animate-fade-in-up delay-600">
          <div className="flex items-center justify-center mb-4">
            <HeartIcon className="h-8 w-8 text-red-400 animate-pulse" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Fun Fact!
          </h3>
          <p className="text-sm text-gray-600">
            While you&apos;re here, did you know our chowmein are made fresh every morning? 
            Our secret sauce recipe has been passed down through three generations!
          </p>
        </div>

        {/* Help Section */}
        <div className="mt-12 animate-fade-in-up delay-800">
          <p className="text-gray-500 mb-4">Still can&apos;t find what you&apos;re looking for?</p>
          <Link 
            href="/contact"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
            Contact Our Support Team
          </Link>
        </div>
      </div>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-100 to-transparent">
        <svg 
          className="absolute bottom-0 w-full h-24 text-orange-200"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}