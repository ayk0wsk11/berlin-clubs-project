import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "../stylesheet/AllClubsPage.css";
import Filter from "../components/Filter";
import ClubCard from "../components/ClubCard";

const AllClubsPage = () => {
  const [clubs, setClubs] = useState([]);
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

  const filteredClubs = selectedGenres.length > 0
    ? clubs.filter((club) => selectedGenres.every((genre) => club.genre.includes(genre)))
    : clubs;

  return (
    <div>
      <Filter onGenreChange={handleGenreChange} />
      {filteredClubs.map((club) => {
        return <ClubCard club={club} key={club.id} />;
      })}
    </div>
  );
};

export default AllClubsPage;
