import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import "../stylesheet/AllClubsPage.css";

const Filter = ({ onGenreChange }) => {
  const [genres, setGenres] = useState([]);

  function createGenresArray(data) {
    let allGenres = data.map((club) => club.genre).flat();
    const genreCount = allGenres.reduce((acc, genre) => {
      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {});
    const sortedGenres = Object.entries(genreCount)
      .sort((a, b) => b[1] - a[1])
      .map((entry) => entry[0]);
    return sortedGenres;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/clubs`).catch((error) => {
          throw `Filter.jsx: Could not fetch data -> ${error.response.status}`;
        });
        setGenres(createGenresArray(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => onGenreChange("")}>Show All</button>
      {genres.map((genre, index) => {
        return (
          <button key={index} onClick={() => onGenreChange(genre)}>
            {genre}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
