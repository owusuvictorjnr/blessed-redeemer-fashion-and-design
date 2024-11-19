import allData from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";

export default function FeaturedProd() {
  const homeFeatured = allData.featuredProducts.slice(0, 6);
  return (
    <div className="pb-5 min-h-[20rem]">
      <div className="flex justify-between lg:justify-center px-6 mt-10 md:mt-20">
        <h2 className="text-sm font-semibold mb-4 capitalize lg:text-lg">
          featured products
        </h2>
        <h4 className="text-sm text-gray-400 capitalize font-semibold mb-4 hover:text-blue-400  md:hidden">
          <Link href="">see all</Link>
        </h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-5 py-6">
        {homeFeatured.map((feat) => (
          <div
            key={feat.name}
            className="shadow-md bg-gray-100 min-h-[15rem] rounded"
          >
            <Link href={`/detail/${feat.slug}/`}>
              <Image
                src={feat.image}
                alt={feat.name}
                width={1000}
                height={1000}
                className="h-32 w-full mx-auto rounded hover:scale-105 duration-500"
              />
            </Link>

            <div className="px-4 py-3">
              <div className="flex justify-between items-center ">
                <h4 className="text-sm font-semibold capitalize">
                  {feat.name}
                </h4>
                <CiHeart className="text-lg text-gray-400 hover:text-red-500 rounded-full" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">{feat.rating}</p>
                <p className="text-sm text-red-400 font-bold">
                  &#x20B5; {feat.price}
                </p>
              </div>

              <p className="font-semibold text-[#A2B0AF]">
                {feat.description.split(" ").slice(0, 10).join(" ") + "..."}
              </p>
            </div>

            <div className="text-center bg-yellow-400 py-2 hover:bg-blue-400 hover:text-white duration-500 shadow px-2 font-semibold text-black/60 hidden md:block">
              <button type="submit" className="">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <div className="flex gap-5">
          <div className="h-0.5 bg-black w-1/2 mt-5" />
          <Link
            href="/featured-products"
            className="text-sm font-bold mb-4 capitalize text-center bg-[#11202C] text-white w-36 py-2 "
          >
            view all
          </Link>
          <div className="h-0.5 bg-black w-1/2 mt-5" />
        </div>
      </div>
    </div>
  );
}
