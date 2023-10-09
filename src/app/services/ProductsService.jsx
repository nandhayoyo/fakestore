import axios from "axios";
import { BASE_URL } from "../constants/variable";

const ProductsServiceRequest = axios.create({
  baseURL: BASE_URL,
});

export const getCategories = async () => {
  const res = await ProductsServiceRequest.get("/products/categories");
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await ProductsServiceRequest.get(
    `/products/category/${category}`
  );
  return res.data;
};

export const getProducts = async () => {
  const res = await ProductsServiceRequest.get("/products");
  return res.data;
};
