import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ onSearch, navigateToDashboard }) => {
  // State to store the search input value
  const [searchId, setSearchId] = useState('');

  // Function to handle the search button click and trigger the search
  const handleSearch = () => {
    onSearch(searchId);
  };

  // Function to handle the "Back to Dashboard" button click
  const handleNavigateToDashboard = () => {
    navigateToDashboard(); // Call the function passed as a prop to navigate back to the dashboard
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleNavigateToDashboard}>Back to Dashboard</button>
    </div>
  );
};

export default SearchBar;
