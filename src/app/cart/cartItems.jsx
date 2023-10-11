"use client";
import React from "react";
import useProductsStore from "../store/productsStore";
import Image from "next/image";

const CartItems = ({ data }) => {
  return (
    <div>
      
      <p>Item: {data.title}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
};

export default CartItems;
