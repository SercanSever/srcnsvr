import Experience from "./experience/experience.jsx";
import "./home.css";
import Readme from "./readme/readme.jsx";

const Home = () => {
  return (
    <div className="home">
      <Readme />
      <Experience />
    </div>
  );
};

export default Home;
