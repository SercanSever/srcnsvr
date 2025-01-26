import { create } from "zustand";

export const useThemeStore = create((set) => ({
  currentTheme: localStorage.getItem("theme") || "system",
  currentThemeName: localStorage.getItem("switch") || "system",
  changeTheme: () => {
    set((state) => {
      let newTheme = "";
      let newThemeName = "";
      if (state.currentThemeName === "light") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          newTheme = "dark";
          newThemeName = "system";
        } else {
          newTheme = "light";
          newThemeName = "system";
        }
      }
      if (state.currentThemeName === "system") {
        newTheme = "dark";
        newThemeName = "dark";
      }
      if (state.currentThemeName === "dark") {
        newTheme = "light";
        newThemeName = "light";
      }
      localStorage.setItem("theme", newTheme);
      localStorage.setItem("switch", newThemeName);
      return { currentTheme: newTheme, currentThemeName: newThemeName };
    });
  },
}));
