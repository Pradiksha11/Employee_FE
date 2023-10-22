import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditEmployee.css';

const EditEmployee = ({ employeeData, onUpdate }) => {
  // Get the employee ID from the URL using useParams
  const { id } = useParams();

  // State to store the form data
  const [formData, setFormData] = useState({});

  // Find the employee with the given ID
  const employee = employeeData.find((emp) => emp.id == id);

  // Set the form data when the employee data changes
  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  // Handle input changes and update the form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle the save button click and update the employee data
  const handleSave = () => {
    onUpdate(formData);
  };

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      {employee ? (
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>Employee not found.</p>
      )}
    </div>
  );
};

export default EditEmployee;
