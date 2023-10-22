import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SearchResults = ({ employeeData }) => {
  const { id } = useParams();

  const employee = employeeData.find((emp) => emp.id.toString() === id);

  if (!employee) {
    return (
      <div className="App">
        <h1>Search Results</h1>
        <p>Employee not found.</p>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }

  // Display the employee details when found
  return (
    <div className="App">
      <h1>Search Results</h1>
      <h2>{employee.name}'s Details</h2>
      <p>ID: {employee.id}</p>
      <p>Username: {employee.username}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
};

export default SearchResults;
