import ClubCard from "../components/ClubCard";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import "../stylesheet/HomePage.css";

const HomePage = () => {
  const [clubs, setClubs] = useState([]);
  const [randomClubs, setRandomClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/clubs`);
        setClubs(data);
        setRandomClubs(data.sort(() => 0.5 - Math.random()).slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };
    fetchClubs();
  }, []);

  const getRandomClubs = () => {
    setRandomClubs(clubs.sort(() => 0.5 - Math.random()).slice(0, 3));
  };

  return (
    <div id="homepage">
      <h1>Tired of always partying at the same clubs?</h1>
      <div id="clubs-homepage">
        {randomClubs.map((club) => {
          return <ClubCard club={club} key={club.id} />;
        })}
      </div>
      <div id="homepage-buttons">
        <button id="show-other-button" onClick={getRandomClubs}>
          <b>Show others</b>
        </button>
        <Link to="/clubs" activeclassName="active-link">
          <button id="show-all-button">
            <b>Show all</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
