import React from 'react'
import { useLocation } from 'react-router-dom';


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  
  const SearchPage = () => {
    const query = useQuery().get('query');
  
    return (
      <div>
        <h1>Search Results</h1>
        <p>Search query: {query}</p>
        {/* Implement the logic to display search results based on the query */}
      </div>
    );
  };
  
  export default SearchPage;