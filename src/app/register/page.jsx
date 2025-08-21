"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import registerAnimation from "../../../public/lottie/register.json"; // make sure your file is here
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden"
      >
        {/* Left Side Animation */}
        <div className="hidden md:flex w-1/2 bg-green-50 items-center justify-center p-6">
          <Lottie animationData={registerAnimation} loop={true} className="w-80 h-80" />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-green-900 mb-6 text-center md:text-left"
          >
            Create an Account
          </motion.h2>

          {/* Register Form */}
          <RegisterForm></RegisterForm>

          {/* Optional: Add a divider and social login options */}

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
            >
              <FaGoogle className="text-lg" />
              Google
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-black transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </motion.button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-green-700 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
