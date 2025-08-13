// import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Exquisite
              <br />
              <span className="text-yellow-400">Jewelry</span>
              <br />
              Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Discover our handcrafted jewelry pieces that blend timeless elegance 
              with modern sophistication. Each piece tells a unique story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Shop Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                View Collection
              </button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <div className="text-black font-bold text-lg">Ring</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white font-bold text-lg">Earrings</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-800 rounded-lg overflow-hidden aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                    <div className="text-white font-bold text-lg">Necklace</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white font-bold text-lg">Bracelet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
