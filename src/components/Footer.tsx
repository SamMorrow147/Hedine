import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Main footer content */}
      <div className="bg-[#1e2951] text-white relative">
        {/* White scalloped border overlaying the top of the dark background */}
        <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden z-10">
          <img 
            src="/Img/Full-Canopy.svg"
            alt="Decorative canopy edge"
            className="w-full h-full object-cover filter brightness-0 invert"
          />
        </div>
        
        {/* Left side thin white stroke */}
        <div className="absolute top-0 left-12 w-0.5 h-full bg-white opacity-80 z-20"></div>
        
        {/* Right side thin white stroke */}
        <div className="absolute top-0 right-12 w-0.5 h-full bg-white opacity-80 z-20"></div>
        <div className="container mx-auto px-33 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
            {/* Left Section - A Tradition of Detail */}
            <div className="space-y-6">
              <h2 className="text-4xl" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, color: 'white' }}>A Tradition of Detail</h2>
              <p className="text-lg leading-relaxed text-gray-200 font-mr-eaves">
                Every piece begins with a story and ends with craftsmanship that
                lasts generations. From custom designs to expert repairs, our in-
                house goldsmiths bring care, precision, and heritage to
                everything we make.
              </p>
              <button className="ornamental-button tk-mr-eaves-sans">
                <div className="ornamental-button__ornament ornamental-button__ornament--vertical">
                  <div className="ornamental-button__ornament-top-bottom"></div>
                  <div className="ornamental-button__ornament-left-right"></div>
                </div>
                <div className="ornamental-button__ornament ornamental-button__ornament--horizontal">
                  <div className="ornamental-button__ornament-top-bottom"></div>
                  <div className="ornamental-button__ornament-left-right"></div>
                </div>
                <span className="ornamental-button__label--white">Explore Our Collections</span>
              </button>
            </div>

            {/* Center Section - Hedine Links */}
            <div className="lg:text-left">
              <h3 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, color: 'white' }}>Hedine</h3>
              <ul className="space-y-3 text-lg font-mr-eaves">
                <li>
                  <Link href="/about" className="hover:text-gray-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/buy-sell" className="hover:text-gray-300 transition-colors">
                    Buy & Sell
                  </Link>
                </li>
                <li>
                  <Link href="/repair" className="hover:text-gray-300 transition-colors">
                    Repair
                  </Link>
                </li>
                <li>
                  <Link href="/custom" className="hover:text-gray-300 transition-colors">
                    Custom Designs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section - Jewelry Links */}
            <div className="lg:text-left">
              <h3 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-beaufort)', fontWeight: 700, color: 'white' }}>Jewelry</h3>
              <ul className="space-y-3 text-lg font-mr-eaves">
                <li>
                  <Link href="/diamonds" className="hover:text-gray-300 transition-colors">
                    Diamonds
                  </Link>
                </li>
                <li>
                  <Link href="/precious-stones" className="hover:text-gray-300 transition-colors">
                    Precious Stones
                  </Link>
                </li>
                <li>
                  <Link href="/rings" className="hover:text-gray-300 transition-colors">
                    Rings
                  </Link>
                </li>
                <li>
                  <Link href="/necklaces" className="hover:text-gray-300 transition-colors">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link href="/bracelets" className="hover:text-gray-300 transition-colors">
                    Bracelets
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>



        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 relative">
          {/* White stroke across the top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white opacity-80"></div>
          
          {/* Star SVG at left intersection */}
          <div className="absolute top-0 left-12 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <img 
              src="/Img/Star.svg" 
              alt="Decorative star" 
              className="w-12 h-12"
            />
          </div>
          
          {/* Star SVG at right intersection */}
          <div className="absolute top-0 right-12 transform translate-x-1/2 -translate-y-1/2 z-30">
            <img 
              src="/Img/Star.svg" 
              alt="Decorative star" 
              className="w-12 h-12"
            />
          </div>
          
          <div className="container mx-auto px-33 py-6 flex flex-col md:flex-row justify-between items-center">
            {/* Left - Powered by */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-lg">Powered By:</span>
              <img 
                src="/new-footer-4.png" 
                alt="Logo 1" 
                className="h-8 w-auto"
              />
              <span className="text-lg">&</span>
              <img 
                src="/new-footer-2.png" 
                alt="Logo 2" 
                className="h-8 w-auto"
              />
            </div>

            {/* Center - Links */}
            <div className="flex items-center space-x-4 text-sm mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-400">·</span>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
            </div>

            {/* Right - Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-[#1e2951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-[#1e2951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-[#1e2951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
