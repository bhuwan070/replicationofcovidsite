import React from "react";
import Card from "./Card";
import Icon1 from "../../assets/icons/1.png";
import Icon2 from "../../assets/icons/2.png";
import Icon3 from "../../assets/icons/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animations";

const HowItHelp = () => {
  const cardData = [
    {
      icon: Icon1,
      heading: "Symptoms",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Icon2,
      heading: "Recommendations",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Icon3,
      heading: "Local information",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  return (
    <section className="w-full overflow-hidden">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  heading={card.heading}
                  text={card.text}
                />
              ))}
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col justify-center xl:pr-14"
          >
            <h1
              className="text-3xl font-bold
             text-darkBlur"
            >
              How it helps people
            </h1>
            <p className=" text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto, quod!{" "}
              <a href="#" className="text-primary">
                Learn More
              </a>
            </p>
            <button
              className="
              w-fit
            mt-4 border border-gray-300
             px-4 py-2 rounded-lg
              hover:bg-primary
               hover:text-white 
               transform duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelp;
