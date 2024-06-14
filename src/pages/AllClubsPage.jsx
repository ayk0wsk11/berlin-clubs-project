import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import "../stylesheet/AllClubsPage.css";
import Filter from "../components/Filter";
import ClubCard from "../components/ClubCard";
import Search from "../components/Search";

const AllClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [query, setQuery] = useState("");

  const [selectedGenres, setSelectedGenres] = useState("");

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

  const handleGenreChange = (genres) => {
    setSelectedGenres(genres);
  };

  const filteredClubs =
    selectedGenres.length > 0
      ? clubs.filter((club) =>
          selectedGenres.every((genre) => club.genre.includes(genre))
        )
      : clubs;

  return (
    <div id="all-clubs-page">
      <div id="a-c-header">
        <Filter onGenreChange={handleGenreChange} />
        <Search query={query} setQuery={setQuery} />
        <Link to="/add-club">
          <div id="add-club-button">
            <b>+</b>
          </div>
        </Link>
      </div>
      <div id="all-clubs-container">
        {filteredClubs
          .filter((oneClub) => {
            if (oneClub.name.includes(query)) {
              return true;
            }
          })
          .map((club) => {
            return <ClubCard club={club} key={club.id} />;
          })}
      </div>
    </div>
  );
};

export default AllClubsPage;
