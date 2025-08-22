import { GiFruitBowl } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { FaTags } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
          Why Shop With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fresh Products */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <GiFruitBowl className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fresh & Organic
            </h3>
            <p className="text-gray-600">
              Hand-picked fruits, vegetables, and groceries delivered straight from farms.
            </p>
          </div>

          {/* Fast Delivery */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <MdDeliveryDining className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your groceries delivered within hours — fresh, quick, and hassle-free.
            </p>
          </div>

          {/* Affordable Prices */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <FaTags className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Quality groceries at the best prices — saving you money every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
