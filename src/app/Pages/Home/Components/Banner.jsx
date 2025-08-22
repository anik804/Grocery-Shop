"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/5xn4qYnm/raul-gonzalez-escobar-Zp-Isk-W1-Tuvc-unsplash.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-6 md:px-12 lg:px-20 max-w-3xl">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Fresh Groceries Delivered to Your Doorstep
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the best quality fruits, vegetables, and essentials, handpicked
          fresh every day. Your health and happiness are just one click away.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#16a34a",
            color: "#fff",
          }}
          
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
        >
          <Link href="/products">Shop Now</Link>
        </motion.button>
      </div>
    </div>
  );
}
