import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import { useThemeStore } from "./stores/theme-store";
import { useEffect } from "react";
import Footer from "./components/footer/footer";
import { useScrollStore } from "./stores/scroll";
import Stack from "./pages/stack/stack";
import Projects from "./pages/projects/projects";
import ScrollToTop from "./components/scroll-top/scroll-top";
import Workspace from "./pages/workspace/workspace";
import NotFound from "./pages/404";

// import { useNavMobileStore } from "./stores/nav-mobile";

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
    <>
      <div className="container">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
