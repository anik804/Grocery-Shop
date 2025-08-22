const featuredProducts = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "৳499 / kg",
    image: "https://i.ibb.co.com/gb182jrG/shelley-pauls-I58f47-LRQYM-unsplash.jpg",
  },
  {
    id: 2,
    name: "Organic Tomatoes",
    price: "৳299 / kg",
    image: "https://i.ibb.co.com/v6TWmbHY/josephine-baran-g4wzh-Y8qi-Mw-unsplash.jpg",
  },
  {
    id: 3,
    name: "Bananas",
    price: "৳199 / dozen",
    image: "https://i.ibb.co.com/4wKcCJYB/fabrizio-frigeni-lcr-Zgp-LTNv-U-unsplash.jpg",
  },
  {
    id: 4,
    name: "Fresh Carrots",
    price: "৳249 / kg",
    image: "https://i.ibb.co.com/V0rLW2Cr/jonathan-pielmayer-e-FFn-KMi-DMGc-unsplash.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-700">
                  {product.name}
                </h3>
                <p className="text-gray-700 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
