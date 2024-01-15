// CartContext.js
"use client";
import React, { createContext, useReducer, useEffect, useState } from "react";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";

// reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.itemId);
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";

  const getStoredCartItems = () => {
    try {
      const storedData = isBrowser ? localStorage.getItem("cartItems") : null;
      return storedData ? JSON.parse(storedData) : [];
    } catch (err) {
      console.error("error parsing localStorage data :", err);
      return [];
    }
  };

  const saveCartItemsToLocalStorage = (items) => {
    try {
      if (isBrowser) {
        localStorage.setItem("cartItems", JSON.stringify(items));
      }
    } catch (err) {
      console.error("error saving data to localStorage ", err);
    }
  };

  const getStoredQuantityMap = () => {
    try {
      const storedData = isBrowser ? localStorage.getItem("quantityMap") : null;
      return storedData ? JSON.parse(storedData) : {};
    } catch (err) {
      console.error("error parsing localStorage data :", err);
      return {};
    }
  };

  const saveQuantityMapToLocalStorage = (quantityMap) => {
    try {
      if (isBrowser) {
        localStorage.setItem("quantityMap", JSON.stringify(quantityMap));
      }
    } catch (err) {
      console.error("error saving data to localStorage ", err);
    }
  };

  const storedCartItems = getStoredCartItems();
  const [cartItems, dispatch] = useReducer(cartReducer, storedCartItems || []);
  const [quantityMap, setQuantityMap] = useState(getStoredQuantityMap());

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, item });
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [item.id]: (prevQuantityMap[item.id] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_ITEM, itemId });
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [itemId]: undefined,
    }));
  };

  useEffect(() => {
    saveCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  useEffect(() => {
    saveQuantityMapToLocalStorage(quantityMap);
  }, [quantityMap]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, quantityMap }}>
      {children}
    </CartContext.Provider>
  );
};
