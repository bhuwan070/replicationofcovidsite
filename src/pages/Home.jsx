import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HowItHelp from "../components/HowItHelp/HowItHelp";
import Uses from "../components/uses/Uses";
import Trust from "../components/trust/Trust";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItHelp />
      <Uses />
      <Trust />
      <Footer />
    </main>
  );
};

export default Home;
