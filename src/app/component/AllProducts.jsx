import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import {
  getProductsByCategory,
  getProducts,
} from "@/app/services/ProductsService";
import useProductsStore from "../store/productsStore";

const AllProducts = () => {
  const { products, setProducts, selectedCategory } = useProductsStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsData;
        if (selectedCategory === "All categories") {
          productsData = await getProducts();
        } else {
          productsData = await getProductsByCategory(selectedCategory);
        }
        setProducts(productsData);
        console.log(productsData);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, [setProducts, selectedCategory]);

  return (
    <section className="max-w-screen-xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
      {products.length > 0
        ? products.map((value) => (
            <div
              key={value.id}
              className="w-full max-w-sm mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/product/${value.id}`}>
                <div className="w-full flex  items-center justify-center">
                  <img
                    className="p-8 rounded-t-lg w-38 h-48"
                    src={value.image}
                    alt={value.title}
                  />
                </div>
                <div className="flex flex-col justify-between px-5 pb-5 leading-normal mt-10">
                  <h5 className="mb-5 h-14 text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden overflow-ellipsis">
                    {value.title}
                  </h5>
                  <span className="text-2xl font-bold text-green-500 dark:text-white">
                    ${value.price}
                  </span>
                  <div className="flex items-center mt-2">
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                      {value.rating.rate}
                    </p>
                    <span className="w-2 h-2 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                    >
                      {value.rating.count} Sold
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))
        : [0, 1, 2, 3].map((index) => (
            <div
              key={index}
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

              <span className="sr-only">Loading...</span>
            </div>
          ))}
    </section>
  );
};

export default AllProducts;
