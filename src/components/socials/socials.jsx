import { useEffect, useState } from "react";
import { getSocials } from "../../data/home/home-repository";
import "./socials.css";
import { Link } from "react-router-dom";

const Socials = () => {
  const [socials, setSocials] = useState([]);
  const fetchSocials = async () => {
    try {
      const data = await getSocials();
      setSocials(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSocials();
  }, []);
  return (
    <div className="socials">
      {socials.map((social) => (
        <div className="social" key={social.id}>
          <Link to={social.url} target="_blank">
            {social.svg}
            {social.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Socials;
