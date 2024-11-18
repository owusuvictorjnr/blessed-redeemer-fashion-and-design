"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import allData from "@/utils/data";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <div className="min-h-52 w-full bg-yellow-200">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={true}
          showArrows={true}
          showIndicators={true}
          swipeable={true}
        >
          {allData.hero.map((hero) => (
            <div
              key={hero.id}
              className="h-[45vh] md:h-[70vh] w-full flex items-center justify-center"
            >
              <div className="relative h-full w-full">
                <Image
                  src={hero.img}
                  alt={hero.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
