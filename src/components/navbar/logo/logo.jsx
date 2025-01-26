import { NavLink } from "react-router-dom";
import Man from "../../../assets/man.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to={"/"}>
        <img src={Man} alt="profile-photo" />
      </NavLink>
    </div>
  );
};

export default Logo;
