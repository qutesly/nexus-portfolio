"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { reviewData } from "../data/constant";
import { MoveLeft, MoveRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Reviews = () => {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex items-center justify-between">
        {reviewData.map((review) => (
          <div key={review.id} className="flex-[0_0_100%]  px-2">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative w-full max-w-133.25 h-97">
                {review.reviewImg && (
                  <Image
                    src={review.reviewImg}
                    alt={review.reviewPerson || "Review"}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="flex flex-col gap-4 w-full max-w-189.25 p-2">
                <h1 className="text-[20px] lg:text-[19px] xl:text-[25px] font-normal">
                  {review.review}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="relative w-full max-w-21.25 h-20.75 rounded-lg overflow-hidden">
                    {review.personImg && (
                      <Image
                        src={review.personImg}
                        alt={review.reviewPerson || "Person"}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[26px]">{review.reviewPerson}</p>
                    <p className="text-[20px] font-extralight">{review.job}</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center xl:justify-start gap-4">
                  <button
                    onClick={goToPrev}
                    disabled={!canPrev}
                    className={`p-2 rounded-md transition-all  ${
                      canPrev
                        ? "bg-white text-black hover:bg-black hover:text-white disabled:cursor-not-allowed cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <MoveLeft />
                  </button>
                  <button
                    onClick={goToNext}
                    disabled={!canNext}
                    className={`p-2 rounded-md transition-all ${
                      canNext
                        ? "bg-white text-black hover:bg-black hover:text-white disabled:cursor-not-allowed cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <MoveRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
