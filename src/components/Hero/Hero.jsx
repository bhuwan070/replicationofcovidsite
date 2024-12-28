import React from "react";
import HeroImage from "../../assets/hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animations";

const Hero = () => {
  return (
    <section>
      <div className=" bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/* text section */}
        <div className="flex flex-col justify-center xl:pr-40">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial"
              className="text-5xl font-bold text-darkBlur"
            >
              COVID-19 Risk <br />
              Assesment Tool{" "}
            </motion.h1>
            <motion.p
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial"
              className="text-lg text-gray-400 mt-4"
            >
              A set of solutions designed to help quickly identify the corona
              virus symptoms and get reliable information about COVIS-19.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              whileInView={"animate"}
              initial="initial"
              className="bg-primary text-white px-6 py-4 rounded-lg mt-4  w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200"
            >
              <button> See how to use it</button>
            </motion.div>
          </div>
        </div>
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center items-center"
        >
          <img src={HeroImage} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
