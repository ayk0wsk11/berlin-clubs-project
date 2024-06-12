import React from 'react';
import axios from 'axios';
import {API_URL} from '../config.js'
import { useState, useEffect } from 'react';
import ".././App.css"

const SearchComponent = ({query, setQuery}) => {
  const [clubs, setClubs] = useState([]);
  const [result, setResult] = useState([]);





  const handleSearch = () => {
    const filteredClubs = clubs.filter(club =>
      club.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log('Filtered Clubs:', filteredClubs); 
    setResult(filteredClubs);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a name"
      />
      <button onClick={handleSearch}>Search</button>

    </div>
  );
};

export default SearchComponent;
