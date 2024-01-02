// ProductList.jsx (Perbaikan)

import Link from "next/link";
import Image from "next/image";

const ProductList = ({ products }) => {
  return (
    <div className="grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 grid-cols-2  gap-5 px-5">
      {products?.map((product) => (
        <div
          key={product.id}
          className="bg-white border-2 rounded-md p-5 cursor-pointer text-color-black-50 hover:text-color-electric-violet-400 transition-all">
          <Link href={`/products/${product.id}`} passHref>
            <div>
              <Image
                className=""
                src={product.image}
                alt={product.title}
                width={350}
                height={350}
              />
              <div className="flex flex-col">
                <h3 className="truncate font-bold md:text-xl text-md p-4">
                  {product.title}
                </h3>
                <p className="bg-green-100 w-full">Price : {product.price} $</p>
                <p className="truncate">{product.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;