import { Link } from "react-router-dom";
import "./mail.css";
import PropTypes from "prop-types";
const Mail = ({ mail }) => {
  return (
    <>
      <Link to={`mailto:${mail}`} className="lexend-bold mail">
        {mail}
      </Link>
    </>
  );
};

Mail.propTypes = {
  mail: PropTypes.string.isRequired,
};

export default Mail;
