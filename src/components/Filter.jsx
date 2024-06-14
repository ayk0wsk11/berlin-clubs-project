import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "../stylesheet/AllClubsPage.css";

const Filter = ({ onGenreChange }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const handleGenreChange = (genre) => {
    let updatedSelectedGenres;
    if (selectedGenres.includes(genre)) {
      updatedSelectedGenres = selectedGenres.filter((g) => g !== genre);
    } else {
      updatedSelectedGenres = [...selectedGenres, genre];
    }
    setSelectedGenres(updatedSelectedGenres);
    onGenreChange(updatedSelectedGenres);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div id="filter">
      <button id="genre-button" onClick={toggleDropdown}>
        Genre
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <button
            onClick={() => {
              setSelectedGenres([]);
              onGenreChange([]);
            }}
          >
            Reset
          </button>
          {genres.map((genre, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={genre}
                name={genre}
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              <label htmlFor={genre}>{genre}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
