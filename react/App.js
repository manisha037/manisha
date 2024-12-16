import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

 
  const [employees, setEmployees] = useState([]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit the form.');
    }
  };

  
  const fetchEmployees = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="app">
      <h1>Register Form</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="success">Form submitted successfully!</p>}

      <h2>Employee List</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
