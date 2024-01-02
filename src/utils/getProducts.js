// getProducts.js
import { useState, useEffect } from "react";

const getProducts = (id) => {
  const [productList, setProductList] = useState([]);
  const url = !id
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}`
    : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        console.log(data);
        setProductList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { productList };
};

export default getProducts;
