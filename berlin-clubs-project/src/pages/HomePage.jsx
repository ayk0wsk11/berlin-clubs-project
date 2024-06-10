import ClubCard from "../components/ClubCard";

import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "../stylesheet/HomePage.css";

const HomePage = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/clubs`);
        const randomClubs = data.sort(() => 0.5 - Math.random()).slice(0, 3);
        setClubs(randomClubs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClubs();
  }, []);

  return (
    <div id="homepage">
      <h1>Wanna try out a new club?</h1>
      <div id="clubs-homepage">
        {clubs.map((club) => {
          return <ClubCard oneClub={club} key={club.id} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
