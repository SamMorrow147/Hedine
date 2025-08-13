import ProductCard from "./ProductCard";

const ProductGrid = () => {
  // Jewelry product data inspired by the Figma design
  const products = [
    {
      id: 1,
      name: "DIAMOND SOLITAIRE RING",
      price: 1200,
      rating: 4.9,
      image: "/placeholder-product.jpg",
      isOnSale: false,
    },
    {
      id: 2,
      name: "GOLD HOOP EARRINGS",
      price: 240,
      originalPrice: 300,
      discount: 20,
      rating: 4.5,
      image: "/placeholder-product.jpg",
      isOnSale: true,
    },
    {
      id: 3,
      name: "PEARL NECKLACE CLASSIC",
      price: 480,
      rating: 4.7,
      image: "/placeholder-product.jpg",
      isOnSale: false,
    },
    {
      id: 4,
      name: "SILVER TENNIS BRACELET",
      price: 320,
      originalPrice: 450,
      discount: 30,
      rating: 4.6,
      image: "/placeholder-product.jpg",
      isOnSale: true,
    },
    {
      id: 5,
      name: "EMERALD PENDANT",
      price: 650,
      rating: 4.8,
      image: "/placeholder-product.jpg",
      isOnSale: false,
    },
    {
      id: 6,
      name: "ROSE GOLD STUDS",
      price: 180,
      originalPrice: 220,
      discount: 18,
      rating: 4.4,
      image: "/placeholder-product.jpg",
      isOnSale: true,
    },
    {
      id: 7,
      name: "SAPPHIRE ENGAGEMENT RING",
      price: 2200,
      rating: 5.0,
      image: "/placeholder-product.jpg",
      isOnSale: false,
    },
    {
      id: 8,
      name: "VINTAGE CHARM BRACELET",
      price: 350,
      originalPrice: 420,
      discount: 17,
      rating: 4.3,
      image: "/placeholder-product.jpg",
      isOnSale: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto font-mr-eaves">
            Discover our carefully curated collection of premium jewelry pieces, 
            each designed to make you shine with elegance and sophistication.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              isOnSale={product.isOnSale}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
