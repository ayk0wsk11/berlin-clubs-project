import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

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
    <>
      {clubs.map((oneClub) => {
        return (
          <div key={oneClub.id} id="clubmap-container">
            <Link to={`/club-detail/${oneClub.id}`}>
              <div id="linkeable-detail">
                <img src={oneClub.image} alt={oneClub.name} />
                <h2>{oneClub.name}</h2>
              </div>
            </Link>
            <div id="clubcard-details">
              <h2>Details:</h2>
              <p>{oneClub.genre}</p>
              <p>{oneClub.capacity}</p>
              <p>
                Description: <br /> {oneClub.description}
              </p>
              <p>
                <a href={oneClub.src.ra_guide} target="_blank">
                  Link to resident advisor
                </a>
              </p>
            </div>
            <div id="clubcard-address">
              <div id="clubcard-address-instruction">
                <h3>Address:</h3>
                <br />
                <p>{oneClub.address.street}</p>
                <p>
                  {oneClub.address.zip}, {oneClub.address.city}
                </p>
              </div>

              <iframe src={oneClub.src.iframe} />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default AllClubsPage;
