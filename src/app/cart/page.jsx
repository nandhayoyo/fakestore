"use client";
import React from "react";
import CartItems from "./cartItems";
import useProductsStore from "../store/productsStore";

const Cart = () => {
  const { cart } = useProductsStore();

  return (
    <div className="max-w-screen-xl mx-auto mt-20 p-4">
      <section>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {cart.map((item) => (
                  <CartItems key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
