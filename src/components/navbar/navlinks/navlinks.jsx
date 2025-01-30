import { NavLink } from "react-router-dom";
import "./navlinks.css";

const Navlinks = () => {
  return (
    <div className="routes">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <span className="text">
          <p>home</p>
        </span>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <span className="text">
          <p>projects</p>
        </span>
      </NavLink>
      <NavLink
        to="/stack"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <span className="text">
          <p>stack</p>
        </span>
      </NavLink>
      <NavLink
        to="/workspace"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <span className="text">
          <p>workspace</p>
        </span>
      </NavLink>
    </div>
  );
};

export default Navlinks;
