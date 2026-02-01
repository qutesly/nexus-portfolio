import Image from "next/image";
import React from "react";

const LargeImage = () => {
  return (
    <div className="w-full max-w-382.5 mt-10 md:mt-0 xl:mt-20 mb-10 md:mb-20">
      <div className="relative w-full h-50 md:h-125 xl:h-150 rounded-md">
        <Image src="/images/furniture-image.png" alt="furniture image" fill className="object-contain"/>
      </div>
    </div>
  );
};

export default LargeImage;
