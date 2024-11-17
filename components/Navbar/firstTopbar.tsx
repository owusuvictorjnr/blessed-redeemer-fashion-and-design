"use client";

import allData from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBag1, CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

export default function FirstTopbar({}) {
  return (
    <div className="bg-slate-100 h-16 w-full mx-auto px-4 md:px-10 flex items-center justify-between">
      {/* Menu (visible on small screens) */}
      <div className="md:hidden">
        <IoIosMenu className="text-2xl" />
      </div>

      {/* Logo (hidden on small screens) */}
      <div className="flex-shrink-0 hidden md:block">
        {allData.logo.map((i) => (
          <div key={i.id} className="h-10 w-10 md:h-20 md:w-20">
            <Link href="/">
              <Image
                src={i.img}
                alt={i.name}
                width={1000}
                height={1000}
                className="h-full w-full rounded"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex-grow md:flex md:justify-center items-center hidden">
        <div className="relative w-full max-w-md flex items-center">
          <Image
            src="/search.png"
            alt="search"
            width={20}
            height={20}
            className="h-5 w-5 absolute left-3"
          />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 py-2 w-full border rounded-md focus:outline-none"
          />
        </div>
      </div>

      {/* Cart, Wishlist, Language Selector, and Avatar */}
      <div className="flex items-center space-x-4">
        {/* Cart */}
        <div className="text-gray-600 hidden md:block">
          <CiBag1 className="h-6 w-6 md:h-8 md:w-8" />
        </div>

        {/* Wishlist */}
        <div className="text-gray-600 hidden md:block">
          <CiHeart className="h-6 w-6 md:h-8 md:w-8" />
        </div>

        {/* Language Selector */}
        <div className="text-gray-600">
          <select className="border rounded-md px-2 focus:outline-none">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </div>

        {/* Login Avatar */}
        <div className="flex-shrink-0">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={1000}
            height={1000}
            className="h-8 w-8 md:h-10 md:w-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
