import { useEffect, useState } from "react";
import "./experience-list.css";
import { getExperienceContent } from "../../data/home/home-repository";

const ExperienceList = () => {
  const [experienceContent, setExperienceContent] = useState([]);
  const fetchExperienceContent = async () => {
    try {
      const data = await getExperienceContent();
      setExperienceContent(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExperienceContent();
  }, []);
  return (
    <>
      {experienceContent &&
        experienceContent.map((experience) => (
          <div className="content" key={experience.id}>
            <div className="timeLine">
              <div className="dot"></div>
            </div>
            <div className="experienceItem">
              <div className="text">
                <p className="title">
                  {experience.name} <span>at</span> {experience.company}
                </p>
                <p className="info">{experience.info}</p>
              </div>
              <span className="year">{experience.year}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default ExperienceList;
