import React from "react";
import img1 from "../../assets/uses/1.png";
import img2 from "../../assets/uses/2.png";
import img3 from "../../assets/uses/3.png";

const Uses = () => {
  return (
    <section>
      <div className="container my-14">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex flex-col justify-center xl:pr-14">
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
          </div>
          <div>
            <img src={img1} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Coronavirus</p>
          </div>
          <div>
            <img src={img2} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Diagnostic</p>
          </div>
          <div>
            <img src={img3} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Symptoms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
