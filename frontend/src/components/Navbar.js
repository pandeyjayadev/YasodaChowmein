'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    // Check if we're on home page
    const checkHomePage = () => {
      const isHome = window.location.pathname === '/' || window.location.pathname === '';
      setIsHomePage(isHome);
    };

    checkHomePage();
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    // Listen for route changes (for client-side navigation)
    const handleRouteChange = () => {
      setTimeout(checkHomePage, 100); // Small delay to ensure route has changed
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Determine navbar style based on page and scroll position
  const shouldUseTransparentStyle = isHomePage && !scrolled;
  const shouldUseWhiteBackground = !isHomePage || scrolled;
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Product' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        shouldUseWhiteBackground
          ? 'bg-white/98 backdrop-blur-lg shadow-lg py-2 border-b border-gray-200/50' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="/" 
              className="flex items-center space-x-2"
              onClick={() => handleNavClick('/')}
            >
              <span className={`text-2xl font-extrabold tracking-tight transition-all duration-300 ${
                shouldUseTransparentStyle
                  ? 'text-white drop-shadow-lg hover:text-amber-200'
                  : 'text-orange-600 hover:text-orange-700'
              }`}>
                Yasoda Chowmein
              </span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`px-2 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  shouldUseTransparentStyle
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
                    shouldUseTransparentStyle
                      ? 'text-white hover:text-amber-200 hover:bg-white/10 drop-shadow-sm'
                      : 'text-orange-600 hover:text-orange-700 hover:bg-orange-50' 
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                  {activeLink === item.href && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full ${
                        shouldUseTransparentStyle ? 'bg-white shadow-sm' : 'bg-orange-500'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/order"
                className={`ml-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  shouldUseTransparentStyle
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
                shouldUseTransparentStyle
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
                    onClick={() => handleNavClick(item.href)}
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
                  onClick={() => handleNavClick('/order')}
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