import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  categories: [],
  selectedCategory: "All categories",
  searchResults: [],
  cart: [],

  setProducts: (products) => set({ products }),

  // Category
  setCategories: (categories) => set({ categories }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  // Search
  setSearchResults: (results) => set({ searchResults: results }),

  // Cart
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useProductsStore;
