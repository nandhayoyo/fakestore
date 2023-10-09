"use client";
import { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_DETAIL } from "../../constants/variable";
import { toast } from "react-hot-toast";
import useProductsStore from "@/app/store/productsStore";

export default function ProductDetail(params) {
  const [productDetail, setProductDetail] = useState({});
  // const { products } = useProductsStore();

  // useEffect(() => {
  //   // Cari produk dengan ID yang sesuai di dalam array products
  //   const product = products.find((product) => product.id === params.productId);

  //   // Jika produk ditemukan, atur detail produk
  //   if (product) {
  //     setProductDetail(product);
  //   } else {
  //     console.error("Product not found");

  //     console.log(products);
  //     console.log(params.productId);
  //     toast.error("Product not found");
  //   }
  // }, [params.productId, products]);

  const fetchDetail = async () => {
    const res = await fetch(`${BASE_URL}/products/${params.params.productId}`);
    const data = await res.json();

    setProductDetail(data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);


  const handleClick = (e) => {
    toast.success("Dummy Buy Success!");
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
                  onClick={handleClick}
                  className="font-bold bg-amber-200 rounded-lg p-3 mt-2 hover:bg-blue-200"
                >
                  Dummy Buy
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
