import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [rollno, setRollno] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !age || !rollno) {
      setError('All fields are required.');
      return;
    }

    try {
      const student = { name, email, age: parseInt(age), rollno: parseInt(rollno) };
      await axios.post('http://localhost:5000/students', student);
      setName('');
      setEmail('');
      setAge('');
      setRollno('');
      setError('');
      navigate('/'); // Redirect to the student list page after successful creation
    } catch (error) {
      setError('Error creating student.');
      console.error('Error creating student:', error);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <br />
        <label>
          Roll No:
          <input
            type="number"
            value={rollno}
            onChange={(event) => setRollno(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateStudent;
