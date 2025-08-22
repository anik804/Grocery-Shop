"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Ratings() {
  const stats = [
    { id: 1, label: "Happy Customers", value: 5000, suffix: "+" },
    { id: 2, label: "Products Available", value: 1200, suffix: "+" },
    { id: 3, label: "Orders Delivered", value: 10000, suffix: "+" },
    { id: 4, label: "Years of Service", value: 5, suffix: "+" },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Trusted by Thousands of Customers
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="p-6 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                <CountUp
                  end={stat.value}
                  duration={3}
                  suffix={stat.suffix}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
