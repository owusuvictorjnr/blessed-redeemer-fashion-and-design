import allData from "@/utils/data";
import Image from "next/image";
import React from "react";

export default function ShirtsCategory() {
  return (
    <div className="flex flex-col items-center">
      {allData.homeCategory.shirts.map((item) => (
        <div
          key={item.slug}
          className="flex flex-col items-center p-2 md:p-4  rounded-full md:rounded-md md:shadow-md transition-shadow duration-300 ease-in-out md:w-40 lg:w-48"
        >
          <div className="relative w-16 h-16 md:w-full md:h-[15rem]">
            <Image
              src={item.img}
              alt={item.name}
              height={1000}
              width={1000}
              className="rounded-full object-cover w-full h-full md:rounded-md"
            />
          </div>
          <span className="mt-2 text-sm font-medium capitalize">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
