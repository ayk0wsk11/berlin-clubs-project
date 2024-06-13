import React from "react";
import { useNavigate } from 'react-router-dom'
import NotFoundImage from '../assets/image/404.png';
import '../stylesheet/NotFoundPage.css'; 

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };


  return (
    <>
        <div className="not-found-container">
        <img src={NotFoundImage} alt="Not Found" className="not-found-image" />
        <button onClick={handleReturnHome} className="return-home-button">
        Return to Home
      </button>
      </div>

    </>
  );
};

export default NotFoundPage;

