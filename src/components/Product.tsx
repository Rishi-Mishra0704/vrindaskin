import Image from "next/image";
import React from "react";
import Link from "next/link";
import prod1 from '@/assets/prod1.png'
import prod2 from "@/assets/prod2.png"

const Product = () => {
  return (
    <div id="product" className="flex flex-col md:flex-row h-1/2 justify-center m-5 p-4">
      <div className="sm:w-1/2 mb-4 sm:mb-0">
        <Image
          src={prod1}
          alt="Product"
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="p-4 sm:w-1/2 m-5">
        <h2 className="text-xl font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link
          href="https://www.vrundaskin.in/product/vrundas-secret-for-pimple/"
          className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          Buy Now
        </Link>
      </div>
      <div className="sm:w-1/2">
        <Image
          src={prod2}
          alt="Product"
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="p-4 sm:w-1/2 m-5">
        <h2 className="text-xl font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link
          href="https://www.vrundaskin.in/product/vrundas-secret-for-pimpels-30ml/"
          className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Product;
