import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import "../stylesheet/AllClubsPage.css";

const AllClubsPage = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/clubs`);
        setClubs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClubs();
  }, []);

  return (
    <div>
      {clubs.map((oneClub) => {
        return (
          <div key={oneClub.id} id="all-clubs-container">
            <div id="left-side">
              <div id="header">
                <Link to={`/club-detail/${oneClub.id}`}>
                  <h1>{oneClub.name}</h1>
                </Link>
              </div>
              <div id="genres">
                {oneClub.genre.map((oneGenre, index) => (
                  <label id="label" key={index}>
                    {oneGenre}
                  </label>
                ))}
              </div>
            </div>
            <div>
            <img id="clubmap-image" src={oneClub.image} alt={oneClub.name} />

            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AllClubsPage;
