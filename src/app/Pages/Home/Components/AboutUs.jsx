"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function AboutUs() {
  return (
    <section className="relative bg-green-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://i.ibb.co.com/vrcHGRk/fikri-rasyid-eze-C8-cl-ZSs-unsplash.jpg"
            alt="Grocery Shop"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md">
            Since 2015
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-green-700"
          >
            About Us
          </motion.h2>

          <p className="text-gray-600 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-green-700">GroceryShop</span>, your trusted neighborhood grocery shop! 
            We are passionate about delivering fresh, organic, and affordable products to your home. 
            From farm-fresh fruits and vegetables to daily essentials, we’ve got you covered.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-xl" />
              100% Fresh & Organic Products
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-xl" />
              Fast Home Delivery
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-xl" />
              Trusted by 5,000+ Happy Customers
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-xl" />
              Affordable Prices Everyday
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
