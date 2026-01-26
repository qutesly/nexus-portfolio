import React from "react";
import { descriptions } from "../data/constant";

const DescriptionSection = () => {
  return (
    <div className="w-full flex flex-col font-k2d space-y-2 mb-5">
      <h1 className="text-[20px] md:text-[32px] font-thin text-center ">
        WHY CHOOSE SIT CITY
      </h1>
      <div className="w-full flex items-center justify-center mb-10">
        <h1 className="text-[30px] md:text-[50px] text-center ">
          We have redifined the art of{" "}
          <span className="text-[#BBFF7F] inline-flex items-center">sit</span>ting.{" "}
          <span className="inline-flex items-center align-middle">
            {" "}
            <img src="/images/small-vector.svg" alt="svg image" />
          </span>
        </h1>
      </div>
      <div className="w-full max-w-382.5">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          {descriptions.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.shortDesc} className="flex flex-col items-center text-center gap-4">
                <div className="bg-gray-600 p-3 mb-2 rounded-md">
                  <Icon className="" />
                </div>
                <h1 className="text-[19px] md:text-[text-24px] font-medium mb-2">
                  {item.shortDesc}
                </h1>
                <p className="text-[14px] md:text-[15px] lg:text-[17.06px] font-extralight ">
                  {item.longDesc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
