import "./navbar.css";
import Logo from "./logo/logo.jsx";
import Navlinks from "./navlinks/navlinks.jsx";
import Theme from "./theme/theme.jsx";
import { useLocation } from "react-router-dom";
import { useScrollStore } from "../../stores/scroll.jsx";
import { useNavMobileStore } from "../../stores/nav-mobile.jsx";
import { useRef } from "react";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const menuOpenRef = useRef();
  const { isScrolled } = useScrollStore();
  const { toggleNav, isOpen } = useNavMobileStore();

  return (
    <nav className={`navbar ${!isScrolled && isHomePage ? "sticky" : ""}`}>
      <Logo />
      <Navlinks />
      <div
        ref={menuOpenRef}
        className="menu"
        disabled={isOpen ? true : false}
        onClick={toggleNav}
      >
        Menu
      </div>
      <Theme />
    </nav>
  );
};

export default Navbar;
