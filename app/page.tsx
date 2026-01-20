import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroBottom from "./components/HeroBottom";
import HeroBottom2 from "./components/HeroBottom2";
import DiscoverSection from "./components/DiscoverSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <div className="mx-2 my-4 p-2">
        <Navbar />
        <Hero />
        <HeroBottom />
        <HeroBottom2 />
      </div>
      <DiscoverSection />
      <div className="mx-2 my-4 p-2">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
