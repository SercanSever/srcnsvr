import Experience from "../../components/experience/experience.jsx";
import "./home.css";
import Readme from "../../components/readme/readme.jsx";

const Home = () => {
  return (
    <div className="home">
      <Readme />
      <Experience />
    </div>
  );
};

export default Home;
