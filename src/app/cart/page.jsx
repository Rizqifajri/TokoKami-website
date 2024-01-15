// CartPage.js
"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "@/context/CartContext";
import CheckoutModal from "@/components/Cart/CheckoutModal";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [quantityMap, setQuantityMap] = useState({});
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Load quantityMap from localStorage on component mount
    const storedQuantityMap =
      JSON.parse(localStorage.getItem("quantityMap")) || {};
    console.log("Stored quantityMap:", storedQuantityMap);

    // Only set quantityMap if it's empty
    if (Object.keys(quantityMap).length === 0) {
      setQuantityMap(storedQuantityMap);
    }
  }, []);

  useEffect(() => {
    // Save quantityMap to localStorage whenever it changes
    localStorage.setItem("quantityMap", JSON.stringify(quantityMap));
    console.log("Saved quantitymap to local", quantityMap);
  }, [quantityMap]);

  const increaseQuantity = (itemId) => {
    const stringItemId = String(itemId);
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [stringItemId]: (prevQuantityMap[stringItemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    const stringItemId = String(itemId);
    if (quantityMap[stringItemId] > 1) {
      setQuantityMap((prevQuantityMap) => ({
        ...prevQuantityMap,
        [stringItemId]: prevQuantityMap[stringItemId] - 1,
      }));
    }
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId); // Pass itemId directly
  };

  const toggleSelected = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(
          (selectedItemId) => selectedItemId !== itemId
        );
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleCheckout = () => {
    const items = selectedItems.reduce(
      (total, itemId) => total + (quantityMap[itemId] || 1),
      0
    );
    console.log(selectedItems)
    const price = selectedItems.reduce((total, itemId) => {
      const item = cartItems.find((cartItem) => cartItem.id === itemId);
      return total + item.price * (quantityMap[itemId] || 1);
    }, 0);

    setTotalItems(items);
    setTotalPrice(price);
    setIsCheckoutModalOpen(true);
  };

  useEffect(() => {
    console.log("Updated quantityMap:", quantityMap);
  }, [quantityMap, cartItems]);

  return (
    <div className="flex flex-col justify-center m-10">
      <h1 className="text-center text-3xl mb-10">Your Product Cart</h1>
      {cartItems.map((item) => (
        <section
          key={item.id}
          className="w-full bg-gray-100 h-auto border-2 rounded-md mb-4"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%)",
          }}>
          <div className="flex p-4 items-center">
            <div className="dark:bg-black/10 mr-10">
              <label className="text-white">
                <input
                  className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5 "
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelected(item.id)}
                />
              </label>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="h-25 w-56 object-cover rounded"
            />
            <div className="ml-4 flex-grow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">{`$${
                item.price ? item.price * (quantityMap[item.id] || 1) : 0
              }`}</p>
            </div>
            <div className="flex items-center gap-5">
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-green-500 text-white px-2 rounded-l">
                +
              </button>
              <span className="px-4">{quantityMap[item.id] || 1}</span>
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-red-200 hover:bg-red-500 transition-all text-white px-2 rounded-r">
                -
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="cursor-pointer transition-all 
                      bg-gray-700 text-white px-6 py-2 rounded-lg
                      border-red-400
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-red-300 shadow-green-300 active:shadow-none">
                Remove
              </button>
            </div>
          </div>
        </section>
      ))}
      <button
        onClick={handleCheckout}
        className="cursor-pointer transition-all 
                  bg-gray-700 text-white px-6 py-2 rounded-lg
                  border-green-400
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
        CHECKOUT
      </button>
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        handleClose={() => setIsCheckoutModalOpen(false)}
        totalItems={totalItems}
        totalPrice={totalPrice}
        selectedItems={selectedItems}
        cartItems = {cartItems}
      />
    </div>
  );
};

export default CartPage;
