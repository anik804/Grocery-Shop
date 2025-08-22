"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {loading
        ? [...Array(6)].map((_, i) => (
            <div key={i} className="p-4 border rounded-xl shadow-md animate-pulse">
              <div className="h-40 bg-gray-300 rounded-lg mb-3" />
              <div className="h-6 bg-gray-300 rounded w-2/3 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
              <div className="h-10 bg-gray-300 rounded w-24" />
            </div>
          ))
        : products.map((product) => (
            <motion.div
              key={product._id}
              className="p-4 border rounded-xl shadow-md bg-white"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.photo_url}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-blue-600 font-bold mt-2">৳ {product.price}</p>

              <Link
                href={`/products/${product._id}`}
                className="mt-3 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                View Details
              </Link>
            </motion.div>
          ))}
    </div>
  );
}
