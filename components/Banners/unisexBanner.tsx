import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import allData from "@/utils/data";
import Image from "next/image";

export default function UnisexBanner() {
  return (
    <div className="min-h-[10rem] mt-10 md:mt-20 pb-5">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        swipeable={true}
      >
        {allData.banner.unisex.map((item) => (
          <div key={item.id} className="">
            <div className="">
              <Image
                src={item.img}
                alt={item.name}
                width={1920}
                height={500}
                className="rounded h-[10rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem]"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
