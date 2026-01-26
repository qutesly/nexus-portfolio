import React from "react";
import { slideImages } from "../data/constant";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import CarouselImage from "./CarouselImage";

const DiscoverSection = () => {
  return (
    <div className="flex flex-col font-k2d ">
      <p className="text-[20px] md:text-[24px] font-extralight px-2 mb-4">
        DISCOVER SIT CITY
      </p>
      <div className="flex items-end justify-between gap-4 px-2 mb-20">
        <h1 className="text-[25px] xl:text-[42px] leading-[100%]">
          EXPLORE OUR
          <br /> LUXURY CHAIRS
        </h1>
        <button className="bg-white px-4 py-1 rounded-md text-black">
          View More
        </button>
      </div>
      <CarouselImage />
    </div>
  );
};

export default DiscoverSection;
