import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/clubs/name=${query}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a name"
      />
      <button onClick={handleSearch}>Search</button>
      {result && (
        <ul>
          {result.map((clubs) => (
            <li key={clubs.id}>{clubs.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
