"use client";

import getProducts from "@/utils/getProducts";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/app/loading";

const ProductDetails = ({ params }) => {
  const router = useRouter();
  const { addToCart } = useContext(CartContext);
  const { id } = params;
  const { productList } = getProducts(id);
  const product = productList;

  console.log("Product:", product);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      router.push("/cart");
    } else {
      console.log("product gagal ditambahkan");
    }
  };
  console.log(addToCart);

  return (
    <div className="">
      {product ? (
        <div className="m-5 p-5 sm:m-10 lg:p-10">
          <h1 className="lg:text-3xl text-center mb-24 text-md font-bold ">
            {product?.title}
          </h1>
          <div className="lg:flex justify-center gap-24 mx-auto ">
            <img
              className="product imgdetail w-28 sm:w-40 object-contain mb-5 mx-auto lg:mx-0"
              src={product?.image}
              alt="ImageProductisLoading"
              width={350}
              height={350}
              loading="eager"
            />

            <div className="bg-gray-300 w-2 h-auto rounded-full ">

            </div>

            <div className="flex flex-col gap-5 items-center ">
              <p className="h-auto md:w-[500px] lg:text-2xl text-justify text-sm ">
                {product?.description}
              </p>
              <div className="flex flex-wrap gap-2 ">
                <p className="flex text-sm bg-gray-100 w-fit p-1 rounded-xl items-center ">
                  Category : {product?.category}
                </p>
                <p className="text-sm bg-green-100 w-fit p-1 rounded-xl items-center hover:bg-green-300 transition-all">
                  Price : $ {product?.price}
                </p>
                <p className="text-sm bg-blue-100 w-fit p-1 rounded-xl items-center">
                  Rating : {product.rating?.rate}
                </p>
                <p className="text-sm bg-blue-100 w-fit p-1 rounded-xl items-center">
                  Stock : {product.rating?.count}
                </p>
              </div>{" "}
              <button
                onClick={handleAddToCart}
                className="bg-black text-white p-2 w-full hover:bg-gray-500 transition-all">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default ProductDetails;
