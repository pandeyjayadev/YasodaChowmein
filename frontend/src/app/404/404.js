'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  MagnifyingGlassIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  HeartIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import styles from './Animated404Page.module.css';

export default function Animated404Page() {
  const noodleStrands = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: i * 0.8,
      duration: 8 + Math.random() * 4,
      startX: Math.random() * 100,
      amplitude: 20 + Math.random() * 30,
      thickness: 2 + Math.random() * 3
    })), []
  );

  const steamBubbles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
      duration: 3 + Math.random() * 2,
      x: Math.random() * 100,
      size: 4 + Math.random() * 8
    })), []
  );

  const [searchShake, setSearchShake] = useState(false);

  const handleSearchClick = () => {
    setSearchShake(true);
    setTimeout(() => setSearchShake(false), 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-10"> 
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-yellow-100/30 animate-pulse" />
      </div>

      {/* Flowing Noodle Strands */}
      <div className="absolute inset-0 overflow-hidden">
        {noodleStrands.map((strand) => (
          <div
            key={strand.id}
            className="absolute opacity-20"
            style={{
              left: `${strand.startX}%`,
              animationDelay: `${strand.delay}s`,
              animationDuration: `${strand.duration}s`
            }}
          >
            <svg 
              width="200" 
              height="400" 
              className={styles.floatVertical}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(255,165,0,0.3))' }}
            >
              <path
                d={`M 10 0 Q ${strand.amplitude} 100 10 200 Q ${strand.amplitude * 0.7} 300 10 400`}
                stroke="#fb923c"
                strokeWidth={strand.thickness}
                fill="none"
                strokeLinecap="round"
                className={styles.drawPath}
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Steam Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {steamBubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute opacity-30"
            style={{
              left: `${bubble.x}%`,
              bottom: '10%',
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`
            }}
          >
            <div 
              className="bg-white rounded-full"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                boxShadow: '0 2px 8px rgba(255,165,0,0.2)'
              }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center py-12"> {/* Added vertical padding */}
        
        {/* Animated Bowl */}
        <div className="mb-10 mt-25 relative"> {/* Added top margin */}
          <div className="relative bg-gradient-to-b from-orange-200 to-orange-300 rounded-b-full w-64 h-32 md:w-80 md:h-40 mx-auto mb-6 shadow-2xl">
            <div className="absolute inset-2 bg-gradient-to-b from-orange-100 to-orange-200 rounded-b-full" />
            
            {/* Steam Effect */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {[0, 1, 2].map(i => (
                  <div 
                    key={i} 
                    className="w-1 h-6 bg-white opacity-60 rounded-full" 
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                404
              </h1>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-25 max-w-2xl relative"> {/* Increased bottom margin */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> {/* Increased bottom margin */}
            <span className="inline-block animate-bounce">🍜</span> Noodles Tangled!
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            Our noodles got twisted and this page went missing!
          </p>
          <p className="text-gray-500">
            Our chefs are working to untangle this mess. Let&apos;s get you back to the good stuff!
          </p>
        </div>

        {/* Interactive Wok */}
        <div className="mb-12"> {/* Increased bottom margin */}
          <button 
            className={`relative inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-2xl ${
              searchShake ? styles.wiggle : ''
            }`}
            onClick={handleSearchClick}
            aria-label="Search"
          >
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-2 bg-amber-600 rounded-full" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <FireIcon className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
            </div>
            <MagnifyingGlassIcon className="h-8 w-8 md:h-12 md:w-12 text-orange-300" />
          </button>
          <p className="text-sm text-gray-500 mt-4">Stir to search!</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16"> {/* Increased bottom margin */}
          <Link 
            href="/"
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center">
              <HomeIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Back to Home
            </div>
          </Link>
          
          <Link 
            href="/products"
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-800 font-bold rounded-2xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center">
              <SparklesIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Fresh Noodles
            </div>
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-bold rounded-2xl shadow-xl transition-all duration-300"
          >
            <div className="flex items-center">
              <ArrowPathIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Go Back
            </div>
          </button>
        </div>

        {/* Chef's Tip */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-lg border border-orange-100 mb-12"> {/* Added bottom margin */}
          <div className="flex items-center justify-center mb-4">
            <HeartIcon className="h-10 w-10 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Chef&apos;s Secret!
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Our signature chowmein sauce contains
            <span className="font-semibold text-orange-600"> 12 secret spices</span> aged for 
            <span className="font-semibold text-orange-600"> 48 hours</span>!
          </p>
        </div>

        {/* Help Link */}
        <div className="mt-8 mb-12"> {/* Added top and bottom margin */}
          <Link 
            href="/contact"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}