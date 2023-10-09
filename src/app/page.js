"use client";
// import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Jumbotron from "./component/Jumbotron";
import AllProducts from "./component/AllProducts";
import Category from "./component/Category";
import EmblaCarousel from "./util/EmblaCarousel";

export default function Home() {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const handleClickMaintenance = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };

  return (
    <>
      <Toaster />
      <Jumbotron />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Category handleClickMaintenance={handleClickMaintenance} />
      <AllProducts handleClickMaintenance={handleClickMaintenance} />
    </>
  );
}
