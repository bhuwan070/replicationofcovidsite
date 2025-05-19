import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="border border-s-orange-400"
    >
      <div className="container py-5 flex items-center justify-between">
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="w-40" />
        </div>
        {/* navlinks section */}
        <ul className=" hidden md:flex items-center gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Customer Stories</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-xl hover:bg-primary hover:text-white transform duration-300 ">
            Get in touch
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
