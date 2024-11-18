import React from "react";
import WomenCategory from "./Home-Categories/women";
import MenCategory from "./Home-Categories/men";
import KidsCategory from "./Home-Categories/kids";
import UnisexCategory from "./Home-Categories/unisex";
import Link from "next/link";

export const HomeCategories = () => {
  return (
    <div className="px-4 py-6 mt-10 md:mt-20">
      <div className="flex justify-between">
        <h2 className="text-sm font-semibold mb-4">Shop By Category</h2>
        <h4 className="text-sm text-gray-400 capitalize font-semibold mb-4 hover:text-blue-400">
          <Link href="">see all</Link>
        </h4>
      </div>
      <div className="flex md:justify-center md:container md:mx-auto lg:gap-28  gap-6 overflow-x-auto">
        <div className="flex flex-col items-center">
          <Link href="/category/women">
            <WomenCategory />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/category/men">
            <MenCategory />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/category/kids">
            <KidsCategory />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/category/unisex">
            <UnisexCategory />
          </Link>
        </div>
      </div>
    </div>
  );
};


// new prod.
// featured prod.
// Tops
// trousers
// top & down