'use client';

import React from "react";

const HeroBottom2 = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-center gap-2 mb-20">
        {" "}
        <div className="w-50 md:w-62.5 xl:w-[382.8px] h-max xl:h-[332.09px]" data-aos="fade-right">
          <img src="/images/heroB.png" alt="hero chair" />
        </div>
        <div className="w-50 md:w-62.5 xl:w-[382.8px] h-max xl:h-[332.09px]" data-aos="fade-left">
          <img src="/images/heroB2.png" alt="hero chair" />
        </div>
      </div>
    </div>
  );
};

export default HeroBottom2;
