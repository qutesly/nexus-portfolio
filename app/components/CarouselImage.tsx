"use client";

import React, { useCallback } from "react";
import { slideImages } from "../data/constant";
import Link from "next/link";
import { MapPin, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const CarouselImage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const goToPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla mb-10">
      <div ref={emblaRef} className="embla_viewport overflow-hidden">
        <div className="embla_container flex gap-4 transition-transform duration-300 ease-out mx-1">
          {slideImages.map((image) => (
            <div
              key={image.id}
              className="embla_slide flex-[0_0_65%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_28%] xl:flex-[0_0_31%]"
            >
              <Link href="/">
                <div className="relative w-[300px] md:w-[400px] lg:w-[330px] xl:w-103.5 h-[300px] xl:h-100 p-2">
                  <div className="relative w-full h-full overflow-hidden rounded-md group p-2">
                    <Image
                      src={image.image}
                      alt="chair Image"
                      fill
                      className="object-cover rounded-md transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute top-3 right-3 border border-white bg-white/40 px-2 py-1 text-[10.57px] text-black rounded-md">
                    {image.type}
                  </div>
                  <div className="w-[90%] max-w-94 absolute bottom-5 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/40 rounded-lg">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col text-black ">
                        <h1 className="text-[14px] xl:text-[21.9px]  font-medium">
                          {image.name}
                        </h1>
                        <p className="flex items-center text-[14px] gap-1">
                          <MapPin className="w-4 h-4" />
                          Armani Crested
                        </p>
                      </div>
                      <div className="bg-[#FEFFE7] text-black font-light rounded-md px-2 py-1">
                        <p className="text-[14.09px]">${image.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-white p-2 rounded-md text-black hover:bg-black hover:text-white transition-all"
          onClick={goToPrev}
        >
          <MoveLeft />
        </button>
        <button
          className="bg-white p-2 rounded-md text-black hover:bg-black hover:text-white transition-all"
          onClick={goToNext}
        >
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselImage;
