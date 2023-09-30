"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants/variable";
import Link from "next/link";
import Category from "./component/Category";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [loading, isLoading] = useState(false);

  console.log("ENV", process.env.NEXT_PUBLIC_HOST);

  const fetchProduct = async () => {
    isLoading(true);
    const res = await fetch(BASE_URL + "products");
    const data = await res.json();

    setProduct(data);
    isLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto mt-20 p-4">
        {product.length > 0
          ? product.map((value) => (
              <Link
                key={value.id}
                href={`/product/${value.id}`}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mb-10 p-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-72 h-[265px] bg-red-50 flex-none">
                  <img
                    className="object-cover w-full h-[265px] object-cover bg-gray-200"
                    src={value.image}
                    alt={value.title}
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {value.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </Link>
            ))
          : [0, 1, 2, 3].map((index) => (
              <div
                key={index}
                role="status"
                class="mb-10 p-5 border border-gray-200 rounded-lg space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
              >
                <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div class="w-full">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span class="sr-only">Loading...</span>
              </div>
            ))}
      </section>
    </>
  );
}
