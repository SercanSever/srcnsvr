import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import { useThemeStore } from "./stores/theme-store";
import { useEffect } from "react";
import Footer from "./components/footer/footer";
import { useScrollStore } from "./stores/scroll";

function App() {
  const { currentTheme } = useThemeStore();
  const { updateScroll } = useScrollStore();
  useEffect(() => {
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    const handleScroll = () => {
      updateScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateScroll]);

  return (
    <div className="container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
