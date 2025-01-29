import { NavLink } from "react-router-dom";
import "./navlinks-mobile.css";
import { useNavMobileStore } from "../../../stores/nav-mobile";
import { useEffect, useRef } from "react";

const NavlinksMobile = () => {
  const { toggleNav } = useNavMobileStore();
  const mobileNavRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (!mobileNavRef.current.contains(e.target)) toggleNav();
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [toggleNav]);

  return (
    <div className="navlinksMobile" ref={mobileNavRef}>
      <div className="scroll"></div>
      <NavLink to="/" onClick={toggleNav}>
        home
      </NavLink>
      <NavLink to="/projects" onClick={toggleNav}>
        projects
      </NavLink>
      <NavLink to="/stack" onClick={toggleNav}>
        stack
      </NavLink>
      <NavLink to="/post" onClick={toggleNav}>
        post
      </NavLink>
      <NavLink to="/workspace" onClick={toggleNav}>
        workspace
      </NavLink>
    </div>
  );
};

export default NavlinksMobile;
