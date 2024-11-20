import allData from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MenCategory() {
  const { men } = allData.homeCategory;
  return (
    <div className="flex flex-col items-center">
      {men.map(({ name, id, img }) => (
        <div
          key={id}
          className="flex flex-col items-center p-2 md:p-4  rounded-full md:rounded-md md:shadow transition-shadow duration-300 ease-in-out md:w-40 lg:w-48"
        >
          <div className="relative w-16 h-16 md:w-full md:h-[15rem]">
            <Link href={`/category/${name}`}>
              <Image
                src={img}
                alt={name}
                height={1000}
                width={1000}
                className="rounded-full object-cover w-full h-full md:rounded"
              />
            </Link>
          </div>
          <span className="mt-2 text-sm font-medium capitalize">{name}</span>
        </div>
      ))}
    </div>
  );
}
