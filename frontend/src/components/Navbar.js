'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Scroll handler with throttling
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    // Only add scroll listener for homepage
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    } else {
      // Always show background on other pages
      setScrolled(true);
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage, handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Product' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // Determine navbar style
  const navbarStyle = isHomePage && !scrolled
    ? 'bg-transparent py-4'
    : 'bg-white/98 backdrop-blur-lg shadow-lg py-2 border-b border-gray-200/50';

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navbarStyle}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="/" 
              className="flex items-center space-x-2"
            >
              <div className='max-w-8' >
                <img src='/assets/images/logo.png'></img>
              </div>
              <span className={`text-2xl font-extrabold tracking-tight transition-all duration-300 ${
                isHomePage && !scrolled
                  ? 'text-white drop-shadow-lg hover:text-amber-200'
                  : 'text-orange-600 hover:text-orange-700'
              }`}>
                Yasoda Chowmein
              </span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  isHomePage && !scrolled
                    ? 'text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg'
                    : 'text-white bg-gradient-to-r from-orange-500 to-amber-500'
                }`}
              >
                BETA
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isHomePage && !scrolled
                      ? 'text-white hover:text-amber-200 hover:bg-white/10 drop-shadow-sm'
                      : 'text-orange-600 hover:text-orange-700 hover:bg-orange-50' 
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/order"
                className={`ml-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isHomePage && !scrolled
                    ? 'bg-white text-orange-600 shadow-lg hover:shadow-xl hover:bg-gray-50'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md hover:shadow-xl hover:from-orange-600 hover:to-amber-600'
                }`}
              >
                Order Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isHomePage && !scrolled
                  ? 'text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                  : 'text-orange-600 hover:bg-orange-50 border border-orange-200' 
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-lg shadow-xl border-t border-gray-200/50"
          >
            <motion.div 
              className="px-4 py-8 space-y-6 flex flex-col items-center"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  className="w-full text-center"
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-4 text-xl font-semibold text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                variants={itemVariants}
                className="w-full max-w-xs mt-4"
              >
                <Link
                  href="/order"
                  className="block px-6 py-4 text-xl font-semibold text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
                >
                  Order Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}