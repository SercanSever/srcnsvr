import "./navbar.css";
import Logo from "./logo/logo.jsx";
import Navlinks from "./navlinks/navlinks.jsx";
import Theme from "./theme/theme.jsx";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Navlinks />
      <Theme />
    </nav>
  );
};

export default Navbar;
