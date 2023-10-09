import {create} from "zustand";

const useProductDetailStore = create((set) => ({
  productDetail: {},
  setProductDetail: (product) => set({ productDetail: product }),
}));

export default useProductDetailStore;
