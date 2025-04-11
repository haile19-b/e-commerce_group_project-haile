// store/productStore.js
import { create } from "zustand";
import Products, { promotions } from "./Store";

export const useProductStore = create((set) => ({
  products: Products,
  
  addProducts: (newProducts) => set((state) => ({
    products: [...state.products, ...newProducts]
  })),
  
  updateProduct: (productId, updatedData) => set((state) => ({
    products: state.products.map(product => 
      product.id === productId ? { ...product, ...updatedData } : product
    )
  })),
  

  removeProduct: (productId) => set((state) => ({
    products: state.products.filter(product => product.id !== productId)
  })),
  

  toggleSave: (productId) => set((state) => ({
    products: state.products.map(product =>
      product.id === productId 
        ? { ...product, isSaved: !product.isSaved }
        : product
    )
  })),
  

  toggleCart: (productId) => set((state) => ({
    products: state.products.map(product =>
      product.id === productId
        ? { ...product, isInCart: !product.isInCart }
        : product
    )
  })),
}));


export const usePromotionStore = create((set) => ({
  promotions: promotions,
  
  addPromotions: (newPromotions) => set((state) => ({
    promotions: [...state.promotions, ...newPromotions]
  })),
  
  updatePromotion: (promotionId, updatedData) => set((state) => ({
    promotions: state.promotions.map(promotion => 
      promotion.id === promotionId ? { ...promotion, ...updatedData } : promotion
    )
  })),
  
  removePromotion: (promotionId) => set((state) => ({
    promotions: state.promotions.filter(promotion => promotion.id !== promotionId)
  })),
}))