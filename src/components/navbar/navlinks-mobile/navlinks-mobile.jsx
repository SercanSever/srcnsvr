import { NavLink } from "react-router-dom";
import "./navlinks-mobile.css";
import { useNavMobileStore } from "../../../stores/nav-mobile";
import { useEffect, useRef, useState } from "react";

const NavlinksMobile = () => {
  const { isOpen, toggleNav } = useNavMobileStore();
  const menuRef = useRef();
  const [startY, setStartY] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const deltaY = e.touches[0].clientY - startY;
    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (translateY > 250) {
      toggleNav();
    }
    setTranslateY(0);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (isOpen && !menuRef.current.contains(e.target)) {
  //       toggleNav();
  //     }
  //   };
  //   document.addEventListener("click", handleClick);
  //   return () => document.removeEventListener("click", handleClick);
  // }, [isOpen, toggleNav]);

  return (
    <div
      className={isOpen ? "navlinksMobile open" : "navlinksMobile"}
      ref={menuRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `translateY(${translateY}px)` }}
    >
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
