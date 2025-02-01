import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import NavlinksMobile from "./components/navbar/navlinks-mobile/navlinks-mobile.jsx";
import { useNavMobileStore } from "./stores/nav-mobile.jsx";
import { HelmetProvider } from 'react-helmet-async';

export function Root() {
  const { isOpen } = useNavMobileStore();

  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Analytics />
          <div className={`${isOpen ? "overlay" : ""}`} />
          <App />
          <NavlinksMobile />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
