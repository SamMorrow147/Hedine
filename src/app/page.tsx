'use client';

import { useRef, useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [earringsUnderlineWidth, setEarringsUnderlineWidth] = useState(0);
  const [braceletsUnderlineWidth, setBraceletsUnderlineWidth] = useState(0);
  const mobileTitleRef = useRef<HTMLHeadingElement>(null);
  const desktopTitleRef = useRef<HTMLHeadingElement>(null);
  const earringsTitleRef = useRef<HTMLHeadingElement>(null);
  const braceletsTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      const titleElement = isMobile ? mobileTitleRef.current : desktopTitleRef.current;
      
      if (titleElement) {
        // Create a temporary span to measure the actual text width
        const span = document.createElement('span');
        span.style.fontFamily = 'Beaufort Pro';
        span.style.fontWeight = '700';
        span.style.fontStyle = 'normal';
        span.style.fontSize = window.getComputedStyle(titleElement).fontSize;
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.whiteSpace = 'nowrap';
        span.textContent = 'Special Gifts For September';
        
        document.body.appendChild(span);
        const textWidth = span.offsetWidth;
        document.body.removeChild(span);
        
        setUnderlineWidth(textWidth);
      }
    };

    const updateEarringsWidth = () => {
      const titleElement = earringsTitleRef.current;
      
      if (titleElement) {
        const span = document.createElement('span');
        span.style.fontFamily = 'Beaufort Pro';
        span.style.fontWeight = '700';
        span.style.fontStyle = 'normal';
        span.style.fontSize = window.getComputedStyle(titleElement).fontSize;
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.whiteSpace = 'nowrap';
        span.textContent = 'Framed in Sparkle';
        
        document.body.appendChild(span);
        const textWidth = span.offsetWidth;
        document.body.removeChild(span);
        
        setEarringsUnderlineWidth(textWidth);
      }
    };

    const updateBraceletsWidth = () => {
      const titleElement = braceletsTitleRef.current;
      
      if (titleElement) {
        const span = document.createElement('span');
        span.style.fontFamily = 'Beaufort Pro';
        span.style.fontWeight = '700';
        span.style.fontStyle = 'normal';
        span.style.fontSize = window.getComputedStyle(titleElement).fontSize;
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.whiteSpace = 'nowrap';
        span.textContent = 'Charmed by Detail';
        
        document.body.appendChild(span);
        const textWidth = span.offsetWidth;
        document.body.removeChild(span);
        
        setBraceletsUnderlineWidth(textWidth);
      }
    };

    updateWidth();
    updateEarringsWidth();
    updateBraceletsWidth();
    window.addEventListener('resize', () => {
      updateWidth();
      updateEarringsWidth();
      updateBraceletsWidth();
    });
    
    return () => window.removeEventListener('resize', () => {
      updateWidth();
      updateEarringsWidth();
      updateBraceletsWidth();
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* First Section */}
      <section style={{ backgroundColor: '#FAF7F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 sm:pt-56 md:pt-64 lg:pt-80 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Image */}
            <div className="w-full lg:flex-1 order-2 lg:order-1 flex justify-center">
              <div className="relative">
                {/* Art Deco Frame Container */}
                <div 
                  className="relative"
                  style={{
                    border: '1px solid #E3AE67',
                    padding: '8px 0px',
                    backgroundColor: 'transparent',
                    minWidth: '250px',
                    maxWidth: '500px'
                  }}
                >
                  {/* Inner offset rectangle */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '-12px',
                      right: '-12px',
                      bottom: '8px',
                      border: '1px solid #E3AE67',
                      backgroundColor: 'transparent',
                      pointerEvents: 'none'
                    }}
                  />
                  
                  {/* Image Container */}
                  <div className="relative">
                    <img 
                      src="/Img/Storefront.png" 
                      alt="Hedine Storefront" 
                      className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left order-1 lg:order-2">
              <h1 className="mb-6 lg:mb-8" style={{ color: '#0a125a' }}>
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-tight lg:whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, fontStyle: 'normal' }}
                >
                  Serving Alexandria MN,
                </div>
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-tight"
                  style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 800, fontStyle: 'italic' }}
                >
                  for Over 100 Years
                </div>
              </h1>
              <p className="text-lg sm:text-xl text-black mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-mr-eaves">
                Hedine has been part of Alexandria&apos;s story since 1914, crafting heirlooms, fixing what matters, and always treating you like family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start">
                <button className="ornamental-button tk-mr-eaves-sans w-full sm:w-auto">
                  <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  
                  <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  
                  <span className="ornamental-button__label">Our Legacy</span>
                </button>

                <button className="ornamental-button--dark tk-mr-eaves-sans w-full sm:w-auto">
                  <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  
                  <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  
                  <span className="ornamental-button__label--dark">Visit Showroom</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom SVG with exact background color */}
      <div className="relative h-8 overflow-visible z-10 w-full">
        <svg 
          viewBox="0 0 2228 47" 
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ fill: '#FAF7F0', backgroundColor: 'white' }}
        >
          <path d="M1150,.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1221.6.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1293.2.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1364.7.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1436.3.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1507.9.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1579.5.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1651.1.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1722.7.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1794.3.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1865.9.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1937.5.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2009.1.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2080.6.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2152.2.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2223.8.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1150.6-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1222.2-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1293.8-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1365.4-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1437-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1508.6-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1580.1-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1651.7-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1723.3-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1794.9-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1866.5-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1938.1-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2009.7-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2081.3-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2152.9-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M2224.4-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M74.9.5c0,19.7-16,35.7-35.8,35.7S3.3,20.2,3.3.5"/>
          <path d="M146.4.5c0,19.7-16,35.7-35.8,35.7S74.9,20.2,74.9.5"/>
          <path d="M218,.5c0,19.7-16,35.7-35.8,35.7S146.4,20.2,146.4.5"/>
          <path d="M289.6.5c0,19.7-16,35.7-35.8,35.7S218,20.2,218,.5"/>
          <path d="M361.2.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M432.8.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M504.4.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M576,.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M647.6.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M719.2.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M790.8.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M862.3.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M933.9.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1005.5.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1077.1.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1148.7.5c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M75.5-.2c0,19.7-16,35.7-35.8,35.7S3.9,19.5,3.9-.2"/>
          <path d="M147.1-.2c0,19.7-16,35.7-35.8,35.7S75.5,19.5,75.5-.2"/>
          <path d="M218.7-.2c0,19.7-16,35.7-35.8,35.7S147.1,19.5,147.1-.2"/>
          <path d="M290.3-.2c0,19.7-16,35.7-35.8,35.7S218.7,19.5,218.7-.2"/>
          <path d="M361.8-.2c0,19.7-16,35.7-35.8,35.7S290.3,19.5,290.3-.2"/>
          <path d="M433.4-.2c0,19.7-16,35.7-35.8,35.7S361.8,19.5,361.8-.2"/>
          <path d="M505-.2c0,19.7-16,35.7-35.8,35.7S433.4,19.5,433.4-.2"/>
          <path d="M576.6-.2c0,19.7-16,35.7-35.8,35.7S505,19.5,505-.2"/>
          <path d="M648.2-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M719.8-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M791.4-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M863-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M934.6-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1006.2-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1077.8-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
          <path d="M1149.3-.2c0,19.7-16,35.7-35.8,35.7s-35.8-16-35.8-35.7"/>
        </svg>
      </div>
      
      {/* Second Section - Special Gifts For September */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 relative">
        {/* Gold Stroke Lines */}
        <div className="hidden lg:block absolute top-28 left-0 w-1/4 h-px bg-yellow-600"></div>
        <div className="hidden lg:block absolute top-28 right-0 w-1/4 h-px bg-yellow-600"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            {/* Mobile Title */}
            <div className="block lg:hidden mb-6">
              <h2 ref={mobileTitleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: '#0a125a', lineHeight: '1.2' }}>
                <div style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, fontStyle: 'normal' }}>
                  Special Gifts For September
                </div>
              </h2>
            </div>
            
            {/* Desktop Title */}
            <div className="hidden lg:block mb-0">
              <h2 ref={desktopTitleRef} className="text-4xl xl:text-5xl 2xl:text-6xl" style={{ color: '#0a125a', lineHeight: '1.2' }}>
                <div style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, fontStyle: 'normal' }}>
                  Special Gifts For September
                </div>
              </h2>
            </div>
            
            <div className="flex justify-center mb-8" style={{ marginTop: '-10px' }}>
              <img 
                src="/Img/Underline-Ornament.svg" 
                alt="Ornamental Underline" 
                className="h-6 sm:h-8"
                style={{ 
                  width: underlineWidth > 0 ? `${underlineWidth}px` : 'auto',
                  maxWidth: '100%'
                }}
              />
            </div>
          </div>
          
          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★★☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(4.5)</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-gray-900">$120</p>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★☆☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(3.5)</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                <p className="text-lg sm:text-xl font-bold text-gray-900">$240</p>
                <p className="text-sm text-gray-500 line-through">$260</p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">-20%</span>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★★☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(4.5)</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-gray-900">$180</p>
            </div>
            
            {/* Product 4 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★★☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(4.5)</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                <p className="text-lg sm:text-xl font-bold text-gray-900">$130</p>
                <p className="text-sm text-gray-500 line-through">$160</p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">-30%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Third Section - Custom Shape */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: 'white' }}>
        <div className="w-full relative">
          {/* RingSparkle Image positioned above the shape */}
          <div className="absolute top-0 left-16 lg:left-24 xl:left-32 transform -translate-y-1/2 z-10">
            <img 
              src="/Img/RingSparkle.png" 
              alt="Ring Sparkle" 
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
            />
          </div>
          
          <div className="custom-shape">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full px-16 lg:px-24 xl:px-32 py-12 lg:py-16">
              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-beaufort)', color: '#0a125a' }}>
                  Details That Endure
                </h2>
                <p className="text-lg lg:text-xl text-black mb-8 leading-relaxed font-mr-eaves">
                  For the moments that last a lifetime.<br />
                  Discover the ring that starts it all.
                </p>
                <button className="ornamental-button--dark tk-mr-eaves-sans">
                  <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <span className="ornamental-button__label--dark">Shop Engagement</span>
                </button>
              </div>
              
              {/* Right Image */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="w-64 h-48 lg:w-96 lg:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Placeholder Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fourth Section - Product Grid with Gold Stroke */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
        {/* Gold Stroke Lines */}
        <div className="absolute bottom-28 left-0 w-1/3 h-px bg-yellow-600"></div>
        <div className="absolute bottom-28 right-0 w-1/3 h-px bg-yellow-600"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★★☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(4.5)</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-gray-900">$120</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★☆☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(3.5)</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                <p className="text-lg sm:text-xl font-bold text-gray-900">$240</p>
                <p className="text-sm text-gray-500 line-through">$260</p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">-20%</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★★☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(4.5)</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-gray-900">$180</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400">
                  <span className="text-sm">★★★★☆</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(4.5)</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                <p className="text-lg sm:text-xl font-bold text-gray-900">$130</p>
                <p className="text-sm text-gray-500 line-through">$160</p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">-30%</span>
              </div>
            </div>
          </div>
          
          {/* Shop All Rings Button */}
          <div className="text-center">
            <button className="ornamental-button--dark tk-mr-eaves-sans">
              <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                <div className="ornamental-button__ornament-top-bottom"></div>
                <div className="ornamental-button__ornament-left-right"></div>
              </div>
              <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                <div className="ornamental-button__ornament-top-bottom"></div>
                <div className="ornamental-button__ornament-left-right"></div>
              </div>
              <span className="ornamental-button__label--dark">Shop All Rings</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Fifth Section - Overlapping Rectangles (refactored layout) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {/* Decorative container */}
            <div
              className="relative w-full"
              style={{
                border: '1px solid #E3AE67',
                padding: '12px 24px',
                backgroundColor: 'transparent',
                minWidth: '300px',
                maxWidth: '1200px'
              }}
            >
              {/* Inner cream rectangle */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '-16px',
                  right: '-16px',
                  bottom: '12px',
                  border: '1px solid #E3AE67',
                  backgroundColor: 'rgba(210, 190, 163, 0.4)',
                  pointerEvents: 'none'
                }}
              />

              {/* Mobile: Full width title, then images below */}
              <div className="lg:hidden">
                <div className="text-center mb-8">
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-beaufort)', color: '#0a125a', fontSize: 'clamp(1.25rem, 6vw, 2.5rem)' }}
                  >
                    The Gift That Speaks Volumes
                  </h2>
                  <p className="text-lg text-black mb-8 max-w-2xl mx-auto font-mr-eaves px-4">
                    From timeless staples to statement makers, explore pieces that celebrate every chapter.
                  </p>
                  <button className="ornamental-button--dark tk-mr-eaves-sans">
                    <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <span className="ornamental-button__label--dark">Shop Necklaces</span>
                  </button>
                </div>
                <div className="flex justify-center gap-4">
                  <img
                    src="/Img/cross-knecklace.png"
                    alt="Gold Cross Necklace"
                    className="w-auto max-h-[200px] object-contain"
                  />
                  <img
                    src="/Img/Diamond-Knecklace.png"
                    alt="Silver Diamond Halo Necklace"
                    className="w-auto max-h-[200px] object-contain"
                  />
                </div>
              </div>

              {/* Desktop: Grid layout: Left image | Content | Right image */}
              <div className="relative hidden lg:grid grid-cols-3 gap-6 items-center overflow-visible">
                {/* Left image */}
                <div className="flex justify-center">
                  <img
                    src="/Img/cross-knecklace.png"
                    alt="Gold Cross Necklace"
                    className="w-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-contain -mt-2 -mb-4"
                  />
                </div>

                {/* Center content */}
                <div className="text-center px-0 sm:px-2">
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold mb-6 px-1 sm:px-0"
                    style={{ fontFamily: 'var(--font-beaufort)', color: '#0a125a' }}
                  >
                    The Gift That Speaks Volumes
                  </h2>
                  <p className="text-lg text-black mb-8 max-w-2xl mx-auto font-mr-eaves">
                    From timeless staples to statement makers, explore pieces that celebrate every chapter.
                  </p>
                  <button className="ornamental-button--dark tk-mr-eaves-sans">
                    <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <span className="ornamental-button__label--dark">Shop Necklaces</span>
                  </button>
                </div>

                {/* Right image */}
                <div className="flex justify-center">
                  <img
                    src="/Img/Diamond-Knecklace.png"
                    alt="Silver Diamond Halo Necklace"
                    className="w-auto max-h-[500px] sm:max-h-[580px] lg:max-h-[640px] object-contain -mt-4 -mb-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sixth Section - Framed in Sparkle (Earrings) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Image */}
            <div className="w-full lg:flex-1 order-1 lg:order-1">
              <img 
                src="/Img/image 87.png" 
                alt="Diamond Earrings" 
                className="w-full h-auto max-w-xs mx-auto lg:max-w-sm"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-2">
              <h2 ref={earringsTitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl mb-2" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, color: '#0a125a' }}>
                Framed in Sparkle
              </h2>
              <div className="flex justify-center lg:justify-start mb-8">
                <img 
                  src="/Img/Underline-Ornament.svg" 
                  alt="Ornamental Underline" 
                  className="h-8 sm:h-10"
                  style={{ 
                    width: earringsUnderlineWidth > 0 ? `${earringsUnderlineWidth * 1.3}px` : 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>
              <p className="text-lg sm:text-xl text-black mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-mr-eaves">
                From delicate studs to striking drops, our earrings add just the right touch of brilliance. Designed to frame the face and elevate any occasion, each pair is crafted with intention and timeless appeal.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="ornamental-button--dark tk-mr-eaves-sans">
                  <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <span className="ornamental-button__label--dark">Shop Earrings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seventh Section - Charmed by Detail (Bracelets) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Right side - Image */}
            <div className="w-full lg:flex-1 order-1 lg:order-2">
              <img 
                src="/Img/image 90.png" 
                alt="Diamond Bracelet" 
                className="w-full h-auto max-w-sm mx-auto lg:max-w-md"
              />
            </div>
            
            {/* Left side - Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-1">
              <h2 ref={braceletsTitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl mb-2" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, color: '#0a125a' }}>
                Charmed by Detail
              </h2>
              <div className="flex justify-center lg:justify-start mb-8">
                <img 
                  src="/Img/Underline-Ornament.svg" 
                  alt="Ornamental Underline" 
                  className="h-8 sm:h-10"
                  style={{ 
                    width: braceletsUnderlineWidth > 0 ? `${braceletsUnderlineWidth * 1.3}px` : 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>
              <p className="text-lg sm:text-xl text-black mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-mr-eaves">
                Whether it&apos;s a sleek bangle or a charm-filled chain, our bracelets wrap your wrist in effortless beauty. Layer them, gift them, or wear one unforgettable piece. Each design tells its own story.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="ornamental-button--dark tk-mr-eaves-sans">
                  <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <span className="ornamental-button__label--dark">Shop Bracelets</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eighth Section - Made Custom */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#FEF9EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Framed Image */}
            <div className="w-full lg:flex-1 order-2 lg:order-1 flex justify-center">
              <div className="relative">
                {/* Art Deco Frame Container */}
                <div 
                  className="relative"
                  style={{
                    border: '1px solid #E3AE67',
                    padding: '8px 0px',
                    backgroundColor: 'transparent',
                    minWidth: '250px',
                    maxWidth: '320px'
                  }}
                >
                  {/* Inner offset rectangle */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '-12px',
                      right: '-12px',
                      bottom: '8px',
                      border: '1px solid #E3AE67',
                      backgroundColor: 'transparent',
                      pointerEvents: 'none'
                    }}
                  />
                  
                  {/* Image Container */}
                  <div className="relative">
                    <img 
                      src="/Img/Custon.png" 
                      alt="Custom Jewelry Design" 
                      className="w-full h-auto max-w-sm mx-auto lg:max-w-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl mb-2" style={{ fontFamily: 'Beaufort Pro', fontWeight: 700, color: '#0a125a' }}>
                Made Custom
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6" style={{ fontFamily: 'Beaufort Pro', fontWeight: 700, fontStyle: 'italic', color: '#0a125a' }}>
                Just for you.
              </h3>
              <p className="text-lg sm:text-xl text-black mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-mr-eaves">
                Bring your vision to life with custom jewelry from Hedine Jewelers. Our in-house goldsmiths work with you to create one-of-a-kind pieces, whether starting from scratch or incorporating your own stones. From sketch to finish, we ensure every detail reflects your style.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="ornamental-button--dark tk-mr-eaves-sans">
                  <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                    <div className="ornamental-button__ornament-top-bottom"></div>
                    <div className="ornamental-button__ornament-left-right"></div>
                  </div>
                  <span className="ornamental-button__label--dark">Custom Designs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ninth Section - We Do Repairs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl mb-2" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, color: '#0a125a' }}>
                We Do Repairs
              </h2>
              <div className="flex justify-center lg:justify-start mb-8">
                <img 
                  src="/Img/Underline-Ornament.svg" 
                  alt="Ornamental Underline" 
                  className="h-2 sm:h-3"
                />
              </div>
              <p className="text-lg sm:text-xl text-black mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-mr-eaves">
                Whether it&apos;s a sleek bangle or a charm-filled chain, our bracelets wrap your wrist in effortless beauty. Layer them, gift them, or wear one unforgettable piece. Each design tells its own story.
              </p>
            </div>
            
            {/* Right side - Repair Services */}
            <div className="w-full lg:flex-1 order-2">
              <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
                {/* Watch Repair */}
                <div className="flex items-center gap-6 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <img 
                      src="/Img/Watch-Repair.svg" 
                      alt="Watch Repair" 
                      className="w-12 h-12"
                    />
                  </div>
                  <button className="ornamental-button--dark tk-mr-eaves-sans flex-1">
                    <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <span className="ornamental-button__label--dark">Watch Repair</span>
                  </button>
                </div>
                
                {/* Jewelry Repair */}
                <div className="flex items-center gap-6 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <img 
                      src="/Img/Diamond-Repair.svg" 
                      alt="Jewelry Repair" 
                      className="w-12 h-12"
                    />
                  </div>
                  <button className="ornamental-button--dark tk-mr-eaves-sans flex-1">
                    <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                      <div className="ornamental-button__ornament-top-bottom"></div>
                      <div className="ornamental-button__ornament-left-right"></div>
                    </div>
                    <span className="ornamental-button__label--dark">Jewelry Repair</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* Footer */}
      <Footer />
    </div>
  );
}