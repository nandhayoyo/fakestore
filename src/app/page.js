"use client";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Jumbotron from "./component/Jumbotron";
import useProductsStore from "@/app/store/productsStore";
import { getCategories } from "@/app/services/ProductsService";
import AllProducts from "./component/AllProducts";
// import Category from "./component/Category";

export default function Home() {
  const [loading, isLoading] = useState(false);
  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useProductsStore();

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(["All categories", ...categoriesData]);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, [setCategories]);

  const handleClickMaintenance = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false); // Close the dropdown when a category is selected
  };
  return (
    <>
      <Toaster />
      <Jumbotron />
      <section className="max-w-screen-xl mx-auto mt-5 ">
        <form>
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <div className="flex-shrink-0 z-10 inline-flex relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                {selectedCategory}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transition-transform ${
                    selectedCategory === "All categories"
                      ? showDropdown
                        ? "rotate-180"
                        : "rotate-0"
                      : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                className={`z-10 absolute ${
                  showDropdown ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                style={{
                  top: "calc(100% + 10px)",
                  left: 0,
                  zIndex: 1000,
                }}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        type="button"
                        onClick={handleCategorySelect.bind(null, category)}
                        className="inline-flex max-w-full px-4 py-2 overflow-hidden whitespace-nowrap text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Find something..."
                required
              />
              <button
                onClick={handleClickMaintenance}
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </section>
      <AllProducts handleClickMaintenance={handleClickMaintenance} />
    </>
  );
}
