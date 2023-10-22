import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './EmployeeDetails.css';

const EmployeeDetails = ({ employeeData, onDelete }) => {
  // Get the employee ID from the URL using useParams
  const { id } = useParams();

  // Find the employee with the given ID
  const employee = employeeData.find((emp) => emp.id.toString() === id);

  // Function to handle the delete button click
  const handleDelete = () => {
    onDelete(employee.id);
  };

  if (!employee) {
    return (
      <div>
        <p>Employee not found.</p>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="employee-details-container">
      <h2>{employee.name}'s Details</h2>
      <p>ID: {employee.id}</p>
      <p>Username: {employee.username}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${employee.id}`}>Edit</Link>
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
};

export default EmployeeDetails;
