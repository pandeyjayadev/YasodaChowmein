'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media */}
      {isMobile ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/images/pasta-2054656_1280.jpg)' }}
        />
      ) : (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/images/pasta-2054656_1280.jpg"
          >
            <source src="/assets/videos/11621-231571931.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn 
                        [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] 
                        drop-shadow-xl">
            Authentic Flavors
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto animate-fadeIn delay-100
                       [text-shadow:_0_2px_4px_rgba(0,0,0,0.6)]
                       backdrop-blur-[1px] px-4 py-2 rounded-lg bg-white/10">
            Experience the taste of traditional Nepalese chowmein crafted with premium ingredients and decades of culinary expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200">
            <Link 
              href="/menu" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full 
                         transition-all transform hover:scale-105 shadow-lg
                         hover:shadow-amber-500/30"
            >
              View Menu
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full 
                         backdrop-blur-md transition-all border-2 border-white/30 hover:border-white/50
                         shadow-lg hover:shadow-white/20"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-15 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            className="w-8 h-8 text-white drop-shadow-lg" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      {/* Curved bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg 
          className="w-full h-20"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#f97316" 
            opacity=".25" 
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#f97316" 
            opacity=".5" 
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#f97316" 
          />
        </svg>
      </div>
    </section>
  );
}