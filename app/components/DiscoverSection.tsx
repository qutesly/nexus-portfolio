import React from "react";

const DiscoverSection = () => {
  return (
    <div className="flex flex-col font-k2d">
      <p className="text-[20px] md:text-[24px] font-extralight px-2 mb-4">
        DISCOVER SIT CITY
      </p>
      <div className="flex items-end justify-between gap-4 px-2 mb-6">
        <h1 className="text-[25px] xl:text-[42px] leading-[100%]">
          EXPLORE OUR
          <br /> LUXURY CHAIRS
        </h1>
        <button className="bg-white px-4 py-1 rounded-md text-black">
            View More
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection;
