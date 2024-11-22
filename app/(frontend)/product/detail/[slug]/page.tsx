"use client";

import { allCategories } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { CiBag1, CiHeart } from "react-icons/ci";
import { useState } from "react";

const ProductDetailPage = () => {
  const params = useParams();
  const { slug } = params;

  // Find the product based on the slug
  const category = allCategories.find((cat) =>
    cat.products.some((product) => product.slug === slug)
  );
  const product = category?.products.find((product) => product.slug === slug);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-lg font-bold">Product Not Found</h1>
        <Link href="/">
          <button className="text-blue-500 mt-4">Go Back Home</button>
        </Link>
      </div>
    );
  }

  const { name, description, image, price, rating, numReviews } = product;
  const colors = ["#0000FF", "#FF0000", "#00FF00"]; // Sample colors
  const sizes = ["S", "M", "L", "XL"]; // Sample sizes

  return (
    <div className="min-h-screen px-5 py-10 bg-white">
      {/* Back Button */}
      <div className="flex items-center gap-5 mb-5">
        <Link href={`/category/${category?.slug}`}>
          <BiArrowBack className="text-2xl text-blue-500 hover:text-blue-600" />
        </Link>
        <h1 className="text-2xl font-bold capitalize text-gray-700">
          Product Details
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
        {/* Product Image */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="rounded shadow-lg object-cover w-full h-full max-h-[500px]"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-center justify-between">
            <p className="text-[#FFA500] font-semibold">
              {rating} ★ ({numReviews} reviews)
            </p>
            <CiHeart className="text-3xl text-gray-400 hover:text-red-500 cursor-pointer" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
          <p className="text-2xl font-bold text-[#FF6B6B]">
            ${price.toFixed(2)}
          </p>
          <p className="text-gray-600">{description}</p>

          {/* Color Selector */}
          <div className="flex items-center space-x-3">
            <span className="text-lg font-semibold">Colors:</span>
            {colors.map((color) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-black"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          {/* Size Selector */}
          <div className="flex items-center space-x-3">
            <span className="text-lg font-semibold">Size:</span>
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center gap-2 px-5 py-3 border rounded text-gray-800 font-semibold hover:bg-blue-600 hover:text-white">
              <CiBag1 className="text-xl" />
              Add to Cart
            </button>
            <button className="px-5 py-3 font-semibold text-white bg-black rounded hover:bg-gray-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
