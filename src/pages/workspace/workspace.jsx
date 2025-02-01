import "./workspace.css";
import {
  getWorkspaceContent,
  getWorkspaceList,
} from "../../data/workspace/workspace-repository";
import { useEffect, useState } from "react";
import MetaTags from '../../components/seo/meta-tags';

const Workspace = () => {
  const [workspaceContent, setWorkspaceContent] = useState({});
  const [workspaceList, setWorkspaceList] = useState([]);
  const fetchWorkspaceContent = async () => {
    try {
      const [workspaceContent, workspaceList] = await Promise.all([
        getWorkspaceContent(),
        getWorkspaceList(),
      ]);
      setWorkspaceContent(workspaceContent[0]);
      setWorkspaceList(workspaceList);
    } catch (error) {
      console.error("Error fetching workspace content:", error);
    }
  };

  useEffect(() => {
    fetchWorkspaceContent();
  }, []);

  return (
    <>
      <MetaTags
        title="Workspace & Tools | Sercan Sever - Full Stack Developer"
        description="Explore my development environment, tools, and setup for Full Stack Development. Learn about the technologies and equipment I use daily."
        url="https://srcnsvr.com/workspace"
        type="website"
        keywords="Sercan Sever, Full Stack Developer, .NET Core, React, Node.js, Web Development"
        author="Sercan Sever"
      />
      <div className="workspace">
        <h1>
          {workspaceContent.title}
          <p className="text">
            {workspaceContent.subtitle} <span>{workspaceContent.subtitle2}</span>
          </p>
        </h1>
        <p className="text">{workspaceContent.description}</p>

        <div className="setupContainer">
          {workspaceList.map((item) => (
            <div className="setup" key={item.id}>
              <div className="item">
                <div className="info">
                  <p className="brand">{item.brand}</p>
                  <p className="model">{item.model}</p>
                </div>
                <div className="image">
                  <img src={item.image_url} alt="" />
                </div>
              </div>
              <div className="underline"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workspace;
