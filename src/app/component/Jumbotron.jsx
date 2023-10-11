import React from "react";
import { toast } from "react-hot-toast";
import bear from "../assets/image/bear.png";
import Image from "next/image";

const Jumbotron = () => {
  

  const handleClick = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };
  return (
    <section className="mt-20 bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-500 dark:text-white">
            Welcome to Our Site!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We proudly present you our newest e-commerce, a place where you can
            find the best quality products from various categories. We are
            committed to providing a pleasant and easy online shopping
            experience for our customers.
          </p>
          <a
            href="#"
            onClick={handleClick}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-black-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            onClick={handleClick}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>


      <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-0">
        <div className="mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-0">
          <span className="font-semibold text-gray-400 uppercase">
            OUR TECH STACK
          </span>
          <div className="flex flex-wrap max-w-screen-xl mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:mx-40 sm:mx-40 justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="#"
              className="w-full mb-2 md:w-auto md:mb-0 hover:text-gray-800 dark:hover:text-gray-400 text-center flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="auto"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <h1 className="text-md font-semibold mt-2">NEXT JS</h1>
            </a>
            <a
              href="#"
              className="w-full mb-2 md:w-auto md:mb-0 hover:text-gray-800 dark:hover:text-gray-400 text-center flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="auto"
                viewBox="0 0 24 24"
              >
                <path d="M22.105 7.553c-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293L6.7 8.714c.546-.425 4.031-.015 5.552 1.194C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658L22.105 7.553zM16.192 15.391c-.614.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293L1.7 15.714c.545-.427 4.032-.014 5.552 1.194C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658l-1.834-.789C16.881 15.001 16.583 15.275 16.192 15.391z"></path>
              </svg>
              <h1 className="text-md font-semibold mt-2">Tailwind CSS</h1>
            </a>
            <a
              href="#"
              className="w-full mb-2 mt-3 md:w-auto md:mb-0 hover:text-gray-800 dark:hover:text-gray-400 text-center flex flex-col items-center"
            >
              <svg
                width="50"
                height="auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 22"
              >
                <path d="M15 11 9.186 8.093a.933.933 0 0 1-.166-.039L9 8.047v6.885c0 .018.009.036.011.054l2.49-3.125L15 11Z" />
                <path d="m10.366 2.655 5.818 3.491a4.2 4.2 0 0 1 1.962 3.969 3.237 3.237 0 0 1-2.393 2.732c-.024.007-.048.005-.073.011-.065.032-.132.06-.2.084l-2.837.7-2.077 2.606a1.99 1.99 0 0 1-.7.56c.05.036.09.081.144.113a2.127 2.127 0 0 0 2.08.037c.618-.348 2.242-1.262 4.836-3.038l.291-.2c1.386-.94 3.772-2.565 4.138-4.428A10.483 10.483 0 0 0 6.869 1.349c1.211.302 2.385.74 3.497 1.306Z" />
                <path d="M4.023 16.341V9.558A3.911 3.911 0 0 1 5.784 6.3a4.062 4.062 0 0 1 3.58-.257c.184.031.362.088.53.169l6 3c.086.052.168.11.246.174a2.247 2.247 0 0 0-.994-1.529L9.4 4.407c-1.815-.9-4.074-1.6-5.469-1.152a10.46 10.46 0 0 0 .534 15.953 18.151 18.151 0 0 1-.442-2.867Z" />
                <path d="m18.332 15.376-.283.192c-2.667 1.827-4.348 2.773-4.9 3.083a4.236 4.236 0 0 1-2.085.556 4.092 4.092 0 0 1-2.069-.561 3.965 3.965 0 0 1-1.951-3.373A1.917 1.917 0 0 1 7 15V8c0-.025.009-.049.01-.074A1.499 1.499 0 0 0 6.841 8a1.882 1.882 0 0 0-.82 1.592v6.7c.072 1.56.467 3.087 1.16 4.486A10.474 10.474 0 0 0 21.3 13.047a20.483 20.483 0 0 1-2.968 2.329Z" />
              </svg>
              <h1 className="text-md font-semibold mt-2">Flowbite UI</h1>
            </a>
            <a
              href="#"
              className="w-full mb-2 mt-3 md:w-auto md:mb-0 hover:text-gray-800 dark:hover:text-gray-400 text-center flex flex-col items-center"
            >
              <Image src={bear} width={50} height={100} />

              <h1 className="text-md font-semibold mt-2">Zustand</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
