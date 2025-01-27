import "./navbar.css";
import Logo from "./logo/logo.jsx";
import Navlinks from "./navlinks/navlinks.jsx";
import Theme from "./theme/theme.jsx";
import { useLocation } from "react-router-dom";
import { useScrollStore } from "../../stores/scroll.jsx";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isScrolled } = useScrollStore();

  return (
    <nav className={`navbar ${!isScrolled && isHomePage ? "sticky" : ""}`}>
      <Logo />
      <Navlinks />
      <Theme />
    </nav>
  );
};

export default Navbar;
