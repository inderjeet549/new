import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 90%; /* Adjust width to fit on smaller screens */
  max-width: 400px; /* Set a max width */
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Input = styled.input`
  display: block;
  width: 100%; /* Ensure full width */
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Include padding in the total width */
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

function AddEventForm({ onClose, onAddEvent }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      name,
      date,
      location,
      description,
      image
    };
    onAddEvent(newEvent);
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <FormContainer>
        <h3>Add New Event</h3>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <Input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          <Input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <Input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
          <Button type="submit">Add Event</Button>
          <Button type="button" onClick={onClose}>Cancel</Button>
        </form>
      </FormContainer>
    </>
  );
}

export default AddEventForm;
