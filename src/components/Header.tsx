"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileShopDropdownOpen, setIsMobileShopDropdownOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for smooth logo animation
  const logoScale = useTransform(scrollY, [0, 50], [1, 0.375]); // 150/400 = 0.375
  const logoX = useTransform(scrollY, [0, 50], [0, -450]); // Move further left to reach sticky position
  const logoY = useTransform(scrollY, [0, 50], [0, -30]); // Move up slightly
  
  // Container height animation to make nav drawer shrink upward
  // Use different initial heights for mobile vs desktop, and expand when mobile menu is open
  const initialHeight = isMobile ? 120 : 200;
  const scrolledHeight = 60;
  const expandedHeight = isMobileShopDropdownOpen && isMobile ? 1000 : 600; // Much larger when dropdown is open
  
  // Dynamic height based on scroll and mobile menu state
  // const getContainerHeight = () => {
  //   if (isMenuOpen && isMobile) {
  //     return expandedHeight; // Expanded state for mobile menu
  //   }
  //   return isScrolled ? scrolledHeight : initialHeight; // Normal scroll behavior
  // };
  
  // const containerHeight = useTransform(scrollY, [0, 50], [initialHeight, scrolledHeight]);
  const navOpacity = useTransform(scrollY, [0, 30, 50], [1, 0.3, 0]); // Fade out decorative nav
  const compactNavOpacity = useTransform(scrollY, [30, 50], [0, 1]); // Fade in compact nav

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Set initial mobile state
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.shop-dropdown-container')) {
        setIsShopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile dropdown when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileShopDropdownOpen(false);
    }
  }, [isMenuOpen]);

  const shopCategories = [
    { name: 'Rings', href: '/shop/rings' },
    { name: 'Necklaces', href: '/shop/necklaces' },
    { name: 'Bracelets', href: '/shop/bracelets' },
    { name: 'Earrings', href: '/shop/earrings' },
    { name: 'Watches', href: '/shop/watches' },
    { name: 'Diamonds', href: '/shop/diamonds' },
    { name: 'Gemstones', href: '/shop/gemstones' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'pt-0 pb-2' 
        : 'pt-0 pb-6'
    }`} style={{backgroundColor: '#0a125a'}}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        animate={{ 
          height: isMenuOpen && isMobile ? expandedHeight : (isScrolled ? scrolledHeight : initialHeight)
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smoother motion
        }}
      >
        {/* Single Logo - always present, transforms position and scale */}
        <motion.div 
          className="flex justify-center"
          style={{ 
            scale: isMenuOpen && isMobile ? 1 : logoScale,
            x: isMenuOpen && isMobile ? 0 : logoX,
            y: isMenuOpen && isMobile ? 0 : logoY,
            transformOrigin: 'center center'
          }}
          initial={{ 
            y: isMenuOpen && isMobile ? -50 : 0,
            opacity: isMenuOpen && isMobile ? 0 : 1
          }}
          animate={{ 
            opacity: 1
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeOut",
            delay: isMenuOpen && isMobile ? 0.15 : 0
          }}
        >
          <Link href="/" className="block">
            <Image
              src="/Img/Full-Logo-W-subhead.png"
              alt="HEDINE - Family Owned Since 1922"
              width={400}
              height={160}
              priority
            />
          </Link>
        </motion.div>

        {/* Decorative Navigation - fades out as we scroll */}
        <motion.div 
          className="flex flex-col items-center"
          style={{ opacity: navOpacity }}
        >

              {/* Desktop Navigation - Initial State with Art Deco Container */}
              <nav className="hidden md:flex items-center relative" style={{
                border: '1px solid #E3AE67',
                padding: '12px 32px',
                backgroundColor: 'transparent'
              }}>
                {/* Inner cream rectangle */}
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '-8px',
                  right: '-8px',
                  bottom: '6px',
                  border: '1px solid #EADBC8',
                  backgroundColor: 'transparent',
                  pointerEvents: 'none'
                }}></div>
                <Link href="/about" className="px-4 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                  About Us
                </Link>
                <span className="text-white text-opacity-30 mx-2">|</span>
                <Link href="/buy-sell" className="px-4 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                  Buy & Sell
                </Link>
                <span className="text-white text-opacity-30 mx-2">|</span>
                
                {/* Shop Dropdown */}
                <div className="shop-dropdown-container relative">
                  <button
                    className="px-4 py-2 text-white transition-colors text-lg flex items-center"
                    style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.color = '#E3AE67'; 
                      e.currentTarget.style.fontWeight = '700';
                      setIsShopDropdownOpen(true);
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.color = 'white'; 
                      e.currentTarget.style.fontWeight = '500';
                    }}
                    onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                  >
                    Shop
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isShopDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onMouseEnter={() => setIsShopDropdownOpen(true)}
                        onMouseLeave={() => setIsShopDropdownOpen(false)}
                      >
                        {shopCategories.map((category, index) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition-colors text-sm"
                            style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                            onClick={() => setIsShopDropdownOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <span className="text-white text-opacity-30 mx-2">|</span>
                <Link href="/repair" className="px-4 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                  Repair
                </Link>
                <span className="text-white text-opacity-30 mx-2">|</span>
                <Link href="/custom" className="px-4 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                  Custom
                </Link>
                <span className="text-white text-opacity-30 mx-2">|</span>
                <Link href="/contact" className="px-4 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                  Contact
                </Link>
              </nav>
        </motion.div>
        
        {/* Compact Navigation - fades in as we scroll */}
        <motion.div 
          className="hidden md:flex absolute top-4 right-0 justify-end"
          style={{ opacity: compactNavOpacity }}
        >
              {/* Navigation and Icons */}
              <div className="flex items-center space-x-6">
                {/* Desktop Navigation - Scrolled State (Simple) */}
                <nav className="hidden md:flex items-center space-x-1">
                  <Link href="/about" className="px-3 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                    About Us
                  </Link>
                  <span className="text-white text-opacity-30">|</span>
                  <Link href="/buy-sell" className="px-3 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                    Buy & Sell
                  </Link>
                  <span className="text-white text-opacity-30">|</span>
                  
                  {/* Shop Dropdown for Compact Nav */}
                  <div className="shop-dropdown-container relative">
                    <button
                      className="px-3 py-2 text-white transition-colors text-lg flex items-center"
                      style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.color = '#E3AE67'; 
                        e.currentTarget.style.fontWeight = '700';
                        setIsShopDropdownOpen(true);
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.color = 'white'; 
                        e.currentTarget.style.fontWeight = '500';
                      }}
                      onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                    >
                      Shop
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu for Compact Nav */}
                    <AnimatePresence>
                      {isShopDropdownOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          onMouseEnter={() => setIsShopDropdownOpen(true)}
                          onMouseLeave={() => setIsShopDropdownOpen(false)}
                        >
                          {shopCategories.map((category, index) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition-colors text-sm"
                              style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                              onClick={() => setIsShopDropdownOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <span className="text-white text-opacity-30">|</span>
                  <Link href="/repair" className="px-3 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                    Repair
                  </Link>
                  <span className="text-white text-opacity-30">|</span>
                  <Link href="/custom" className="px-3 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                    Custom
                  </Link>
                  <span className="text-white text-opacity-30">|</span>
                  <Link href="/contact" className="px-3 py-2 text-white transition-colors text-lg" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.color = '#E3AE67'; e.currentTarget.style.fontWeight = '700'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.fontWeight = '500'; }}>
                    Contact
                  </Link>
                </nav>

                {/* Cart and User Icons */}
                <div className="flex items-center space-x-4">
                  {/* Shopping Cart */}
                  <Link href="/cart" className="relative p-2 text-white hover:text-yellow-400 transition-colors">
                    <Image 
                      src="/shopping-cart.svg" 
                      alt="Shopping Cart" 
                      width={24} 
                      height={24} 
                      className="w-6 h-6 filter brightness-0 invert hover:brightness-0 hover:invert hover:sepia hover:saturate-[3] hover:hue-rotate-[25deg] hover:brightness-[1.2] transition-all"
                    />
                    <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </Link>

                  {/* User Account */}
                  <Link href="/account" className="p-2 text-white hover:text-yellow-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </Link>
                </div>
              </div>
        </motion.div>

        {/* Mobile Navigation Content - appears when menu is open */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div 
              className="absolute bottom-16 left-0 right-0 px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.25, 
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              <nav className="flex flex-col items-center space-y-4">
                <Link 
                  href="/about" 
                  className="block text-lg text-white hover:text-yellow-400 transition-colors py-3 px-6 border-b border-yellow-400 border-opacity-30 w-full text-center" 
                  style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/buy-sell" 
                  className="block text-lg text-white hover:text-yellow-400 transition-colors py-3 px-6 border-b border-yellow-400 border-opacity-30 w-full text-center" 
                  style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buy & Sell
                </Link>
                
                {/* Mobile Shop with Dropdown */}
                <div className="w-full">
                  <button
                    className="block text-lg text-white hover:text-yellow-400 transition-colors py-3 px-6 border-b border-yellow-400 border-opacity-30 w-full text-center flex items-center justify-center"
                    style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                    onClick={() => setIsMobileShopDropdownOpen(!isMobileShopDropdownOpen)}
                  >
                    Shop
                    <svg 
                      className={`ml-2 w-4 h-4 transition-transform duration-200 ${isMobileShopDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {isMobileShopDropdownOpen && (
                      <motion.div
                        className="bg-blue-900 bg-opacity-80 rounded-lg mt-2 border border-yellow-400 border-opacity-30"
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 400 }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="py-2">
                          {shopCategories.map((category, index) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="block text-sm text-white hover:text-yellow-400 transition-colors py-3 px-6 border-b border-yellow-400 border-opacity-20 last:border-b-0"
                              style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                              onClick={() => {
                                setIsMobileShopDropdownOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link 
                  href="/repair" 
                  className="block text-lg text-white hover:text-yellow-400 transition-colors py-3 px-6 border-b border-yellow-400 border-opacity-30 w-full text-center" 
                  style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Repair
                </Link>
                <Link 
                  href="/custom" 
                  className="block text-lg text-white hover:text-yellow-400 transition-colors py-3 px-6 border-b border-yellow-400 border-opacity-30 w-full text-center" 
                  style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-lg text-white hover:text-yellow-400 transition-colors py-3 px-6 w-full text-center" 
                  style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 500 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Cart and User Icons - Fixed position, outside main container */}
      <div className={`md:hidden fixed left-4 flex items-center space-x-4 z-50 ${
        isMenuOpen ? 'top-29' : 'hidden'
      }`}>
        <Link href="/cart" className="relative p-2 text-white hover:text-yellow-400 transition-colors">
          <Image 
            src="/shopping-cart.svg" 
            alt="Shopping Cart" 
            width={24} 
            height={24} 
            className="w-6 h-6 filter brightness-0 invert hover:brightness-0 hover:invert hover:sepia hover:saturate-[3] hover:hue-rotate-[25deg] hover:brightness-[1.2] transition-all"
          />
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </Link>
        <Link href="/account" className="p-2 text-white hover:text-yellow-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
      </div>

      {/* Animated Mobile Menu Button */}
      <motion.button
        className="md:hidden absolute right-4 p-2 text-white hover:text-yellow-400 transition-colors z-50 flex flex-col justify-center items-center w-12 h-12"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle mobile menu"
        animate={{
          bottom: isMenuOpen && isMobile ? 'auto' : '4px',
          top: isMenuOpen && isMobile ? '96px' : 'auto'
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* Custom SVG Hamburger/X Icons */}
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="x-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src="/Img/X2.svg"
                alt="Close menu"
                width={33}
                height={32}
                className="w-8 h-8"
              />
            </motion.div>
          ) : (
            <motion.div
              key="hamburger-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src="/Img/Hamburger.svg"
                alt="Open menu"
                width={44}
                height={27}
                className="w-8 h-6"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>



      {/* Decorative canopy bottom edge - Single Full-Width SVG */}
      <div className="absolute -bottom-8 left-0 right-0 h-8 overflow-visible z-20">
        <img 
          src="/Img/Full-Canopy.svg"
          alt="Decorative canopy edge"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;