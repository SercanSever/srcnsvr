import Experience from "../../components/experience/experience.jsx";
import "./home.css";
import Readme from "../../components/readme/readme.jsx";
import MetaTags from '../../components/seo/meta-tags';

const Home = () => {
  return (
    <>
      <MetaTags
        title="Sercan Sever | Full Stack Developer | .NET Core & React"
        description="Full Stack Developer specializing in .NET Core, React, and Node.js. Building modern web applications with cutting-edge technologies and best practices."
        url="https://srcnsvr.com/"
        type="website"
        keywords="Sercan Sever, Full Stack Developer, .NET Core, React, Node.js, Web Development"
        author="Sercan Sever"
      />
      <div className="home">
        <Readme />
        <Experience />
      </div>
    </>
  );
};

export default Home;
