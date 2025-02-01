import "./readme.css";
import Socials from "../socials/socials";
import Mail from "../mail/mail";
import { getReadMeContent } from "../../data/home/home-repository";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Readme = () => {
  const [readMeContent, setReadMeContent] = useState({});
  const fetchReadMeContent = async () => {
    try {
      const data = await getReadMeContent();
      setReadMeContent(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReadMeContent();
  }, []);

  return (
    <div className="readme">
      <h1>
        {readMeContent.title}{" "}
        <img src={readMeContent.avatar_url} alt="Avatar" className="avatar" />{" "}
        {readMeContent.title2}
        <p>
          {readMeContent.sub_title} <span>{readMeContent.sub_title2}</span>
        </p>
      </h1>
      <div className="contact">
        <div className="info">
          <p>
            {readMeContent.content}{" "}
            <Link to={readMeContent.content_href} className="lexend-bold">
              {readMeContent.content_href_name}
            </Link>
          </p>
        </div>
        <p>
          <Mail mail={readMeContent.mail || "info@srcnsvr.com"} />
          {readMeContent.content2}
        </p>
        <p>{readMeContent.social_description}</p>
        <Socials />
      </div>
    </div>
  );
};

export default Readme;
