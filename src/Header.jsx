import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiUser,
  FiBell,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-200"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto no-copy">
        <div className="flex items-center space-x-8">
          <motion.div
            className="text-2xl font-bold text-black"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            caradver
          </motion.div>

          <motion.div
            className="relative"
            animate={{ width: searchFocused ? "280px" : "210px" }}
          >
            <input
              type="text"
              placeholder="Search vehicles, models..."
              className="pl-10 pr-4 py-2.5 text-sm rounded-full border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 w-full"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <AnimatePresence>
              {searchFocused && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50"
                >
                  <p className="text-xs text-gray-500 p-2">Recent searches</p>
                  <div className="text-sm text-black p-2 hover:bg-gray-100 rounded">
                    BMW M5 F90
                  </div>
                  <div className="text-sm text-black p-2 hover:bg-gray-100 rounded">
                    Porshe 911 GT3 RS
                  </div>
                  <div className="text-sm text-black p-2 hover:bg-gray-100 rounded">
                    Audi Q7
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex items-center space-x-6">
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiBell className="h-5 w-5 text-gray-700" />
            <AnimatePresence>
              {showNotification && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-0 h-2 w-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMessageSquare className="h-5 w-5 text-gray-700" />
          </motion.div>

          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.a
                className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white"
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="https://i.pinimg.com/originals/e2/35/bc/e235bc51930541e222ef8eed27546aa4.gif"
                  alt="User Image"
                  className=" rounded-full"
                />
              </motion.a>

              <motion.div
                className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
            <motion.div
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ type: "spring" }}
            >
              <FiChevronDown className="h-4 w-4 text-gray-700" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
