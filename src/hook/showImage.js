import { create } from 'zustand'

export const useShoppingCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (index) =>
    set((state) => ({ items: state.items.filter((_, i) => i !== index) })),
  clearCart: () => set({ items: [] })
}))
