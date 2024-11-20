"use client";

import allData from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { useCurrency } from "@/utils/CurrencyContext";

// Define types for the product data
interface Product {
  name: string;
  image: string;
  slug: string;
  rating: number | string;
  price: number; // Ensure price is strictly a number
  description: string;
}

export default function Shirts() {
  const { rate, currencySymbol } = useCurrency(); // Get rate and symbol from context
  const shirts: Product[] = allData.shirts.slice(0, 6);

  // Utility function for price conversion
  const convertPrice = (price: number) => {
    if (!rate) return price.toFixed(2); // Fallback if rate isn't available yet
    return (price * rate).toFixed(2);
  };

  return (
    <div className="pb-5 min-h-[20rem]">
      {/* Header Section */}
      <div className="flex justify-between lg:justify-center px-6 mt-10 md:mt-20">
        <h2 className="text-sm font-semibold mb-4 capitalize lg:text-lg">
          shirts
        </h2>
        <Link href="/shirts">
          <h4 className="text-sm text-gray-400 capitalize font-semibold mb-4 hover:text-blue-400 md:hidden">
            see all
          </h4>
        </Link>
      </div>

      {/* Shirts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-5 py-6">
        {shirts.map(({ name, image, slug, rating, price, description }) => (
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

            {/* Shirt Info */}
            <div className="px-4 py-3">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold capitalize text-[#333333]">
                  {name}
                </h4>
                <CiHeart className="text-lg text-gray-400 hover:text-red-500 rounded-full cursor-pointer" />
              </div>
              <div className="flex justify-center gap-5 items-center">
                <p className="text-lg text-[#FFA500]">{rating}</p>
                <p className="text-lg font-bold text-[#FF6B6B]">
                  {currencySymbol} {convertPrice(price)}
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
        ))}
      </div>

      {/* View All Section (for larger screens) */}
      <div className="hidden md:flex items-center gap-5 mt-5">
        <div className="h-0.5 bg-black flex-1" />
        <Link
          href="/shirts"
          className="text-sm font-bold capitalize text-center bg-[#11202C] text-white py-2 px-4 rounded"
        >
          view all
        </Link>
        <div className="h-0.5 bg-black flex-1" />
      </div>
    </div>
  );
}
