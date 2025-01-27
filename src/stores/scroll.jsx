import { create } from "zustand";

export const useScrollStore = create((set) => ({
  isScrolled: false,
  updateScroll: (scrollY) => {
    set({
      isScrolled: scrollY >= 100,
    });
  },
}));
