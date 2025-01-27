// import { useScrollStore } from "../../stores/scroll.jsx";
import Experience from "./experience/experience.jsx";
import "./home.css";
import Readme from "./readme/readme.jsx";

const Home = () => {
  // const { isScrolled } = useScrollStore();

  return (
    <div className="home">
      <Readme />
      <Experience />
    </div>
  );
};

export default Home;
