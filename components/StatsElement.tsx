

import React from "react";
import { FaArrowUp } from "react-icons/fa6";


const StatsElement = () => {
  return (
    <div className="w-80 h-32 bg-blue-500 text-white flex flex-col justify-center items-center rounded-md max-md:w-full">
      <h4 className="text-xl text-white">Novos produtos</h4>
      <p className="text-2xl font-bold">2,230</p>
      <p className="text-green-300 flex gap-x-1 items-center"><FaArrowUp />12.5% Desde o mês passado</p>
    </div>
  );
};

export default StatsElement;
