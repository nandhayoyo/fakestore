import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  categories: [],
  selectedCategory: "All categories",
  searchResults: [],

  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchResults: (results) => set({ searchResults: results }),
}));

export default useProductsStore;
