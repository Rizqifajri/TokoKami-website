// ProductList.jsx (Perbaikan)

import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer/Footer";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-2  gap-5 px-5">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white border-2 rounded-md p-2 cursor-pointer text-color-black-50 hover:text-color-electric-violet-400 transition-all">
            <Link href={`/products/${product.id}`} passHref>
              <div className="flex flex-col h-full justify-between">
                <Image
                  className="product object-contain"
                  src={product.image}
                  alt={product.title}
                  width={350}
                  height={350}
                />
                <div className="flex flex-col bottom-0">
                  <h3 className="truncate font-bold md:text-xl text-sm p-4 ">
                    {product.title}
                  </h3>
                  <p className="bg-green-100 w-full text-sm">
                    ${product.price}
                  </p>
                  <p className="truncate">{product.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
