import axios from "axios";
import { BASE_URL } from "../constants/variable";

export const ProductsService = () => {
  const ProductsServiceRequest = axios.create({
    baseURL: BASE_URL,
  });

  const getProducts = async () => {
    const res = await ProductsServiceRequest.get("/products", {});

    return res.data;
  };

  return {
    getProducts,
  };
};
