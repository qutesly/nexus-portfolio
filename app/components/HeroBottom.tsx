import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const HeroBottom = () => {
  return (
    <div className="w-full mb-20 md:mb-30">
      <div className="flex flex-col lg:flex-row items-center gap-4.5">
        <div className="relative w-full xl:w-168.75 h-67.5 ">
          <Image
            src="/images/bottomImg.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full xl:w-172.25">
          {" "}
          <p className="text-[20px] lg:text-[17px] 2xl:text-[24px] font-k2d">
            At SitCity, we meticulously handcraft each piece using only the
            finest materials, from supple, full-grain leather to sustainably
            sourced exotic woods. Our designs are a harmonious blend of timeless
            elegance and modern innovation, ensuring that every chair not only
            looks stunning but also provides an unparalleled seating experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
