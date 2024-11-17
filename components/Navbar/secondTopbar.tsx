"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBag1, CiHeart } from "react-icons/ci";

export default function SecondTopbar() {
  return (
    <div className="bg-slate-100 h-16 w-full flex items-center justify-between px-4 md:px-10">
      {/* Search (only on small screens) */}
      <div className="md:hidden flex-grow">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-4">
            <Image
              src="/search.png"
              alt="search"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>
          <input
            type="search"
            placeholder="search..."
            className="pl-10 py-2 w-full border rounded-md focus:outline-none"
          />
        </div>
      </div>

      {/* Navbar */}
      <div className="hidden md:flex justify-center w-full">
        <ul className="flex space-x-10">
          <li>
            <Link href="/">
              <h1 className="text-gray-700 hover:text-gray-900">home</h1>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h1 className="text-gray-700 hover:text-gray-900">about</h1>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <h1 className="text-gray-700 hover:text-gray-900">contact us</h1>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <h1 className="text-gray-700 hover:text-gray-900">blog</h1>
            </Link>
          </li>
        </ul>
      </div>

      {/* Cart and Wishlist Icons */}
      <div className="flex items-center space-x-4 md:hidden">
        <div className="text-gray-600">
          <CiBag1 className="h-6 w-6 md:h-10" />
        </div>
        <div className="text-gray-600">
          <CiHeart className="h-6 w-6 md:h-10" />
        </div>
      </div>
    </div>
  );
}
