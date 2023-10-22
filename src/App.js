import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'; // Updated import
import './App.css';
import SearchBar from './SearchBar';
import EmployeeDetails from './EmployeeDetails';
import EditEmployee from './EditEmployee';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    // Use the 'navigate' function to navigate back to the dashboard route
    navigate('/');
  };

  useEffect(() => {
    // Fetch employee data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setEmployeeData(data);
        setFilteredEmployeeData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (employeeId) => {
    // Filter out the employee to be deleted from the data
    const updatedData = employeeData.filter((employee) => employee.id !== employeeId);
    setEmployeeData(updatedData);
    setFilteredEmployeeData(updatedData);
  };

  const handleUpdate = (updatedEmployee) => {
    const updatedData = employeeData.map((employee) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee;
      }
      return employee;
    });

    setEmployeeData(updatedData);
    setFilteredEmployeeData(updatedData);
  };

  const handleSearch = (searchId) => {
    const filteredEmployees = employeeData.filter(
      (employee) => employee.id.toString() === searchId
    );
    setFilteredEmployeeData(filteredEmployees);
  };

  return (
    <div className="App">
      <h1>Employee Dashboard</h1>
      <SearchBar onSearch={handleSearch} navigateToDashboard={navigateToDashboard} />
      <div className="card-container">
        {filteredEmployeeData.map((employee) => (
          <Link key={employee.id} to={`/employee/${employee.id}`}>
            <div className="card">
              <div class="card-front" ><h2 >{employee.name}</h2></div>
              <div class="class-back">
              <p>ID: {employee.id}</p>
              <p>Username: {employee.username}</p>
              <p>Email: {employee.email}</p>
              <p>Phone: {employee.phone}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Routes>
        <Route
          path="/employee/:id"
          element={<EmployeeDetails employeeData={employeeData} onDelete={handleDelete} />}
        />
        <Route
          path="/edit/:id"
          element={<EditEmployee employeeData={employeeData} onUpdate={handleUpdate} />}
        />
      </Routes>
      
      
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Home /> {/* Render the Home component */}
    </BrowserRouter>
  );
}

export default App;
