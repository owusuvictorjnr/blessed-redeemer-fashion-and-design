import allData from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";

export default function NewProducts() {
  const newProducts = allData.NewProducts.slice(0, 6);

  return (
    <div className="pb-5 min-h-[20rem]">
      {/* Header Section */}
      <div className="flex justify-between lg:justify-center px-6 mt-10 md:mt-20">
        <h2 className="text-sm font-semibold mb-4 capitalize lg:text-lg">
          new products
        </h2>
        <Link href="/new-products">
          <h4 className="text-sm text-gray-400 capitalize font-semibold mb-4 hover:text-blue-400 md:hidden">
            see all
          </h4>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-5 py-6">
        {newProducts.map(
          ({ name, image, slug, rating, price, description }) => (
            <div
              key={name}
              className="shadow-md bg-[#FFFAF0] min-h-[15rem] rounded"
            >
              <Link href={`/detail/${slug}/`}>
                <Image
                  src={image}
                  alt={name}
                  width={1000}
                  height={1000}
                  className="h-32 w-full mx-auto rounded hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Product Info */}
              <div className="px-4 py-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold capitalize text-[#333333]">
                    {name}
                  </h4>
                  <CiHeart className="text-lg text-gray-400 hover:text-red-500 rounded-full cursor-pointer" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#FFA500]">{rating}</p>
                  <p className="text-sm font-bold text-[#FF6B6B]">
                    &#x20B5; {price}
                  </p>
                </div>
                <p className="font-semibold text-[#9E9E9E]">
                  {description.split(" ").slice(0, 10).join(" ") + "..."}
                </p>
              </div>

              {/* Add to Cart Button */}
              <div className="text-center bg-yellow-400 py-2 hover:bg-blue-400 hover:text-white transition-colors duration-500 shadow px-2 font-semibold text-black/60 hidden md:block">
                <button type="button">Add to cart</button>
              </div>
            </div>
          )
        )}
      </div>

      {/* View All Section (for larger screens) */}
      <div className="hidden md:flex items-center gap-5 mt-5">
        <div className="h-0.5 bg-black flex-1" />
        <Link
          href="/new-products"
          className="text-sm font-bold capitalize text-center bg-[#11202C] text-white py-2 px-4 rounded"
        >
          view all
        </Link>
        <div className="h-0.5 bg-black flex-1" />
      </div>
    </div>
  );
}
