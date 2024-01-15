// Category.jsx
import React from "react";

const Category = ({ products, setFilteredProducts }) => {
  console.log(products);
  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "electronics",
  ];

  const handleCategory = (category) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <h1 className="bg-home text-xl p-10">Welcome to, TokoKami !</h1>
      <div className="flex flex-row justify-center gap-5 text-sm m-5">
        {categories?.map((category, index) => (
          <button
            key={index}
            className={
              "border-2 rounded-2xl p-1 hover:bg-blue-400 hover:text-white transition-all"
            }
            onClick={() => handleCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Category;
