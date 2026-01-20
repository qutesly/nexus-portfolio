import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full flex flex-col mt-6 mb-30 md:mb-40 lg:mb-20 xl:mb-10">
        {" "}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-2 relative w-full  xl:h-218.5">
          <h1 className="w-full md:w-151.5 h-max xl:h-56.5 text-[30px]  xl:text-[52px] mt-0 lg:mt-12 font-normal">
            LUXURY DESIGN UNIQUE, DURABLE COMFORTABLE CHAIRS.
          </h1>

          <div className="relative w-full h-120 xl:w-173 xl:h-218.5">
            <div className="flex items-start w-full">
              <Image
                src="/images/heroImg.png"
                alt=""
                fill
                className="lg:object-contain w-full"
              />
            </div>

            <div className="absolute right-0 top-0 xl:top-5 2xl:top-0">
              <button className="flex items-center justify-between gap-4 p-2 sm:px-8  md:px-6 lg:p-1 xl:px-4  py-2 2xl:w-52.75 bg-white rounded-full cursor-pointer">
                <p className="text-black text-[12px] md:text-[14px] xl:text-[20px]">
                  Contact Us
                </p>
                <div className="bg-black rounded-full p-1 lg:p-2">
                  <MoveUpRight className="w-3 h-3 xl:w-5 xl:h-5" />
                </div>
              </button>
            </div>
          </div>
          <div className="absolute hidden sm:block left-[38%] lg:left-[35%] 2xl:left-[39.2%] sm:bottom-[20%] md:bottom-[16%] lg:bottom-[20%] xl:bottom-[26.1%]  -translate-x-1/2 ">
            <div className="flex items-center justify-center gap-6 p-2 overflow-hidden">
              <div className="relative w-30 h-25 md:w-33.75 md:h-37.5 xl:w-58.25 xl:h-43.7">
                <Image
                  src="/images/small-chair-1.png"
                  alt="small chair"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-30 h-25 md:w-33.75 md:h-37.5 xl:w-58.25 xl:h-43.75">
                <Image
                  src="/images/small-chair-2.png"
                  alt="small chair"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-30 h-25 md:w-33.75 md:h-37.5 xl:w-58.25 xl:h-43.7">
                <Image
                  src="/images/small-chair-3.png"
                  alt="small chair"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-35 sm:-bottom-30 md:-bottom-30 lg:-bottom-20 xl:bottom-10 align-left w-full xl:w-101.25">
            <p className="text-[20px] md:text-[24px] font-k2d">
              Our chairs are well crafter to suit any space, crafter and{" "}
              <span className="text-[#BBFF7F]">sculpted</span> to your desired
              taste that will effortlessly fit your space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
