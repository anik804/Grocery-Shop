"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import loginAnimation from "../../../public/lottie/Login.json"; // place your Lottie file here

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden"
      >
        {/* Left Side: Lottie Animation */}
        <div className="hidden md:flex w-1/2 bg-green-50 items-center justify-center p-6">
          <Lottie animationData={loginAnimation} loop className="w-80 h-80" />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-green-900 mb-6 text-center md:text-left"
          >
            Welcome Back
          </motion.h2>

          {/* Form */}
          <form className="space-y-4">
            {/* Email Input */}
            <motion.input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:scale-[1.02] transition"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Password Input */}
            <motion.input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:scale-[1.02] transition"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-lg font-semibold transition"
            >
              Login
            </motion.button>
          </form>

          {/* OR Divider */}
          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => signIn("google")}
              className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <FcGoogle size={22} />
              <span className="font-medium">Continue with Google</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => signIn("github")}
              className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <FaGithub size={22} className="text-gray-800" />
              <span className="font-medium">Continue with GitHub</span>
            </motion.button>
          </div>

          {/* Register Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/register" className="text-green-700 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
