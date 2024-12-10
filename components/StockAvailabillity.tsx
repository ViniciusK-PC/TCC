

import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { FaXmark } from "react-icons/fa6";


const StockAvailabillity = ({ stock, inStock } : { stock: number, inStock: number }) => {
  return (
    <p className='text-xl flex gap-x-2 max-[500px]:justify-center'>Disponibilidade: 
    { inStock === 1 ? <span className='text-success flex items-center gap-x-1'>Em Estoque<FaCheck /></span> :  <span className='text-error flex items-center gap-x-1'>Fora de estoque <FaXmark /></span>}
    </p>
  )
}

export default StockAvailabillity