import React from "react";
import WomenCategory from "./Home-Categories/women";
import MenCategory from "./Home-Categories/men";
import KidsCategory from "./Home-Categories/kids";
import UnisexCategory from "./Home-Categories/unisex";
import Link from "next/link";
import ShirtsCategory from "./Home-Categories/shirts";

export const HomeCategories = () => {
  return (
    <div className="px-4 py-6 mt-10 md:mt-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Shop By Category</h2>
        <h4 className="text-sm text-gray-400 capitalize font-semibold hover:text-blue-400">
          <Link href="">see all</Link>
        </h4>
      </div>

      {/* Flex layout for small screens, grid layout for medium and larger screens */}
      <div className="flex md:grid md:grid-cols-5 md:gap-6 gap-4 overflow-x-auto md:overflow-hidden">
        <div className="flex flex-col items-center">
          <WomenCategory />
        </div>
        <div className="flex flex-col items-center">
          <MenCategory />
        </div>
        <div className="flex flex-col items-center">
          <KidsCategory />
        </div>
        <div className="flex flex-col items-center">
          <UnisexCategory />
        </div>

        <div className="flex flex-col items-center">
          <ShirtsCategory />
        </div>
      </div>
    </div>
  );
};

// TODO: on large screen, the categories should be displayed in a grid of 4 columns

// top & down
