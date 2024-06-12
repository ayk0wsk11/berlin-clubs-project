import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "../stylesheet/AllClubsPage.css";
import Filter from "../components/Filter";
import ClubCard from "../components/ClubCard";
import Search from "./Search"

const AllClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [query, setQuery] = useState('');


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

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredClubs = selectedGenre
    ? clubs.filter((club) => club.genre.includes(selectedGenre))
    : clubs;
  
  

  return (

    <div>

      <Filter onGenreChange={handleGenreChange}  />
      <Search query={query} setQuery={setQuery}/>
      {filteredClubs.filter((oneClub)=> {
        if (oneClub.name.includes(query))
          {return true
          }

      }).map((club) => {
        return <ClubCard club={club} key={club.id} />;
      })}
    </div>
  );
};
export default AllClubsPage;
