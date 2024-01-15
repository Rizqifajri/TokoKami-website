// Page.jsx
"use client";
import { useState, useEffect } from "react";
import getProducts from "@/utils/getProducts";
import Category from "@/components/ProductList/Category";
import ProductList from "@/components/ProductList";
import Loading from "./loading";

const Page = () => {
  const [loading, setLoading] = useState(true); // Tambahkan state untuk loading
  const { productList } = getProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Gunakan useEffect untuk menangani loading
  useEffect(() => {
    // Simulasikan waktu loading dengan setTimeout
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ganti dengan waktu yang sesuai

    // Membersihkan timeout saat komponen dibongkar
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading ? (
        // Tampilkan animasi loading
        <Loading/>
      ) : (
        // Tampilkan kategori dan daftar produk setelah loading selesai
        <>
          <Category
            products={productList}
            setFilteredProducts={setFilteredProducts}
          />
          <ProductList
            products={filteredProducts.length ? filteredProducts : productList}
          />
        </>
      )}
    </div>
  );
};

export default Page;
