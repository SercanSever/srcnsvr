import "./stack.css";
import Background from "../../assets/bg1.jpg";

const Stack = () => {
  const backendTechnologies = [
    {
      tech: "CSharp",
      img: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
    },
    {
      tech: ".Net Core",
      img: "https://img.icons8.com/color/48/000000/dot-net.png",
    },
    {
      tech: "NodeJs",
      img: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      tech: "ExpressJs",
      img: "https://img.icons8.com/ios-filled/50/000000/express.png",
    },
    {
      tech: "Mssql",
      img: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png",
    },
    {
      tech: "Sqllite",
      img: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png",
    },
    {
      tech: "Firebase",
      img: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png",
    },
    {
      tech: "MongoDB",
      img: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      tech: "Couchbase",
      img: "https://img.icons8.com/color/48/000000/graphql.png",
    },
    {
      tech: "Redis",
      img: "https://img.icons8.com/color/48/000000/graphql.png",
    },
    {
      tech: "Elasticsearch",
      img: "https://img.icons8.com/color/48/000000/graphql.png",
    },
    {
      tech: "RabitMQ",
      img: "https://img.icons8.com/color/48/000000/graphql.png",
    },
    {
      tech: "REST API",
      img: "https://img.icons8.com/color/48/000000/api.png",
    },
    {
      tech: "Soap",
      img: "https://img.icons8.com/color/48/000000/api.png",
    },
    {
      tech: "PostgreSQL",
      img: "https://img.icons8.com/color/48/000000/postgreesql.png",
    },
    {
      tech: "Docker",
      img: "https://img.icons8.com/color/48/000000/docker.png",
    },
    {
      tech: "Git",
      img: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      tech: "Github",
      img: "https://img.icons8.com/color/48/000000/github--v1.png",
    },
    {
      tech: "Azure",
      img: "https://img.icons8.com/color/48/000000/azure-1.png",
    },
  ];

  const frontendTechnologies = [
    {
      tech: "React",
      img: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      tech: "JS",
      img: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      tech: "CSS5",
      img: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      tech: "HTML5",
      img: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
      tech: "Umbraco",
      img: "https://img.icons8.com/color/48/000000/umbraco.png",
    },
    {
      tech: "Styled Components",
      img: "https://img.icons8.com/color/48/000000/styled-components.png",
    },
    {
      tech: "SASS",
      img: "https://img.icons8.com/color/48/000000/sass.png",
    },
    {
      tech: "Bootstrap",
      img: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      tech: "Lucide",
      img: "https://img.icons8.com/color/48/000000/graphql.png",
    },
    {
      tech: "Vite",
      img: "https://img.icons8.com/color/48/000000/vite.png",
    },
    {
      tech: "jQuery",
      img: "https://img.icons8.com/color/48/000000/jquery.png",
    },
    {
      tech: "Framer Motion",
      img: "https://img.icons8.com/color/48/000000/motion.png",
    },
    {
      tech: "Redux",
      img: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      tech: "Zustand",
      img: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      tech: "Emotion",
      img: "https://img.icons8.com/color/48/000000/emotion.png",
    },
  ];
  return (
    <div className="stack">
      <h1>
        My Tech & Tool Stack
        <p className="text">
          Behind the <span>Code</span>
        </p>
      </h1>
      <p className="text">
        The tools and technologies I use most of the time to build projects and
        stay organized.
      </p>

      <div className="wrapper">
        <h2>Backend</h2>
        <div className="cardList">
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">.net core</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">c#</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">node.js</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">express</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">sql</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">mongo</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">couchbase</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">redis</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">docker</div>
          </div>
        </div>
        <h2>Frontend</h2>
        <div className="cardList">
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">react</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">javascript</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">umbraco</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">css</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">scss</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">html</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">motion</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">redux</div>
          </div>
        </div>
        <h2>Tools & Tech</h2>
        <div className="cardList">
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">git</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">github</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">docker</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">azure</div>
          </div>
          <div className="polaroid">
            <img src={Background} alt="" />
            <div className="cardTitle">notion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
