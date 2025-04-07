// store/productStore.js
import { create } from "zustand";
import { Products } from "./store";

export const useProductStore = create((set) => ({
  // Initialize with your product data
  products: Products,
  
  // Add new products
  addProducts: (newProducts) => set((state) => ({
    products: [...state.products, ...newProducts]
  })),
  
  // Update a specific product
  updateProduct: (productId, updatedData) => set((state) => ({
    products: state.products.map(product => 
      product.id === productId ? { ...product, ...updatedData } : product
    )
  })),
  
  // Remove a product
  removeProduct: (productId) => set((state) => ({
    products: state.products.filter(product => product.id !== productId)
  })),
  
  // Toggle save status
  toggleSave: (productId) => set((state) => ({
    products: state.products.map(product =>
      product.id === productId 
        ? { ...product, isSaved: !product.isSaved }
        : product
    )
  })),
  
  // Toggle cart status
  toggleCart: (productId) => set((state) => ({
    products: state.products.map(product =>
      product.id === productId
        ? { ...product, isInTheCart: !product.isInTheCart }
        : product
    )
  }))
}));