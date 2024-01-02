// SearchPage.jsx
"use client";
import React from "react";
import { useState } from "react";
import ProductList from "@/components/ProductList";
import getProducts from "@/utils/getProducts";

const SearchPage = ({ params }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productList } = getProducts();

  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  console.log(decodedKeyword);

  const filtered = productList.filter((product) => {
    return product.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <h2 className="p-5 text-xl">Searching for {keyword} ...</h2>
      <ProductList products={filtered} />
    </section>
  );
};

export default SearchPage;
