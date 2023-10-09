import {create} from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  categories: [],
  selectedCategory: "All categories",

  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export default useProductsStore;
