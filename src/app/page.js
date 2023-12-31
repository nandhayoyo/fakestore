"use client";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import Jumbotron from "./component/Jumbotron";
import AllProducts from "./component/AllProducts";
import Category from "./component/Category";
import EmblaCarousel from "./util/EmblaCarousel";
import { parseCookies } from "nookies";

export default function Home() {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const cookies = parseCookies();
  const token = cookies.token;

  console.log("token saya > ",token);
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
