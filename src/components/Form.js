import React, { useState } from 'react';

function Form() {
  // State for handling form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // State for handling submissions
  const [submittedData, setSubmittedData] = useState([]);
  // State for handling errors
  const [errors, setErrors] = useState([]);

  // Handle changes in form inputs
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Simple validation
    if (!firstName || !lastName) {
      setErrors(prev => [...prev, "Both first name and last name are required!"]);
      return; // Stop the submission if validation fails
    }
    // Process the form data if validation passes
    const formData = { firstName, lastName };
    setSubmittedData(prev => [...prev, formData]);
    // Reset the form fields
    setFirstName('');
    setLastName('');
    // Clear any errors
    setErrors([]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>{error}</p>
          ))}
        </div>
      )}
      <h3>Submissions:</h3>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>{data.firstName} {data.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
