import { Link } from 'react-router-dom';
import MetaTags from '../components/seo/meta-tags';
import './404.css';

const NotFound = () => {
  return (
    <>
      <MetaTags
        title="404 - Page Not Found | Sercan Sever"
        description="Sorry, the page you are looking for does not exist. Navigate back to Sercan Sever's portfolio to explore Full Stack Development projects and expertise."
        type="website"
        url="https://srcnsvr.com/404"
        keywords="404, page not found, Sercan Sever, Full Stack Developer, .NET Core, React, Node.js, Web Development"
        author="Sercan Sever"
      />
      
      <main className="not-found-container">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="not-found-link"
        >
          Return to Homepage
        </Link>
      </main>
    </>
  );
};

export default NotFound; 