import "./readme.css";
import Man from "../../../assets/man.png";
import Socials from "../../../components/socials/socials";
import Mail from "../../../components/mail/mail";

const Readme = () => {
  return (
    <div className="readme">
      <h1>
        Hi, I&apos;m <img src={Man} alt="Avatar" className="avatar" /> Sercan
        <p className="text">
          I&apos;m a <span className="hg">Developer</span>
        </p>
      </h1>
      <div className="contact">
        <div className="info">
          <p>
            I&apos;m a backend developer based in Istanbul, focused on
            developing reliable and efficient systems. While I specialize in
            backend development, I&apos;m also exploring frontend technologies
            to broaden my expertise. I&apos;m dedicated to improving my skills,
            advancing my career, and creating impactful products. Find more
            details about my tech stack on the{" "}
            <a href="/stack" className="lexend-bold">
              stack
            </a>{" "}
            page.
          </p>
        </div>
        <p>
          <Mail />
          Feel free to drop me a message. I&apos;m always open to
          collaborations, opportunities, or just a friendly chat!
        </p>
        <p> You can also reach out or follow me on these platforms</p>
        <Socials />
      </div>
    </div>
  );
};

export default Readme;
