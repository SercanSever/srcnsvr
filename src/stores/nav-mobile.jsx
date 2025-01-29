import { create } from "zustand";

export const useNavMobileStore = create((set) => ({
  isOpen: false,
  toggleNav: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
}));
