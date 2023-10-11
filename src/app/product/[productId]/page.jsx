"use client";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/variable";
import { toast } from "react-hot-toast";
import useProductsStore from "@/app/store/productsStore";
import { parseCookies } from "nookies";

export default function ProductDetail(params) {
  const [productDetail, setProductDetail] = useState({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { addToCart } = useProductsStore();

  const fetchDetail = async () => {
    const res = await fetch(`${BASE_URL}/products/${params.params.productId}`);
    const data = await res.json();

    setProductDetail(data);
  };

  function checkUserLoginStatus() {
    const cookies = parseCookies();
    const token = cookies.token;

    return !!token;
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleAddToCart = () => {
    if (Object.keys(productDetail).length > 0) {
      const isLoggedIn = checkUserLoginStatus();
      if (isLoggedIn) {
        addToCart(productDetail);
        toast.success("Product added to cart!");
        console.log("Product added to cart ::", productDetail);
      } else {
        toast.error("Login to add your item to Cart.");
        openLoginModal();
      }
    }
  };

  return (
    <>
      <section className="max-w-screen-xl mx-auto mt-20 p-4">
        <div>
          {Object.keys(productDetail).length > 0 && (
            <div
              className="flex flex-col md:flex-row lg:flex-row gap-5"
              key={productDetail.id}
            >
              <div className="image">
                <img
                  src={productDetail.image}
                  alt={productDetail.title}
                  width={500}
                />
              </div>
              <div className="pt-10 ml-5">
                <h1 className="font-bold text-xl">{productDetail.title}</h1>
                <h4 className="font-bold">{productDetail.category}</h4>
                <h4 className="font-bold text-green-500">
                  $ {productDetail.price}
                </h4>
                <p className="py-3">{productDetail.description}</p>

                
                <button
                  onClick={handleAddToCart}
                  className="font-bold bg-amber-200 rounded-lg p-3 mt-2 hover:bg-blue-200"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
