import { useCallback, useEffect, useState } from "react";
import {
  //getCategoryList,
  getStackContent,
  getStackList,
} from "../../data/stack/stack-repository";
import "./stack.css";
import { Link } from "react-router-dom";
import MetaTags from "../../components/seo/meta-tags";

const Stack = () => {
  const [stackContent, setStackContent] = useState({});
  //const [categories, setCategories] = useState([]);
  //const [categoryFilter, setCategoryFilter] = useState("all");
  const [stackList, setStackList] = useState([]);

  const fetchInitialData = useCallback(async () => {
    try {
      const [stackData] = await Promise.all([
        getStackContent(),
        //getCategoryList(),
      ]);
      setStackContent(stackData[0]);
      //setCategories(categoryData);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  }, []);

  const fetchStackList = useCallback(async () => {
    try {
      const data = await getStackList();
      setStackList(data);
    } catch (error) {
      console.error("Error fetching stack list:", error);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  useEffect(() => {
    fetchStackList();
  }, [fetchStackList]);

  return (
    <>
      <MetaTags
        title="Tech Stack | Sercan Sever - Full Stack Developer"
        description="Discover my technology stack and tools. Expertise in .NET Core, React, Node.js, and modern web development frameworks and technologies."
        url="https://srcnsvr.com/stack"
        type="website"
        keywords="Sercan Sever, Full Stack Developer, .NET Core, React, Node.js, Web Development"
        author="Sercan Sever"
      />
      <div className="stack">
        <h1>
          {stackContent.title}
          <p className="text">
            {stackContent.subtitle} <span>{stackContent.subtitle2}</span>
          </p>
        </h1>
        <p className="text">{stackContent.description}</p>

        {/*<div className="searchTabConteiner">
          {/* <button className="tab" onClick={() => setCategoryFilter("all")}>
            all
          </button>*/}
        {/* {categories.map((category) => (
            <button
              className="tab"
              key={category.id}
              onClick={() => setCategoryFilter(category.id)}
            >
              {category.name}
            </button>
          ))}*/}
        {/*</div>*/}
        <div className="wrapper">
          <div className="cardList">
            {stackList.map((item) => (
              <div className="polaroid" key={item.id}>
                <img src={item.imageUrl} alt="" className="icon" />
                <Link to={item.url} className="cardTitle" target="_blank">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
