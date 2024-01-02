// Page.jsx
"use client"
import { useState } from "react";
import getProducts from "@/utils/getProducts";
import Category from "@/components/ProductList/Category";
import ProductList from "@/components/ProductList";

const Page = () => {
  const { productList } = getProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div>
      <Category
        products={productList}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductList
        products={filteredProducts.length ? filteredProducts : productList}
      />
    </div>
  );
};

export default Page;
