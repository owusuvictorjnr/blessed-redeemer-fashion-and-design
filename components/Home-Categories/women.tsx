import allData from "@/utils/data";
import Image from "next/image";
import React from "react";

export default function WomenCategory() {
  return (
    <div className="flex flex-col items-center">
      {allData.homeCategory.women.map((item) => (
        <div key={item.slug} className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            {/* Adjust size as needed */}
            <Image
              src={item.img}
              alt={item.name}
              height={64}
              width={64}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <span className="mt-2 text-sm font-medium capitalize">{item.name}</span>{" "}
          {/* Add item name below image */}
        </div>
      ))}
    </div>
  );
}
