import Link from "next/link";
import React from "react";
import { FaHouse } from "react-icons/fa6";

const Breadcrumb = () => {
  return (
    <div className="text-lg breadcrumbs pb-10 py-5 max-sm:text-base">
      <ul>
        <li>
          <Link href="/">
            <FaHouse className="mr-2" />
            Lar
          </Link>
        </li>
        <li>
          <Link href="/shop">Comprar</Link>
        </li>
        <li>
          <Link href="/shop">Todos os produtos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
