"use client";
import Link from "next/link";
import { useState } from "react";
import { destroyCookie } from "nookies";
import Login from "./Login";
import useProductsStore from "../store/productsStore";
import Image from "next/image";
import cart from "../assets/image/cart.svg";

export default function NavigasiBar() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItem = useProductsStore((state) => state.cart);
  console.log("item di cart", cartItem);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleLogout = () => {
    destroyCookie(null, "token", {
      path: "/",
    });
    setIsLoggedIn(false);
    window.location.reload();
  };

  const onHandleMobileMenu = () => setIsShowMobileMenu(!isShowMobileMenu);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img
            src={`/assets/images/logoipsum.svg`}
            className="h-8 mr-3"
            alt="store Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-green-600 dark:text-white">
            FakeStore
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
            isShowMobileMenu ? "active" : ""
          }`}
          aria-controls="navbar-default"
          onClick={onHandleMobileMenu}
          aria-expanded={isShowMobileMenu ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isShowMobileMenu ? "block" : "hidden"
          } md:block w-full md:w-auto md:order-1 md:inline-block md:flex md:items-center md:justify-end`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>

            <li>
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block py-2 pl-3 pr-4 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Logout
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="block py-2 pl-3 pr-4 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Login
                </button>
              )}
              {isLoginModalOpen && (
                <Login
                  onClose={closeLoginModal}
                  setIsLoggedIn={setIsLoggedIn}
                />
              )}
            </li>

            <li>
              {isLoggedIn ? (
                <Link href="/cart">
                  <div className="relative inline-grid pl-3 grid place-item-center items-center">
                    {cartItem.length > 0 && (
                      <div className="absolute aspect-square h-4 grid place-items-center -translate-y-1 translate-x-1/2 text-white rounded-full bg-blue-400 top-0 right-0">
                        <p className="text-xs">{cartItem.length}</p>
                      </div>
                    )}
                    <Image src={cart} width={25} />
                  </div>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="block py-2 pl-3 pr-4 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover-bg-gray-700 dark:hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
                >
                  <Image src={cart} width={25} />
                </button>
              )}
              {isLoginModalOpen && (
                <Login
                  onClose={closeLoginModal}
                  setIsLoggedIn={setIsLoggedIn}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
