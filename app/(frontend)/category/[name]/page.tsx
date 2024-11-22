import { allCategories } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import React from "react";
import { CiHeart } from "react-icons/ci";

interface CategoryPageProps {
  params: Promise<{
    name: string;
  }>;
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  // Unwrap the params promise
  const { name } = await params;

  // Filter the data to find the specific category
  const categoryData = allCategories.find(
    (category) => category.name.toLowerCase() === name.toLowerCase()
  );

  if (!categoryData) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-sm md:text-lg font-bold">Category Not Found</h1>
        <Link href="/">
          <button className="text-blue-500 mt-4">Go Back Home</button>
        </Link>
      </div>
    );
  }

  const { products } = categoryData;

  if (!products?.length) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-sm md:text-lg font-bold">No Products Available</h1>
        <Link href="/">
          <button className="text-blue-500 mt-4">Go Back Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 mx-auto py-10 bg-[#ffffff]">
      <div className="flex justify-center gap-5">
        <div className=" bg-blue-300 text-white rounded-full h-5 w-5 font-semibold mt-0.5 md:mt-2">
          <Link href="/">
            <BiArrowBack className="mt-0.5 h-5 w-5 rounded-full pb-1 hover:bg-gray-200" />
          </Link>
        </div>
        <h1 className="text-sm md:text-2xl font-bold items-center flex capitalize text-center text-black/45 mb-10">
          {categoryData.name} category
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map(({ name, description, image, price, rating, slug }) => (
          <div
            key={name}
            className="shadow-md bg-[#FFFAF0] min-h-[15rem] rounded"
          >
            <Link href={`/product/detail/${slug}/`}>
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
                  $ {(price as number).toFixed(2)}
                </p>
              </div>
              <p className="font-semibold text-[#9E9E9E]">
                {description.split(" ").slice(0, 10).join(" ") + "..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
