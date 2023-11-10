import Image from 'next/image';
import React from 'react';
import prod1 from '@/assets/prod1.png';
import prod2 from '@/assets/prod2.png';

const Product = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-lg mx-auto mt-10 max-w-md p-4">
      <div className="sm:w-1/2 mb-4 sm:mb-0">
        <Image
          src={prod1} // Dummy image URL
          alt="Product"
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="p-4 sm:w-1/2">
        <h2 className="text-xl font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300">
          Buy Now
        </button>
      </div>
      <div className="sm:w-1/2">
        <Image
          src={prod2} // Dummy image URL
          alt="Product"
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="p-4 sm:w-1/2">
        <h2 className="text-xl font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
