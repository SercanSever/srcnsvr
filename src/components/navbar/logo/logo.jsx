import { NavLink, useLocation } from "react-router-dom";
import "./logo.css";
import { getProfilePhoto } from "../../../data/home/home-repository";
import { useEffect, useState } from "react";

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [profilePhoto, setProfilePhoto] = useState("");

  const fetchProfilePhoto = async () => {
    try {
      const data = await getProfilePhoto();
      setProfilePhoto(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfilePhoto();
  }, []);

  return (
    <div className={`logo ${isHomePage ? "logoHome" : ""}`}>
      <NavLink to={"/"}>
        <img src={profilePhoto.avatar_url} alt="profile-photo" />
      </NavLink>
    </div>
  );
};

export default Logo;
