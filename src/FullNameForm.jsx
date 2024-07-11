import React, { useState } from 'react';
import './FullNameDisplay.css';

const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
          {submitted && !firstName && (
            <div className="error-message">
              <span className="yellow-logo">⚠</span> Please fill out this field.
            </div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
id="lastName" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
          {submitted && !lastName && (
            <div className="error-message">
              <span className="yellow-logo">⚠</span> Please fill out this field.
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && firstName && lastName && (
        <p>Full Name: {firstName} {lastName}</p>
      )}
    </div>
  );
};

export default FullNameDisplay;
