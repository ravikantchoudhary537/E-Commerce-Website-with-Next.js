import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link href="/product" className=" transform overflow-hidden bg-white duration-200 cursor-pointer hover:scale-105">
      <img src="/product-1.webp" className="" alt="img" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;107</p>
          <p className="text-base  font-medium line-through">&#8377;275</p>
          <p className="ml-auto text-base font-medium text-green-500">
            30 % off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
