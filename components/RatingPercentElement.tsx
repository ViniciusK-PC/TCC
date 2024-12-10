
import React from "react";
import { FaStar } from "react-icons/fa6";

const RatingPercentElement = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-x-[1px] mb-2">
        <FaStar className="text-custom-yellow text-2xl" />
        <FaStar className="text-custom-yellow text-2xl" />
        <FaStar className="text-custom-yellow text-2xl" />
        <FaStar className="text-custom-yellow text-2xl" />
        <FaStar className="text-custom-yellow text-2xl" />
        <p className="ms-1 text-lg font-medium text-black dark:text-gray-400">
          4,95
        </p>
        <p className="ms-1 text-lg font-medium text-black dark:text-gray-400">
          fora de
        </p>
        <p className="ms-1 text-lg font-medium text-black dark:text-gray-400">
          5
        </p>
      </div>
      <p className="text-lg font-medium text-black dark:text-gray-400 text-center">
        1,745 classificações globais
      </p>
      <div className="flex items-center justify-center mt-4">
        <a
          href="#"
          className="text-base font-medium text-black dark:text-blue-500 hover:underline"
        >
          5 estrela
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-custom-yellow rounded" style={{"width": "70%"}}></div>
        </div>
        <span className="text-base font-medium text-black dark:text-gray-400">
          70%
        </span>
      </div>
      <div className="flex items-center mt-4 justify-center">
        <a
          href="#"
          className="text-base font-medium text-black dark:text-blue-500 hover:underline"
        >
          4 estrela
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-custom-yellow rounded" style={{"width": "17%"}}></div>
        </div>
        <span className="text-base font-medium text-black dark:text-gray-400">
          17%
        </span>
      </div>
      <div className="flex items-center mt-4 justify-center">
        <a
          href="#"
          className="text-base font-medium text-black dark:text-blue-500 hover:underline"
        >
          3 estrela
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-custom-yellow rounded" style={{"width": "8%"}}></div>
        </div>
        <span className="text-base font-medium text-black dark:text-gray-400">
          8%
        </span>
      </div>
      <div className="flex items-center mt-4 justify-center">
        <a
          href="#"
          className="text-base font-medium text-black dark:text-blue-500 hover:underline"
        >
          2 estrela
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-custom-yellow rounded" style={{"width": "4%"}}></div>
        </div>
        <span className="text-base font-medium text-black dark:text-gray-400">
          4%
        </span>
      </div>
      <div className="flex items-center mt-4 justify-center">
        <a
          href="#"
          className="text-base font-medium text-black dark:text-blue-500 hover:underline"
        >
          1 estrela
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-custom-yellow rounded" style={{"width": "1%"}}></div>
        </div>
        <span className="text-base font-medium text-black dark:text-gray-400">
          1%
        </span>
      </div>
    </div>
  );
};

export default RatingPercentElement;
