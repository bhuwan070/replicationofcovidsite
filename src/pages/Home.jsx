import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HowItHelp from "../components/HowItHelp/HowItHelp";
import Uses from "../components/uses/Uses";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItHelp />
      <Uses />
    </div>
  );
};

export default Home;
