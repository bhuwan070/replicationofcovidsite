import React from "react";
import Img1 from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4">
          <img src={Img1} alt="" className="w-40" />
          <p className="text-gray-400 md:max-w-[400px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            quidem doloremque doloribus iure, sit asperiores ducimus!
          </p>
        </div>
        <div className="socialIcon flex space-x-6 text-3xl">
          <FaFacebook className="hover:text-primary" />
          <FaInstagram className="hover:text-primary" />
          <FaLinkedin className="hover:text-primary" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
