import { create } from "zustand";

// Yardımcı Fonksiyon
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useThemeStore = create((set) => ({
  currentTheme: localStorage.getItem("theme") || getSystemTheme(),
  currentThemeName: localStorage.getItem("switch") || "system",
  changeTheme: () => {
    set((state) => {
      let newTheme = "";
      let newThemeName = "";

      switch (state.currentThemeName) {
        case "light":
          newTheme = getSystemTheme();
          newThemeName = "system";
          break;
        case "system":
          newTheme = "dark";
          newThemeName = "dark";
          break;
        case "dark":
          newTheme = "light";
          newThemeName = "light";
          break;
        default:
          newTheme = getSystemTheme();
          newThemeName = "system";
          break;
      }

      // LocalStorage güncelle
      localStorage.setItem("theme", newTheme);
      localStorage.setItem("switch", newThemeName);

      return { currentTheme: newTheme, currentThemeName: newThemeName };
    });
  },
}));
