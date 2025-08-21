"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const navMenu = () => {
    return (
      <>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href={"/"}>Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href={"/products"}>Products</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href={"/blogs"}>Blogs</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href={"/contact"}>Contact Us</Link>
        </motion.li>
      </>
    );
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar bg-gradient-to-r from-green-400 via-green-300 to-green-200 shadow-md px-4 sticky top-0 z-50"
    >
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-green-100 rounded-box z-[999] mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>

        {/* Logo with Animation */}
        <Link href={"/"} className="text-xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaBasketShopping className="w-10 h-10 text-green-900" />
            </motion.div>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="font-bold text-lg md:text-xl text-green-900"
            >
              Grocery Shop
            </motion.h1>
          </motion.div>
        </Link>
      </div>

      {/* Center Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium text-green-900">
          {navMenu()}
        </ul>
      </div>

      {/* Right Side */}
{/* Right Side */}
<div className="navbar-end flex gap-2">
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="btn btn-outline rounded-lg border-2 border-green-900 text-green-900 hover:bg-green-200 hover:text-green-900 transition-all duration-300"
  >
    Register
  </motion.a>
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="btn rounded-lg bg-green-900 text-white hover:bg-green-800 shadow-md hover:shadow-lg transition-all duration-300"
  >
    Login
  </motion.a>
</div>

    </motion.div>
  );
};

export default Navbar;
