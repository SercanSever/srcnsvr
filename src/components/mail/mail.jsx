import { Link } from "react-router-dom";
import "./mail.css";
const Mail = () => {
  return (
    <>
      <Link to={"mailto:info@srcnsvr.dev"} className="lexend-bold">
        info@srcnsvr.dev{" "}
      </Link>
    </>
  );
};

export default Mail;
