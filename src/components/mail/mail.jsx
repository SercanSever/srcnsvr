import { Link } from "react-router-dom";
import "./mail.css";
const Mail = () => {
  return (
    <>
      <Link to={"mailto:info@srcnsvr.dev"} className="lexend-bold mail">
        info@srcnsvr.dev
      </Link>
    </>
  );
};

export default Mail;
