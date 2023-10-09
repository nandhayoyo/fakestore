"use client";
// import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Jumbotron from "./component/Jumbotron";
import AllProducts from "./component/AllProducts";
import Category from "./component/Category";

export default function Home() {

  const handleClickMaintenance = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };

  return (
    <>
      <Toaster />
      <Jumbotron />
      <Category handleClickMaintenance={handleClickMaintenance} />
      <AllProducts handleClickMaintenance={handleClickMaintenance} />
    </>
  );
}
