import ExperienceList from "../../../components/experience-list/experience-list";
import "./experience.css";
const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experienceContainer">
        <div className="line"></div>
        <ExperienceList />
      </div>
    </div>
  );
};

export default Experience;
