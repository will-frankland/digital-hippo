import { Product } from "../payload-types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"

// Add items
// Remove items
// Clear cart
// (Keep track of cart items)

export type CartItem = {
  product: Product
}

type CartState = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  // Saves to local storage
  persist(
    (set) => ({
      items: [],
      addItem: (product) => set((state) => {
        return { items: [...state.items, { product }] }
      }),
      removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.product.id !== id)
      })),
      clearCart: () => set({items: []})
    }), {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)