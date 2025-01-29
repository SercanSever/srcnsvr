import "./navbar.css";
import Logo from "./logo/logo.jsx";
import Navlinks from "./navlinks/navlinks.jsx";
import Theme from "./theme/theme.jsx";
import { useLocation } from "react-router-dom";
import { useScrollStore } from "../../stores/scroll.jsx";
import { useNavMobileStore } from "../../stores/nav-mobile.jsx";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isScrolled } = useScrollStore();
  const { toggleNav, isOpen } = useNavMobileStore();

  return (
    <nav className={`navbar ${!isScrolled && isHomePage ? "sticky" : ""}`}>
      <Logo />
      <Navlinks />
      <button className="menu" disabled={isOpen} onClick={toggleNav}>
        Menu
      </button>
      <Theme />
    </nav>
  );
};

export default Navbar;
