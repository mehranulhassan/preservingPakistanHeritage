


import React, { useState } from 'react';
import axios from 'axios';
import img1 from '../images/Events.JPG';
const backgroundStyle = {
  backgroundImage: `url(${img1})`, // Corrected way to apply background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const AddEventForm = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/add', {
        date,
        name,
        startDate,
        endDate,
        location
      });
  
      if (response.status !== 201) {
        console.error('Error adding event:', response.data);
        alert('Event addition failed. Please check your input and try again.');
        return;
      }
  
      console.log('Event added successfully:', response.data);
      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  

  return (
    <div style={backgroundStyle}>
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Start Date:
        <input
          type="datetime-local"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type="datetime-local"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
        />
      </label>
      <button type="submit">Add Event</button>
    </form>
    </div>
  );
};

export default AddEventForm;
