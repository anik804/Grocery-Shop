"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center animate-pulse bg-gray-50">
        <div className="w-3/4 h-64 bg-gray-300 rounded-lg mb-4" />
        <div className="w-1/2 h-8 bg-gray-300 rounded mb-2" />
        <div className="w-2/3 h-4 bg-gray-300 rounded mb-2" />
      </div>
    );
  }

  if (!product || product.error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <p className="text-red-600 text-lg">Product not found.</p>
        <Link href="/products" className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen pt-24 pb-24 px-4 flex flex-col items-center bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={product.photo_url}
          alt={product.name}
          className="w-full max-w-2xl h-80 object-cover rounded-xl shadow-lg mb-6"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1 className="text-3xl font-bold mb-2" layout>{product.name}</motion.h1>
        <motion.p className="text-gray-700 mb-4" layout>{product.description}</motion.p>
        <motion.p className="text-xl text-blue-600 font-semibold mb-4" layout>৳ {product.price}</motion.p>

        <motion.div className="w-full max-w-2xl space-y-2 mb-6" layout>
          {Object.entries(product).map(([key, value]) => {
            if (["_id", "name", "description", "price", "photo_url"].includes(key)) return null;
            return (
              <motion.p key={key} className="text-gray-600" layout>
                <span className="font-semibold capitalize">{key}:</span> {String(value)}
              </motion.p>
            );
          })}
        </motion.div>

        <Link
          href="/products"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          ← Back to Products
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
