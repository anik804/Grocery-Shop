"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBasketShopping } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import SupportModal from "./SupportModal";

// Social links data
const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/anikcghs19/",
    color: "#1877f2",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/anik_804/",
    color: "#E1306C",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/anik804/",
    color: "#0A66C2",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 
                 pt-10 pb-6 px-6 md:px-20 shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <FaBasketShopping className="w-8 h-8 text-green-700" />
            <h1 className="text-xl font-bold text-green-900">Grocery Shop</h1>
          </motion.div>
          <p className="text-sm text-gray-700">
            Fresh groceries delivered to your doorstep. 
            Eat healthy, stay fresh, and shop smarter with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3 text-green-900">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-700">Home</Link></li>
            <li><Link href="/products" className="hover:text-green-700">Products</Link></li>
            <li><Link href="/blogs" className="hover:text-green-700">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-green-700">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="font-semibold text-lg mb-3 text-green-900">Customer Support</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <SupportModal
                title="FAQs"
                triggerText="FAQs"
                content="Here you can find answers to the most frequently asked questions about our Grocery Shop services."
              />
            </li>
            <li>
              <SupportModal
                title="Shipping & Returns"
                triggerText="Shipping & Returns"
                content="We offer fast shipping across Bangladesh. Returns are accepted within 7 days of delivery."
              />
            </li>
            <li>
              <SupportModal
                title="Privacy Policy"
                triggerText="Privacy Policy"
                content="We respect your privacy. Your personal information is safe with us and will never be shared without consent."
              />
            </li>
            <li>
              <SupportModal
                title="Terms & Conditions"
                triggerText="Terms & Conditions"
                content="By using our services, you agree to comply with our terms, including responsible use of the website."
              />
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="font-semibold text-lg mb-3 text-green-900">Follow Us</h2>
          <div className="flex gap-4 text-xl text-green-800">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.2, color: social.color }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t mt-8 pt-4 text-center text-sm text-gray-600"
      >
        © {new Date().getFullYear()} Grocery Shop. All rights reserved by{" "}
        <motion.span
          animate={{
            color: ["#22c55e", "#eab308", "#ef4444", "#3b82f6", "#22c55e"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="font-semibold"
        >
          Anik Chakraborty
        </motion.span>
        .
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
