import { Link } from "react-router-dom";
import "./projects.css";
import {
  getProjectContent,
  getProjectList,
} from "../../data/project/project-repository";
import { useEffect, useState } from "react";

const Projects = () => {
  const [project, setProjectContent] = useState({});
  const [projectList, setProjectList] = useState([]);
  const fetchProjectContent = async () => {
    try {
      const data = await getProjectContent();
      setProjectContent(data[0]);
      const projectList = await getProjectList();
      setProjectList(projectList);
    } catch (error) {
      console.error("Error fetching project content: ", error);
    }
  };

  useEffect(() => {
    fetchProjectContent();
  }, []);

  console.log(projectList);
  return (
    <div className="projects">
      <h1>
        {project.title}
        <p className="text">
          {project.subtitle} <span>{project.subtitle2}</span>
        </p>
      </h1>
      <p className="text">{project.description}</p>

      <div className="projectsContainer">
        {projectList.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.img_url || "/github2.png"} alt="" />
            <div className="content">
              <div className="title">
                <h2>{project.name}</h2>
              </div>
              <div className="info">
                <p>{project.description}</p>
              </div>
              <div className="links">
                <Link to={project.github_link} target="_blank" className="link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  github
                </Link>
                {project.website_link && (
                  <Link
                    to={project.website_link}
                    target="_blank"
                    className="link"
                  >
                    website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
