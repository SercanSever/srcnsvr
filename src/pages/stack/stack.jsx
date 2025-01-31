import { useCallback, useEffect, useState } from "react";
import {
  getCategoryList,
  getStackContent,
  getStackList, // Burada doğru API çağrısını ekledim
} from "../../data/stack/stack-repository";
import "./stack.css";
import { Link } from "react-router-dom";

const Stack = () => {
  const [stackContent, setStackContent] = useState({});
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [stackList, setStackList] = useState([]);

  const fetchInitialData = useCallback(async () => {
    try {
      const [stackData, categoryData] = await Promise.all([
        getStackContent(),
        getCategoryList(),
      ]);
      setStackContent(stackData[0]);
      setCategories(categoryData);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  }, []);

  const fetchStackList = useCallback(async () => {
    try {
      const data = await getStackList();
      if (categoryFilter === "all") {
        setStackList(data);
      } else {
        setStackList(
          data.filter((item) => item.category_id === categoryFilter)
        );
      }
    } catch (error) {
      console.error("Error fetching stack list:", error);
    }
  }, [categoryFilter]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  useEffect(() => {
    fetchStackList();
  }, [fetchStackList]);

  console.log(stackList);
  return (
    <div className="stack">
      <h1>
        {stackContent.title}
        <p className="text">
          {stackContent.subtitle} <span>{stackContent.subtitle2}</span>
        </p>
      </h1>
      <p className="text">{stackContent.description}</p>

      <div className="searchTabConteiner">
        <button className="tab" onClick={() => setCategoryFilter("all")}>
          all
        </button>
        {categories.map((category) => (
          <button
            className="tab"
            key={category.id}
            onClick={() => setCategoryFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div className="cardList">
          {stackList.map((item) => (
            <div className="polaroid" key={item.id}>
              <img src={item.imageUrl} alt="" className="icon" />
              <Link to="/" className="cardTitle">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
