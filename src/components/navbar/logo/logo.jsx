import { NavLink, useLocation } from "react-router-dom";
import Man from "../../../assets/man.png";
import "./logo.css";

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`logo ${isHomePage ? "logoHome" : ""}`}>
      <NavLink to={"/"}>
        <img src={Man} alt="profile-photo" />
      </NavLink>
    </div>
  );
};

export default Logo;
