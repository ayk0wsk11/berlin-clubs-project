import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="not-found-container">
        <h3>Page not found</h3>
        <button onClick={handleReturnHome} className="return-home-button">
          Return to Home
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
